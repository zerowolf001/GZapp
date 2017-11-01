<template>
  <div id="bed_ex">
    <head-top head-title="CT详情" go-back='true'></head-top>
    <div class="bed_ex">
      <section class="exa_detail">
        <ul>
          <li>检查项目：CT</li>
          <li>检查时间：{{exaData.time}}</li>
          <li>报告医师：{{exaData.doctor}}</li>
        </ul>
      </section>
      <section class="exa_detail">
        <ul>
          <li>名　　称：<span>{{exaData.position}}</span></li>
          <li class="pic" v-if="exaData.picture">
            <a :href="exaData.picture"><img :src='exaData.picture' /></a>
          </li>
        </ul>
      </section>
      <section class="exa_detail">
        <ul>
          <li class="ms">影像描述：<span>{{exaData.prompt}}</span></li>
          <li class="ts">影像提示：<span>{{exaData.describe}}</span></li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
  import headTop from '../components/head'
  import {getCtListDetail} from '../service/getData'

  export default {
    data(){
      return {
        exaData:[],
      }
    },
    created(){
      this.id = this.$route.query.xh;
    },
    components:{
      headTop
    },
    mounted(){
      this.initData();
    },
    methods: {
      async initData () {
        this.exaData = await getCtListDetail(this.id);
      }
    },
  }
</script>
<style lang="scss" scoped>
  .bed_ex {
    margin-top:2.5rem;
  }
  .bed_img img {
    width: 90%;
    height:90%;
  }
  .exa_detail {
    margin:.3rem;
    background:#fff;
    margin-bottom:.5rem;
    border-radius:.3rem;
  .pic {
    min-height:2rem;
    height:auto;
    padding:.2rem;
  img {
    max-width: 100%;
  }
  }
  }
  .exa_detail ul li {
    width: 100%;
    font-size: .65rem;
    padding-left:.8rem;
    padding-top:.2rem;
    height:1.4rem;
    line-height:1rem;
  span {
    color:#999;
    font-size: .55rem;
  }
  &.ms,&.ts{
          padding:.4rem;
          min-height:2rem;
          height:auto;
  span {
    color:#999;
    font-size: .55rem;
  }
  }

  }
</style>
