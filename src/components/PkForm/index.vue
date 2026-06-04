<!--
 * PkForm 表单组件
 * 作者：蒲康
-->
<template>
  <form class="pk-form" :class="`pk-form--${labelPosition}`" @submit.prevent="handleSubmit">
    <slot></slot>
  </form>
</template>

<script setup>
defineOptions({
  name: 'PkForm',
})

defineProps({
  labelPosition: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right', 'top'].includes(value),
  },
})

const emit = defineEmits(['submit'])

const handleSubmit = () => {
  emit('submit')
}
</script>

<style scoped lang="scss">
.pk-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-sizing: border-box;
  color: #606266;
}

.pk-form--top {
  gap: 20px;
}
</style>
