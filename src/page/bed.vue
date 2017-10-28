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
              <p v-if="bedDetailData.Gender==0" class="age">女/{{bedDetailData.age}}岁</p>
              <p class="age" v-else>男/{{bedDetailData.age}}岁</p>
              <p class="bli">病例号:{{bedDetailData.ChartNo}}</p>
            </header>
            <h5 class="bed_distance">
              <p>{{bedDetailData.UID}}</p>
              <p>{{bedDetailData.BedNum}}号床</p>
            </h5>
            <p>{{bedDetailData.ChkInAt}} 入院</p>
          </div>
        </div>
        <div class="alink_r">
          <router-link :to="{path: 'bedAdv', query:{id}}">查看医嘱</router-link>
          <router-link :to="{path: 'medication', query:{id}}">用药详情</router-link>
        </div>
      </section>
      <section class="tab_title">
        <span :class="{choosed: categoryType === 1}" @click="categoryType = 1">基本信息</span>
        <span :class="{choosed: categoryType === 2}" @click="categoryType = 2">特殊标记</span>
        <span :class="{choosed: categoryType === 3}" @click="categoryType = 3">检查项目</span>
      </section>
      <transition name="router-fade">
        <section v-if="categoryType === 1">
          <dl class="bedBest_container">
            <dd class="bedBest_list">
              <dl>
                <dd>主治医生：<em>{{bedDetailData.Doctor}}</em></dd>
                <dd>责任护士：<em>{{bedDetailData.ResNurse}}</em></dd>
                <dd>住院天数： <em>{{bedDetailData.DOH}}</em></dd>
                <dd>缴费方式：<em>{{bedDetailData.Insurance}}</em></dd>
              </dl>
            </dd>
            <dd class="bedBest_list">
              <dl>
                <dd>护理级别：<em>{{bedDetailData.NursingLevel}}</em></dd>
                <dd>紧急联系人：<em>{{bedDetailData.Contact}}</em></dd>
                <dd>联络人电话：<em>{{bedDetailData.ContactNo}}</em></dd>
                <dd>今办明出：<em v-if="bedDetailData.WBD ==1">是</em><em v-else>否</em></dd>
                <dd>设备需求：<em v-if="bedDetailData.Equipment == 0">无</em><em v-else>用氧</em></dd>
                <dd>费用：<em>{{bedDetailData.Fee}}</em></dd>
              </dl>
            </dd>
            <dd class="bedBest_list">
              <dl>
                <dd>危急值：<em>{{bedDetailData.Critical}}</em></dd>
                <dd>导管评估：<em>{{bedDetailData.CatheterOff}}</em></dd>
                <dd>跌倒评估：<em>{{bedDetailData.FallAssess}}</em></dd>
                <dd>压疮评估：<em>{{bedDetailData.SoreAssess}}</em></dd>
                <dd>疾病严重度：<em>{{bedDetailData.DesSev}}</em></dd>
                <dd v-if="bedDetailData.Delivery != 0">分娩情况：
                  <em v-if="bedDetailData.Delivery == 1">男婴</em>
                  <em v-if="bedDetailData.Delivery == 2">女婴</em>
                  <em v-if="bedDetailData.Delivery == 3">双胞胎</em>
                  <em v-if="bedDetailData.Delivery == 4">三胞胎及以上</em>
                </dd>
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
                <dd>病重 <em>
                  <label v-if="bedDetailData.Critically == 1" class="v-switch toggled">
                    <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                    <div><span class="v-switch-label v-left">是</span></div>
                  </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label>
                </em>
                </dd>
                <dd>病危 <em>
                  <label v-if="bedDetailData.Critically == 2" class="v-switch toggled">
                    <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                    <div><span class="v-switch-label v-left">是</span></div>
                  </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label>
                </em></dd>
                <dd>绝对卧床休息/床上活动 <em>
                  <label v-if="bedDetailData.BedRest == 1" class="v-switch toggled">
                    <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                    <div><span class="v-switch-label v-left">是</span></div>
                  </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label>
                </em></dd>
                <dd>特殊疾病 <em>
                  <label v-if="bedDetailData.SDC == 1" class="v-switch toggled">
                    <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                    <div><span class="v-switch-label v-left">是</span></div>
                  </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label></em></dd>
              </dl>
            </dd>
            <dd class="bed_Switch">
              <dl>
                <dd>DVT高风险
                  <em>
                    <label v-if="bedDetailData.DVTRisk == 1" class="v-switch toggled">
                      <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                      <div><span class="v-switch-label v-left">是</span></div>
                    </label>
                    <label v-else class="v-switch">
                      <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                      <div><span class="v-switch-label v-right">否</span></div>
                    </label>
                  </em>
                </dd>
                <!--<dd>特殊饮食 <em><toggle-button v-if="bedDetailData.SpecialDiets == 1" :labels="true" :value="true" />-->
                <!--<toggle-button v-else :labels="true"/></em></dd>-->
                <dd>特殊饮食
                  <em>
                    <label v-if="bedDetailData.SpecialDiets == 1" class="v-switch toggled">
                      <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                      <div><span class="v-switch-label v-left">是</span></div>
                    </label>
                    <label v-else class="v-switch">
                      <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                      <div><span class="v-switch-label v-right">否</span></div>
                    </label>
                  </em>
                </dd>
                <dd>禁食 <em>
                  <label v-if="bedDetailData.Fasting == 1" class="v-switch toggled">
                    <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                    <div><span class="v-switch-label v-left">是</span></div>
                  </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label></em></dd>
                <dd>保护性约束 <em>
                  <label v-if="bedDetailData.Constraint == 1" class="v-switch toggled">
                    <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                    <div><span class="v-switch-label v-left">是</span></div>
                  </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label></em></dd>
                <dd>输血 <em>
                  <label v-if="bedDetailData.Transfuse == 1" class="v-switch toggled">
                    <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                    <div><span class="v-switch-label v-left">是</span></div>
                  </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label>
                </em></dd>
              </dl>
            </dd>
            <dd class="bed_Switch">
              <dl>
                <dd>跌倒/坠床高风险 <em>
                  <label v-if="bedDetailData.hrf == 1" class="v-switch toggled">
                    <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                    <div><span class="v-switch-label v-left">是</span></div>
                  </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label></em></dd>
                <dd>防导管滑脱 <em><label v-if="bedDetailData.CatheterOff == 1" class="v-switch toggled">
                  <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                  <div><span class="v-switch-label v-left">是</span></div>
                </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label></em></dd>
                <dd>压疮高风险 <em>
                  <label v-if="bedDetailData.SoreRisk == 1" class="v-switch toggled">
                    <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                    <div><span class="v-switch-label v-left">是</span></div>
                  </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label></em></dd>
                <dd>院内感染 <em>
                  <label v-if="bedDetailData.InfecInside == 1" class="v-switch toggled">
                    <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                    <div><span class="v-switch-label v-left">是</span></div>
                  </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label></em></dd>
                <dd>过敏 <em>
                  <label v-if="bedDetailData.Allergy == 1" class="v-switch toggled">
                    <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                    <div><span class="v-switch-label v-left">是</span></div>
                  </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label></em></dd>
                <dd>隔离 <em>
                  <label v-if="bedDetailData.Isolation == 1" class="v-switch toggled">
                    <span class="v-switch-core" style="background-color: rgb(117, 199, 145);"></span>
                    <div><span class="v-switch-label v-left">是</span></div>
                  </label>
                  <label v-else class="v-switch">
                    <span class="v-switch-core" style="background-color: rgb(191, 203, 217)"></span>
                    <div><span class="v-switch-label v-right">否</span></div>
                  </label></em></dd>
              </dl>
            </dd>
          </dl>
        </section>
      </transition>
      <transition name="router-fade">
        <section v-if="categoryType === 3">
          <section class="bedClinic_container">
            <dl>
              <dt>检验科</dt>
              <dd v-for="(item,index) in bedExmd" :key="item.feeNo" @click="show(index)" :class="[isShow==index ? 'active':'']">
              <dt>{{item.name}}</dt>
              <ul v-show="isShow == index">
                <router-link v-for="Dlist in item.ck" :to="{path: 'bedExamine', query:{feeNo: item.feeNo,Code:Dlist.checkCode,Date:Dlist.checkDate}}" :key="Dlist.xh" tag="li">
                  <em>检查时间：{{Dlist.checkDate}}</em>
                  <span>{{Dlist.status}}</span>
                </router-link>
              </ul>
              </dd>
            </dl>
          </section>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
  import {bedDetails,bedExmd} from '../service/getData'
  import headTop from '../components/head'
  import ToggleButton from '../components/switch.vue'

  export default {
    data(){
      return {
        categoryType: 1,
        id: null,
        bedDetailData: [],
        toggled: false,
        bedExmd:[],
        isShow:false,
      }
    },
    created(){
      this.id = this.$route.query.id;
    },
    mounted(){
      this.initData();
    },
    components:{
      headTop,
      ToggleButton
    },
    methods: {
      async initData() {
        this.bedDetailData = await bedDetails(this.id)
        this.bedExmd = await bedExmd(this.id)
      },
      show:function(cur){
        this.isShow = cur;
      }
    },
  }
