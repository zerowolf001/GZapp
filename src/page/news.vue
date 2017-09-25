<template>
  <div id="news">
    <head-top head-title="信息公告" go-back='true'></head-top>
    <div class="m-news-item">
      <div class="banner">
        <img src="http://www.gzsrmyy.com/skin/images/dj_banner.jpg" alt="">
      </div>
      <ul>
        <router-link :to="{path: 'ops', query:{StationID:'0397', sid:item.xh}}" v-for="item in EXData" tag="li" :key="item.sid">
          <h4>[{{item.type}}]{{item.title}}</h4>
          <p>{{item.title}}</p>
        </router-link>
        <!--<li>
          <h4>[公告]赣州市人民医院2017年8月招聘考试拟录用人员公示</h4>
          <p>我院2017年8月招聘编外人员拟录用名单公示如下...</p>
        </li>
        <li>
          <h4>[信息]我院召开全面推开城市公立医院综合改革启动部署暨周例会</h4>
          <p>我院在南院科教楼二楼1号学术报告厅召开全面推开城市公立医院综合改革启动部署暨周例会。</p>
        </li>
        <li>
          <h4>[信息]我院城市公立医院综合改革正式启动</h4>
          <p>我院城市公立医院综合改革正式启动，系统顺利完成切换并准时上线投入使用。</p>
        </li>
        <li>
          <h4>[信息]我院城市公立医院综合改革正式启动</h4>
          <p>我院城市公立医院综合改革正式启动，系统顺利完成切换并准时上线投入使用。</p>
        </li>
        <li>
          <h4>[信息]我院城市公立医院综合改革正式启动</h4>
          <p>我院城市公立医院综合改革正式启动，系统顺利完成切换并准时上线投入使用。</p>
        </li>
        <li>
          <h4>[信息]我院城市公立医院综合改革正式启动</h4>
          <p>我院城市公立医院综合改革正式启动，系统顺利完成切换并准时上线投入使用。</p>
        </li>
        <li>
          <h4>[信息]我院城市公立医院综合改革正式启动</h4>
          <p>我院城市公立医院综合改革正式启动，系统顺利完成切换并准时上线投入使用。</p>
        </li>-->
      </ul>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>
<script>
  import headTop from '../components/head'
  import footGuide from '../components/footGuide'
  import {news} from '../service/getData'

  export default {
    data(){
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
        let data = await news(this.StationID);
        this.EXData = [...data]
      }
    }
  }
</script>
<style>
  .banner img {
    display: block;
    width: 100%;
  }
</style>
