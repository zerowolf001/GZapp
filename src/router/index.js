import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const login = r => require.ensure([], () => r(require('../page/login')), 'login');
const home = r => require.ensure([], () => r(require('../page/home')), 'home');
const setServer = r => require.ensure([], () =>r(require('../page/setServer')), 'setServer');
const bedlist = r => require.ensure([], () => r(require('../page/bedlist')), 'bedlist');
const bed = r => require.ensure([], () => r(require('../page/bed')), 'bed');
const bedExamine = r => require.ensure([], () => r(require('../page/bedExamine')), 'bedExamine');
const examinSearch = r => require.ensure([], () => r(require('../page/examinSearch')),'examinSearch');
const duty = r => require.ensure([], () => r(require('../page/duty')), 'duty');
const stat = r => require.ensure([], () => r(require('../page/statistical')), 'stat');
const news = r => require.ensure([], () => r(require('../page/news')), 'news');
const newspage = r => require.ensure([], () => r(require('../page/newspage')), 'newspage');
const examine = r => require.ensure([], () => r(require('../page/examine')), 'examine');
const exdetail = r => require.ensure([], () => r(require('../page/examinedetail')), 'exdetail')
const ops = r => require.ensure([], () => r(require('../page/ops')), 'ops');
const opsdetail = r => require.ensure([], () => r(require('../page/opsdetail')), 'opsdetail');
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile');
const im = r => require.ensure([], () => r(require('../page/im')), 'im');
const imyz = r => require.ensure([], () => r(require('../page/im_yz')), 'imyz');
const imxq = r => require.ensure([], () => r(require('../page/im_xq')), 'imxq');
const yzdetail = r => require.ensure([], () => r(require('../page/im_yzDetail')), 'yzdetail');
const xqdetail = r => require.ensure([], () => r(require('../page/im_xqDetail')), 'xqdetail');
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
const dbyz = r => require.ensure([], () => r(require('../page/profile/im_yz.vue')), 'dbyz');
const myxq = r => require.ensure([], () => r(require('../page/profile/my_xq')), 'myxq');
const myxqdetail = r => require.ensure([], () => r(require('../page/profile/my_xqDetail')), 'myxqdetail');
const setting = r => require.ensure([], () => r(require('../page/profile/setting')), 'setting');
const mydate = r => require.ensure([], () => r(require('../page/profile/mydate')), 'mydate');
const EXBDetail = r => require.ensure([], () => r(require('../page/EXBListDetail')), 'EXBDetail');
const EXCTDetail = r => require.ensure([], () => r(require('../page/EXCTDetail')), 'EXCTDetail');
const yzyDetail = r => require.ensure([], () => r(require('../page/im_yyxDetail')), 'yzyDetail');
const message = r => require.ensure([], () => r(require('../page/message')), 'message');
const showmsg = r => require.ensure([], () => r(require('../page/showmsg')), 'showmsg');

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
      {
          path:'/exdetail',
          name:'exdetail',
          component: exdetail,
      },
      {
          path:'/mydate',
          name:'mydate',
          component: mydate,
      },
      {
          path:'/imyz',
          name:'imyz',
          component: imyz,
      },
      {
          path:'/bedExamine',
          name:'bedExamine',
          component: bedExamine,
      },
      {
          path:'/examinSearch',
          name:'examinSearch',
          component: examinSearch,
      },
      {
          path:'/yzdetail',
          name:'yzdetail',
          component: yzdetail,
      },
      {
          path:'/imxq',
          name:'imxq',
          component: imxq,
      },
      {
          path:'/xqdetail',
          name:'xqdetail',
          component: xqdetail,
      },
      {
          path:'/setting',
          name:'setting',
          component: setting,
      },
      {
          path:'/EXBDetail',
          name:'EXBDetail',
          component: EXBDetail,
      },
      {
          path:'/EXCTDetail',
          name:'EXCTDetail',
          component: EXCTDetail,
      },
      {
          path:'/dbyz',
          name:'dbyz',
          component: dbyz,
      },
      {
          path:'/yzyDetail',
          name:'yzyDetail',
          component: yzyDetail,
      },
      {
          path:'/message',
          name:'message',
          component: message,
      },
      {
          path:'/showmsg',
          name:'showmsg',
          component: showmsg,
      },
      {
          path:'/myxq',
          name:'myxq',
          component: myxq,
      },
      {
          path:'/myxqdetail',
          name:'myxqdetail',
          component: myxqdetail,
      },
  ]
})
