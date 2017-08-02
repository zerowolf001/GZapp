<template>
  <div>
    <head-top head-title="患者详情" go-back='true'></head-top>
    <section class="bed_name">
      <a href=""><img src="../assets/icon/woman.png" alt=""></a>
    </section>
  </div>
</template>

<script>
  import headTop from '../components/head'
  import footGuide from '../components/footGuide'

  export default {
    data () {
      return {}
    },
    components:{
      headTop,
      footGuide
    },
    computed: {

    },
    watch: {

    }
  }
</script>
<style>
  .bed_name {
    background:#fff;
    box-shadow:0 1px 3px #ddd;
    padding-top: 1.95rem;
  }
</style>
