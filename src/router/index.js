import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/pages/MainPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: resolve => require(['@/pages/MainPage.vue'], resolve)
    },
    {
      path: '/admin',
      name: '',
      component: resolve => require(['@/pages/admin/login.vue'], resolve)
    },
    {
      path: '/unity',
      name: '',
      component: resolve => require(['@/pages/community/login.vue'], resolve)
    },
    {
      path: '/owner',
      name: '',
      component: resolve => require(['@/pages/owner/login.vue'], resolve)
    },
    {
      path: '/enter',
      name: '',
      component: resolve => require(['@/pages/enterprise/login.vue'], resolve)
    }
  ]
})
