//Home模块的小仓库
const state = {
    a:1
}

const mutations = {
    addHomeSum(state) {
        state.a++
    }
}

const actions = {
    addHome({commit}) {
        commit('addHomeSum');
    }
}

const getters = {

}

const moduleHome = {
    state,
    mutations,
    actions,
    getters
}



export default moduleHome