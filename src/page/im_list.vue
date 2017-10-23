<template>
  <div id="im_list">
    <head-top head-title="处理成功" go-back='true'></head-top>
    <div>
      <h4>处理成功!</h4>
    </div>
  </div>
</template>
<script>
  import {im_list} from '../service/getData'
  import headTop from '../components/head'
  import ToggleButton from '../components/switch.vue'

  export default {
    data() {
      return {
        xh:null,
      }
    },
    created(){
      this.xh = this.$route.query.id;
      setTimeout(() =>{
        this.$router.go(-1)
      },2000)
    },
    mounted(){
      this.initData();
    },
    components:{
      headTop,
      ToggleButton
    },
    computed: {
    },
    methods:{
      async initData() {
        this.bedDetailData = await im_list(this.xh)
      },
    }
  }
</script>
<style lang="scss" scoped>
  #im_list h4{
    margin-top:3rem;
    padding:2rem;
    font-size: .7rem;
    color:#404040;
  }
</style>