</script>
<style lang="scss" scoped>
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
    padding:.6rem .6rem 0 .6rem;
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
    display: flex;
    align-items: center;
    .lv_1:before{
      font-size: .5rem;
      line-height: .65rem;
      color: #fff;
      font-weight: normal;
      background-color: #ff3fdb;
      padding: 0 .1rem;
      border-radius: .1rem;
      margin-right: .2rem;
      content: '\4E00\7EA7';
      text-align: center;
      white-space: nowrap;
    }
    .lv_2:before {
      font-size: .5rem;
      line-height: .65rem;
      color: #fff;
      font-weight: normal;
      background-color: #2d77ff;
      padding: 0 .1rem;
      border-radius: .1rem;
      margin-right: .2rem;
      content: '\4E8C\7EA7';
      text-align: center;
      white-space: nowrap;
    }
    .lv_3:before {
      font-size: .5rem;
      line-height: .65rem;
      color: #333;
      font-weight: normal;
      border:1px solid #eee;
      padding: 0 .1rem;
      border-radius: .1rem;
      margin-right: .2rem;
      content: '\4E09\7EA7';
      text-align: center;
      white-space: nowrap;
    }
    .lv_4:before {
      font-size: .5rem;
      line-height: .65rem;
      color: #fff;
      font-weight: normal;
      background-color:#000;
      padding: 0 .1rem;
      border-radius: .1rem;
      margin-right: .2rem;
      content: '\7279\7EA7';
      text-align: center;
      white-space: nowrap;
    }
    .lv_5:before {
      font-size: .5rem;
      line-height: .65rem;
      color: #fff;
      font-weight: normal;
      background-color:#666;
      padding: 0 .1rem;
      border-radius: .1rem;
      margin-right: .2rem;
      content: '\7279\75BE';
      text-align: center;
      white-space: nowrap;
    }
    .lv_6:before {
      font-size: .5rem;
      line-height: .65rem;
      color: #fff;
      background-color: #FFBA31;
      font-weight: normal;
      padding: 0 .1rem;
      border-radius: .1rem;
      margin-right: .2rem;
      content: '\91CD\75C7';
      text-align: center;
      white-space: nowrap;
    }
    .lv_7:before {
      font-size: .5rem;
      line-height: .65rem;
      color: #fff;
      font-weight: normal;
      background-color:orangered;
      padding: 0 .1rem;
      border-radius: .1rem;
      margin-right: .2rem;
      content: '\75C5\513F';
      text-align: center;
      white-space: nowrap;
    }
    .lv_8:before {
      font-size: .5rem;
      line-height: .65rem;
      color: #fff;
      font-weight: normal;
      background-color: orangered;
      padding: 0 .1rem;
      border-radius: .1rem;
      margin-right: .2rem;
      content: '\65B0\751F';
      text-align: center;
      white-space: nowrap;
    }
    .lv_9:before {
      font-size: .5rem;
      line-height: .65rem;
      color: #fff;
      font-weight: normal;
      background-color: orangered;
      padding: 0 .1rem;
      border-radius: .1rem;
      margin-right: .2rem;
      content: '\65B0\7279';
      text-align: center;
      white-space: nowrap;
    }
  }
  .bed_name .profileImage .user-info .bed_title {
    display: block;
    margin: 0;
    width: 3.5rem;
    color: #333;
    padding-top: .01rem;
    font-size: .65rem;
    line-height: 1rem;
    font-weight: 700;
  }
  .bed_name .profileImage .user-info header p{
    margin-top: 0;
    display: block;
    &.age {
      float:left;
      margin-bottom:-.1rem;
    }
    &.bli {
      font-size: .55rem;
      position: absolute;
      right:.7rem;
    }
  }
  .bed_name .user-info .bed_distance {
    display: flex;
    width: 100%;
    font-size:.55rem;
    line-height:.75rem;
    margin-top:.2rem;
  }
  .bed_name .profileImage .user-info p {
    margin-top:-.4rem;
  }
  .bed_name .user-info .bed_distance p:first-child {
    margin-top:0;
    width:70%;
  }
  .bed_name .user-info .bed_distance p:last-child {
    margin-top:0;
    color:#f0665a;
    line-height: 1.2rem;
    font-size:.65rem;
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
    background-color:#47a8f0;
    color: #fff;
  }
  .tab_title span:last-child {
    border-right:none;
  }
  .bedClinic_container {
    margin:-.5rem .3rem 0 .3rem;
    background-color:#fff;
    line-height:25px;
    padding:.5rem 0;
    font-size:14px;
    border-radius: .4rem;
  }
  .bedClinic_container dl dt {
    font-size: .7rem;
    padding:0 .5rem;
    height: 1rem;
    line-height: .7rem;
    border-bottom: 1px solid #e0e0e0;
  }
  .bedClinic_container dl dd dt {
    font-size:.6rem;
    padding:.2rem .8rem;
    height:1.35rem;
    line-height: 1rem;
    border:none;
    display: flex;
    position: relative;
  }
  .bedClinic_container dl dd.active dt:before{
    content: " ";
    border: .4rem solid #fff;
    border-left-width: .25rem;
    border-right-width: .25rem;
    border-color: #47a7f0 transparent transparent transparent;
    top: .525rem;
    left: .2rem;
    position: absolute;
  }
  .bedClinic_container dl dd dt:before{
    content: " ";
    border: .4rem solid #fff;
    border-top-width: .25rem;
    border-bottom-width: .25rem;
    border-color: transparent transparent transparent #47a7f0;
    top: .525rem;
    left: .2rem;
    position: absolute;
  }
  .bedClinic_container dl dd ul li {
    margin:0 .2rem;
    height:1.6rem;
    line-height: 1.5rem;
    background-color: #fafafa;
    padding:0 .4rem;
    border-bottom:1px solid #e5e5e5;
    position: relative;
    font-size:.5rem;
  }
  .bedClinic_container dl dd ul li:after {
    content: ' ';
    display: block;
    position: absolute;
    right: .3rem;
    top: .4rem;
    width: .5rem;
    height: .5rem;
    border-top: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    -moz-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
  }
  .bedClinic_container dl dd ul li em {
    font-style: normal;
    float: left;
  }
  .bedClinic_container dl dd ul li span {
    float: right;
    margin-right: .5rem;
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
  .alink_r {
    display: flex;
    clear: both;
    padding:0 0 .5rem 60%;
  }
  .alink_r a {
    float: right;
    display: inline-block;
    background-color: #47a7f0;
    color:#fff;
    font-size:.5rem;
    line-height: .7rem;
    padding:.1rem .3rem;
    margin-left:.35rem;
    border-radius:.25rem;
  }
  .v-switch {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    user-select: none;
    font-size: 12px;
    cursor: pointer;
  }
  .v-switch .v-switch-label, .v-switch {
    line-height: 22px;
    height: 22px;
  }
  .v-switch .v-switch-input {
    display: none;
  }
  .v-switch .v-switch-label {
    position: absolute;
    top: 0;
    font-weight: 600;
    color: white;
  }
  .v-switch .v-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;
    outline: 0;
    box-sizing: border-box;
    transition: border-color .3s, background-color .3s;
    user-select: none;
  }

  .v-switch .v-switch-core:before {
    display: block;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 20;
    transform: translate(3px, 3px);
    transition: transform .3s;
    border-radius: 100%;
    background-color: #fff;
    content: '';
    width: 16px;
    height: 16px;
  }
  .v-switch .v-switch-core:before {
    width: calc(22px - 6px);
    height: calc(22px - 6px);
  }
  .v-switch .v-switch-label.v-right {
    right: 15px;
  }
  .v-switch .v-switch-label.v-left {
    left: 15px;
  }
  .v-switch.toggled .v-switch-core:before {
    transform: translate(30px,3px);
  }
  .v-switch .v-switch-core.toggled:before {
    transform: translate(30px, 3px);
  }
  .v-switch .v-switch-core.disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.6;
  }
  .v-switch .v-switch-label {
    line-height: 22px;
    height: 22px;
  }

  .v-switch .v-switch-core {
    border-radius: 999px;
    width: 50px;
    height: 22px;
  }
  .v-switch.v-switch-core:before {
    width: calc(22px - 6px);
    height: calc(22px - 6px);
  }
</style>
