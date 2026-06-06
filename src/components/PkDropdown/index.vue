<!--
 * PkDropdown 下拉菜单组件
 * 作者：蒲康
-->
<template>
  <div
    ref="dropdownRef"
    class="pk-dropdown"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <div class="pk-dropdown__trigger" @click="handleTriggerClick">
      <slot>
        <button class="pk-dropdown__button" type="button">
          {{ triggerText }}
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </button>
      </slot>
    </div>

    <transition name="pk-dropdown-fade">
      <div v-if="visible" class="pk-dropdown__menu">
        <template v-for="item in options" :key="item.command || item.label">
          <div v-if="item.divided" class="pk-dropdown__divider"></div>
          <button
            class="pk-dropdown__item"
            :class="{ 'is-disabled': item.disabled }"
            type="button"
            :disabled="item.disabled"
            @click="handleCommand(item)"
          >
            <i v-if="item.icon" :class="`fa ${item.icon}`" aria-hidden="true"></i>
            <span>{{ item.label }}</span>
          </button>
        </template>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineOptions({
  name: 'PkDropdown',
})

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  triggerText: {
    type: String,
    default: '下拉菜单',
  },
  trigger: {
    type: String,
    default: 'click',
    validator: (value) => ['click', 'hover'].includes(value),
  },
  hideOnClick: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['command', 'visible-change'])

const dropdownRef = ref(null)
const visible = ref(false)
let closeTimer = null

const setVisible = (value) => {
  visible.value = value
  emit('visible-change', value)
}

const clearCloseTimer = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

const toggle = () => {
  setVisible(!visible.value)
}

const close = () => {
  clearCloseTimer()
  if (visible.value) {
    setVisible(false)
  }
}

const handleTriggerClick = () => {
  if (props.trigger === 'click') {
    toggle()
  }
}

const handleMouseenter = () => {
  if (props.trigger !== 'hover') return
  clearCloseTimer()
  setVisible(true)
}

const handleMouseleave = () => {
  if (props.trigger !== 'hover') return
  clearCloseTimer()
  closeTimer = setTimeout(close, 120)
}

const handleCommand = (item) => {
  if (item.disabled) return
  emit('command', item.command, item)
  if (props.hideOnClick) {
    close()
  }
}

const handleDocumentClick = (event) => {
  if (props.trigger !== 'click') return
  if (!dropdownRef.value?.contains(event.target)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  clearCloseTimer()
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<style scoped lang="scss">
.pk-dropdown {
  position: relative;
  display: inline-block;
}

.pk-dropdown__trigger {
  display: inline-flex;
}

.pk-dropdown__button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 14px;
  color: #606266;
  font-size: 14px;
  background-color: var(--bg-color, #ffffff);
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: #1677ff;
    border-color: #1677ff;
  }
}

.pk-dropdown__menu {
  position: absolute;
  top: calc(100% + 6px);
  left: -40px;
  z-index: 2200;
  min-width: 140px;
  padding: 6px;
  background-color: var(--bg-color, #ffffff);
  border: 1px solid #ebeef5;
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.pk-dropdown__item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 34px;
  padding: 0 10px;
  color: #606266;
  font-size: 14px;
  text-align: left;
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover:not(:disabled) {
    color: #1677ff;
    background-color: rgba(22, 119, 255, 0.08);
  }
}

.pk-dropdown__item.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}

.pk-dropdown__divider {
  height: 1px;
  margin: 6px 4px;
  background-color: #ebeef5;
}

.pk-dropdown-fade-enter-active,
.pk-dropdown-fade-leave-active {
  transition: opacity 0.16s, transform 0.16s;
}

.pk-dropdown-fade-enter-from,
.pk-dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
