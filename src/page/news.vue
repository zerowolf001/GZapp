<template>
  <div id="news">
    <head-top head-title="信息公告" go-back='true'></head-top>
    <div class="newsList mt-195">
      <section class="tab_title">
        <span :class="{choosed: categoryType === 1}" @click="categoryType = 1">医院公告</span>
        <span :class="{choosed: categoryType === 2}" @click="categoryType = 2">医院新闻</span>
      </section>
      <section v-if="categoryType === 1">
        <ul>
          <router-link v-for="item in EXData" v-if="item.type=='公告'" :to="{path: 'newspage', query:{id: item.xh}}" tag="li" :key="item.xh">
            <dl>
              <dd><span>公告</span>{{item.title}}</dd>
              <dd>{{item.synopsis}}</dd>
            </dl>
          </router-link>
        </ul>
      </section>
      <section v-if="categoryType === 2">
        <ul>
          <router-link v-for="item in EXData" v-if="item.type=='新闻'" :to="{path: 'newspage', query:{id: item.xh}}" tag="li" :key="item.xh">
            <dl>
              <dd><span>新闻</span>{{item.title}}</dd>
              <dd>{{item.synopsis}}</dd>
            </dl>
          </router-link>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
  import headTop from '../components/head'
  import footGuide from '../components/footGuide'
  import {news} from '../service/getData'

  export default {
    data(){
      return {
          categoryType: 1,
          EXData:'',
          StationID:'0397',
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
        let data = await news(this.StationID);
        this.EXData = [...data]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tab_title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
    height: 1.5rem;
    margin: .5rem 0;
    span {
      height: 1.5rem;
      width: 33.333%;
      text-align: center;
      line-height: 1.5rem;
      font-size: .5rem;
      color:#ccc;
      &.choosed {
        border-bottom:1px solid #47a8f0;
        color: #47a8f0;
      }
    }
  }
  .newsList {
    margin-top:2.15rem;
    margin-bottom:2.5rem;
    ul li {
      margin:.5rem 0;
      background:#fff;
      padding:.4rem;
      dl dd:first-child {
        font-size:.6rem;
        line-height:1.2rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      dl dd:last-child {
        font-size:.58rem;
        line-height:.75rem;
        overflow: hidden;
        margin-top:.1rem;
        color:#ddd;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      dl dd span {
        font-size:.6rem;
        background:#de5467;
        color:#fff;
        border-radius: .2rem;
        padding:0 .5rem;
        margin-right:.5rem;
      }
    }
  }
</style>
