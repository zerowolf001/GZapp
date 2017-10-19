<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import nprogress from 'nprogress'
  import 'nprogress/nprogress.css'
  export default {
      name: 'app',
      created() {
          nprogress.configure({ easing: 'ease', speed: 500, showSpinner: false })
          this.$router.beforeEach((to, from, next) => {
              nprogress.start()
              next()
          });
          this.$router.afterEach(() => {
              nprogress.done()
          });
          /*Vue.http.interceptors.push((request, next) => {
              NProgress.start();

              next((response)=>{
                  NProgress.done();
              });
          });*/
        }
    }
</script>

<style>
  @import './style/style.css';
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
