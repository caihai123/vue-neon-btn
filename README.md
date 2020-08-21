# 霓虹灯按钮组件
我不是创造者，我只是将它封装成一个vue组件

## 使用
+ 下载包 `npm i vue-neon-btn`
+ 全局注册
``` js
import VueNeonBtn from 'vue-neon-btn'
Vue.use(VueNeonBtn)
```
+ 局部使用
``` js
import VueNeonBtn from 'vue-neon-btn'
export default {
    ...
    components: { VueNeonBtn },
    ...
}
```
+ 在浏览器中使用

    下载 `dist` 中的 `js` 和 `css` 文件并引入

## 参数

|  参数 | 说明  |类型  |可选值 |默认值 |
| ---- | ---- |----  |---- |---- |
| size | 尺寸 |String |medium/small/mini|——|
| color| 按钮颜色 |String |——|#409eff|