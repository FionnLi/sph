
//Search模块的小仓库
const state = {
    b:2
}

const mutations = {
    addSearchSum(state) {
        state.b++
    }
}

const actions = {
    addSearch({commit}) {
        commit('addSearchSum')
    }
}

const getters = {

}

const moduleSearch = {
    state,
    mutations,
    actions,
    getters
}



export default moduleSearch