<template>
  <div id="im_yz">
    <head-top head-title="待办医嘱" go-back='true'></head-top>
    <div class="im_yz">
      <section>
        <div class="dbyz">
          <ul>
            <li v-for="item in YZDataArr" :key="item.xh">
              <div class="hr_detail">
                <div class="hr_title">
                  <p>{{item.bedNum}}{{item.type}}</p>
                  <span>{{item.time | framDate}}</span>
                </div>
                <div class="yz_hr_detail">
                  {{item.name}}{{item.total}}{{item.priceunit}} {{item.status}}
                </div>
                <div class="yz_click">
                  <router-link :to="{path:'myyzdetail',query:{id:item.xh}}">查看详情></router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import headTop from '../../components/head'
  import {stayAdvice} from '../../service/getData'

  export default {
    data() {
      return {
        categoryType: 1,
        StationID: '0397',
        dnName: '001035',
        YZDataArr: {},
      }
    },
    mounted(){
      this.initData();
    },
    components:{
      headTop,
    },
    filters:{
      framDate:str =>str?str.substring(5,16):''
    },
    methods:{
      async initData() {
        this.YZDataArr = await stayAdvice(this.dnName);
      }
    }
  }
</script>
<style lang="scss" scoped>
  $blue:#47a8f0;
  .tab_title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
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
     border-bottom:1px solid $blue;
     color: $blue;
   }
  }
  }
  .im_yz {
    margin-top:1.95rem;
  }
  .dbyz {
  li {
    margin-bottom:3px;
  .hr_time {
    text-align: center;
    color:#aeaeae;
    font-size:.55rem;
    height:1.2rem;
  }
  .hr_detail {
    background-color:#fff;
  }
  .hr_detail .hr_title {
    display: flex;
    padding:.2rem;
    line-height: 1rem;
    height:1.6rem;
    border-bottom: 1px solid #f3f3f3;
  p {
    font-size: .65rem;
    float: left;
    width: 79%;
    padding-left:.5rem;
  }
  span {
    float: right;
    font-size: .5rem;
    color:rgb(191,190,192);
  }
  }
  .yz_hr_detail{
    padding:.3rem .5rem;
    color:rgb(191,190,192);
  }
  .yz_click {
    background-color: #fff;
    padding:0 .5rem;
    height:1.2rem;
  span {
    color:#aeaeae;
  }
  a {
    color:#fff;
    background-color: $blue;
    padding:.05rem .2rem;
    border-radius: .2rem;
    float:right;
  }
  }
  }
  }
</style>
