<template>
  <header id="head_top">
    <slot name='scanCode'></slot>
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <svg viewBox="0 0 20 32" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <path fill="#fff" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"></path>
        <path fill="#fff" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"></path>
      </svg>
      <span>返回</span>
    </section>
    <section class="title_head" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span>
    </section>
    <slot name="logo"></slot>
    <slot name="msg"></slot>
  </header>
</template>

<script>
  export default {
    data(){
      return{}
    },
    mounted(){
      //获取用户信息
      //this.getUserInfo();
      /*if(window.android.getUserInfo().length == 0) {
        this.$router.push({path:'/'});
      }*/
    },
    props: ['signinUp', 'headTitle', 'goBack'],
    computed: {
     /* ...mapState([
        'userInfo'
      ]),*/
    },
    methods: {
      /*...mapActions([
        'getUserInfo'
      ]),*/
    },
  }
</script>
<style>
  #head_top {
    position: fixed;
  }
  .title_head .title_text{
    color: #fff;font-size: 1.5em;font-weight: 600;
  }
</style>
