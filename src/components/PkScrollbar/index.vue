<!--
 * PkScrollbar 滚动条组件
 * 作者：蒲康
-->
<template>
<!--滚动条-->
  <div class="pk-scrollbar">
    <slot></slot>
  </div>
</template>
<script setup>
defineProps({
  height:{
    type:String,
    default:"100%"
  }
})
</script>
<script>
 export default {
   name: "PkScrollbar",
 }
</script>

<style scoped lang="scss">
 .pk-scrollbar{
   height:v-bind(height);
   overflow: auto;
 }
 /* 主体内容滚动条 */
 .pk-scrollbar::-webkit-scrollbar {
   width: 4px;
 }
 .pk-scrollbar::-webkit-scrollbar-thumb {
   background: var(--scroll-color);
   border-radius: 3px;
 }
</style>
