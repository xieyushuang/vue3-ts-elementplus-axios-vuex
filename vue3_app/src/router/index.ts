import { createRouter, createWebHistory } from "vue-router";
import home from '@/views/homePage.vue';
import todoList from '@/views/todoList.vue';
import countOrPerson from '@/views/countOrPerson.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: home },
    { path: '/todolist', component: todoList },
    { path: '/count_person', component: countOrPerson }
  ]
})
export default router