<template>
  <header id="head_top">
    <slot name='scanCode'></slot>
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0"/>
      </svg>
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
      return{

      }
    },
    mounted(){
      //获取用户信息
      //this.getUserInfo();

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
    color: #fff;font-size: 1.2em;
  }
</style>
