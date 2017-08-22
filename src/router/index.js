import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const login = r => require.ensure([], () => r(require('../page/login')), 'login')
const home = r => require.ensure([], () => r(require('../page/home')), 'home')
const setServer = r => require.ensure([], () =>r(require('../page/setServer')), 'setServer')
const bed = r => require.ensure([], () => r(require('../page/bed')), 'bed')
const duty = r => require.ensure([], () => r(require('../page/duty')), 'duty')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/setServer',
      name: 'setServer',
      component: setServer
    },
    {
      path: '/bed',
      name:'bed',
      component: bed
    },
    {
      path:'/duty',
      name:'duty',
      component: duty,
    },
  ]
})
