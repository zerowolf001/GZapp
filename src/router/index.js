import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const login = r => require.ensure([], () => r(require('../page/login')), 'login');
const home = r => require.ensure([], () => r(require('../page/home')), 'home');
const setServer = r => require.ensure([], () =>r(require('../page/setServer')), 'setServer');
const bedlist = r => require.ensure([], () => r(require('../page/bedlist')), 'bedlist');
const bed = r => require.ensure([], () => r(require('../page/bed')), 'bed');
const duty = r => require.ensure([], () => r(require('../page/duty')), 'duty');
const stat = r => require.ensure([], () => r(require('../page/statistical')), 'stat');
const news = r => require.ensure([], () => r(require('../page/news')), 'news');
const newspage = r => require.ensure([], () => r(require('../page/newspage')), 'newspage');
const examine = r => require.ensure([], () => r(require('../page/examine')), 'examine')
const ops = r => require.ensure([], () => r(require('../page/ops')), 'ops');
const opsdetail = r => require.ensure([], () => r(require('../page/opsdetail')), 'opsdetail');
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile');
const im = r => require.ensure([], () => r(require('../page/im')), 'im');
const im_list = r => require.ensure([], () => r(require('../page/im_list')), 'im_list');
const docadv = r => require.ensure([], () => r(require('../page/docadvice')), 'docadv');
const advList = r => require.ensure([], () => r(require('../page/docAdvList')), 'advList');
const io = r => require.ensure([], () => r(require('../page/InAndOut')), 'io');
const iodetail = r => require.ensure([], () => r(require('../page/iodetail')), 'iodetail');
const bedSearch = r => require.ensure([], () => r(require('../page/bedSearch')), 'bedSearch');
const bedAdv = r => require.ensure([], () => r(require('../page/bedadv')), 'bedAdv');
const medication = r => require.ensure([], () => r(require('../page/medication')), 'medication');
const csr = r => require.ensure([], () => r(require('../page/profile/CSR')), 'csr');
const faq = r => require.ensure([], () => r(require('../page/profile/faq')), 'faq');

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
        path:'/newspage',
        name:'newspage',
        component: newspage,
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
          name:profile,
          component: profile,
      },
      {
          path:'/faq',
          name:faq,
          component:faq,
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
      },
      {
          path:'/docadv',
          name:'docadv',
          component: docadv,
      },
      {
        path:'/advList',
        name:'advList',
        component: advList,

      },
      {
          path:'/io',
          name:'io',
          component: io,
      },
      {
          path:'/bedlist',
          name:'bedlist',
          component: bedlist,
      },
      {
          path:'/bedSearch',
          name:'bedSearch',
          component: bedSearch,
      },
      {
          path:'/bedAdv',
          name:'bedAdv',
          component: bedAdv,
      },
      {
          path:'/medication',
          name:'medication',
          component: medication,
      },
      {
          path:'/iodetail',
          name:'iodetail',
          component: iodetail,
      },
      {
          path:'/opsdetail',
          name:'opsdetail',
          component: opsdetail,
      },
      {
          path:'/csr',
          name:'csr',
          component: csr,
      },
  ]
})
