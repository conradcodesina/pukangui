<!--
 * PkUpload 上传组件
 * 作者：蒲康
-->
<template>
  <div class="pk-upload" :class="{ 'is-disabled': disabled }">
    <input
      ref="inputRef"
      class="pk-upload__input"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      @change="handleFileChange"
    />

    <div
      v-if="drag"
      class="pk-upload__drag"
      :class="{ 'is-dragover': isDragover }"
      @click="openFileDialog"
      @dragover.prevent="handleDragover"
      @dragleave.prevent="handleDragleave"
      @drop.prevent="handleDrop"
    >
      <i class="fa fa-cloud-upload" aria-hidden="true"></i>
      <span>{{ dragText }}</span>
      <small>{{ buttonText }}</small>
    </div>

    <div v-else class="pk-upload__actions">
      <button class="pk-upload__trigger" type="button" :disabled="disabled" @click="openFileDialog">
        <i class="fa fa-cloud-upload" aria-hidden="true"></i>
        <span>{{ buttonText }}</span>
      </button>
      <button
        v-if="!autoUpload"
        class="pk-upload__submit"
        type="button"
        :disabled="disabled || !readyFiles.length"
        @click="submit"
      >
        {{ uploadText }}
      </button>
    </div>

    <div v-if="tip" class="pk-upload__tip">{{ tip }}</div>

    <ul v-if="fileList.length" class="pk-upload__list">
      <li v-for="(file, index) in fileList" :key="file.uid" class="pk-upload__item">
        <div class="pk-upload__main">
          <div class="pk-upload__file">
            <i class="fa fa-file-o" aria-hidden="true"></i>
            <span class="pk-upload__name">{{ file.name }}</span>
            <span class="pk-upload__size">{{ formatSize(file.size) }}</span>
            <span class="pk-upload__status" :class="`is-${file.status}`">{{ statusText[file.status] }}</span>
          </div>
          <div class="pk-upload__progress">
            <span class="pk-upload__progress-track">
              <span
                class="pk-upload__progress-bar"
                :class="{ 'is-error': file.status === 'error' }"
                :style="{ width: `${file.percentage || 0}%` }"
              ></span>
            </span>
            <span class="pk-upload__percent">{{ file.percentage || 0 }}%</span>
          </div>
        </div>

        <button class="pk-upload__remove" type="button" :disabled="disabled" @click="removeFile(index)">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'

defineOptions({
  name: 'PkUpload',
})

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  action: {
    type: String,
    default: '',
  },
  data: {
    type: [Object, Function],
    default: () => ({}),
  },
  headers: {
    type: Object,
    default: () => ({}),
  },
  name: {
    type: String,
    default: 'file',
  },
  withCredentials: {
    type: Boolean,
    default: false,
  },
  autoUpload: {
    type: Boolean,
    default: true,
  },
  drag: {
    type: Boolean,
    default: false,
  },
  accept: {
    type: String,
    default: '',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  limit: {
    type: Number,
    default: 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  buttonText: {
    type: String,
    default: '选择文件',
  },
  dragText: {
    type: String,
    default: '将文件拖到此处',
  },
  uploadText: {
    type: String,
    default: '开始上传',
  },
  tip: {
    type: String,
    default: '',
  },
})

const emit = defineEmits([
  'update:modelValue',
  'change',
  'remove',
  'exceed',
  'progress',
  'success',
  'error',
])

const inputRef = ref(null)
const isDragover = ref(false)
const requests = new Map()
const fileList = computed(() => props.modelValue)
const readyFiles = computed(() => fileList.value.filter((file) => file.status === 'ready'))

const statusText = {
  ready: '待上传',
  uploading: '上传中',
  success: '完成',
  error: '失败',
}

const openFileDialog = () => {
  if (props.disabled) return
  inputRef.value?.click()
}

