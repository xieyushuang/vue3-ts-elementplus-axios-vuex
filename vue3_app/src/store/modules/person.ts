import { nanoid } from 'nanoid';
const state = {
  personList: [
    {
      id: nanoid(),
      name: '明明子'
    }
  ]
}
const mutations = {
  ADD_PERSON(state:any, value:any) {
    state.personList.unshift(value)
  }
}

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
