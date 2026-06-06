<!--
/**
 * 组件介绍：通用面板布局组件
 * 作者：蒲康
 */
-->
<template>
  <component
    :is="tag"
    class="pk-panel"
    :class="[
      `pk-panel--${mode}`,
      {
        'pk-panel--auto-fit': autoFit,
        'pk-panel--stretch': stretch,
      },
    ]"
    :style="panelStyle"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'PkPanel',
})

const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  mode: {
    type: String,
    default: 'grid',
    validator: (value) => ['grid', 'waterfall'].includes(value),
  },
  rows: {
    type: [Number, String],
    default: '',
  },
  columns: {
    type: [Number, String],
    default: 1,
  },
  gap: {
    type: [Number, String],
    default: '16px',
  },
  rowGap: {
    type: [Number, String],
    default: '',
  },
  columnGap: {
    type: [Number, String],
    default: '',
  },
  height: {
    type: [Number, String],
    default: '',
  },
  width: {
    type: [Number, String],
    default: '100%',
  },
  padding: {
    type: [Number, String],
    default: 0,
  },
  minItemWidth: {
    type: [Number, String],
    default: '',
  },
  autoFit: {
    type: Boolean,
    default: false,
  },
  stretch: {
    type: Boolean,
    default: true,
  },
  align: {
    type: String,
    default: 'stretch',
  },
  justify: {
    type: String,
    default: 'stretch',
  },
  dense: {
    type: Boolean,
    default: false,
  },
})

const normalizeSize = (value) => {
  if (value === '' || value === undefined || value === null) return undefined
  return typeof value === 'number' ? `${value}px` : value
}

const normalizeCount = (value, fallback = 1) => {
  const count = Number(value)
  if (!Number.isFinite(count) || count < 1) return fallback
  return Math.floor(count)
}

const columnsValue = computed(() => normalizeCount(props.columns, 1))
const rowsValue = computed(() => {
  if (props.rows === '' || props.rows === undefined || props.rows === null) return ''
  return normalizeCount(props.rows, 1)
})

const gridTemplateColumns = computed(() => {
  if (props.mode === 'waterfall') return undefined

  const minWidth = normalizeSize(props.minItemWidth)
  if (props.autoFit && minWidth) {
    return `repeat(auto-fit, minmax(${minWidth}, 1fr))`
  }

  if (minWidth) {
    return `repeat(${columnsValue.value}, minmax(${minWidth}, 1fr))`
  }

  return `repeat(${columnsValue.value}, minmax(0, 1fr))`
})

const gridTemplateRows = computed(() => {
  if (props.mode !== 'grid' || rowsValue.value === '') return undefined
  return `repeat(${rowsValue.value}, minmax(0, 1fr))`
})

const panelStyle = computed(() => {
  const gap = normalizeSize(props.gap)

  return {
    width: normalizeSize(props.width),
    height: normalizeSize(props.height),
    padding: normalizeSize(props.padding),
    gap,
    rowGap: normalizeSize(props.rowGap) || gap,
    gridTemplateColumns: gridTemplateColumns.value,
    gridTemplateRows: gridTemplateRows.value,
    gridAutoFlow: props.mode === 'grid' && props.dense ? 'row dense' : undefined,
    alignItems: props.align,
    justifyItems: props.justify,
    '--pk-panel-waterfall-gap': normalizeSize(props.rowGap) || gap,
    columnCount: props.mode === 'waterfall' ? columnsValue.value : undefined,
    columnGap: normalizeSize(props.columnGap) || gap,
  }
})
</script>

<style scoped lang="scss">
.pk-panel {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
}

.pk-panel--grid {
  display: grid;
}

.pk-panel--waterfall {
  display: block;

  :deep(> *) {
    display: inline-block;
    width: 100%;
    margin: 0 0 var(--pk-panel-waterfall-gap, 16px);
    break-inside: avoid;
  }
}

.pk-panel--stretch {
  :deep(> *) {
    min-width: 0;
  }
}
</style>
