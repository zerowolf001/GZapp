<template>
  <div class="bedlist_container">
    <ul v-load-more="loaderMore" v-if="bedListArr.length" type="1">
      <router-link :to="{path: 'bed', query:{id: item.FeeNo}}" v-for="item in bedListArr" tag='li' :key="item.id" class="bed_li">
        <section class="bed_img">
          <img v-if="item.Gender == 1" src="../assets/icon/woman.png" />
          <img v-else src="../assets/icon/man.png" />
        </section>
        <div class="bed_right">
          <header>
            <h4 class="bed_title ellipsis" :class="'lv_'+ item.NursingLevel">{{item.Name}}</h4>
            <ul class="bed_detail_ul">
              <li v-if="item.hrf == 1">跌</li>
              <li v-if="item.sore == 1">疮</li>
              <li v-if="item.bedRest == 1">卧</li>
              <li v-if="item.allergy == 1">敏</li>
              <li v-if="item.isolation == 1">隔</li>
              <li v-if="item.catheterOff == 1">脱</li>
              <li v-if="item.critically == 1">危</li>
              <li v-if="item.critically == 2">重</li>
            </ul>
          </header>
          <h5 class="rating_num">
            <section class="rating_num_left">
              <span class="rating_feeNo">住院号:{{item.FeeNo}}</span>
              <span class="rating_age">{{item.age}}岁</span>
              <span class="rating_inDate">{{item.ChaInAt}}入院</span>
            </section>
          </h5>
          <h5 class="fee_distance">
            <p class="fee">
              <span>{{item.ContactNo}}</span>
              <span class="segmentation">/</span>
              主治医生:{{item.Doctor}}
            </p>
            <p class="distance">{{item.BedNum}}号床</p>
          </h5>
        </div>
      </router-link>
      <!--<li class="bed_li">
        <section class="bed_img">
          <img src="../assets/icon/woman.png" alt="">
        </section>
        <div class="bed_right">
          <header>
            <h4 class="bed_title ellipsis lv_1">曹婷</h4>
            <ul class="bed_detail_ul">
              <li>跌</li>
              <li>疮</li>
              <li>卧</li>
              <li>敏</li>
              <li>隔</li>
              <li>脱</li>
              <li>危</li>
            </ul>
          </header>
          <h5 class="rating_num">
            <section class="rating_num_left">
              <span class="rating_feeNo">住院号:409813</span>
              <span class="rating_age">19岁</span>
              <span class="rating_inDate">2017/06/22入院</span>
            </section>
          </h5>
          <h5 class="fee_distance">
            <p class="fee">
              <a href="tel:13397016910">13307978888</a>
              <span class="segmentation">/</span>
              主治医生:王琪
            </p>
            <p class="distance"></p>
          </h5>
        </div>
      </li>
      -->
    </ul>
    <ul v-else>
      <li v-for="item in 10" :key="item">
        数据请求失败
      </li>
    </ul>
    <p v-if="touchend" class="empty_data">没有更多了</p>
  </div>
</template>

<script>
  import {bedList} from '../service/getData'
  import {loadMore} from './load'

  export default {
    data() {
      return {
        bedListArr:[],  //病床列表数据
        preventRepeatReuqest:false,  //到达底部加载数据，防止重复加载
        showLoading: true,
        touchend: false, //没有更多数据
      }
    },
    mounted(){
      this.initData();
    },
    components:{
    },
    props:['StationID'],
    mixins:[loadMore],
    computed:{},
    updated(){
      // console.log(this.supportIds, this.sortByType)
    },
    methods: {
      async initData() {
        //获取数据
        let res = await bedList(this.StationID);
        this.bedListArr = [...res];
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
        let res = await bedList(this.StationID);
        this.hideLoading();
        this.bedListArr = [...this.bedListArr, ...res];
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
        let res = await bedList(this.StationID);
        this.hideLoading();
        //本地数据是引用类型，返回一个新数组
        this.bedListArr = [...res];
      },
      hideLoading(){
        this.showLoading = false;
      },
    },
    watch:{
      //监听父级传来的StationID，当值发生变化的时候重新获取数据，作用于排序和筛选
      StationID:function (value) {
        this.listenPropChange();
      }
    }
  }
</script>
<style>
  .bed_right .rating_num {
    height: 0.6rem;
    margin-top: 0.3rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .bed_right .rating_num .rating_num_left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .bed_right .rating_num .rating_num_left .rating_feeNo {
    font-size: .4rem;
    color: #ff6000;
  }
  .bed_right .rating_num .rating_num_left .rating_age {
    margin: 0 .2rem;
  }
  .bed_right .rating_num .rating_num_left .rating_inDate {
    color: #333;margin: 0 .2rem;
  }
  .bed_right .fee_distance {
    margin-top: .4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: .5rem;
    color: #333;
  }
  .bed_right .fee_distance .distance {
    background-color: #3aa373;
    color: #fff;
    padding: 0 .2rem;
    font-size:.5rem;
    -webkit-transform: scale(.8);
    transform: scale(.8);
    border: 1px solid #42a873;
    border-radius: .15rem;
  }
  .bed_right .fee_distance .fee {
    font-size: .5rem;
    color: #666;
  }
  .loader_more{
    font-size:.6rem;
    line-height:3;
    text-align: center;
    color: #999;
  }
  .empty_data{
    font-size:.5rem;
    color:#666;
    text-align: center;
    line-height: 2rem;
  }
</style>
