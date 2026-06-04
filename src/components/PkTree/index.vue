<!--
 * PkTree 树形控件组件
 * 作者：蒲康
-->
<template>
  <div class="pk-tree">
    <ul v-if="data.length" class="pk-tree__list">
      <TreeNode
        v-for="item in data"
        :key="item[valueKey] || item[labelKey]"
        :node="item"
        :label-key="labelKey"
        :value-key="valueKey"
        :children-key="childrenKey"
        :indent="indent"
        :default-expand-all="defaultExpandAll"
        @node-click="handleNodeClick"
      />
    </ul>
    <div v-else class="pk-tree__empty">{{ emptyText }}</div>
  </div>
</template>

<script setup>
import TreeNode from './TreeNode.vue'

defineOptions({
  name: 'PkTree',
})

defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  labelKey: {
    type: String,
    default: 'label',
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  childrenKey: {
    type: String,
    default: 'children',
  },
  indent: {
    type: Number,
    default: 18,
  },
  defaultExpandAll: {
    type: Boolean,
    default: false,
  },
  emptyText: {
    type: String,
    default: '暂无数据',
  },
})

const emit = defineEmits(['node-click'])

const handleNodeClick = (node) => {
  emit('node-click', node)
}
</script>

<style scoped lang="scss">
.pk-tree {
  box-sizing: border-box;
  width: 100%;
  max-width: 360px;
  padding: 8px;
  color: #606266;
  background-color: var(--bg-color, #ffffff);
  border: 1px solid #ebeef5;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.pk-tree__list {
  margin: 0;
  padding: 0;
}

.pk-tree__empty {
  height: 56px;
  color: #909399;
  font-size: 14px;
  line-height: 56px;
  text-align: center;
}
</style>
