<!--
 * PkContainer 容器组件
 * 作者：蒲康
-->
<template>
  <section class="pk-container" :class="{ is_container: isVertical }" :style="{ padding }">
    <slot></slot>
  </section>
</template>

<script setup>
import { computed, useSlots } from 'vue'

defineOptions({
  name: 'PkContainer',
})

defineProps({
  padding: {
    type: String,
    default: '0px',
  },
})

const slots = useSlots()

const childNames = computed(() => {
  if (!slots.default) return []
  return slots.default().map((vnode) => {
    const name = vnode.type?.name || vnode.type?.__name || ''
    return name.toLowerCase()
  })
})

const isVertical = computed(() => {
  return childNames.value.includes('pkheader')
    || childNames.value.includes('pk-header')
    || childNames.value.includes('pkfooter')
    || childNames.value.includes('pk-footer')
})
</script>

<style scoped lang="scss">
.pk-container {
  box-sizing: border-box;
  display: flex;
  flex: auto;
  flex-direction: row;
  min-width: 0;
}

.is_container {
  flex-direction: column;
  min-height: 100vh;
}
</style>
