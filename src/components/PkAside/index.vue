<template>
<aside class="pk-aside">
  <slot></slot>
</aside>
</template>
<script setup>
defineProps({
  width:{
    type: String,
    default: '200px'
  }
})
</script>
<script>
/**
 * 通用侧边栏组件
 * 作者：蒲康
 */
 export default {
   name:"PkAside"
 }
</script>
<style scoped lang="scss">
.pk-aside{
  box-sizing: border-box;
  width: v-bind(width);
}
</style>