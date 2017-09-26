<template>
  <div>
    <head-top signin-up='home' head-title="赣州市人民医院(新院)">
      <section slot='scanCode' class="scanCode">
        <svg class="icon" width="100%" height="100%" style="stroke:rgb(255,255,255);" viewBox="0 0 1080 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="458">
<path d="M0 540.416 0 483.555556 1080.888889 483.555556 1080.888889 540.416 0 540.416ZM995.555556 56.860444 654.222222 56.860444 654.222222-0.028444 995.555556-0.028444C1026.958222-0.028444 1052.444444 25.457778 1052.444444 56.860444L1052.444444 398.193778 995.555556 398.193778 995.555556 56.860444ZM85.333333 398.193778 28.444444 398.193778 28.444444 56.860444C28.444444 25.457778 53.902222-0.028444 85.333333-0.028444L426.666667-0.028444 426.666667 56.860444 85.333333 56.860444 85.333333 398.193778ZM85.333333 967.111111 426.666667 967.111111 426.666667 1023.971556 85.333333 1023.971556C53.902222 1023.971556 28.444444 998.513778 28.444444 967.111111L28.444444 625.749333 85.333333 625.749333 85.333333 967.111111ZM995.555556 625.749333 1052.444444 625.749333 1052.444444 967.111111C1052.444444 998.513778 1026.958222 1023.971556 995.555556 1023.971556L654.222222 1023.971556 654.222222 967.111111 995.555556 967.111111 995.555556 625.749333Z" p-id="2396" fill="#ffffff"></path>        </svg>
      </section>
      <!--<section slot="logo" class="m-logo"  @click="reload"></section>-->
      <section slot="msg" class="index_msg">
        <svg class="icon" width="100%" height="100%" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3273" >
          <path d="M516.192 179.346c-44.882 0-81.422-36.521-81.422-81.423s36.539-81.431 81.422-81.431c44.901 0 81.442 36.53 81.442 81.431s-36.54 81.423-81.442 81.423v0zM516.192 53.119c-24.693 0-44.775 20.1-44.775 44.803 0 24.694 20.082 44.795 44.775 44.795 24.713 0 44.796-20.1 44.796-44.795 0-24.703-20.082-44.803-44.796-44.803v0z" p-id="3274" fill="#ffffff"></path>
          <path d="M872.283 895.438h-720.596c-15.435 0-62.398 0-76.272-32.259-16.314-37.93 26.005-87.148 74.656-138.474 5.024-5.295 9.53-10.052 13.191-14.087 6.586-7.27 11.79-12.538 15.919-16.698 9.62-9.727 9.62-9.727 9.564-33.122l-0.018-194.24c0-146.693 99.261-275.306 241.378-312.768 63.961-16.878 132.857-13.36 194.789 9.888 125.821 47.297 210.365 169.019 210.365 302.88l-0.019 194.24c-0.051 23.394-0.051 23.394 9.565 33.122 4.127 4.163 9.333 9.427 15.92 16.698 3.662 4.038 8.164 8.793 13.19 14.077 48.653 51.337 90.969 100.545 74.656 138.476-13.874 32.27-60.855 32.27-76.291 32.27v0zM511.905 179.849c-24.515 0-48.885 3.148-72.467 9.369-126.036 33.216-214.063 147.266-214.063 277.34v194.163c0.071 34.144-0.665 39.257-20.154 58.961-3.84 3.878-8.686 8.777-14.823 15.541-3.805 4.209-8.507 9.163-13.728 14.678-18.737 19.762-75.734 79.9-67.604 98.806 1.617 3.749 12.401 10.101 42.622 10.101h720.598c30.222 0 41.026-6.352 42.622-10.101 8.15-18.915-48.85-79.046-67.584-98.804-5.225-5.516-9.925-10.471-13.731-14.678-6.14-6.766-10.983-11.667-14.823-15.541-19.491-19.705-20.227-24.818-20.154-58.961l-0.001-194.163c0-118.686-74.979-226.626-186.606-268.582-32.019-12.036-65.703-18.129-100.106-18.129v0z" p-id="3275" fill="#ffffff"></path><path d="M511.995 1007.503c-75.014 0-140.107-53.329-154.787-126.799l-4.379-21.904h318.331l-4.381 21.904c-14.681 73.47-79.771 126.799-154.785 126.799v0zM399.723 895.429c18.286 44.803 62.434 75.447 112.271 75.447 49.838 0 93.986-30.644 112.272-75.447h-224.544z" p-id="3276" fill="#ffffff"></path>
        </svg>
      </section>
    </head-top>
    <nav class="home_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide types_container">
            <router-link class="home_link" to="/docadv">
              <figure>
                <img src="../assets/icon/icon_1.png">
                <figcaption>医嘱清单</figcaption>
              </figure>
            </router-link>
            <router-link to="/duty" class="home_link">
              <figure>
                <img src="../assets/icon/icon_2.png">
                <figcaption>排班管理</figcaption>
              </figure>
            </router-link>
            <router-link to="/examine" class="home_link">
              <figure>
                <img src="../assets/icon/icon_3.png">
                <figcaption>检查安排</figcaption>
              </figure>
            </router-link>
            <router-link to="/ops"  class="home_link">
              <figure>
                <img src="../assets/icon/icon_4.png">
                <figcaption>手术安排</figcaption>
              </figure>
            </router-link>
            <router-link to="/stat" class="home_link">
              <figure>
                <img src="../assets/icon/icon_5.png">
                <figcaption>统计报表</figcaption>
              </figure>
            </router-link>
            <router-link to="/news"  class="home_link">
              <figure>
                <img src="../assets/icon/icon_6.png">
                <figcaption>信息公告</figcaption>
              </figure>
            </router-link>
            <router-link to="/"  class="home_link">
              <figure>
                <img src="../assets/icon/icon_7.png">
                <figcaption>出入院信息</figcaption>
              </figure>
            </router-link>
            <a class="home_link">
              <figure>
                <img src="../assets/icon/icon_8.png">
                <figcaption>设备管理</figcaption>
              </figure>
            </a>
          </div>
        </div>
        <!--<div class="swiper-pagination"></div>-->
      </div>
    </nav>
    <div class="home_ad">
      <img src="../assets/icon/ad_1.jpg" alt="">
    </div>
    <div class="m-news-item">
      <header class="bed_header">
        <h3>科室公告</h3>
        <router-link to="/news"  class="more">更多 >></router-link>
      </header>
      <ul>
        <!--<router-link :to="{path: 'bed', query:{id: item.xh}}"  tag="li" v-for="item in newsData" :key="item.xh">
        </router-link>-->
        <router-link :to="{path: 'newspage', query:{id: item.xh}}"  tag="li" v-for="item in newsData" :key="item.xh">
          <h4>{{ item.title }}</h4>
          <p>{{item.synopsis}}</p>
          <span>{{item.publish}} {{item.time}}</span>
        </router-link>
      </ul>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import '../style/swiper.min.css'
  import headTop from '../components/head'
  import footGuide from '../components/footGuide'
  import '../config/swiper.min.js'
  import {news} from '../service/getData'
  import {loadMore} from '../config/load'

  /* Cannot assign to read only property 'exports' of object '#<Object>
   * ES6不支持导入ES5代码(import不能module.exports)，删除wiper的module.exports解决
   * https://github.com/webpack/webpack/issues/4039
   * */

  export default {
    data() {
      return {
        offset: 0,
        newsData:[],
        preventRepeatReuqest:false,
      }
    },
    mounted(){
      //初始化Swiper
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        //spaceBetween: 30,
      });
      this.initData();
    },
    components:{
      headTop,
      footGuide
    },
    props:['StationID'],
    mixins:[loadMore],
    methods:{
      async initData() {
        //获取数据
        let res = await news(this.StationID);
        this.newsData = [...res];
        if (res.length < 20) {
          this.touchend = true;
        }
      },
      //到达底部加载更多数据
      async loaderMore() {
        if (this.touchend) {
          return
        }
        //防止重复请求
        if (this.preventRepeatReuqest) {
          return
        }
        this.preventRepeatReuqest = true;

        //数据定位加20位
        this.offset += 20;
        let res = await news(this.StationID);
        this.hideLoading();
        this.newsData = [...this.newsData, ...res];
        //当获取数据小于20，说明没有更多数据，不需要再次请求数据
        if (res.length < 20) {
          this.touchend = true;
          return
        }
        this.preventRepeatReuqest = false;
      },
      //监听父级传来的数据发生变化时，触发此函数重新根据属性值获取数据
      async listenPropChange(){
        this.showLoading = true;
        let res = await news(this.StationID);
        this.hideLoading();
        //本地数据是引用类型，返回一个新数组
        this.newsData = [...res];
      },
      hideLoading(){
        this.showLoading = false;
      },

      /*//点击图标刷新页面
      reload(){
        window.location.reload();
      },*/

    },
    watch: {

    }
  }
</script>
<style>
  .index_msg {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: right;
  }
  .index_msg svg {
    width: .95rem;
    height: .95rem;
    margin-right:.5rem;
  }
  .home_nav {
    margin-top: 2.1rem;
    background-color: #fff;
    border-bottom: .025rem solid #e4e4e4;
    height: 6.8rem;
  }
  .home_nav .swiper-container {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  .types_container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .types_container a.home_link {
    width: 25%;
    margin-top: .5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
  }
  .types_container .home_link figure img {
    width: 1.6rem;
    height: 1.6rem;
  }
  .types_container .home_link figure figcaption {
    text-align: center;
    font-size: .5rem;
    color: #666;
  }
  .home_nav .swiper-container .swiper-pagination {
    bottom: .15rem;
  }
</style>
