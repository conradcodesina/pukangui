<!--
 * PkDialog 对话框组件
 * 作者：蒲康
-->
<template>
  <Teleport to="body">
    <transition name="pk-dialog-fade">
      <div v-if="modelValue" class="pk-dialog__mask" @click="handleMaskClick">
        <div class="pk-dialog" :style="{ width }" @click.stop>
          <div class="pk-dialog__header">
            <span class="pk-dialog__title">{{ title }}</span>
            <button v-if="showClose" class="pk-dialog__close" type="button" @click="close">
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>

          <div class="pk-dialog__body">
            <slot></slot>
          </div>

          <div v-if="$slots.footer" class="pk-dialog__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
defineOptions({
  name: 'PkDialog',
})

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '提示',
  },
  width: {
    type: String,
    default: '420px',
  },
  closeOnClickMask: {
    type: Boolean,
    default: true,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleMaskClick = () => {
  if (props.closeOnClickMask) {
    close()
  }
}
</script>

<style lang="scss">
.pk-dialog__mask {
  position: fixed;
  inset: 0;
  z-index: 2050;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.36);
}

.pk-dialog {
  box-sizing: border-box;
  max-width: calc(100vw - 48px);
  overflow: hidden;
  background-color: var(--bg-color, #ffffff);
  border-radius: 6px;
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
}

.pk-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 52px;
  padding: 0 18px;
  border-bottom: 1px solid #ebeef5;
}

.pk-dialog__title {
  color: var(--text-color, #303133);
  font-size: 16px;
  font-weight: 600;
}

.pk-dialog__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: #909399;
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: #1677ff;
    background-color: rgba(22, 119, 255, 0.08);
  }
}

.pk-dialog__body {
  padding: 18px;
  color: #606266;
  font-size: 14px;
  line-height: 1.7;
}

.pk-dialog__footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 12px 18px 18px;
  border-top: 1px solid #ebeef5;
}

.pk-dialog-fade-enter-active,
.pk-dialog-fade-leave-active {
  transition: opacity 0.18s;

  .pk-dialog {
    transition: transform 0.18s;
  }
}

.pk-dialog-fade-enter-from,
.pk-dialog-fade-leave-to {
  opacity: 0;

  .pk-dialog {
    transform: translateY(-8px) scale(0.98);
  }
}
</style>
