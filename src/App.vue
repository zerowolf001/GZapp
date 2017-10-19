<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
    export default {
        name: 'app'
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
