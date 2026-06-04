<!--
 * PkSwitch 开关组件
 * 作者：蒲康
-->
<template>
  <button
    class="pk-switch"
    :class="{ 'is-checked': checked, 'is-disabled': disabled }"
    type="button"
    :disabled="disabled"
    role="switch"
    :aria-checked="checked"
    @click="toggle"
  >
    <span class="pk-switch__core"></span>
    <span v-if="activeText || inactiveText" class="pk-switch__text">
      {{ checked ? activeText : inactiveText }}
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'PkSwitch',
})

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  activeText: {
    type: String,
    default: '',
  },
  inactiveText: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'change'])

const checked = computed(() => props.modelValue)

const toggle = () => {
  if (props.disabled) return
  const value = !props.modelValue
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style scoped lang="scss">
.pk-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  color: #606266;
  font-size: 14px;
  background: transparent;
  border: 0;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid rgba(22, 119, 255, 0.25);
    outline-offset: 3px;
  }
}

.pk-switch__core {
  position: relative;
  width: 46px;
  height: 24px;
  background-color: #c0c4cc;
  border-radius: 12px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12);
  transition: background-color 0.2s, box-shadow 0.2s;

  &::after {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    content: "";
    background-color: #ffffff;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
  }
}

.pk-switch.is-checked {
  color: #1677ff;

  .pk-switch__core {
    background-color: #1677ff;
    box-shadow: 0 0 0 3px rgba(22, 119, 255, 0.12);

    &::after {
      transform: translateX(22px);
    }
  }
}

.pk-switch.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  opacity: 0.6;
}

.pk-switch__text {
  min-width: 28px;
  text-align: left;
}
</style>