const normalizeFile = (file) => ({
  uid: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: file.name,
  size: file.size,
  type: file.type,
  raw: file,
  status: 'ready',
  percentage: 0,
  response: null,
  error: null,
})

const emitFileList = (files) => {
  emit('update:modelValue', files)
  emit('change', files)
}

const updateFile = (targetFile, patch) => {
  const nextFiles = fileList.value.map((file) => {
    if (file.uid !== targetFile.uid) return file
    return { ...file, ...patch }
  })
  emitFileList(nextFiles)
  return nextFiles.find((file) => file.uid === targetFile.uid)
}

const getUploadData = (file) => {
  return typeof props.data === 'function' ? props.data(file) : props.data
}

const appendUploadData = (formData, file) => {
  const uploadData = getUploadData(file) || {}
  Object.keys(uploadData).forEach((key) => {
    const value = uploadData[key]
    if (Array.isArray(value)) {
      value.forEach((item) => formData.append(key, item))
    } else if (value !== undefined && value !== null) {
      formData.append(key, value)
    }
  })
}

const uploadFile = (file) => {
  if (!props.action) {
    const nextFile = updateFile(file, {
      status: 'error',
      percentage: 0,
      error: new Error('Upload action is required'),
    })
    emit('error', nextFile.error, nextFile)
    return
  }

  const formData = new FormData()
  formData.append(props.name, file.raw, file.name)
  appendUploadData(formData, file)

  const xhr = new XMLHttpRequest()
  requests.set(file.uid, xhr)

  updateFile(file, { status: 'uploading', percentage: 0, error: null })

  xhr.upload.onprogress = (event) => {
    if (!event.lengthComputable) return
    const percentage = Math.round((event.loaded / event.total) * 100)
    const nextFile = updateFile(file, { percentage })
    emit('progress', percentage, nextFile)
  }

  xhr.onload = () => {
    requests.delete(file.uid)
    const isSuccess = xhr.status >= 200 && xhr.status < 300
    const response = parseResponse(xhr)

    if (isSuccess) {
      const nextFile = updateFile(file, { status: 'success', percentage: 100, response })
      emit('success', response, nextFile)
    } else {
      const error = new Error(`Upload failed with status ${xhr.status}`)
      const nextFile = updateFile(file, { status: 'error', error, response })
      emit('error', error, nextFile)
    }
  }

  xhr.onerror = () => {
    requests.delete(file.uid)
    const error = new Error('Upload request failed')
    const nextFile = updateFile(file, { status: 'error', error })
    emit('error', error, nextFile)
  }

  xhr.open('POST', props.action)
  xhr.withCredentials = props.withCredentials
  Object.keys(props.headers).forEach((key) => {
    xhr.setRequestHeader(key, props.headers[key])
  })
  xhr.send(formData)
}

const parseResponse = (xhr) => {
  const text = xhr.responseText
  try {
    return text ? JSON.parse(text) : null
  } catch {
    return text
  }
}

const handleFileChange = (event) => {
  handleSelectedFiles(Array.from(event.target.files || []))
  event.target.value = ''
}

const handleSelectedFiles = (rawFiles) => {
  const selectedFiles = rawFiles.map(normalizeFile)
  if (!selectedFiles.length) return

  const nextFiles = props.multiple ? [...fileList.value, ...selectedFiles] : selectedFiles.slice(0, 1)

  if (props.limit > 0 && nextFiles.length > props.limit) {
    emit('exceed', selectedFiles, fileList.value)
    return
  }

  emitFileList(nextFiles)
  if (props.autoUpload) {
    selectedFiles.forEach(uploadFile)
  }
}

const handleDragover = () => {
  if (props.disabled) return
  isDragover.value = true
}

const handleDragleave = () => {
  isDragover.value = false
}

const handleDrop = (event) => {
  isDragover.value = false
  if (props.disabled) return
  handleSelectedFiles(Array.from(event.dataTransfer?.files || []))
}

const submit = () => {
  readyFiles.value.forEach(uploadFile)
}

