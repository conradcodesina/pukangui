/**
 * PkNotification 通知组件
 * 作者：蒲康
 */
import { createVNode, render } from 'vue'
import Notification from './index.vue'

const GAP = 16
const START_TOP = 24

const updatePositions = () => {
  let top = START_TOP
  document.querySelectorAll('.pk-notification').forEach((el) => {
    el.style.top = `${top}px`
    top += el.offsetHeight + GAP
  })
}

const PkNotification = (options = {}) => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const duration = options.duration ?? 4500
  let timer = null
  let closed = false

  const close = () => {
    if (closed) return
    closed = true
    if (timer) {
      clearTimeout(timer)
    }
    render(null, container)
    container.remove()
    updatePositions()
  }

  const vnode = createVNode(Notification, {
    title: options.title,
    message: options.message,
    type: options.type || 'info',
    duration,
    onClose: close,
  })

  render(vnode, container)
  updatePositions()

  if (duration > 0) {
    timer = setTimeout(close, duration)
  }

  return { close }
}

const PkNotificationPlugin = {
  name: 'PkNotification',
  install(app) {
    app.config.globalProperties.$pkNotification = PkNotification
    app.provide('PkNotification', PkNotification)
  },
}

export { PkNotification }
export default PkNotificationPlugin
