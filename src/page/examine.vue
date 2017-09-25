<template>
  <div id="examine">
    <head-top head-title="检查安排" go-back='true'></head-top>
    <div class="examine">
      <ul class="list_wrapper">
        <router-link :to="{path: 'ops', query:{StationID:'0397', sid:item.xh}}" v-for="item in EXData" tag="li" :key="item.sid">
          <header>
            <div class="state"><em class="bedNo">{{item.bedName}}</em></div>
            <h3 class="title">{{item.name}}</h3>
          </header>
          <p class="content">{{item.anesthesia}}</p>
          <div class="footer">
            <div class="info"><em>日期</em><span>{{item.date}}</span></div>
            <div class="info"><em>更新</em><span>{{item.updateTime}}</span></div>
          </div>
        </router-link>
        <!--<li>
          <header>
            <div class="state"><em class="bedNo">14</em></div>
            <h3 class="title">李小花</h3>
          </header>
          <p class="content">
            颈部血管彩色多普勒超声
          </p>
          <div class="footer">
            <div class="info"><em>日期</em><span>2017年09月04日</span></div>
            <div class="info"><em>时间</em><span>07:13</span></div>
          </div>
        </li>-->
      </ul>
    </div>
    <foot-guide></foot-guide>
  </div>

</template>
<script>
  import headTop from '../components/head'
  import footGuide from '../components/footGuide'
  import {examineData} from '../service/getData'

  export default {
    data() {
      return {
        EXData:null,
      }
    },
    mounted(){
      this.initData();
    },
    components:{
      headTop,
      footGuide,
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
    margin-top:1.95rem;
    margin-bottom:2rem;
  }
  .list_wrapper li {
    border-bottom: 1px solid #dfdfdf;
    background: #fff;
    margin-bottom: .5rem;
  }
  .list_wrapper li header {
    display: flex;
    margin: 0 .5rem;
    height: 1.5rem;

  }
  .list_wrapper li header .state {
    margin-right: 0;
    line-height: 1.9rem;
  }
  .list_wrapper li header .state .bedNo {
    background: #3fad6a;
    font-size: .6rem;
    color: #fff;
    padding: 0 .3rem;
    display: inline-block;
    line-height: 1rem;
    border-radius: .5rem;
    margin-right: .4rem;
  }
  .list_wrapper li header .title {
    font-size: .75rem;
    line-height: 1.8rem;
  }
  .list_wrapper li .content {
    font-size: .6rem;
    color: #666;
    line-height: 1rem;
    max-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: .2rem .5rem .5rem;
  }
  .list_wrapper li .footer {
    display: flex;
    align-items: center;
    border-top: 1px solid #efefef;
    padding: 0 .5rem;
    height: 1.8rem;
    font-size: .5rem;
  }
  .list_wrapper li .footer .info em {
    color: #999;
  }
  .list_wrapper li .footer .info span {
    color: #e10000;
    font-size: .55rem;
    font-weight: 700;
    margin: 0 .5rem 0 .2rem;
  }
</style>
