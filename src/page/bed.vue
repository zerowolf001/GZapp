<template>
  <div>
    <div class="bedPage">
      <head-top head-title="患者详情" go-back='true'></head-top>
      <section class="bed_name">
        <div class="profileImage">
          <img v-if="bedDetailData.Gender == 0" src="../assets/icon/woman.png" >
          <img v-else src="../assets/icon/man.png" >
          <div class="user-info">
            <header>
              <h4 class="bed_title ellipsis" :class="'lv_'+ bedDetailData.NursingLevel">{{bedDetailData.Name}}</h4>
              <ul>
                <li>住院号:{{bedDetailData.FeeNo}}</li>
              </ul>
            </header>
            <h5 class="bed_distance">
              <p class="bed_num">{{bedDetailData.BedNum}}号床</p>
              <p>{{bedDetailData.distance}}</p> <!--简介-->
            </h5>
          </div>
        </div>
      </section>
      <section class="tab_title">
        <span :class="{choosed: categoryType === 1}" @click="categoryType = 1">基本信息</span>
        <span :class="{choosed: categoryType === 2}" @click="categoryType = 2">特殊标记</span>
        <span :class="{choosed: categoryType === 3}" @click="categoryType = 3">诊断内容</span>
      </section>
      <transition name="router-fade">
        <section v-if="categoryType === 1">
          <dl class="bedBest_container">
              <dd class="bedBest_list">
                <dl>
                  <dd>性别：<em v-if="bedDetailData.gender == 1">女</em>
                    <em v-else>男</em>
                  </dd>
                  <dd>年龄：<em>{{bedDetailData.age}}岁</em></dd>
                  <dd>电话：<em>{{bedDetailData.ContactNo}}</em></dd>
                  <dd>住址：<em>{{bedDetailData.Address}}</em></dd>
                  <dd>主治医生：<em>{{bedDetailData.Doctor}}</em></dd>
                  <dd>责任护士：<em>{{bedDetailData.ResNurse}}</em></dd>
                  <dd>住院日期：<em>{{bedDetailData.ChkInAt}}</em></dd>
                  <dd>住院天数： <em>{{bedDetailData.DOH}}</em></dd>
                  <dd>缴费方式：<em>{{bedDetailData.Insurance}}</em></dd>
                </dl>
              </dd>
              <dd class="bedBest_list">
                <dl>
                  <dd>已完成手术：</dd>
                  <dd>手术日期：</dd>
                  <dd>手术状态：</dd>
                  <dd>手术内容</dd>
                </dl>
              </dd>
            <dd class="bedBest_list">
              <dl>
                <dd>危急值：<em>{{bedDetailData.Critically}}</em></dd>
                <dd>导管意外评估：<em>{{bedDetailData.CatheterOff}}</em></dd>
                <dd>跌倒坠床评估：<em>{{bedDetailData.FallAssess}}</em></dd>
                <dd>患者自理能力：<em>{{bedDetailData.SelfCare}}</em></dd>
                <dd>分娩情况：<em v-if="bedDetailData.Delivery == 0"></em><em v-else-if="bedDetailData.Delivery == 1">男婴</em><em v-else-if="bedDetailData.Delivery == 2">女婴</em><em v-else-if="bedDetailData.Delivery == 3">双胞胎</em><em v-else>三胞胎及以上</em></dd>
                <dd>护理级别：<em v-if="bedDetailData.NursingLevel == 1">一级护理</em><em v-else-if="bedDetailData.NursingLevel == 2">二级护理</em><em v-else-if="bedDetailData.NursingLevel == 3">三级护理</em><em v-else="bedDetailData.NursingLevel == 4">特级护理</em></dd>
              </dl>
            </dd>
              <dd class="bedBest_list">
                <dl>
                  <dd>费用：<em>{{bedDetailData.Fee}}</em></dd>
                  <dd>明日预出：<em v-if="bedDetailData.dt == 1">是</em><em v-else>否</em></dd>
                </dl>
              </dd>
          </dl>
        </section>
      </transition>
      <transition name="router-fade">
        <section v-if="categoryType === 2">
          <dl class="bedTag_container">
            <dd class="bed_Switch">
              <dl>
                <dd>病重 <em><toggle-button :labels="true" :value="bedDetailData.detailbz" /></em></dd>
                <dd>病危 <em><toggle-button :labels="true" :value="bedDetailData.detailbw" /></em></dd>
                <dd>绝对卧床休息/床上活动 <em><toggle-button :labels="true" :value="bedDetailData.detailwc" /></em></dd>
              </dl>
            </dd>
            <dd class="bed_Switch">
              <dl>
                <dd>DVT高风险 <em><toggle-button :labels="true" :value="bedDetailData.detaildvt" /></em></dd>
                <dd>特殊用药/抗凝治疗 <em><toggle-button :labels="true" /></em></dd>
                <dd>特殊饮食 <em><toggle-button :labels="true" :value="bedDetailData.detailtys" /></em></dd>
                <dd>禁食 <em><toggle-button :labels="true" :value="bedDetailData.detailjs" /></em></dd>
              </dl>
            </dd>
            <dd class="bed_Switch">
              <dl>
                <dd>预防压疮 <em><toggle-button :labels="true" :value="bedDetailData.detailyc"/></em></dd>
                <dd>防导管滑脱 <em><toggle-button :labels="true" :value="bedDetailData.detaildt"/></em></dd>
                <dd>小心坠床/小心跌倒 <em><toggle-button :labels="true" :value="bedDetailData.detaildd"/></em></dd>
                <dd>过敏 <em><toggle-button :labels="true" :value="bedDetailData.detailgm"/></em></dd>
                <dd>隔离 <em><toggle-button :labels="true" :value="bedDetailData.detailgl"/></em></dd>
              </dl>
            </dd>
          </dl>
        </section>
      </transition>
      <transition name="router-fade">
        <section v-if="categoryType === 3">
          <section class="bedClinic_container">
            {{bedDetailData.bedcontainer}}
          </section>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
  import {bedDetails} from '../service/getData'
  import headTop from '../components/head'
  import ToggleButton from '../components/switch.vue'

  export default {
    data(){
      return {
        categoryType: 1,
        bedid: null,
        bedDetailData: null,
        toggled: false,
      }
    },
    created(){
      this.bedid = this.$route.query.id;
    },
    mounted(){
      this.initData();
    },
    components:{
      headTop,
      ToggleButton
    },
    computed: {

    },
    methods: {
      //初始化时获取基本数据
      async initData() {
        this.bedDetailData = await bedDetails(this.bedid)
      },
    },
  }
