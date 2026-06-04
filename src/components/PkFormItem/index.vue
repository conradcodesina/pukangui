<!--
 * PkFormItem 表单项组件
 * 作者：蒲康
-->
<template>
  <div class="pk-form-item" :class="{ 'is-required': required }">
    <label class="pk-form-item__label" :style="{ width: labelWidth }">{{ label }}</label>
    <div class="pk-form-item__content">
      <slot></slot>
      <div v-if="message" class="pk-form-item__message">{{ message }}</div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'PkFormItem',
})

defineProps({
  label: {
    type: String,
    default: '',
  },
  labelWidth: {
    type: String,
    default: '90px',
  },
  required: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="scss">
.pk-form-item {
  display: flex;
  align-items: flex-start;
  min-height: 40px;
}

.pk-form-item__label {
  flex: none;
  box-sizing: border-box;
  padding-right: 12px;
  color: #606266;
  font-size: 14px;
  line-height: 40px;
  text-align: right;
}

.pk-form-item.is-required .pk-form-item__label::before {
  margin-right: 4px;
  color: #f56c6c;
  content: "*";
}

.pk-form-item__content {
  flex: 1;
  min-width: 0;
  line-height: 40px;
}

.pk-form-item__message {
  margin-top: 4px;
  color: #f56c6c;
  font-size: 12px;
  line-height: 1.4;
}

.pk-form-item:focus-within .pk-form-item__label {
  color: #1677ff;
}
</style>
