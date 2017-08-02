<template>
  <div>
    <div class="bedPage">
      <head-top head-title="患者详情" go-back='true'></head-top>
      <section class="bed_name">
        <div class="profileImage">
          <img src="../assets/icon/woman.png" alt="">
          <div class="user-info">
            <header>
              <h4 class="bed_title ellipsis lv_0">张三</h4>
              <ul>
                <li>男</li>
                <li>19岁</li>
                <li>住院号:12345</li>
                <li>1号床</li>
              </ul>
            </header>
            <h5 class="bed_distance">
              <p>测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>
            </h5>
          </div>
        </div>
        <section class="tab_title">
          <span class="choosed">基本信息</span>
          <span>特殊标记</span>
          <span>门诊记录</span>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
    import headTop from '../components/head'
    import footGuide from '../components/footGuide'

    export default {
        data () {
            return {}
        },
        components:{
            headTop,
            footGuide
        },
        computed: {

        },
        watch: {

        }
    }
</script>
<style>
  .bed_name {
    background:#fff;
    box-shadow:0 0 3px #aaa;
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
    width: 2.5rem;
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
    font-size:.55rem;
    line-height:.7rem;
  }
  .bed_name .user-info .bed_distance p {
    color:#666;
  }
  .bed_name .tab_title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 2rem;
    border-top:1px solid #eee;
  }
  .bed_name .tab_title span {
    border-right:1px solid #eee;
    height: 2rem;
    width: 33.333%;
    text-align: center;
    line-height: 2rem;
    font-size: .6rem;
  }
  .bed_name .tab_title span.choosed {
    border-bottom:1px solid #3aa373;
    color: #3aa373;
  }
  .bed_name .tab_title span:last-child {
    border-right:none;
  }
</style>
