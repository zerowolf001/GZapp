<template>
  <div id="news">
    <head-top head-title="信息公告" go-back='true'></head-top>
    <div class="m-news-item mt-195">
      <div class="banner">
        <img src="http://www.gzsrmyy.com/skin/images/dj_banner.jpg" alt="">
      </div>
      <ul>
        <li v-for="item in EXData">
          <h4>[{{item.type}}]{{item.title}}</h4>
          <p>{{item.title}}</p>
        </li>
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
          EXData:'',
          StationID:'0397',
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
  .mt-195 {
    margin-top: 1.95rem;
  }
  .banner img {
    display: block;
    width: 100%;
  }
</style>