const removeFile = (index) => {
  const nextFiles = [...fileList.value]
  const removed = nextFiles.splice(index, 1)[0]
  const request = requests.get(removed?.uid)
  if (request) {
    request.abort()
    requests.delete(removed.uid)
  }
  emitFileList(nextFiles)
  emit('remove', removed, nextFiles)
}

const formatSize = (size = 0) => {
  if (size < 1024) return `${size} B`
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
  return `${(size / 1024 / 1024).toFixed(1)} MB`
}

defineExpose({
  submit,
})

onBeforeUnmount(() => {
  requests.forEach((request) => request.abort())
  requests.clear()
})
</script>

<style scoped lang="scss">
.pk-upload {
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  min-width: 340px;
  color: #606266;
  font-size: 14px;
}

.pk-upload__input {
  display: none;
}

.pk-upload__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pk-upload__drag {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 340px;
  max-width: 100%;
  min-height: 150px;
  color: #606266;
  background-color: rgba(22, 119, 255, 0.04);
  border: 1px dashed rgba(22, 119, 255, 0.45);
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s, color 0.2s;

  i {
    margin-bottom: 10px;
    color: #1677ff;
    font-size: 32px;
  }

  span {
    font-size: 14px;
  }

  small {
    margin-top: 6px;
    color: #909399;
    font-size: 12px;
  }

  &:hover,
  &.is-dragover {
    color: #1677ff;
    background-color: rgba(22, 119, 255, 0.08);
    border-color: #1677ff;
  }
}

.pk-upload__trigger,
.pk-upload__submit {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background-color 0.2s;
}

.pk-upload__trigger {
  color: #1677ff;
  background-color: rgba(22, 119, 255, 0.08);
  border: 1px dashed rgba(22, 119, 255, 0.45);

  &:hover:not(:disabled) {
    color: #ffffff;
    background-color: #1677ff;
    border-color: #1677ff;
  }
}

.pk-upload__submit {
  color: #ffffff;
  background-color: #1677ff;
  border: 1px solid #1677ff;

  &:disabled {
    color: #c0c4cc;
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    cursor: not-allowed;
  }
}

.pk-upload__tip {
  color: #909399;
  font-size: 12px;
}

.pk-upload__list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
}

.pk-upload__item {
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  min-height: 64px;
  padding: 9px 10px;
  background-color: #f5f7fa;
  border: 1px solid #ebeef5;
  border-radius: 4px;
}

.pk-upload__main {
  flex: 1;
  min-width: 0;
}

.pk-upload__file {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.pk-upload__file i {
  color: #1677ff;
}

.pk-upload__name {
  overflow: hidden;
  color: #606266;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pk-upload__size,
.pk-upload__status {
  flex: none;
  color: #909399;
  font-size: 12px;
}

.pk-upload__status.is-success {
  color: #67c23a;
}

.pk-upload__status.is-error {
  color: #f56c6c;
}

.pk-upload__status.is-uploading {
  color: #1677ff;
}

.pk-upload__progress {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.pk-upload__progress-track {
  flex: 1;
  height: 4px;
  overflow: hidden;
  background-color: #e4e7ed;
  border-radius: 999px;
}

.pk-upload__progress-bar {
  display: block;
  height: 100%;
  background-color: #1677ff;
  border-radius: 999px;
  transition: width 0.18s;
}

.pk-upload__progress-bar.is-error {
  background-color: #f56c6c;
}

.pk-upload__percent {
  flex: none;
  min-width: 34px;
  color: #909399;
  font-size: 12px;
  text-align: right;
}

.pk-upload__remove {
  flex: none;
  color: #909399;
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: color 0.16s;

  &:hover:not(:disabled) {
    color: #f56c6c;
  }
}

.pk-upload.is-disabled {
  opacity: 0.65;

  .pk-upload__trigger,
  .pk-upload__remove {
    cursor: not-allowed;
  }
}
</style>
