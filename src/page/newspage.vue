<template>
  <div id="newspage">
    <head-top head-title="信息公告" go-back='true'></head-top>
    <section class="newsDetail">
      <h3>刘文杰同志就任我院党委书记</h3>
      <span>2017-09-22 17:40:43</span>
      <div>
        <p align="center">此处为图片</p>
        <p>9月12日上午，我院召开中层以上干部大会。市委组织部副部长潘贤波宣布了市委关于刘文杰同志任我院党委书记的任命决定和蒋国庆同志任我院党委副书记的任命决定并作重要讲话。市卫计委党组书记、主任刘春文主持会议并讲话。蒋国庆副书记、刘文杰书记作任职表态讲话。赖卫国院长作表态讲话。市委组织部干部二科科长谭建华出席会议。全院副护士长以上干部共计170余人参会。</p>
      </div>
    </section>
  </div>
</template>
<script>
  import headTop from '../components/head'
  import footGuide from '../components/footGuide'

  export default {
    date() {
      return {}
    },
    components:{
      headTop,
      footGuide,
    },

  }
</script>
<style>
  .newsDetail {
    margin-top:2rem;
    background-color:#fff;
  }
  .newsDetail h3 {
    padding:.5rem 0;
    font-size:.7rem;
    color:#333;
    font-weight: 500;
    height:2.4rem;
    line-height:1.2rem;
    text-align: center;
  }
</style>
