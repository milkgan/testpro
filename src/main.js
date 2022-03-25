import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './styles/global.less';
import "./mock";

Vue.config.productionTip = false //阻止启动生产消息

import showMessage from '@/utils/showMessage';
Vue.prototype.$showMessage = showMessage;

// import getComponentRootDom from "./utils/getComponentRootDom";
// import Icon from '@/components/Icon';
// let dom = getComponentRootDom(Icon, {type:"info"})
// console.log(typeof dom)
// console.log(typeof dom.outerHTML)

// 注册全局指令
import vLoading from './directives/loading'
Vue.directive("loading", vLoading)

// 测试
// import * as blogApi from './api/blog';
// blogApi.getBlogs(2, 3, 10).then((r) => {
//   console.log('博客', r)
// })
// blogApi.getBlogCategories().then((r) => {
//   console.log('博客', r)
// })


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
