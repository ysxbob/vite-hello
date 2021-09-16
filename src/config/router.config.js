
/**
 * 基础路由
 * @type { *[] }
 */
 export const constantRouterMap = [
      {
        path:'/',
        name:'protal',
        component:() => import('../App.vue')
      }
    // {
    //     path:'/',
    //     name:'hello',
    //     component:() => import('../components/HelloWorld.vue')
    // }
    // {
    //   path: '/user',
    //   component: UserLayout,
    //   redirect: '/user/login',
    //   hidden: true,
    //   children: [
    //     {
    //       path: 'login',
    //       name: 'login',
    //       component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
    //     },
    //     {
    //       path: 'register',
    //       name: 'register',
    //       component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
    //     },
    //     {
    //       path: 'register-result',
    //       name: 'registerResult',
    //       component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
    //     },
    //     {
    //       path: 'recover',
    //       name: 'recover',
    //       component: undefined
    //     }
    //   ]
    // },
  
    // {
    //   path: '/404',
    //   component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
    // }
  ]  