<template>
  <div id="profile">
    <head-top go-back='true'></head-top>
    <section>
      <div class="profile">
        <span class="profile_img">
          <img v-if="userData.photo" :src="userData.photo">
          <img v-else src="../../assets/icon/woman.png">
        </span>
        <div class="profile_txt">
          <p class="nurse_name">{{userData.Name}}</p>
          <p class="nurse_zc" v-if="userData.stationName">{{userData.stationName}}-{{userData.Title}}</p>
          <p class="nurse_zc" v-else>{{userData.divisionName}}-{{userData.Title}}</p>
        </div>
      </div>
      <div class="index_msge" v-if="profileData">
        <a>
          <p class="msg_db">{{profileData.adviceCount}}项</p>
          <p>今日医嘱</p>
        </a>
        <a href="javascript:;">
          <p class="msg_db">{{profileData.requestCount}}项</p>
          <p>今日需求</p>
        </a>
        <a href="javascript:;">
          <p class="msg_db">{{profileData.satisfieCount}}分</p>
          <p>满意度评分</p>
        </a>
      </div>
    </section>
    <ul class="profile_list">
      <li>
        <aside>
          <img src="../../assets/icon/me_1.png" alt="">
        </aside>
        <p>待办医嘱</p>
        <span class="jt">
          <svg fill="#ddd" viewBox="0 0 1024 1024" width="100%" height="100%">
            <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path>
          </svg>
        </span>
      </li>
      <li>
        <aside>
          <img src="../../assets/icon/me_2.png" alt="">
        </aside>
        <p>待处理需求</p>
        <span class="jt">
          <svg fill="#ddd" viewBox="0 0 1024 1024" width="100%" height="100%">
            <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path>
          </svg>
        </span>
      </li>
      <router-link to="/mydate" tag="li">
        <aside>
          <img src="../../assets/icon/me_3.png" alt="">
        </aside>
        <p>我的排班</p>
        <span class="jt">
          <svg fill="#ddd" viewBox="0 0 1024 1024" width="100%" height="100%">
            <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path>
          </svg>
        </span>
      </router-link>
      <router-link to="/csr" tag="li">
        <aside>
          <svg fill="#16bf66" viewBox="0 0 40 40" id="service" width="100%" height="100%">
            <path id="service_XMLID_6_" d="M32.2 9.5c-.2-.7-.1-.7-.4-.9-1.7-1.2-5.3.2-6.7 1.9-.8-3.8-3.8-6.1-4.7-5.9-.9-.2-4 2.1-4.8 5.9-1.3-1.7-5-3.1-6.7-1.9-.1.1-.5.6-.5.7C5.4 20.7 15 24.6 19 25.7v8.7c0 .7.3 1.2 1 1.2s1-.5 1-1.2v-8.6c4-1 14.2-4.8 11.2-16.3z"></path>
            <path id="service_XMLID_7_" d="M6 25c-.9 0-1.6.7-1.6 1.5.1.8.7 1.5 1.6 1.5 3.1 0 6.5 1.5 8.5 3.7.3.3.7.6 1.1.6.4 0 .7-.1 1-.4.6-.6.6-1.6.1-2.3C14.1 26.8 10 25 6 25z"></path>
            <path id="service_XMLID_8_" d="M34.6 25c-4 0-8.1 1.9-10.7 4.6-.6.6-.5 1.6.1 2.2.3.3.7.4 1 .4.4 0 .8-.3 1.1-.6 2-2.1 5.3-3.7 8.4-3.7h.1c.8 0 1.5-.7 1.5-1.5 0-.7-.7-1.4-1.5-1.4z"></path>
          </svg>
        </aside>
        <p>我的满意度评分</p>
        <span class="jt">
          <svg fill="#ddd" viewBox="0 0 1024 1024" width="100%" height="100%">
            <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path>
          </svg>
        </span>
      </router-link>
    </ul>
    <ul class="profile_list">
      <router-link to="/faq" tag="li">
        <aside>
          <img src="../../assets/icon/me_5.png" alt="">
        </aside>
        <p>常见问题</p>
        <span class="jt">
          <svg fill="#ddd" viewBox="0 0 1024 1024" width="100%" height="100%">
            <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path>
          </svg>
        </span>
      </router-link>
      <li>
        <aside>
          <img src="../../assets/icon/me_6.png" alt="">
        </aside>
        <p>设置</p>
        <span class="jt">
          <svg fill="#ddd" viewBox="0 0 1024 1024" width="100%" height="100%">
            <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path>
          </svg>
        </span>
      </li>

    </ul>
    <foot-guide></foot-guide>
  </div>
</template>
<script>
  import headTop from '../../components/head'
  import footGuide from '../../components/footGuide'
  import {me,user} from '../../service/getData'

  export default {
    data() {
      return {
          dnName:'001035',
          profileData:'',
          userData:'',
      }
    },
    components:{
      headTop,
      footGuide,
    },
      mounted(){
          this.initData();
      },
      methods: {
          async initData () {
              this.profileData = await me(this.dnName);
              this.userData = await user(this.dnName);
          }
      },
  }
</script>
<style lang="scss" scoped>
  .profile {
    /*background: linear-gradient(to right, #36db84 , #0eb27b);*/
    background-color: #47a7f0;
    padding: 1rem 0;
    text-align: center;
    margin-top:1rem;
  }
  .profile .profile_img img {
    width: 2.4rem;
    height: 2.7rem;
    display: inline-block;
    vertical-align: middle;
  }
  .profile .profile_txt p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:#fff;
  }
  .profile .profile_txt p.nurse_name {
    font-size: .8rem;
  }
  .profile .profile_txt p.nurse_zc {
    font-size: .6rem;
  }
  .index_msge {
    margin-top:1rem;
    display: table;
    width: 100%;
    border-bottom: 1px solid #eee;
    background-color: #fff;
  }
  .index_msge a:not(:last-child) {
    border-right: 1px solid #eee;
  }
  .index_msge a {
    display: table-cell;
    width: 25%;
    vertical-align: middle;
    text-align: center;
    padding:.35rem 0;
  }
  .index_msge a>p.msg_db {
    padding-top: .4rem;
    font-size: .8rem;
    line-height: 1.1rem;
    font-weight: 500;
    color:#fb6a64;
  }
  .index_msge a>p {
    font-size: .6rem;
    line-height: 1rem;
    font-weight: 500;
    color: #999;
  }
  .profile_list {
    margin-top: .7rem;
    border-top: 1px solid #eee;
    line-height: .65rem;
    background: #fff;
  }
  .profile_list li {
    font-size: .6rem;
    color: #333;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .7rem;
  }
  .profile_list aside {
    margin-left: -.3rem;
    margin-right: .3rem;
  }
  .profile_list aside>svg {
    width: .8rem;
    height: .8rem;
  }
  .profile_list aside>img {
    width: 1rem;
    height: 1rem;
  }
  .profile_list li>span.jt {
    margin-right:.8rem;
  }
  .profile_list li>span.jt svg {
    width: 1rem;
    height: 1rem;
  }
  .profile_list li p {
    color:#666;
    font-size: .6rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    padding: .65rem .3rem .65rem 0;
  }
  .profile_list li {
    border-bottom:1px solid #eee;
  }
  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
</style>
