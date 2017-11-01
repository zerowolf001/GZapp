<template>
  <div id="yz_detail">
    <head-top head-title="已执行医嘱" go-back='true'></head-top>
    <div class="yz_detail">
      <div class="profileImage">
        <img v-if="yzData.gender == 0" src="../assets/icon/woman.png" >
        <img v-else src="../assets/icon/man.png" >
        <div class="user-info">
          <header>
            <h4 class="bed_title ellipsis" :class="'lv_'+ yzData.nursingLevel">{{yzData.pName}}</h4>
            <p v-if="yzData.gender==0" class="age">女/{{yzData.age}}岁</p>
            <p class="age" v-else>男/{{yzData.age}}岁</p>
            <p class="bli">病例号:{{yzData.chartNo}}</p>
          </header>
          <h5 class="bed_distance">
            <p>{{yzData.contactNo}}</p>
            <p>{{yzData.bedNum}}号床</p>
          </h5>
          <p>{{yzData.chkInAt}} 入院</p>
        </div>
      </div>
    </div>
    <section class="yzxq_detail">
      <ul>
        <li><span>医嘱名称：{{yzData.name}}</span></li>
        <li><span>医嘱类型：{{yzData.type}}</span></li>
        <li><span>总量：{{yzData.total}}</span></li>
        <li><span>每次量：{{yzData.dose}}</span></li>
        <li><span>状态：{{yzData.status}}</span></li>
        <li><span>开立医生：{{yzData.doctorName}}</span></li>
        <li><span>执行时间：{{yzData.startTime}}</span></li>
        <li><span>结束时间：{{yzData.stopTime}}</span></li>
        <li><span>创建时间：{{yzData.createTime}}</span></li>
      </ul>
    </section>
    <section class="yzxq_detail">
      <ul>
        <li class="bz"><span>备注：</span></li>
      </ul>
    </section>
  </div>
</template>

<script>
  import headTop from '../components/head'
  import {yzDetail,yzClickData} from '../service/getData'

  export default {
    data(){
      return {
        id:null,
        yzData:'',
        StationID:'0397',
        yzClick:'',
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.xh = this.$route.query.id;
    },
    mounted(){
      this.initData();
    },
    components:{
      headTop,
    },
    methods: {
      async initData() {
        this.yzData = await yzDetail(this.id)
      },
    },
  }
</script>
<style lang="scss">
  .yz_detail {
    margin-top:1.95rem;
    background:#fff;
  }
  .yz_detail .profileImage {
    display: block;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    yz_detail: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding:.6rem .6rem .4rem .6rem;
  }
  .yz_detail .profileImage img {
    background:#eee;
    display: inline-block;
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 50%;
    vertical-align: middle;
  }
  .yz_detail .profileImage .user-info {
    padding-left: .4rem;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
  }
  .yz_detail .profileImage .user-info header {
    display: flex;
    align-items: center;
  .lv_1:before{
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
  .lv_2:before {
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
  .lv_3:before {
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
  .lv_4:before {
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
  .lv_5:before {
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
  .lv_6:before {
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
  .lv_7:before {
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
  .lv_8:before {
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
  .lv_9:before {
    font-size: .5rem;
    line-height: .65rem;
    color: #fff;
    font-weight: normal;
    background-color: orangered;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
    content: '\65B0\7279';
    text-align: center;
    white-space: nowrap;
  }
  }
  .yz_detail .profileImage .user-info .bed_title {
    display: block;
    margin: 0;
    width: 3.5rem;
    color: #333;
    padding-top: .01rem;
    font-size: .65rem;
    line-height: 1rem;
    font-weight: 700;
  }
  .yz_detail .profileImage .user-info header p{
    margin-top: 0;
    display: block;
  &.age {
     float:left;
     margin-bottom:-.1rem;
   }
  &.bli {
     font-size: .55rem;
     position: absolute;
     right:.7rem;
   }
  }
  .yz_detail .user-info .bed_distance {
    display: flex;
    width: 100%;
    font-size:.55rem;
    line-height:.75rem;
    margin-top:.2rem;
  }
  .yz_detail .profileImage .user-info p {
    margin-top:-.4rem;
  }
  .yz_detail .user-info .bed_distance p:first-child {
    margin-top:0;
    width:70%;
  }
  .yz_detail .user-info .bed_distance p:last-child {
    margin-top:0;
    color:#f0665a;
    line-height: 1.2rem;
    font-size:.65rem;
  }
  .yzxq_detail {
    padding:.5rem 0;
    background:#fff;
    margin-top:.5rem;
    margin-bottom:1rem;
  }
  .yzxq_detail ul li {
    width: 100%;
    font-size: .6rem;
    padding-left:.8rem;
    height:1.2rem;
    line-height:1.2rem;
  &.bz {
     min-height: 2rem;
   }
  }
  .btnn {
    text-align: center;
  a.btn {
    display: block;
    width: 90%;
    margin:0 auto;
    height:1.5rem;
    line-height: .9rem;
    background-color: #47a8f0;
    color:#fff;
  }
  }

</style>
