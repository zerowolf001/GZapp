<template>
  <div id="im">
    <head-top head-title="需求通知" go-back='true'></head-top>
    <div class="message">
      <ul>
        <router-link>
          <div class="avatar">
            <span>{{item.Name}}床</span>
          </div>
          <div class="om">
            <div class="om_name">
              <span class="name">{{item.BedNum}}</span>
              <span class="time">{{item.insertTime}}</span>
            </div>
            <div class="om_msg">
              <span class="msg_con">{{item.Description}}</span>
              <span class="msg_del">
                <svg x="0px" y="0px" viewBox="0 0 12 10" focusable="false">
                  <polygon class="a-s-fa-Ha-pa" points="10,1.01 8.99,0 5,3.99 1.01,0 0,1.01 3.99,5 0,8.99 1.01,10 5,6.01 8.99,10 10,8.99 6.01,5 "></polygon>
                </svg>
              </span>
            </div>
          </div>
        </router-link>
        <!--<li>
          <div class="avatar">
            <span>06床</span>
          </div>
          <div class="om">
            <div class="om_name">
              <span class="name">颜瑛</span>
              <span class="time">58分钟前</span>
            </div>
            <div class="om_msg">
              <span class="msg_con">更换药水</span>
              <span class="msg_del">
                <svg viewBox="0 0 950 950" focusable="false">
                  <path d="M913.984 131.072 367.808 677.248 110.016 419.52 0 529.536 363.392 892.928 373.888 882.496 373.952 882.432 1024 241.088Z" p-id="1874"></path>
                </svg>
                  已处理
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="avatar">
            <span>06床</span>
          </div>
          <div class="om">
            <div class="om_name">
              <span class="name">颜瑛</span>
              <span class="time">57分钟前</span>
            </div>
            <div class="om_msg">
              <span class="msg_con">更换药水</span>
              <span class="msg_del">
                <svg viewBox="0 0 19 19" focusable="false">
                  <path d="M10,1c-5,0-9,4-9,9H-2l3.9,3.9c0,0,0,0.1,0.1,0.1l4-4H3c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7s-3.1,7-7,7c-1.9,0-3.7-0.8-4.9-2.1l-1.4,1.4C5.3,18,7.5,19,10,19c5,0,9-4,9-9S15,1,10,1zM9,6v5l4.3,2.5l0.7-1.2l-3.5-2.1V6H9z"></path>
                </svg>
                  处理中
              </span>
            </div>
          </div>
        </li>-->
      </ul>
    </div>
    <audio id="bgMusic">
      <source src="http://220.176.28.52:8888/app/images/5012.wav">
    </audio>
    <foot-guide></foot-guide>
  </div>
</template>
<script>
  import headTop from '../components/head'
  import footGuide from '../components/footGuide'
  import {im} from '../service/getData'
  import $ from 'webpack-zepto'

  export default {
    data() {
      return {
//        IMlistArr:[], //需求列表数据
      }
    },
    mounted(){
//      this.initData();
//      setInterval(()=>{
//        this.initData();
//        console.log('刷新！');
//      },5000);
    },
    components:{
      headTop,
      footGuide,
    },
    methods:{
      /*async initData() {
        //获取数据
        let res = await im(this.StationID);
        this.IMlistArr = [...res];
        console.log(res.length);
        for (let i = 0;i < res.length; i++) {
          $('li').attr('id',i);
          let tag = '#' + i;
          if (!$(tag).length) {
            console.log($(tag).length);
            let audio = document.getElementById('bgMusic');
            audio.play();
          }
        }
      },
      reload(){
        window.location.reload();
      },*/
    }
  }
</script>
<style>
  #im {
    background-color:#fff;
  }
  .message {
    margin-top:1.95rem;
    width: 100%;
    margin-bottom:2rem;
  }
  .message ul li {
    border-bottom: #ededed solid 1px;
    display: flex;
    text-overflow: ellipsis;
    position: relative;
    overflow: hidden;
  }
  .message ul li>.avatar {
    display: inline-block;
    -webkit-transition: opacity ease .218s;
    transition: opacity ease .218s;
    filter: alpha(opacity=100);
    opacity: 1;
    float: left;
    height: 2rem;
    position: relative;
    margin: 16px;
    margin-left: 24px;
  }
  .message ul li>.avatar span {
    width: 2rem;
    height:2rem;
    font-size: .65rem;
    display: table-cell;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    box-shadow: 0 0 1px #fff;
    border-radius: 50%;
    background-color: #0f9d58;
    color:#fff;
  }
  .message ul li>.om .om_name {
    display: flex;
    margin-top:16px;
    justify-content: space-between;
    min-width: min-content;
  }
  .message ul li>.om .om_name .name{
    vertical-align: middle;
    white-space: nowrap;
    align-items: center;
    line-height: 1rem;
    font-size:.7rem;
    color: #404040;
    flex: 0 0 200%;
    display: flex;
  }
  .message ul li>.om .om_name .time {
    display: flex;
    flex: 0 0 auto;
    justify-content: flex-end;
    box-sizing: border-box;
    position: relative;
    color: #404040;
    font-size: 14px;
  }
  .message ul li>.om .om_msg {
    display: flex;
    justify-content: space-between;
    min-width: min-content;
  }
  .message ul li>.om .om_msg .msg_con {
    flex: 0 0 200%;
    display: flex;
    vertical-align: middle;
    white-space: nowrap;
    align-items: center;
    color: #737373;
    font-size:.6rem;
    line-height: .8rem;
  }
  .message ul li>.om .om_msg .msg_del {
    display: flex;
    flex: 0 0 auto;
    justify-content: flex-end;
    box-sizing: border-box;
    position: relative;
    color: #999;
    font-size: 14px;
  }
  .message ul li>.om .om_msg .msg_del svg {
    fill: #666;
    width:12px;
    height:22px;
    margin-right:.2rem;
  }
</style>
