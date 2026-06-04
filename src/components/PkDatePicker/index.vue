<!--
 * PkDatePicker 日期时间选择器组件
 * 作者：蒲康
-->
<template>
  <div
    class="pk-date-picker"
    :class="{ 'is-disabled': disabled, 'is-range': range }"
    :style="{ width }"
    @click="focusInput"
  >
    <span class="pk-date-picker__prefix">
      <i :class="prefixIcon" aria-hidden="true"></i>
    </span>

    <template v-if="range">
      <input
        ref="startInputRef"
        class="pk-date-picker__inner"
        :type="type"
        :value="rangeValue[0]"
        :placeholder="startPlaceholder"
        :disabled="disabled"
        :step="step"
        @input="handleRangeInput(0, $event)"
        @change="handleRangeChange"
      />
      <span class="pk-date-picker__separator">至</span>
      <input
        ref="endInputRef"
        class="pk-date-picker__inner"
        :type="type"
        :value="rangeValue[1]"
        :placeholder="endPlaceholder"
        :disabled="disabled"
        :step="step"
        @input="handleRangeInput(1, $event)"
        @change="handleRangeChange"
      />
    </template>

    <input
      v-else
      ref="inputRef"
      class="pk-date-picker__inner"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :step="step"
      @input="handleInput"
      @change="handleChange"
    />

    <span class="pk-date-picker__suffix">{{ typeLabel }}</span>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

defineOptions({
  name: 'PkDatePicker',
})

const props = defineProps({
  modelValue: {
    type: [String, Array],
    default: '',
  },
  type: {
    type: String,
    default: 'date',
    validator: (value) => ['date', 'time', 'datetime-local'].includes(value),
  },
  placeholder: {
    type: String,
    default: '请选择时间',
  },
  startPlaceholder: {
    type: String,
    default: '开始时间',
  },
  endPlaceholder: {
    type: String,
    default: '结束时间',
  },
  width: {
    type: String,
    default: '240px',
  },
  step: {
    type: [String, Number],
    default: undefined,
  },
  range: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'input', 'change', 'start-change', 'end-change'])
const inputRef = ref(null)
const startInputRef = ref(null)
const endInputRef = ref(null)

const rangeValue = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return [props.modelValue[0] || '', props.modelValue[1] || '']
  }
  return ['', '']
})

const baseTypeLabel = computed(() => {
  const labelMap = {
    date: '日期',
    time: '时间',
    'datetime-local': '日期时间',
  }
  return labelMap[props.type] || '时间'
})

const typeLabel = computed(() => {
  return props.range ? `${baseTypeLabel.value}段` : baseTypeLabel.value
})

const prefixIcon = computed(() => {
  return props.type === 'time' ? 'fa fa-clock-o' : 'fa fa-calendar-o'
})

const openPicker = (input) => {
  input?.focus()
  input?.showPicker?.()
}

const focusInput = () => {
  if (props.disabled) return
  openPicker(props.range ? startInputRef.value : inputRef.value)
}

const handleInput = (event) => {
  const value = event.target.value
  emit('update:modelValue', value)
  emit('input', value)
}

const handleChange = (event) => {
  emit('change', event.target.value)
}

const handleRangeInput = (index, event) => {
  const nextValue = [...rangeValue.value]
  nextValue[index] = event.target.value
  emit('update:modelValue', nextValue)
  emit('input', nextValue)
  emit(index === 0 ? 'start-change' : 'end-change', event.target.value, nextValue)
}

const handleRangeChange = () => {
  emit('change', [...rangeValue.value])
}
</script>

<style scoped lang="scss">
.pk-date-picker {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  height: 40px;
  overflow: hidden;
  color: #606266;
  background-color: var(--bg-color, #ffffff);
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;

  &:hover,
  &:focus-within {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.1);
  }
}

.pk-date-picker__prefix {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 100%;
  color: #1677ff;
  background-color: rgba(22, 119, 255, 0.08);
  border-right: 1px solid rgba(22, 119, 255, 0.12);
}

.pk-date-picker__inner {
  box-sizing: border-box;
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0 10px;
  color: #606266;
  font-size: 14px;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;

  &::placeholder {
    color: #a8abb2;
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    inset: 0;
    width: auto;
    height: auto;
    opacity: 0;
    cursor: pointer;
  }
}

.pk-date-picker.is-range {
  .pk-date-picker__inner {
    text-align: center;
  }

  .pk-date-picker__inner::-webkit-calendar-picker-indicator {
    position: static;
    width: 0;
  }
}

.pk-date-picker__separator {
  flex: none;
  color: #909399;
  font-size: 13px;
}

.pk-date-picker__suffix {
  flex: none;
  margin-right: 8px;
  padding: 3px 8px;
  color: #1677ff;
  font-size: 12px;
  line-height: 1;
  background-color: rgba(22, 119, 255, 0.08);
  border-radius: 3px;
}

.pk-date-picker.is-disabled {
  color: #c0c4cc;
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  cursor: not-allowed;
  box-shadow: none;

  .pk-date-picker__prefix,
  .pk-date-picker__suffix {
    color: #c0c4cc;
    background-color: #edf2fc;
  }

  .pk-date-picker__inner {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>
