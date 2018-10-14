// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Input, Pagination, Card, Carousel, CarouselItem, Dialog, Tooltip, Message } from 'element-ui'
import App from './App'
import router from './router'
import store from './store/index' // 引入store
// 引入ueditor
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.js'

Vue.config.productionTip = false

// 使用element组件
Vue.use(Button)
Vue.use(Input)
// Vue.use(MessageBox)
// Vue.use(Message)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tooltip)

// Vue.prototype.$msgbox = MessageBox
// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$prompt = MessageBox.prompt
// Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
