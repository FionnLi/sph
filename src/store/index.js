import Vue from 'vue'
import Vuex from 'vuex'

import moduleHome from './Home'
import moduleSearch from './Search'

//使用装载一次vuex
Vue.use(Vuex);


// //数据仓库
// const state = {
//     count:1
// }

// //修改数据
// const mutations = {
//     add(state) {
//         state.count++;
//     }
// }

// //提交给mutations修改数据
// const actions = {
//     // add(store) {
//     //   store.commit('add'); 
//     // }
//     add({commit}) {
//         commit('add');
//     }
// }

// const getters = {

// }
//向外暴露一个store实例
export default new Vuex.Store({
    
    //注册各个模块的小仓库
    modules: {
        moduleHome,
        moduleSearch
    }
})