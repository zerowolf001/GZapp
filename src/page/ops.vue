<template>
  <div id="ops">
    <head-top head-title="手术安排" go-back='true'></head-top>
    <div class="ops">
      <ul class="list_wrapper">
        <li>
          <header>
            <div class="state"><em class="bedNo">03</em></div>
            <h3 class="title">颜瑛</h3>
          </header>
          <div class="apparent">
            <em>手术名称：</em>
            <div class="state">剖宫产手术</div>
          </div>
          <div class="apparent">
            <em>麻醉法：</em>
            <div class="anaesthesia">局麻+心电监护</div>
          </div>
          <div class="apparent">
            <em>手术时间：</em>
            <div class="times">2017-09-04 09:00</div>
          </div>
          <div class="footer">
            <div class="info"><em>手术状态:</em><span>手术申请</span></div>
            <div class="info"><em>更新时间:</em><span>2017年09月04日 07:13</span></div>
          </div>
        </li>
        <li>
          <header>
            <div class="state"><em class="bedNo">31</em></div>
            <h3 class="title">吴海清</h3>
          </header>
          <div class="apparent">
            <em>手术名称：</em>
            <div class="state">剖宫产手术</div>
          </div>
          <div class="apparent">
            <em>麻醉法：</em>
            <div class="anaesthesia">全麻</div>
          </div>
          <div class="apparent">
            <em>手术时间：</em>
            <div class="times">2017-09-04 09:00</div>
          </div>
          <div class="footer">
            <div class="info"><em>手术状态:</em><span>手术申请</span></div>
            <div class="info"><em>更新时间:</em><span>2017年09月04日 07:13</span></div>
          </div>
        </li>
        <li>
          <header>
            <div class="state"><em class="bedNo">66</em></div>
            <h3 class="title">陈先兰</h3>
          </header>
          <div class="apparent">
            <em>手术名称：</em>
            <div class="state">剖宫产手术</div>
          </div>
          <div class="apparent">
            <em>麻醉法：</em>
            <div class="anaesthesia">腰硬联合麻醉</div>
          </div>
          <div class="apparent">
            <em>手术时间：</em>
            <div class="times">2017-09-04 09:00</div>
          </div>
          <div class="footer">
            <div class="info"><em>手术状态:</em><span>手术申请</span></div>
            <div class="info"><em>更新时间:</em><span>2017年09月04日 07:13</span></div>
          </div>
        </li>
      </ul>
    </div>
    <foot-guide></foot-guide>
  </div>

</template>
<script>
  import headTop from '../components/head'
  import footGuide from '../components/footGuide'

  export default {
    data() {
      return {
      }
    },
    components:{
      headTop,
      footGuide,
    },
  }
</script>
<style>
  em, i {
    font-style: normal;
  }
  #ops {background: #f5f5f5;}
  .ops {
    margin-top:1.95rem;
    margin-bottom:2rem;
  }
  .list_wrapper li {
    border-bottom: 1px solid #dfdfdf;
    background: #fff;
    margin-bottom: .5rem;
  }
  .list_wrapper li header {
    display: flex;
    margin: 0 .5rem;
    height: 1.5rem;

  }
  .list_wrapper li header .state {
    margin-right: 0;
    line-height: 1.9rem;
  }
  .list_wrapper li header .state .bedNo {
    background: #3fad6a;
    font-size: .6rem;
    color: #fff;
    padding: 0 .3rem;
    display: inline-block;
    line-height: 1rem;
    border-radius: .5rem;
    margin-right: .4rem;
  }
  .list_wrapper li header .title {
    font-size: .75rem;
    line-height: 1.8rem;
  }
  .list_wrapper li .apparent {
    margin: .3rem .5rem;
    display: flex;
    font-size: .65rem;
  }
  .list_wrapper li .apparent em {
    color: #999;
  }
  .list_wrapper li .apparent .state {
    color:#333;
  }
  .list_wrapper li .apparent .times {
    color:#666;
  }
  .list_wrapper li .apparent .anaesthesia {
    color: #19b0ef;
  }

  .list_wrapper li .footer {
    display: flex;
    align-items: center;
    border-top: 1px solid #efefef;
    padding: 0 .5rem;
    height: 1.8rem;
    font-size: .5rem;
  }
  .list_wrapper li .footer .info em {
    color: #999;
  }
  .list_wrapper li .footer .info span {
    font-size: .5rem;
    margin: 0 .5rem 0 .2rem;
  }
</style>
