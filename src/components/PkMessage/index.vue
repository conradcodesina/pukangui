<template>
  <span class="icon">{{iconMap[pops.icon]}}</span>
  <span class="font">{{pops.message}}</span>
</template>
<script>
/**
 * 通用消息提醒组件
 * 作者：蒲康
 */
export default {
  name:"PkMessage"
}
</script>
<script setup>
const iconMap = {
  success: '✅',
  warning: '⚠️',
  error: '❌',
  info: 'ℹ️'
}
const pops=defineProps({
  icon:{
    type:String,
    default:'success'
  },
  message:{
    type:String,
    default:''
  }
})
</script>
<style lang="scss">
.message_warpper {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
  padding: 7px 11px;
  border-radius: 3px;
  transition: all 0.6s;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  top:30px;
  opacity: 0;
  span {
    font-size: 14px;
  }

  .icon {
    margin-right: 10px;
  }
}
.success {
  background-color: #FFFFFF;
  border-color: #67c23a;
  color: #67c23a;
}

.warning {
  background-color: #FFFFFF;
  border-color: #E6A23C;
  color: #E6A23C;
}

.error {
  background-color: #FFFFFF;
  border-color: #F56C6C;
  color: #F56C6C;
}

.info {
  background-color: #FFFFFF;
  border-color: #909399;
  color: #909399;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from { opacity: 0; } /* 进入时：透明 */
.fade-leave-to { opacity: 0; }   /* 离开时：透明 */
</style>