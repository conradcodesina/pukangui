<!--
 * PkMessageBox 消息弹框组件
 * 作者：蒲康
-->
<template>
  <div class="pk-message-box__mask">
    <div class="pk-message-box">
      <div class="pk-message-box__header">
        <span class="pk-message-box__title">{{ title }}</span>
        <button class="pk-message-box__close" type="button" @click="$emit('cancel')">x</button>
      </div>
      <div class="pk-message-box__body">{{ message }}</div>
      <div class="pk-message-box__footer">
        <button class="pk-message-box__button" type="button" @click="$emit('cancel')">
          {{ cancelText }}
        </button>
        <button class="pk-message-box__button pk-message-box__button--primary" type="button" @click="$emit('confirm')">
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'PkMessageBox',
})

defineProps({
  title: {
    type: String,
    default: '提示',
  },
  message: {
    type: String,
    default: '',
  },
  confirmText: {
    type: String,
    default: '确定',
  },
  cancelText: {
    type: String,
    default: '取消',
  },
})

defineEmits(['confirm', 'cancel'])
</script>

<style lang="scss">
.pk-message-box__mask {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.35);
}

.pk-message-box {
  box-sizing: border-box;
  width: 420px;
  max-width: calc(100vw - 32px);
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
}

.pk-message-box__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 8px;
}

.pk-message-box__title {
  color: #303133;
  font-size: 16px;
  font-weight: 600;
}

.pk-message-box__close {
  color: #909399;
  font-size: 16px;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.pk-message-box__body {
  min-height: 48px;
  padding: 12px 20px;
  color: #606266;
  font-size: 14px;
  line-height: 1.6;
}

.pk-message-box__footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 8px 20px 18px;
}

.pk-message-box__button {
  box-sizing: border-box;
  min-width: 68px;
  height: 32px;
  padding: 0 14px;
  color: #606266;
  font-size: 14px;
  background-color: #ffffff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: #409eff;
    border-color: #409eff;
  }
}

.pk-message-box__button--primary {
  color: #ffffff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover {
    color: #ffffff;
    background-color: #66b1ff;
    border-color: #66b1ff;
  }
}
</style>
