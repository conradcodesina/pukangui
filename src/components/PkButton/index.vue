<template>
  <button  class="pk-button" :class="[size, round,plain,type,disable,circle]" :disabled="isDisable">
    <slot></slot>
  </button >
</template>
<script>
/**
 * 按钮组件
 * 作者：蒲康
 */
export default {
  name: 'PkButton',
}
</script>
<script setup>
import {computed} from "vue";

const props = defineProps({
  size:{
    type: String,
    default:'',
  },
  round:{
    type: String,
    default:''
  },
  type:{
    type: String,
    default: 'default'
  },
  plain:{
    type: String,
    default: ''
  },
  disable:{
    type: String,
    default: ''
  },
  circle:{
    type: String,
    default: ''
  }
})
const isDisable=computed(() => {
  return props.disable === 'disable';
})
</script>

<style scoped lang="scss">
.pk-button{
  box-sizing: border-box;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  line-height: 1;
  padding: 12px 20px;
  border:1px solid #dcdfe6;
  font-size: 14px;
  min-height: 40px;
  color: #606266;
  background-color: #ffffff;
}

.default{
  border:1px solid #dcdfe6;
  color: #606266;
  background-color: #ffffff;
  &:hover{
    color:#409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
    outline: none;
  }
  &:active{
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
}
.disable{
  cursor: not-allowed;
}
.default.disable{
  border:1px solid #dcdfe6;
  color: #606266;
  background-color: #ffffff;
  &:hover,&:active{
    border:1px solid #dcdfe6;
    color: #606266;
    background-color: #ffffff;
  }
}
.default.plain{
  &:hover,&:active{
    background: #ffffff;
    border-color: #409eff;
    color: #409eff;
  }
}
.primary{
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,&:active{
    color: #fff;
    background-color: #66b1ff;
    border-color: #66b1ff;
  }
}
.primary.plain{
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,&:active{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
.primary.disable{
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
  &:hover,&:active{
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
}
.success{
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover{
    color: #FFFFFF;
    background-color: #85ce61;
    border-color: #85ce61;
  }
  &:active{
    color: #FFFFFF;
    background-color: #529b2e;
    border-color: #529b2e;
  }
}
.success.plain{
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #c2e7b0;
  &:hover{
    color: #FFFFFF;
    background-color: #85ce61;
    border-color: #85ce61;
  }
  &:active{
    color: #FFFFFF;
    background-color: #529b2e;
    border-color: #529b2e;
  }
}
.success.disable{
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
  &:hover,&:active{
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
  }
}
.info{
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover{
    color: #fff;
    background-color: #a6a9ad;
    border-color: #a6a9ad;
  }
  &:active{
    color: #e6e6e6;
    background-color: #767980;
    border-color: #767980;
  }
}
.info.plain{
  color: #909399;
  background-color: #f4f4f5;
  border-color: #d3d4d6;
  &:hover{
    color: #fff;
    background-color: #a6a9ad;
    border-color: #a6a9ad;
  }
  &:active{
    color: #e6e6e6;
    background-color: #767980;
    border-color: #767980;
  }
}
.info.disable{
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
  &:hover,&:active{
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
  }
}
.warning{
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover{
    color: #FFFFFF;
    background-color: #ebb563;
    border-color: #ebb563;
  }
  &:active{
    color: #e6e6e6;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
}
.warning.plain{
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #f5dab1;
  &:hover{
    color: #FFFFFF;
    background-color: #ebb563;
    border-color: #ebb563;
  }
  &:active{
    color: #e6e6e6;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
}
.warning.disable{
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
  &:hover,&:active{
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
  }
}
.danger{
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover{
    color: #FFFFFF;
    background-color: #f78989;
    border-color: #f78989;
  }
  &:active{
    color: #e6e6e6;
    background-color: #f23c3c;
    border-color: #f23c3c;
  }
}
.danger.plain{
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;
  &:hover{
    color: #FFFFFF;
    background-color: #f78989;
    border-color: #f78989;
  }
  &:active{
    color: #e6e6e6;
    background-color: #f23c3c;
    border-color: #f23c3c;
  }
}
.danger.disable{
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
  &:hover,&:active{
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
  }
}
.round{
  border-radius: 20px;
}
.medium{
  min-height: 36px;
  padding: 10px 20px;
  font-size: 14px;
  border:1px solid #dcdfe6;
}
.small{
  min-height: 32px;
  padding: 9px 15px;
  font-size: 12px;
  border:1px solid #dcdfe6;
}
.mini{
  min-height: 28px;
  padding: 7px 15px;
  font-size: 12px;
  border:1px solid #dcdfe6;
}
.circle{
  border-radius: 50%;
  padding: 12px;
}
</style>