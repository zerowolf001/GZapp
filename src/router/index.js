import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const login = r => require.ensure([], () => r(require('../page/login')), 'login')
const home = r => require.ensure([], () => r(require('../page/home')), 'home')
const setServer = r => require.ensure([], () =>r(require('../page/setServer')), 'setServer')

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
    }
  ]
})
