const state = {
  name: '小双',
  sum: 0
}
const mutations = {
  INCREMENT(state:any, value:number) {
    state.sum += value
  },

  DECREMENT(state:any, value:number) {
    state.sum -= value
  }
}

const actions = {
  incrementOdd(context:any, value:number) {
    if (context.state.sum % 2) {
      context.commit('INCREMENT', value)
    }
  },

  incrementWait(context:any, value:number) {
    setTimeout(()=>{
      context.commit('INCREMENT', value)
    }, 1000)
  }
}

const getters = {
  bigSum: (state:any) => state.sum * 10
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}