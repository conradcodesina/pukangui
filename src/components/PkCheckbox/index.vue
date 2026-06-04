<template>
  <div class="pk-checkbox" @click="toggleCheck" :class="{disabled:disabled}">
    <label class="pk-checkbox__box" :class="[{checked:is_checked}]"></label>
    <input type="checkbox" class="pk-checkbox__input" checked :value="labelName" :disabled="disabled"/>
    <label class="pk-checkbox__name">{{ labelName }}</label>
  </div>
</template>
<script>
/**
 * CheckBox组件
 * 作者：蒲康
 */
export default {
  name: "PkCheckbox",
}
</script>
<script setup>
import {ref, watch} from "vue";

const emit = defineEmits(['toggleCheck'])
const pops = defineProps({
  labelName: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const is_checked = ref(pops.modelValue);
watch(() => pops.modelValue, (newVal) => {
  is_checked.value = newVal
})
const toggleCheck = () => {
  is_checked.value = !is_checked.value;
  emit('toggleCheck', pops.labelName, is_checked.value)
  emit('update:modelValue', is_checked.value)
}
</script>
<style scoped lang="scss">
.pk-checkbox {
  display: flex;
  position: relative;
  cursor: pointer;
  align-items: center;

  .pk-checkbox__name {
    font-size: 14px;
    padding-left: 10px;
    cursor: pointer;
  }

  .pk-checkbox__box {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #ffffff;
    z-index: 1;
    transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46);
    cursor: pointer;

    &:hover {
      border-color: #409eff;
    }

    &:after {
      box-sizing: initial;
      content: "";
      border: 1px solid #ffffff;
      border-left: 0;
      border-top: 0;
      height: 7px;
      left: 4px;
      position: absolute;
      top: 1px;
      transform: rotate(45deg) scaleY(0);
      width: 3px;
      transition: transform .15s ease-in .05s;
      transform-origin: center;
    }
  }

  .checked {
    background-color: #409eff;
    border-color: #409eff;

    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }

  .pk-checkbox__input {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }
}
.disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  .pk-checkbox__box {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
    &:hover{
      background-color: #edf2fc;
      border-color: #dcdfe6;
    }
  }
  .pk-checkbox__name{
    cursor: not-allowed;
  }
}
</style>