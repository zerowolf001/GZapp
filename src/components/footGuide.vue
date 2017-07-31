<template>
  <section id="foot_guide">
    <section @click = "goTo({path: '/home'})" class="guide_item">
      <i class="icon icon_home"></i>
      <span>病房</span>
    </section>
    <section @click = "goTo({path: '/hello'})" class="guide_item">
      <i class="icon icon_examine"></i>
      <span>检查</span>
    </section>
    <section @click = "goTo({path: '/setServer'})" class="guide_item">
      <i class="icon icon_msg"></i>
      <span>需求</span>
    </section>
    <section @click = "goTo({path: '/login'})" class="guide_item">
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
