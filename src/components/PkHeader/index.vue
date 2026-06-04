<template>
<header class="pk-header">
  <slot></slot>
</header>
</template>
<script setup>
defineProps({
  height: {
    type: String,
    default: "60px"
  }
})
</script>
<script>
/**
 * 通用头部栏组件
 * 作者：蒲康
 */
export default {
  name:"PkHeader"
}
</script>
<style scoped lang="scss">
  .pk-header{
    width: 100%;
    box-sizing: border-box;
    margin:0 auto;
    height: v-bind(height);
  }
</style>