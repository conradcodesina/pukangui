<!--
 * PkPagination 分页组件
 * 作者：蒲康
-->
<template>
  <div class="pk-pagination">
    <span v-if="showTotal" class="pk-pagination__total">共 {{ total }} 条</span>

    <button
      class="pk-pagination__button"
      type="button"
      :disabled="currentPage <= 1"
      @click="changePage(currentPage - 1)"
    >
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </button>

    <button
      v-for="page in pages"
      :key="page"
      class="pk-pagination__pager"
      :class="{ 'is-active': page === currentPage }"
      type="button"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <button
      class="pk-pagination__button"
      type="button"
      :disabled="currentPage >= pageCount"
      @click="changePage(currentPage + 1)"
    >
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'PkPagination',
})

const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    default: 0,
  },
  pagerCount: {
    type: Number,
    default: 7,
  },
  showTotal: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:currentPage', 'change'])

const pageCount = computed(() => {
  return Math.max(1, Math.ceil(props.total / props.pageSize))
})

const pages = computed(() => {
  const count = pageCount.value
  const visibleCount = Math.max(1, props.pagerCount)
  const half = Math.floor(visibleCount / 2)
  let start = Math.max(1, props.currentPage - half)
  let end = Math.min(count, start + visibleCount - 1)

  start = Math.max(1, end - visibleCount + 1)

  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
})

const changePage = (page) => {
  const nextPage = Math.min(Math.max(1, page), pageCount.value)
  if (nextPage === props.currentPage) return
  emit('update:currentPage', nextPage)
  emit('change', nextPage)
}
</script>

<style scoped lang="scss">
.pk-pagination {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #606266;
  font-size: 14px;
}

.pk-pagination__total {
  margin-right: 4px;
  color: #606266;
}

.pk-pagination__button,
.pk-pagination__pager {
  box-sizing: border-box;
  min-width: 32px;
  height: 32px;
  padding: 0 10px;
  color: #606266;
  background-color: var(--bg-color, #ffffff);
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background-color 0.2s;

  &:hover:not(:disabled) {
    color: #1677ff;
    border-color: #1677ff;
    background-color: rgba(22, 119, 255, 0.06);
  }

  &:disabled {
    color: #c0c4cc;
    background-color: #f5f7fa;
    cursor: not-allowed;
  }
}

.pk-pagination__pager.is-active {
  color: #ffffff;
  background-color: #1677ff;
  border-color: #1677ff;
}
</style>
