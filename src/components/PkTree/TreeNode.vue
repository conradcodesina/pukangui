<!--
 * PkTreeNode 树节点组件
 * 作者：蒲康
-->
<template>
  <li class="pk-tree-node">
    <div class="pk-tree-node__content" :style="{ paddingLeft: `${level * indent}px` }" @click="handleClick">
      <button
        v-if="hasChildren"
        class="pk-tree-node__toggle"
        type="button"
        @click.stop="toggle"
      >
        <i :class="expanded ? 'fa fa-caret-down' : 'fa fa-caret-right'" aria-hidden="true"></i>
      </button>
      <span v-else class="pk-tree-node__placeholder"></span>
      <span class="pk-tree-node__label">{{ node[labelKey] }}</span>
    </div>

    <ul v-if="hasChildren && expanded" class="pk-tree-node__children">
      <TreeNode
        v-for="child in node[childrenKey]"
        :key="child[valueKey] || child[labelKey]"
        :node="child"
        :level="level + 1"
        :label-key="labelKey"
        :value-key="valueKey"
        :children-key="childrenKey"
        :indent="indent"
        :default-expand-all="defaultExpandAll"
        @node-click="$emit('node-click', $event)"
      />
    </ul>
  </li>
</template>

<script setup>
import { computed, ref } from 'vue'

defineOptions({
  name: 'TreeNode',
})

const props = defineProps({
  node: {
    type: Object,
    required: true,
  },
  level: {
    type: Number,
    default: 0,
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
})

const emit = defineEmits(['node-click'])

const expanded = ref(props.defaultExpandAll)
const hasChildren = computed(() => {
  return Array.isArray(props.node[props.childrenKey]) && props.node[props.childrenKey].length > 0
})

const toggle = () => {
  expanded.value = !expanded.value
}

const handleClick = () => {
  emit('node-click', props.node)
}
</script>

<style scoped lang="scss">
.pk-tree-node {
  list-style: none;
}

.pk-tree-node__content {
  display: flex;
  align-items: center;
  min-height: 34px;
  color: #606266;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.16s, background-color 0.16s;

  &:hover {
    color: #1677ff;
    background-color: rgba(22, 119, 255, 0.06);
  }
}

.pk-tree-node__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #909399;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.pk-tree-node__placeholder {
  flex: none;
  width: 24px;
}

.pk-tree-node__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pk-tree-node__children {
  margin: 0;
  padding: 0;
}
</style>
