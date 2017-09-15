import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const login = r => require.ensure([], () => r(require('../page/login')), 'login')
const home = r => require.ensure([], () => r(require('../page/home')), 'home')
const setServer = r => require.ensure([], () =>r(require('../page/setServer')), 'setServer')
const bed = r => require.ensure([], () => r(require('../page/bed')), 'bed')
const duty = r => require.ensure([], () => r(require('../page/duty')), 'duty')
const stat = r => require.ensure([], () => r(require('../page/statistical')), 'stat')
const news = r => require.ensure([], () => r(require('../page/news')), 'news')
const examine = r => require.ensure([], () => r(require('../page/examine')), 'examine')
const ops = r => require.ensure([], () => r(require('../page/ops')), 'ops')
const profile = r => require.ensure([], () => r(require('../page/profile')), 'profile')
const im = r => require.ensure([], () => r(require('../page/im')), 'im')
const im_list = r => require.ensure([], () => r(require('../page/im_list')), 'im_list')

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
    {
      path:'/stat',
      name:'stat',
      component: stat,
    },
    {
      path:'/news',
      name:'news',
      component: news,
    },
    {
      path:'/examine',
      name:'examine',
      component: examine,
    },
    {
      path:'/ops',
      name:'ops',
      component: ops,
    },
    {
      path:'/profile',
      name:'profile',
      component: profile,
    },
    {
      path:'/im',
      name:'im',
      component: im,
    },
    {
      path:'/im_list',
      name:'im_list',
      component: im_list,
    }
  ]
})
