import { createStore } from "vuex";
import count from "./modules/count"
import person from "./modules/person"
export default createStore({
  state: {
    name: '小双'
  },
  modules: {
    count,
    person
  }
})