<template>
  <div id="bed_ex">
    <head-top head-title="检查详情" go-back='true'></head-top>
    <div class="bed_ex">
      <section class="exa_detail">
        <ul>
          <li>检查项目：{{exaData.name}}</li>
          <li>检查时间：{{exaData.checkDate}}</li>
        </ul>
      </section>
      <section class="ex_detail" v-for="item in exaData.ck">
        <ul>
          <li>名　　称：{{item.itemName}}</li>
          <li>结　　果：{{item.checkResult}} {{item.unit}} <span style="color:red">{{item.resultFlag}}</span></li>
          <li>参考区间：{{item.min}}~{{item.max}}</li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
  import headTop from '../components/head'
  import {bedExamine} from '../service/getData'

  export default {
    data(){
      return {
        exaData:'',
      }
    },
    created(){
      this.feeNo = this.$route.query.feeNo;
      this.checkCode = this.$route.query.Code;
      this.checkDate = this.$route.query.Date;
    },
    components:{
      headTop
    },
    mounted(){
      this.initData();
    },
    methods: {
      async initData () {
        this.exaData = await bedExamine(this.feeNo,this.checkCode,this.checkDate);
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
  .exa_detail,.ex_detail {
    margin:.3rem;
    background:#fff;
    margin-bottom:1rem;
    border-radius:.3rem;
  }
  .ex_detail {
    padding:.3rem;
  }
  .exa_detail ul li,.ex_detail ul li {
    width: 100%;
    font-size: .65rem;
    padding-left:.8rem;
    height:1.2rem;
    line-height:1.2rem;
  }
  .ex_detail ul li {
    font-size: .55rem;
    height:1rem;
    line-height:1rem;
  }
</style>
