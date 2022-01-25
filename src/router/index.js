import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

console.log(VueRouter); //就是$router
console.log(VueRouter.prototype);

//保存一份底层原始的push方法,   origin(起源)
let originPush = VueRouter.prototype.push;

let originReplace = VueRouter.prototype.replace;

//重写$router.push方法(该传的参数还是要传 location代表跳转的路由和params或者query参数)
//参数1： 告诉原来的push方法，你往哪里跳转（和调用时传递哪些参数）
//参数2： 成功的回调
//参数3：失败的回调
VueRouter.prototype.push = function (location, resolve, reject) {
  //调用时传了resolve和reject时
  if (resolve && reject) {
    //因为原来调用时是this.$router.push, 这个this.$router打印出来就是VueRouter实例，所以原来的push方法内部的上下文就是VueRoute
    //的实例，所以这里重写时，如果想调用底层的push方法也要把this换成VueRouter实例，而不能直接通过originPush()来调用，这样调用是通过window来调用
    originPush.call(this, location, resolve, reject);
  } else {
    //没传时，手动传递一个成功和回调的函数,就能捕获到重复调用push时的NavigationDuplicated错误
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};


//重写replace

VueRouter.prototype.replace = function (location,resolve,reject) {
  if(resolve && reject) {
    originReplace.call(this,location,resolve,reject);
  }else {
    originReplace.call(this,location,()=>{},()=>{});
  }
}

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      title: "首页",
      component: Home,
      meta: { show: true },
    },
    {
      path: "/search/:keyword?",
      name: "search",
      title: "搜索页",
      component: Search,
      meta: { show: true },
      //props:true
      //props:{a:1,b:2}
      //props:($route)=>({keyword:$route.params.keyword,k:$route.query.k})
    },
    {
      path: "/login",
      name: "login",
      title: "登录页",
      component: Login,
      meta: { show: false },
    },
    {
      path: "/register",
      name: "register",
      title: "注册页",
      component: Register,
      meta: { show: false },
    },
  ],
});

//向外暴露
export default router;
