<template>
  <div id="bed_ex">
    <head-top head-title="检查详情" go-back='true'></head-top>
    <div class="bed_ex">
      <section class="head_top">
        <table width="100%" border="0" cellspacing="5" cellpadding="0">
          <tr>
            <td rowspan="3" align="center" valign="middle" width="20%">
              <div class="bed_img">
                <img src="../assets/icon/woman.png" >
              </div>
            </td>
            <td width="60%">
              <header>
                <h4 class="bed_title ellipsis" :class="'lv_'+ exaData.nursingLevel">{{exaData.name}}</h4>
                <p v-if="exaData.gender == 0">女/{{exaData.age}}岁</p>
                <p v-else>男/{{exaData.age}}岁</p>
              </header>
            </td>
            <td rowspan="4" class="cr f6">{{exaData.Status}}</td>
          </tr>
          <tr>
            <td>病历号：{{exaData.chartNo}}</td>
          </tr>
          <tr>
            <td class="cr f5">{{exaData.bedNum}}号床</td>
            <td></td>
          </tr>
        </table>
      </section>
      <section class="exa_title">检查详情</section>
      <section class="exa_detail">
        <ul>
          <li><span>检查地点：{{exaData.Position}}</span></li>
          <li><span>检查项目：{{exaData.checkName}}</span></li>
          <li><span>检查时间：{{exaData.edate}}</span></li>
          <li><span>接送工具：</span></li>
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
    margin-top:1.95rem;
  }
  .head_top {
    background:#fff;
    padding:.5rem 0;
    margin-bottom:.5rem;
  }
  .bed_img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: #ccc;
    font-size:1rem;
  }
  .bed_img img {
    width: 90%;
    height:90%;
  }
  header {
    display: flex;
  }
  header .bed_title {
    margin: 0;
    width: 4rem;
    color: #333;
    padding-top: .01rem;
    font-size: .6rem;
    line-height: .7rem;
  }
  header .lv_1:before {
    font-size: .5rem;
    line-height: .65rem;
    color: #fff;
    font-weight: normal;
    background-color: #ff3fdb;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
    content: '\4E00\7EA7';
    text-align: center;
    white-space: nowrap;
  }
  header .lv_2:before {
    font-size: .5rem;
    line-height: .65rem;
    color: #fff;
    font-weight: normal;
    background-color: #2d77ff;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
    content: '\4E8C\7EA7';
    text-align: center;
    white-space: nowrap;
  }
  header .lv_3:before {
    font-size: .5rem;
    line-height: .65rem;
    color: #333;
    font-weight: normal;
    border:1px solid #eee;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
    content: '\4E09\7EA7';
    text-align: center;
    white-space: nowrap;
  }
  header .lv_4:before {
    font-size: .5rem;
    line-height: .65rem;
    color: #fff;
    font-weight: normal;
    background-color:#000;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
    content: '\7279\7EA7';
    text-align: center;
    white-space: nowrap;
  }
  header .lv_5:before {
    font-size: .5rem;
    line-height: .65rem;
    color: #fff;
    font-weight: normal;
    background-color:#666;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
    content: '\7279\75BE';
    text-align: center;
    white-space: nowrap;
  }
  header .lv_6:before {
    font-size: .5rem;
    line-height: .65rem;
    color: #fff;
    background-color: #FFBA31;
    font-weight: normal;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
    content: '\91CD\75C7';
    text-align: center;
    white-space: nowrap;
  }
  header .lv_7:before {
    font-size: .5rem;
    line-height: .65rem;
    color: #fff;
    font-weight: normal;
    background-color:orangered;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
    content: '\75C5\513F';
    text-align: center;
    white-space: nowrap;
  }
  header .lv_8:before {
    font-size: .5rem;
    line-height: .65rem;
    color: #fff;
    font-weight: normal;
    background-color: orangered;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
    content: '\65B0\751F';
    text-align: center;
    white-space: nowrap;
  }
  table tr td {
    padding:.02rem 0;
  }
  td.cr {
    color:#f0665a;
  }
  td.f6 {
    font-size:.6rem;
  }
  td.f5 {
    font-size: .55rem;
  }
  td.bt {
    border-top:1px solid #f6f6f6;
    padding:.2rem;
  }
  table tr td a {
    background-color: #47a7f0;
    color:#fff;
    font-size:.4rem;
    line-height: .7rem;
    padding:.1rem .2rem;
    margin-left:.35rem;
    border-radius:.25rem;
  }
  .exa_title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background-color: #fff;
    height: 1.5rem;
    line-height: 1.5rem;
    padding:0 1rem;
    font-size: .6rem;
  }
  .exa_detail {
    padding:.5rem;
    background:#fff;
    margin-top:.5rem;
    margin-bottom:1rem;
  }
  .exa_detail ul li {
    width: 100%;
    font-size: .55rem;
    padding-left:.8rem;
    height:1.2rem;
    line-height:1.2rem;
  }
</style>
