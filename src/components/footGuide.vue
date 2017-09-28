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
    <section @click = "goTo({path: '/im'})" :class="$route.path.indexOf('im') !== -1? 'guideActive' : 'guide_item'">
      <i class="icon icon_msg"></i>
      <span>需求</span>
    </section>
    <section @click = "goTo({path: '/profile'})" :class="$route.path.indexOf('profile') !== -1? 'guideActive' : 'guide_item'">
      <i class="icon icon_user"></i>
      <span>个人</span>
    </section>
  </section>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    methods: {
      goTo(path){
        this.$router.push(path)
      }
    },
  }
</script>
