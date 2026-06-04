<template>
<main class="pk-main" :style="{padding:padding}">
   <div class="main_container">
     <slot></slot>
   </div>
</main>
</template>
<script setup>
defineProps({
  padding:{
    type: String,
    default: "10px"
  }
})
</script>
<script>
/**
 * 通用主内容组件
 * 作者：蒲康
 */
export default {
  name:"PkMain"
}
</script>
<style scoped lang="scss">
     .pk-main{
       box-sizing: border-box;
       display: flex;
       align-items: center;
       justify-content: center;
       width: 100%;
       .main_container{
         overflow: hidden;
         position: relative;
         flex: auto;
         width: 100%;
         height: 100%;
       }
     }
</style>