</script>
<style>
  .bed_name {
    background:#fff;
    padding-top: 1.95rem;
  }
  .bed_name .profileImage {
    display: block;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    box-align: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding:.6rem;
  }
  .bed_name .profileImage img {
    background:#eee;
    display: inline-block;
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 50%;
    vertical-align: middle;
  }
  .bed_name .profileImage .user-info {
    padding-left: .4rem;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
  }
  .bed_name .profileImage .user-info header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .bed_name .profileImage .user-info .bed_title {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0;
    width: 4.5rem;
    color: #333;
    padding-top: .01rem;
    font-size: .65rem;
    line-height: 1rem;
    font-weight: 700;
  }
  .bed_name .profileImage .user-info header ul {
    display: flex;
  }
  .bed_name .profileImage .user-info header ul li {
    padding: 0 .2rem;
    font-size: .55rem;
  }
  .bed_name .profileImage .user-info header ul li:last-child {
    color:#3aa373;
    font-weight: 600;
  }
  .bed_name .user-info .bed_distance {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size:.55rem;
    line-height:.75rem;
    margin-top:.2rem;
  }
  .bed_name .user-info .bed_distance p {
    color:#777;
    line-height: .8rem;
  }
  .bed_name .user-info .bed_distance p.bed_num {
    color:#333;
    line-height: .8rem;
  }
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
    height: 2rem;
    border-top:1px solid #e7eaf1;
    border-bottom: 1px solid #e7eaf1;
    box-shadow: 0 1px 3px 0 rgba(0,37,55,.05);
    margin-bottom: 1rem;
  }
  .tab_title span {
    border-right:1px solid #eee;
    height: 2rem;
    width: 33.333%;
    text-align: center;
    line-height: 2rem;
    font-size: .6rem;
  }
  .tab_title span.choosed {
    border-bottom:1px solid #47a8f0;
    color: #47a8f0;
  }
  .tab_title span:last-child {
    border-right:none;
  }
  .bedClinic_container {
    margin:1rem 0;
    padding:.5rem;
    background-color:#fff;
    line-height:25px;
    font-size:14px;
    min-height:18rem;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
  }
  dl.bedBest_container,dl.bedTag_container {
    margin-bottom:.1rem;
  }
  dl.bedBest_container .bedBest_list,dl.bedTag_container .bed_Switch {
    margin-bottom:1rem;
    background-color: #fff;
  }
  dl.bedBest_container .bedBest_list dl,.bedTag_container .bed_Switch dl {
    border-top:1px solid #eee;
  }
  dl.bedBest_container .bedBest_list dd,.bedTag_container .bed_Switch dd {
    position:relative;
    border-bottom:1px solid #eee;
    font-size:.6rem;
    padding:.4rem 1rem .4rem .5rem;
  }
  dl.bedBest_container .bedBest_list dd em,.bedTag_container .bed_Switch dd em {
    float: right;
    font-size: .55rem;
    color: #999;
    font-style: normal;
    font-weight: 400;
  }
  /*dl.bedBest_container .bedBest_list dd:after {*/
    /*position: absolute;*/
    /*right: .5rem;*/
    /*top: 50%;*/
    /*display: inline-block;*/
    /*content: "";*/
    /*width: .3rem;*/
    /*height: .3rem;*/
    /*border: solid #999;*/
    /*border-width: 1px 1px 0 0;*/
    /*-webkit-transform: translate(0, -50%) rotate(45deg);*/
    /*transform: translate(0, -50%) rotate(45deg);*/
  /*}*/
</style>
