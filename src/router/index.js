import Vue from 'vue'
// import Router from 'vue-router'
import { constantRouterMap,createWebHistory } from '../config/router.config'

// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

// Vue.use(Router)

export default new Router({
  mode: createWebHistory(),
  routes: constantRouterMap
})