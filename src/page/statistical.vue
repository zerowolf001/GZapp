<template>
  <div id="statistical">
    <head-top head-title="统计报表" go-back='true'></head-top>
    <section class="statistical">
      <ul class="index_nav_link">
        <li>
          <h4>13</h4>
          <p>今日入院</p>
        </li>
        <li>
          <h4>5</h4>
          <p>今日出院</p>
        </li>
        <li>
          <h4>8</h4>
          <p>明日出院</p>
        </li>
      </ul>
      <dl class="bq_census">
        <dt class="dl_title">病房统计</dt>
        <dd>
          <ul class="bq_operation">
            <li>
                <h4>2</h4>
                <p>今日手术</p>
            </li>
            <li>
              <h4>1</h4>
              <p>明日手术</p>
            </li>
          </ul>
          <ul class="bq_operation">
            <li>
              <p>今日分娩</p>
              <h4 class="fm">0</h4>
            </li>
            <li>
              <p>男性</p>
              <h4 class="man">0</h4>
            </li>
            <li>
              <p>女性</p>
              <h4 class="woman">67</h4>
            </li>
          </ul>
          <ul class="bq_operation h_gray">
            <li>
              <p>占床数</p>
              <h4>67</h4>
            </li>
            <li>
              <p>空床数</p>
              <h4>7</h4>
            </li>
            <li>
              <p>总床数</p>
              <h4>74</h4>
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="bq_nursed">
        <dt class="dl_title">护理统计</dt>
        <dd>
          <ul class="bq_operation">
            <li>
              <h4>4</h4>
              <p>病危</p>
            </li>
            <li>
              <h4>0</h4>
              <p>病重</p>
            </li>
          </ul>
          <ul class="bq_operation h_gray">
            <li>
              <p>特级护理</p>
              <h4 class="lv_0">0</h4>
            </li>
            <li>
              <p>一级护理</p>
              <h4 class="lv_1">0</h4>
            </li>
            <li>
              <p>二级护理</p>
              <h4 class="lv_2">9</h4>
            </li>
            <li>
              <p>三级护理</p>
              <h4 class="lv_3">50</h4>
            </li>
          </ul>
          <ul class="bq_operation h_gray">
            <li>
              <p>导管脱落高风险</p>
              <h4>6</h4>
            </li>
            <li>
              <p>跌倒/坠床高风险</p>
              <h4>6</h4>
            </li>
          </ul>
          <ul class="bq_operation h_gray">
            <li>
              <p>DVT高风险</p>
              <h4>1</h4>
            </li>
            <li>
              <p>压疮高风险</p>
              <h4>4</h4>
            </li>
            <li>
              <p>新生儿监护</p>
              <h4>0</h4>
            </li>
          </ul>
        </dd>

      </dl>
      <dl class="bq_nursed">
        <dt class="dl_title">病人状态统计</dt>
        <dd>
          <ul class="bq_operation">
            <li>
              <h4>4</h4>
              <p>特殊疾病护理</p>
            </li>
            <li>
              <h4>4</h4>
              <p>重症监护</p>
            </li>
            <li>
              <h4>0</h4>
              <p>危急</p>
            </li>
          </ul>
          <ul class="bq_operation h_gray">
            <li>
              <p>过敏</p>
              <h4>11</h4>
            </li>
            <li>
              <p>隔离</p>
              <h4>4</h4>
            </li>
            <li>
              <p>压疮</p>
              <h4>0</h4>
            </li>
            <li>
              <p>卧床</p>
              <h4>0</h4>
            </li>
          </ul>
        </dd>

      </dl>
    </section>
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
  .statistical {
    margin-bottom:2.5rem;
  }
  .index_nav_link {
    margin-top:2.5rem;
    font-size: 28px;
    color: #666;
    border-bottom: 1px solid #eee;
    border-top:1px solid #eee;
    margin-bottom: 10px;
    clear:both;
    overflow:hidden;
    background-color: #fff;
  }
  .index_nav_link li {
    float: left;
    display: inline;
    text-align: center;
    border-right: 1px solid #eee;
    padding-bottom: 10px;
    width: 33.333%;
  }
  .index_nav_link li:last-child,.bq_operation li:last-child {
    border:0;
  }
  .index_nav_link li>h4 {
    font-size: 35px;
    color:rgb(48,168,56)
  }
  .index_nav_link li>p {
    font-size: 18px;
    color:#666;
  }
  .bq_census,.bq_nursed {
    background-color: #fff;
  }
  .bq_nursed {
    margin-top:.5rem;
  }
  .dl_title {
    line-height: 1.5rem;
    font-size: .65rem;
    font-weight: 700;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    padding-left: 0.5rem;
    color: #ff552e;
  }
  ul.bq_operation {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    width: 100%;
    -webkit-box-align: center;
    padding:.8em 0;
    border-bottom: 1px solid #eee;
  }
  .bq_operation {
    width: 100%;
    border-bottom: 1px solid #eee;
  }
  ul.bq_operation li {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #f4f4f4;
  }
  /*ul:nth-of-type(1) li {*/
    /*border-right: 1px solid #eee;*/
  /*}*/
  .bq_census:nth-of-type(2) li>h4 {
    color:#333;
  }
  .bq_operation li>h4 {
    font-size: 1rem;
    color: #000;
    display: block;
    line-height: 1.5rem;
  }
  .bq_operation li>h4.fm {
    color:#e98bb9;
  }
  .bq_operation li>h4.man {
    color:#1296db;
  }
  .bq_operation li>h4.woman {
    color:#d83886;
  }
  .bq_operation li>p {
    font-size: .6rem;
    color: #666;
    line-height: 1rem;
  }
  .h_gray li>h4 {
    color:#666;
  }
  .bq_operation li>h4.lv_0 {
    color:red;
  }
  .bq_operation li>h4.lv_1 {
    color:#ff60a9;
  }
  .bq_operation li>h4.lv_2 {
    color:#4545fb
  }
</style>
