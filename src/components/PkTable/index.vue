<!--
 * PkTable 表格组件
 * 作者：蒲康
-->
<template>
  <div class="pk-table" :class="{ 'pk-table--border': border }">
    <table class="pk-table__inner">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.prop || column.label"
            :style="{ width: column.width, textAlign: column.align || 'left' }"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody v-if="data.length">
        <tr v-for="(row, rowIndex) in data" :key="getRowKey(row, rowIndex)">
          <td
            v-for="column in columns"
            :key="column.prop || column.label"
            :style="{ textAlign: column.align || 'left' }"
          >
            <slot :name="column.prop" :row="row" :column="column" :index="rowIndex">
              {{ row[column.prop] }}
            </slot>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td class="pk-table__empty" :colspan="columns.length || 1">{{ emptyText }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineOptions({
  name: 'PkTable',
})

const props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
  rowKey: {
    type: String,
    default: '',
  },
  border: {
    type: Boolean,
    default: false,
  },
  emptyText: {
    type: String,
    default: '暂无数据',
  },
})

const getRowKey = (row, index) => {
  return props.rowKey ? row[props.rowKey] : index
}
</script>

<style scoped lang="scss">
.pk-table {
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  color: #606266;
  background-color: var(--bg-color, #ffffff);
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.pk-table__inner {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  table-layout: fixed;
}

.pk-table th {
  box-sizing: border-box;
  height: 44px;
  padding: 0 14px;
  color: #303133;
  font-size: 14px;
  font-weight: 600;
  background-color: #f5f7fa;
  border-bottom: 1px solid #ebeef5;
}

.pk-table td {
  box-sizing: border-box;
  height: 44px;
  padding: 0 14px;
  color: #606266;
  font-size: 14px;
  border-bottom: 1px solid #ebeef5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pk-table tbody tr {
  transition: background-color 0.16s;

  &:nth-child(even) {
    background-color: #fafafa;
  }

  &:hover {
    background-color: rgba(22, 119, 255, 0.06);
  }
}

.pk-table tbody tr:last-child td {
  border-bottom: 0;
}

.pk-table--border {
  border: 1px solid #ebeef5;

  th,
  td {
    border-right: 1px solid #ebeef5;

    &:last-child {
      border-right: 0;
    }
  }
}

.pk-table__empty {
  height: 72px;
  color: #909399;
  text-align: center;
}
</style>
