/**
 * PkMessage 消息提示组件
 * 作者：蒲康
 */
import {createVNode, render} from "vue";
import message from "./index.vue"

const HEIGHT = 50; // 统一维护高度常量，方便修改
const BASE_TOP = 30; // 基础 top 值

const PkMessageCheck = (option,duration=3000) => {
    const div = document.createElement('div');
    div.classList.add(`pk-message--${option.type}`, 'pk-message', 'message_warpper','show');
    const len = document.getElementsByClassName('message_warpper').length;
    div.style.top = `${BASE_TOP + len * HEIGHT-10}px`;
    setTimeout(() => {
        div.style.top = `${BASE_TOP + len * HEIGHT+10}px`;
        div.style.opacity = '1';
    },10)
    const con = document.body.appendChild(div);
    const node = createVNode(message,{icon:option.type,message:option.message});
    render(node, con)
    setTimeout(() => {
        render(null, con)
        div.remove();
        div.style.opacity = '0';
        document.querySelectorAll('.message_warpper').forEach((el,index) => {
            el.style.top = `${BASE_TOP+index*HEIGHT}px`;
            console.log(el.style.top)
        })
    }, duration)
}
const PkMessagePlugin = {
    name: 'PkMessage',
    install(app) {
        // 1. 兼容选项式 API 和 模板直接调用 (用户可以用 this.$pkMessage)
        app.config.globalProperties.$pkMessage = PkMessageCheck;
        // 2. 完美支持 Vue 3 <script setup> (用户可以用 inject('PkMessage'))
        app.provide('PkMessage', PkMessageCheck);
    }
};
//按需调用
export const PkMessage = PkMessageCheck
//全局使用
export default PkMessagePlugin;
