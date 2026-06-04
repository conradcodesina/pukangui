<!--
 * PkInput 输入框组件
 * 作者：蒲康
-->
<template>
  <div
    class="pk-input"
    :class="[
      `pk-input--${size}`,
      status ? `pk-input--${status}` : '',
      {
        'is-disabled': disabled,
        'is-readonly': readonly,
        'is-focus': isFocus,
        'has-prefix': hasPrefix,
        'has-suffix': hasSuffix,
        'has-action': hasAction,
      },
    ]"
    :style="inputStyle"
  >
    <span v-if="hasPrefix" class="pk-input__prefix">
      <slot name="prefix">
        <slot name="after"></slot>
      </slot>
    </span>

    <input
      ref="inputRef"
      v-bind="$attrs"
      class="pk-input__inner"
      :value="inputValue"
      :type="nativeType"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :autocomplete="autocomplete"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd"
    />

    <span v-if="hasSuffix || showClear || showPasswordToggle" class="pk-input__suffix">
      <button
        v-if="showClear"
        class="pk-input__icon-button"
        type="button"
        aria-label="清空"
        @mousedown.prevent
        @click="clear"
      >
        <i class="fa fa-times-circle" aria-hidden="true"></i>
      </button>

      <button
        v-if="showPasswordToggle"
        class="pk-input__icon-button pk-input__password-button"
        type="button"
        :aria-label="passwordVisible ? '隐藏密码' : '显示密码'"
        @mousedown.prevent
        @click="togglePasswordVisible"
      >
        <i :class="passwordVisible ? 'fa fa-eye-slash' : 'fa fa-eye'" aria-hidden="true"></i>
      </button>

      <slot name="suffix">
        <slot name="before"></slot>
      </slot>
    </span>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, useSlots } from 'vue'

defineOptions({
  name: 'PkInput',
  inheritAttrs: false,
})

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  width: {
    type: String,
    default: '100%',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '请输入内容',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  maxlength: {
    type: [String, Number],
    default: undefined,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['large', 'default', 'small'].includes(value),
  },
  status: {
    type: String,
    default: '',
    validator: (value) => ['', 'success', 'warning', 'error'].includes(value),
  },
})

const emit = defineEmits(['update:modelValue', 'input', 'change', 'focus', 'blur', 'clear'])

const slots = useSlots()
const inputRef = ref(null)
const isFocus = ref(false)
const isComposing = ref(false)
const passwordVisible = ref(false)

const inputValue = computed(() => (props.modelValue ?? '').toString())
const inputStyle = computed(() => ({ width: props.width }))
const hasPrefix = computed(() => Boolean(slots.prefix || slots.after))
const hasSuffix = computed(() => Boolean(slots.suffix || slots.before))
const nativeType = computed(() => {
  if (props.type !== 'password' || !props.showPassword) return props.type
  return passwordVisible.value ? 'text' : 'password'
})
const showClear = computed(() => {
  return props.clearable && !props.disabled && !props.readonly && inputValue.value.length > 0
})
const showPasswordToggle = computed(() => {
  return props.type === 'password' && props.showPassword && !props.disabled
})
const hasAction = computed(() => showClear.value || showPasswordToggle.value)

const setValue = (value, event) => {
  emit('update:modelValue', value)
  emit('input', value, event)
}

const handleInput = (event) => {
  if (isComposing.value) return
  setValue(event.target.value, event)
}

const handleChange = (event) => {
  emit('change', event.target.value, event)
}

const handleFocus = (event) => {
  isFocus.value = true
  emit('focus', event)
}

const handleBlur = (event) => {
  isFocus.value = false
  emit('blur', event)
}

const handleCompositionStart = () => {
  isComposing.value = true
}

const handleCompositionEnd = (event) => {
  isComposing.value = false
  setValue(event.target.value, event)
}

const focus = () => {
  inputRef.value?.focus()
}

const blur = () => {
  inputRef.value?.blur()
}

const clear = () => {
  setValue('', undefined)
  emit('clear')
  nextTick(focus)
}

const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
  nextTick(focus)
}

defineExpose({
  focus,
  blur,
  clear,
})
</script>

<style scoped lang="scss">
.pk-input {
  --pk-input-height: 40px;
  --pk-input-border-color: #dcdfe6;

  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  min-height: var(--pk-input-height);
  overflow: hidden;
  color: #606266;
  font-size: 14px;
  line-height: 1;
  background-color: #ffffff;
  border: 1px solid var(--pk-input-border-color);
  border-radius: 4px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    --pk-input-border-color: #c0c4cc;
  }
}

.pk-input.is-focus {
  --pk-input-border-color: #409eff;
}

.pk-input--large {
  --pk-input-height: 44px;
  font-size: 14px;
}

.pk-input--small {
  --pk-input-height: 32px;
  font-size: 12px;
}

.pk-input--success {
  --pk-input-border-color: #1677ff;
}

.pk-input--warning {
  --pk-input-border-color: #e6a23c;
}

.pk-input--error {
  --pk-input-border-color: #f56c6c;
}

.pk-input__inner {
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  min-width: 0;
  height: calc(var(--pk-input-height) - 2px);
  padding: 0 12px;
  color: #606266;
  font-size: inherit;
  line-height: calc(var(--pk-input-height) - 2px);
  background: transparent;
  border: 0;
  outline: none;

  &::placeholder {
    color: #a8abb2;
  }
}

.pk-input.has-prefix .pk-input__inner {
  padding-left: 8px;
}

.pk-input.has-suffix .pk-input__inner,
.pk-input.has-action .pk-input__inner {
  padding-right: 8px;
}

.pk-input__prefix,
.pk-input__suffix {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 6px;
  height: calc(var(--pk-input-height) - 2px);
  color: #909399;
  white-space: nowrap;
  cursor: pointer;
}

.pk-input__prefix {
  padding-left: 12px;
}

.pk-input__suffix {
  padding-right: 8px;
}

.pk-input__icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 4px;
  color: #909399;
  font-size: 12px;
  line-height: 1;
  background: transparent;
  border: 0;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    color: #409eff;
    background-color: #ecf5ff;
  }
}

.pk-input__password-button {
  min-width: 34px;
}

.pk-input.is-disabled {
  color: #c0c4cc;
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  cursor: not-allowed;

  .pk-input__inner {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}

.pk-input.is-readonly {
  background-color: #fafafa;
}
</style>
