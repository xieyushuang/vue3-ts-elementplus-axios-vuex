import { createStore } from "vuex";
import { nanoid } from 'nanoid';

const state = {
  name: '小双',
  sum: 0,
  personList: [
    {
      id: nanoid(),
      name: '明明子'
    }
  ]
}
const mutations = {
  INCREMENT(state:any, value:number) {
    state.sum += value
  },

  DECREMENT(state:any, value:number) {
    state.sum -= value
  },

  ADD_PERSON(state:any, value:any) {
    state.personList.unshift(value)
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

const store = createStore({
  state,
  mutations,
  actions,
  getters
})
export default store