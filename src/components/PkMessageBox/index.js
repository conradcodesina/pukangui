/**
 * PkMessageBox 消息弹框组件
 * 作者：蒲康
 */
import { createVNode, render } from 'vue'
import MessageBox from './index.vue'

const PkMessageBox = (options = {}) => {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const close = () => {
    render(null, container)
    container.remove()
  }

  return new Promise((resolve, reject) => {
    const vnode = createVNode(MessageBox, {
      title: options.title,
      message: options.message,
      confirmText: options.confirmText,
      cancelText: options.cancelText,
      onConfirm: () => {
        close()
        resolve('confirm')
      },
      onCancel: () => {
        close()
        reject('cancel')
      },
    })

    render(vnode, container)
  })
}

const PkMessageBoxPlugin = {
  name: 'PkMessageBox',
  install(app) {
    app.config.globalProperties.$pkMessageBox = PkMessageBox
    app.provide('PkMessageBox', PkMessageBox)
  },
}

export { PkMessageBox }
export default PkMessageBoxPlugin
