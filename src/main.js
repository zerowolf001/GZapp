import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.config.productionTip = false
/* eslint-disable no-new */
nprogress.configure({ easing: 'ease', speed: 500, showSpinner: false })
router.beforeEach((to, from, next) => {
    nprogress.start()
    next()
});
router.afterEach(() => {
    nprogress.done()
});
/*Vue.http.interceptors.push((request, next) => {
    NProgress.start();

    next((response)=>{
        NProgress.done();
    });
});*/

new Vue({
  el: '#app',
  router,
    render: h => h(App),
  template: '<App/>',
  components: { App }
})