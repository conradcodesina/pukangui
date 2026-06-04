<!--
 * PkNotification 通知组件
 * 作者：蒲康
-->
<template>
  <div
    class="pk-notification"
    :class="`pk-notification--${type}`"
    :style="progressStyle"
  >
    <div class="pk-notification__icon">{{ icon }}</div>
    <div class="pk-notification__content">
      <div class="pk-notification__title">{{ title }}</div>
      <div class="pk-notification__message">{{ message }}</div>
    </div>
    <button class="pk-notification__close" type="button" @click="$emit('close')">x</button>
    <div v-if="showProgress" class="pk-notification__progress">
      <span class="pk-notification__progress-inner"></span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'PkNotification',
})

const props = defineProps({
  title: {
    type: String,
    default: '通知',
  },
  message: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'info',
  },
  duration: {
    type: Number,
    default: 4500,
  },
})

defineEmits(['close'])

const iconMap = {
  success: '✓',
  warning: '!',
  error: '×',
  info: 'i',
}

const icon = computed(() => iconMap[props.type] || iconMap.info)
const showProgress = computed(() => props.duration > 0)
const progressStyle = computed(() => ({
  '--pk-notification-duration': `${props.duration}ms`,
}))
</script>

<style lang="scss">
.pk-notification {
  box-sizing: border-box;
  position: fixed;
  right: 24px;
  z-index: 2100;
  display: flex;
  gap: 12px;
  width: 330px;
  max-width: calc(100vw - 48px);
  padding: 14px 14px 16px 16px;
  overflow: hidden;
  background-color: #ffffff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: top 0.25s, opacity 0.25s;
}

.pk-notification__icon {
  flex: none;
  width: 22px;
  height: 22px;
  color: #ffffff;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  background-color: #909399;
  border-radius: 50%;
}

.pk-notification__content {
  flex: 1;
  min-width: 0;
}

.pk-notification__title {
  margin-bottom: 6px;
  color: #303133;
  font-size: 15px;
  font-weight: 600;
}

.pk-notification__message {
  color: #606266;
  font-size: 14px;
  line-height: 1.5;
}

.pk-notification__close {
  flex: none;
  align-self: flex-start;
  color: #909399;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.pk-notification__progress {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: #ebeef5;
}

.pk-notification__progress-inner {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #909399;
  transform-origin: left center;
  animation: pk-notification-progress var(--pk-notification-duration) linear forwards;
}

.pk-notification--success {
  .pk-notification__icon,
  .pk-notification__progress-inner {
    background-color: #67c23a;
  }
}

.pk-notification--warning {
  .pk-notification__icon,
  .pk-notification__progress-inner {
    background-color: #e6a23c;
  }
}

.pk-notification--error {
  .pk-notification__icon,
  .pk-notification__progress-inner {
    background-color: #f56c6c;
  }
}

.pk-notification--info {
  .pk-notification__icon,
  .pk-notification__progress-inner {
    background-color: #909399;
  }
}

@keyframes pk-notification-progress {
  from {
    transform: scaleX(1);
  }

  to {
    transform: scaleX(0);
  }
}
</style>
