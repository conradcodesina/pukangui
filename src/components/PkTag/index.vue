<!--
 * PkTag 标签组件
 * 作者：蒲康
-->
<template>
  <span class="pk-tag" :class="[`pk-tag--${type}`, { 'is-round': round, 'is-closable': closable }]">
    <slot></slot>
    <button v-if="closable" class="pk-tag__close" type="button" @click="$emit('close')">
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>
  </span>
</template>

<script setup>
defineOptions({
  name: 'PkTag',
})

defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  },
  closable: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['close'])
</script>

<style scoped lang="scss">
.pk-tag {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 26px;
  padding: 0 10px;
  font-size: 12px;
  line-height: 1;
  border: 1px solid transparent;
  border-radius: 4px;
  white-space: nowrap;
}

.pk-tag.is-round {
  border-radius: 999px;
}

.pk-tag--primary {
  color: #1677ff;
  background-color: rgba(22, 119, 255, 0.08);
  border-color: rgba(22, 119, 255, 0.2);
}

.pk-tag--success {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #c2e7b0;
}

.pk-tag--info {
  color: #909399;
  background-color: #f4f4f5;
  border-color: #d3d4d6;
}

.pk-tag--warning {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #f5dab1;
}

.pk-tag--danger {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;
}

.pk-tag__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  color: currentColor;
  background: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.72;
  transition: color 0.16s, background-color 0.16s, opacity 0.16s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    opacity: 1;
  }

  i {
    color: inherit;
    font-size: 10px;
  }
}
</style>
