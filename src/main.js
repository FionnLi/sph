import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import TypeNav from "./views/Home/TypaNav"


import store from '@/store'

import {reqList} from '@/api/'

//注册TypeNav为全局组件（参数1: 组件的名字 参数2：注册哪一个组件）
Vue.component(TypeNav.name,TypeNav);




new Vue({
  render: (h) => h(App),
  router,
  //注册仓库：组件实例的身上会多一个$store属性
  store
}).$mount("#app");
