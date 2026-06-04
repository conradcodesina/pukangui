<!--
 * PkSlider 滑块组件
 * 作者：蒲康
-->
<template>
  <div class="pk-slider" :style="{ width }">
    <div class="pk-slider__track-wrap">
      <div class="pk-slider__track">
        <div class="pk-slider__bar" :style="{ width: percent }"></div>
      </div>
      <input
        class="pk-slider__range"
        type="range"
        :value="modelValue"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        @input="handleInput"
        @change="handleChange"
      />
    </div>
    <span v-if="showValue" class="pk-slider__value">{{ modelValue }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'PkSlider',
})

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  width: {
    type: String,
    default: '280px',
  },
  showValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'input', 'change'])

const percent = computed(() => {
  const range = props.max - props.min
  if (range <= 0) return '0%'
  const value = Math.min(Math.max(props.modelValue, props.min), props.max)
  return `${((value - props.min) / range) * 100}%`
})

const getNumberValue = (event) => Number(event.target.value)

const handleInput = (event) => {
  const value = getNumberValue(event)
  emit('update:modelValue', value)
  emit('input', value)
}

const handleChange = (event) => {
  emit('change', getNumberValue(event))
}
</script>

<style scoped lang="scss">
.pk-slider {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 24px;
}

.pk-slider__track-wrap {
  position: relative;
  flex: 1;
  min-width: 0;
  height: 24px;
}

.pk-slider__track,
.pk-slider__bar {
  position: absolute;
  top: 10px;
  left: 0;
  height: 4px;
  border-radius: 999px;
}

.pk-slider__track {
  right: 0;
  background-color: #e4e7ed;
}

.pk-slider__bar {
  top: 0;
  background-color: #409eff;
}

.pk-slider__range {
  position: absolute;
  inset: 0;
  width: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.pk-slider__track-wrap::after {
  position: absolute;
  top: 4px;
  left: v-bind(percent);
  width: 14px;
  height: 14px;
  content: "";
  background-color: #ffffff;
  border: 2px solid #409eff;
  border-radius: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}

.pk-slider__value {
  box-sizing: border-box;
  min-width: 42px;
  height: 26px;
  padding: 0 8px;
  color: #1677ff;
  font-size: 13px;
  line-height: 26px;
  text-align: center;
  background-color: rgba(22, 119, 255, 0.08);
  border-radius: 4px;
}
</style>
