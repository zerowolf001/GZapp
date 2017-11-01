<template>
  <section id="foot_guide">
    <section @click = "goTo({path: '/home'})" :class="$route.path.indexOf('home') !== -1? 'guideActive' : 'guide_item'">
      <i class="icon icon_home" ></i>
      <span>首页</span>
    </section>
    <section @click = "goTo({path: '/bedlist'})" :class="$route.path.indexOf('bedlist') !== -1? 'guideActive' : 'guide_item'">
      <i class="icon icon_examine"></i>
      <span>病床</span>
    </section>
    <section @click = "removeMsg" :class="$route.path.indexOf('im') !== -1? 'guideActive' : 'guide_item'">
      <i class="icon icon_msg"></i>
      <em></em>
      <span>任务</span>
    </section>
    <section @click = "goTo({path: '/profile'})" :class="$route.path.indexOf('profile') !== -1? 'guideActive' : 'guide_item'">
      <i class="icon icon_user"></i>
      <span>个人</span>
    </section>
  </section>
</template>

<script>
  import $ from 'webpack-zepto'

  export default {
    data(){
      return {}
    },
    created() {

    },
    mounted() {
      window.Addmsg = this.Addmsg;
      window.removeMsg = this.removeMsg;
      window.android.getHasDemandMsg();
      if(window.android.getHasDemandMsg()) {
        Addmsg();
      }
    },
    computed: {

    },
    methods: {
      goTo(path){
        this.$router.push(path)
      },
      Addmsg:function(){
        $('.guide_item em').addClass('act')
      },
      removeMsg:function () {
        this.$router.push({path:'/im'});
        if (window.android.getHasMsg()) {
          if (window.android.getHasDemandMsg()) {
            window.android.setHasDemandMsg(false);
            window.android.setHasMsg(false);
            $('.guide_item em').removeClass('act');
          }
        }

      }
    },
  }
</script>
<style lang="scss" scoped>
  .guide_item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: right;
    position: relative;
    em.act {
      position: absolute;
      right: 1.35rem;
      top: 0;
      background-color: #F44336;
      border-radius: 50%;
      width: 9px;
      height: 9px;
      text-align: center;
      font-weight: 600;
    }
  }
</style>
