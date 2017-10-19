<template>
  <div id="examine">
    <head-top head-title="检查安排" go-back='true'></head-top>
    <div class="examine">
      <ul class="list_wrapper">
        <router-link v-for="item in EXData" :to="{path:'exdetail',query:{id:item.xh}}" :key="id" tag="li">
          <dl>
            <dd>
              <span class="bedNum">{{item.bedNum}}床</span>
              <span class="exName">{{item.name}}</span>
              <span class="exTime">手术时间：{{item.date}}</span>
            </dd>
            <dd>检查项目：{{item.checkName}}</dd>
            <dd>检查地点：{{item.Position}}</dd>
            <dd><span>检查时间：{{item.time}}</span><span class="fr">状态：<em>{{item.status}}</em></span></dd>
          </dl>
        </router-link>
      </ul>
    </div>
  </div>

</template>
<script>
  import headTop from '../components/head'
  import {examineData} from '../service/getData'

  export default {
    data() {
        return {
            StationID:'0397',
            EXData:null,
        }
    },
    mounted(){
      this.initData();
    },
    components:{
      headTop,
    },
    methods:{
      async initData() {
        let data = await examineData(this.StationID);
        this.EXData = [...data]
      }
    }
  }
</script>
<style>
  em, i {
    font-style: normal;
  }
  #examine {
    background: #f5f5f5;
  }
  .examine {
    margin-top:2.25rem;
    margin-bottom:2rem;
  }
  .list_wrapper li {
    background: #fff;
    margin-bottom: .5rem;
    padding-bottom:.2rem;
  }
  .list_wrapper li dl {
    padding:0 .5rem;
  }
  .list_wrapper li dl dd:first-child {
    height:1.6rem;
  }
  .list_wrapper li dl dd,.list_wrapper li dl dd:last-child span {
    font-size:.55rem;
    line-height:1.2rem;
  }
  .list_wrapper li dl dd span {
    font-size:.6rem;
    line-height:1.2rem;
  }
  .list_wrapper li dl dd span.bedNum{
    background:#66cc99;
    padding:0 .3rem;
    line-height:1rem;
    height:1rem;
    color:#fff;
    display: inline-block;
  }
  .list_wrapper li dl dd span.exName {
    margin-left:.4rem;
  }
  .list_wrapper li dl dd span.exTime {
    font-size:.55rem;
    float: right;
  }
  .fr {
    float: right;
  }
  .fr em {
    color:red;
  }
</style>
