import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import { constantRouterMap } from './config/router.config'
//
const router = createRouter({
    history: createWebHistory(),
    routes: constantRouterMap
})
//
const app = createApp({App})
app.use(router)
app.use(Antd)
app.mount('#app')
