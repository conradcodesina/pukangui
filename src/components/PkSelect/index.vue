<!--
 * PkSelect 选择器组件
 * 作者：蒲康
-->
<template>
  <div
    ref="selectRef"
    class="pk-select"
    :class="{ 'is-open': isOpen, 'is-disabled': disabled, 'is-empty': !selectedOption }"
    :style="{ width }"
  >
    <button class="pk-select__trigger" type="button" :disabled="disabled" @click="toggleOpen">
      <span class="pk-select__value">{{ selectedOption?.label || placeholder }}</span>
      <i class="fa fa-angle-down pk-select__arrow" aria-hidden="true"></i>
    </button>

    <transition name="pk-select-fade">
      <div v-if="isOpen" class="pk-select__dropdown">
        <div v-if="filterable" class="pk-select__search">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input
            ref="searchInputRef"
            v-model="keyword"
            class="pk-select__search-input"
            type="text"
            :placeholder="filterPlaceholder"
            @click.stop
          />
        </div>

        <div
          v-for="item in filteredOptions"
          :key="item.value"
          class="pk-select__option"
          :class="{
            'is-selected': item.value === modelValue,
            'is-disabled': item.disabled,
          }"
          @click="selectOption(item)"
        >
          <span>{{ item.label }}</span>
          <i v-if="item.value === modelValue" class="fa fa-check" aria-hidden="true"></i>
        </div>

        <div v-if="filteredOptions.length === 0" class="pk-select__empty">暂无数据</div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

defineOptions({
  name: 'PkSelect',
})

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: '请选择',
  },
  filterPlaceholder: {
    type: String,
    default: '输入关键词搜索',
  },
  width: {
    type: String,
    default: '220px',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  filterable: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'change'])

const selectRef = ref(null)
const searchInputRef = ref(null)
const isOpen = ref(false)
const keyword = ref('')

const selectedOption = computed(() => {
  return props.options.find((item) => item.value === props.modelValue)
})

const filteredOptions = computed(() => {
  const searchText = keyword.value.trim().toLowerCase()
  if (!props.filterable || !searchText) return props.options

  return props.options.filter((item) => {
    const label = String(item.label ?? '').toLowerCase()
    const value = String(item.value ?? '').toLowerCase()
    return label.includes(searchText) || value.includes(searchText)
  })
})

const toggleOpen = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}

const close = () => {
  isOpen.value = false
  keyword.value = ''
}

const selectOption = (item) => {
  if (item.disabled) return
  emit('update:modelValue', item.value)
  emit('change', item.value)
  close()
}

const handleDocumentClick = (event) => {
  if (!selectRef.value?.contains(event.target)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
})

watch(isOpen, (value) => {
  if (value && props.filterable) {
    nextTick(() => {
      searchInputRef.value?.focus()
    })
  }
})
</script>

<style scoped lang="scss">
.pk-select {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: #606266;
  font-size: 14px;
}

.pk-select__trigger {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  color: #606266;
  font-size: 14px;
  text-align: left;
  background-color: var(--bg-color, #ffffff);
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;

  &:hover,
  &:focus {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.1);
    outline: none;
  }
}

.pk-select__value {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pk-select.is-empty .pk-select__value {
  color: #a8abb2;
}

.pk-select__arrow {
  flex: none;
  margin-left: 10px;
  color: #909399;
  font-size: 16px;
  transition: transform 0.2s, color 0.2s;
}

.pk-select.is-open {
  .pk-select__trigger {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.1);
  }

  .pk-select__arrow {
    color: #1677ff;
    transform: rotate(180deg);
  }
}

.pk-select__dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 2200;
  box-sizing: border-box;
  width: 100%;
  max-height: 260px;
  padding: 6px;
  overflow-y: auto;
  background-color: var(--bg-color, #ffffff);
  border: 1px solid #ebeef5;
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.pk-select__search {
  display: flex;
  align-items: center;
  height: 34px;
  margin-bottom: 6px;
  padding: 0 10px;
  color: #909399;
  background-color: #f5f7fa;
  border: 1px solid #ebeef5;
  border-radius: 4px;

  i {
    flex: none;
    margin-right: 8px;
    font-size: 13px;
  }
}

.pk-select__search-input {
  flex: 1;
  min-width: 0;
  height: 100%;
  color: #606266;
  font-size: 14px;
  background: transparent;
  border: 0;
  outline: none;

  &::placeholder {
    color: #a8abb2;
  }
}

.pk-select__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 34px;
  padding: 0 10px;
  color: #606266;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.15s, background-color 0.15s;

  &:hover {
    color: #1677ff;
    background-color: rgba(22, 119, 255, 0.08);
  }

  i {
    color: #1677ff;
    font-size: 12px;
  }
}

.pk-select__option.is-selected {
  color: #1677ff;
  font-weight: 600;
  background-color: rgba(22, 119, 255, 0.1);
}

.pk-select__option.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-color: transparent;
}

.pk-select__empty {
  height: 34px;
  color: #909399;
  font-size: 14px;
  line-height: 34px;
  text-align: center;
}

.pk-select.is-disabled {
  .pk-select__trigger {
    color: #c0c4cc;
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    box-shadow: none;
    cursor: not-allowed;
  }
}

.pk-select-fade-enter-active,
.pk-select-fade-leave-active {
  transition: opacity 0.16s, transform 0.16s;
}

.pk-select-fade-enter-from,
.pk-select-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
