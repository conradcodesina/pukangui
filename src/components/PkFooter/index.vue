<template>
<footer class="pk-footer">
  <slot></slot>
</footer>
</template>
<script setup>
defineProps({
  padding:{
    type: String,
    default: '0 10px 0 10px',
  },
  height:{
    type: String,
    default: '60px',
  }
})
</script>
<script>
/**
 * 通用底部组件
 * 作者：蒲康
 */
export default {
  name:"PkFooter"
}
</script>
<style scoped lang="scss">
 .pk-footer{
   width: 100%;
   box-sizing: border-box;
   height: v-bind(height);
   padding: v-bind(padding);
   flex-shrink: 0;
   border-top:1px solid rgba(5, 5, 5, 0.06);
   display: flex;
   align-items: center;
   justify-content: flex-end;
 }
</style>