import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/assets/styles/reset.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'

const app = createApp(App)
app.use(router).use(store).use(ElementPlus).mount('#app')
app.config.globalProperties.$axios = axios