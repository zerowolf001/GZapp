<template>
  <div id="docadvice_yzrw">
    <head-top head-title="消息" go-back='true'></head-top>
    <div class="im_yz">
      <section>
        <div class="dbyz">
          <ul>
            <li v-for="item in msgDataArr">
              <div class="hr_detail" v-if="item.type == 1">
                <div class="hr_title">
                  <aside>
                    <img src="../assets/icon/phico05.png" />
                  </aside>
                  <p>医护需求消息</p>
                  <span>{{item.insertTime}}</span>
                </div>
                <div class="yz_hr_detail">{{item.bedNum}}床 {{item.name}} 需要{{item.Description}}</div>
                <div class="yz_click"><router-link to="imxq">立即查看</router-link></div>
              </div>
              <div class="hr_detail" v-if="item.type == 2">
                <div class="hr_title">
                  <aside>
                    <img src="../assets/icon/phico07.png" />
                  </aside>
                  <p>系统危急值预警</p>
                  <span>{{item.insertTime}}</span>
                </div>
                <div class="yz_hr_detail">{{item.bedNum}}床 {{item.name}} {{item.itemName}}值：{{item.result}} <span style="color:red">{{item.resultFlag}}</span> 参考范围: <span style="color:green">{{item.min}}~{{item.max}}</span></div>
              </div>
              <div class="hr_detail" v-if="item.type == 3">
                <div class="hr_title">
                  <aside>
                    <img src="../assets/icon/phico06.png" />
                  </aside>
                  <p>系统消息</p>
                  <span>{{item.insertTime}}</span>
                </div>
                <div class="yz_hr_detail">{{item.title}}</div>
                <div class="yz_click"><router-link :to="{path:'showmsg',query:{id:item.xh}}">立即查看</router-link></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import headTop from '../components/head'
  import footGuide from '../components/footGuide'
  import {getDemand} from '../service/getData'

  export default {
    data() {
      return {
        msgDataArr:[],
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
        this.msgDataArr = await getDemand(this.StationID);
      },
    },

  }
</script>
<style lang="scss" scoped>
  .im_yz{margin-bottom: 2.2rem;}
  header .title_text{padding:.2rem .4rem;border:1px solid #fff;}
  header .title_text:first-child{border-radius: .2rem 0 0 .2rem;height:1.5rem;}
  header .title_text:last-child{border-radius:0 .2rem .2rem 0;height:1.5rem;border-left:0;}
  header .title_text.choosed{background:#fff;color:#47a8f0;}
  .title_head{}
  #docadvice_yzrw{margin-top: 1.95rem;}
  .message {
    margin-top:2.5rem;
    width: 100%;
    margin-bottom:2rem;
  }
  .message ul li {
    display: flex;
    margin-bottom:.5rem;
    padding:.5rem;
    background-color:#fff;
  }
  .message ul li td.ico {
    width:20%;
  }
  .message ul li td.db_title {
    height:1.2rem;
    font-size: .65rem;
  }
  .message ul li td.db_detail {
    color:#a3a3a3;
    font-size:.55rem;
  }
  .message ul li td.db_time {
    color: #a3a3a3;
    font-size:.58rem;
    text-align: right;
  }
  .message ul li td.ico img {
    width:2.25rem;
    height:2.25rem;
  }
  #head_top {
    position: fixed;
  }
  .title_head .title_text {
    color: #fff;
    font-size: 1.2em;
  }
  .dbyz li {
    border-bottom: .6rem solid #f9f9f9;
  }
  .dbyz li .hr_detail {
    background-color: #fff;
  }
  .dbyz li .hr_detail .hr_title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: .2rem;
    line-height: 1rem;
    height: 1.4rem;
    border-bottom: 1px solid #f3f3f3;
  }
  .dbyz li .hr_detail .hr_title p {
    font-size: .55rem;
    float: left;
    width: 69%;
    padding-left: .2rem;
    color:#aeaeae;
  }
  .dbyz li .hr_detail .hr_title span {
    float: right;
    font-size: .5rem;
    color: #bfbec0;
  }
  .dbyz li .yz_hr_detail {
    padding: .3rem .5rem;
    color: #666;
  }
  .dbyz li .yz_click {
    background-color: #fff;
  // padding: 0 .5rem;
    height: 1.2rem;
  }
  .dbyz li .yz_click a {
    color: #999;
    background-color: #f3f2f2;
    display:block;
    height: 1.2rem;
    line-height:1.2rem;text-align:center;font-size:.5rem;
  }
  .dbyz li .hr_detail .hr_title aside{padding-left:.3rem;}
  .dbyz li .hr_detail .hr_title aside img{width:1rem;height:1rem;}
</style>
