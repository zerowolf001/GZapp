<template>
    <div id="im_yz">
      <head-top head-title="医嘱任务" go-back='true'></head-top>
      <div class="im_yz">
        <section class="tab_title">
          <span :class="{choosed: categoryType === 1}" @click="categoryType = 1">待执行</span>
          <span :class="{choosed: categoryType === 2}" @click="categoryType = 2">已执行</span>
        </section>
        <section v-if="categoryType === 1">
          <div class="dbyz">
            <ul>
              <li v-for="item in YZDataArr" v-if="item.dealFlag == 0" :key="item.xh">
                <div class="hr_detail">
                  <div class="hr_title">
                    <p>{{item.bedNum}} {{item.type}}</p>
                    <span>{{item.createTime | framDate}}</span>
                  </div>
                  <div class="yz_hr_detail">
                    {{item.name}}{{item.total}}{{item.priceunit}} {{item.status}}
                  </div>
                  <div class="yz_click">
                      <router-link :to="{path:'yzdetail',query:{id:item.xh}}">查看详情</router-link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section v-if="categoryType === 2">
          <div class="dbyz">
            <ul>
              <router-link v-for="item in YZDataArr" v-if="item.dealFlag == 1" :to="{path:'yzyDetail',query:{id:item.xh}}" :key="item.xh" tag="li">
                <div class="hr_detail">
                  <div class="hr_title">
                    <p>{{item.bedNum}} {{item.type}}</p>
                    <span>{{item.createTime | framDate}}</span>
                  </div>
                  <div class="yz_hr_detail">
                    {{item.name}} {{item.total}}{{item.priceunit}} {{item.status}}
                  </div>
                  <div class="yz_click">
                    <span>执行人:{{item.handleUser}}/{{item.time | framDate}}</span>
                  </div>
                </div>
              </router-link>
            </ul>
          </div>
        </section>
      </div>
    </div>
</template>
<script>
    import headTop from '../components/head'
    import {imYZData} from '../service/getData'

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
                this.YZDataArr = await imYZData(this.StationID,this.dnName);
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
    height: 1.8rem;
    margin:.5rem 0;
    span {
      height: 1.8rem;
      width: 33.333%;
      text-align: center;
      line-height: 2rem;
      font-size: .6rem;
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
        font-size:.65rem;
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
          font-size: .7rem;
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
        padding:0 .5rem;
        font-size: .65rem;
        line-height:1.2rem;
        color:rgb(191,190,192);
      }
      .yz_click {
        background-color: #fff;
        padding:0 .5rem;
        height:1.5rem;
          span {
              font-size: .6rem;
              color:#aeaeae;
          }
        a {
          color:#fff;
          background-color: $blue;
          font-size: .6rem;
          padding:.2rem .3rem;
          border-radius: .4rem;
          float:right;
        }
      }
    }
  }
</style>
