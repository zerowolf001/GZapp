import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
    render: h => h(App),
  template: '<App/>',
  components: { App }
})