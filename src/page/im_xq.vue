<template>
  <div id="im_xq">
    <head-top head-title="病患需求" go-back='true'></head-top>
    <div class="im_xq" v-if="XQDataArr">
      <section class="tab_title">
        <span :class="{choosed: categoryType === 1}" @click="categoryType = 1">医护需求</span>
        <span :class="{choosed: categoryType === 2}" @click="categoryType = 2">一般需求</span>
        <span :class="{choosed: categoryType === 3}" @click="categoryType = 3">其他需求</span>
      </section>
      <section v-if="categoryType === 1">
        <div class="dbxq">
          <ul>
            <li v-for="item in XQDataArr" v-if="item.Type == 1">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td rowspan="2" align="center" valign="middle" class="tx_img"><img src="../assets/icon/woman.png" alt=""></td>
                  <td width="18%">{{item.BedNum}}床</td>
                  <td>{{item.pName}}</td>
                  <td class="datm">{{item.dateTime | framDate}} {{item.insertTime}}</td>
                </tr>
                <tr>
                  <td colspan="2" width="45%" class="des">{{item.Description}}</td>
                  <td class="clxq"><router-link :to="{path:'xqdetail',query:{id:item.xh}}">处理需求</router-link></td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
      </section>
      <section v-if="categoryType === 2">
        <div class="dbxq">
          <ul>
            <li v-for="item in XQDataArr"  v-if="item.Type == 2">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td rowspan="2" align="center" valign="middle" class="tx_img"><img src="../assets/icon/woman.png" alt=""></td>
                  <td width="18%">{{item.BedNum}}床</td>
                  <td>{{item.pName}}</td>
                  <td class="datm">{{item.dateTime | framDate}} {{item.insertTime}}</td>
                </tr>
                <tr>
                  <td colspan="2" width="45%" class="des">{{item.Description}}</td>
                  <td class="clxq"><router-link :to="{path:'xqdetail',query:{id:item.xh}}">处理需求</router-link></td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
      </section>
      <section v-if="categoryType === 3">
        <div class="dbxq">
          <ul>
            <li v-for="item in XQDataArr" v-if="item.Type == 3">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td rowspan="2" align="center" valign="middle" class="tx_img"><img src="../assets/icon/woman.png" alt=""></td>
                  <td width="18%">{{item.BedNum}}床</td>
                  <td>{{item.pName}}</td>
                  <td class="datm">{{item.dateTime | framDate}} {{item.insertTime}}</td>
                </tr>
                <tr>
                  <td colspan="2" width="45%" class="des">{{item.Description}}</td>
                  <td class="clxq"><router-link :to="{path:'xqdetail',query:{id:item.xh}}">处理需求</router-link></td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import headTop from '../components/head'
  import {imXQData} from '../service/getData'

  export default {
    data() {
      return {
        categoryType: 1,
        StationID: '0397',
        toggled: false,
        XQDataArr: [],
      }
    },
    mounted(){
      this.initData();
    },
    components:{
      headTop,
    },
    filters:{
      framDate:v =>v.substring(5,10)
    },
    methods:{
      async initData() {
        this.XQDataArr = await imXQData(this.StationID);
      }
    }
  }
</script>
<style lang="scss" scoped>
  $blue:#47a8f0;
  teble td {
    border-collapse:collapse;
    padding:0;
    margin:0;
  }
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
  .im_xq {
    margin-top:1.95rem;
    li {
      display: flex;
      background:#fff;
      margin-bottom:.5rem;
      td{
        height:.8rem;
        line-height: .4rem;
        font-size:.6rem;
        &.tx_img{
          img {
            width:2rem;
            height:2rem;
            background:#ddd;
            margin:.2rem;
          }
         }
        &.datm {
          font-size: .55rem;
          color:#999;
         }
        &.des {
          font-size:.65rem;
          color:red;
         }
         &.clxq{
          text-align: right;
          padding-right: .5rem;
          a {
            display: inline-block;
            background-color: $blue;
            padding:.1rem .3rem;
            border-radius:.3rem;
            color:#fff;
            line-height: .8rem;
            width: 3rem;
          }
          }

      }
    }

  }
</style>
