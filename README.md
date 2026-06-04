# Pu Kang UI

一个基于 Vue 3 的轻量组件库，提供常用布局、表单、反馈、数据展示等基础组件。

## 安装

```bash
npm install pukangui
```

## 完整引入

在 `main.js` 或 `main.ts` 中引入组件库和样式：

```js
import { createApp } from 'vue'
import App from './App.vue'

import PukangUI from 'pukangui'
import 'pukangui/pukang-ui.css'

const app = createApp(App)

app.use(PukangUI)
app.mount('#app')
```

页面中直接使用：

```vue
<template>
  <pk-button type="primary">主要按钮</pk-button>
  <pk-input v-model="name" placeholder="请输入名称" />
  <pk-switch v-model="enabled" />
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const enabled = ref(true)
</script>
```

## 按需导入

也可以只导入需要的组件：

```vue
<template>
  <PkButton type="primary">提交</PkButton>
  <PkInput v-model="keyword" placeholder="请输入关键词" />
</template>

<script setup>
import { ref } from 'vue'
import { PkButton, PkInput } from 'pukangui'
import 'pukangui/pukang-ui.css'

const keyword = ref('')
</script>
```

## 函数式反馈组件

```js
import { PkMessage, PkNotification, PkMessageBox } from 'pukangui'
import 'pukangui/pukang-ui.css'

PkMessage({
  type: 'success',
  message: '操作成功'
})

PkNotification({
  title: '系统通知',
  message: '保存成功',
  type: 'success',
  duration: 3000
})

PkMessageBox({
  title: '提示',
  message: '确定删除这条数据吗？'
}).then(() => {
  console.log('确认')
}).catch(() => {
  console.log('取消')
})
```

## 常用组件

### Button 按钮

```vue
<pk-button>默认按钮</pk-button>
<pk-button type="primary">主要按钮</pk-button>
<pk-button type="success">成功按钮</pk-button>
<pk-button type="danger">危险按钮</pk-button>
```

### Input 输入框

```vue
<pk-input v-model="username" placeholder="请输入用户名" clearable />
<pk-input v-model="password" type="password" placeholder="请输入密码" show-password />
```

### Select 选择器

```vue
<pk-select
  v-model="city"
  :options="cityOptions"
  placeholder="请选择城市"
  filterable
/>
```

```js
const cityOptions = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '杭州', value: 'hangzhou' }
]
```

### Upload 上传

```vue
<pk-upload
  v-model="fileList"
  action="/api/upload"
  :data="{ module: 'demo' }"
  multiple
  :limit="3"
  @success="handleSuccess"
  @error="handleError"
/>
```

### Table 表格

```vue
<pk-table :columns="columns" :data="tableData" row-key="id" border />
```

```js
const columns = [
  { label: '姓名', prop: 'name' },
  { label: '角色', prop: 'role' },
  { label: '状态', prop: 'status' }
]
```

### Dialog 对话框

```vue
<pk-dialog v-model="visible" title="提示">
  <p>这里是对话框内容</p>

  <template #footer>
    <pk-button @click="visible = false">取消</pk-button>
    <pk-button type="primary" @click="visible = false">确定</pk-button>
  </template>
</pk-dialog>
```

## 组件列表

- `PkButton` 按钮
- `PkInput` 输入框
- `PkCheckbox` 复选框
- `PkSelect` 选择器
- `PkSwitch` 开关
- `PkSlider` 滑块
- `PkDatePicker` 日期时间选择器
- `PkUpload` 上传
- `PkForm` 表单
- `PkFormItem` 表单项
- `PkTable` 表格
- `PkPagination` 分页
- `PkTree` 树形控件
- `PkTag` 标签
- `PkDialog` 对话框
- `PkDropdown` 下拉菜单
- `PkMessage` 消息提示
- `PkMessageBox` 消息弹框
- `PkNotification` 通知
- `PkContainer` 容器
- `PkHeader` 头部容器
- `PkAside` 侧边栏容器
- `PkMain` 主体容器
- `PkFooter` 底部容器
- `PkScrollbar` 滚动条
- `PkSearch` 搜索

## 样式入口

推荐使用：

```js
import 'pukangui/pukang-ui.css'
```

兼容旧写法：

```js
import 'pukangui/style.css'
```

## 环境要求

Pu Kang UI 依赖 Vue 3：

```json
{
  "vue": "^3.0.0"
}
```

## 开源协议

[MIT](./LICENSE) License

## TypeScript 支持

Pu Kang UI 提供基础类型声明，TypeScript 项目可以正常导入和使用：

```ts
import PukangUI from 'pukangui'
import { PkButton, PkInput, PkMessage } from 'pukangui'
import 'pukangui/pukang-ui.css'

app.use(PukangUI)

PkMessage({
  type: 'success',
  message: '操作成功'
})
```

期待plus版本 正在开发中...
