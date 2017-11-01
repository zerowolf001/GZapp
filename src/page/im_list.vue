<template>
  <div id="im_list">
    <div>
      <h4>{{data1}}</h4>
    </div>
  </div>
</template>
<script>
  import $ from 'webpack-zepto'

  export default {
    data() {

      return {
        xh:null,
        data1:'ddd',
      }
    },
    created(){
      window.test=this.test;
    },
    mounted(){

    },
    methods:{
      test:function () {
       $('h4').text('eee');
      }
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
