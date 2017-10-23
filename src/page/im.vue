<template>
  <div id="im">
    <head-top head-title="需求" go-back='true'></head-top>
    <div class="message">
      <ul>
        <router-link to="imyz" tag="li">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td rowspan="2" class="ico">
                  <img src="../assets/icon/xqdb.png" alt="">
              </td>
              <td class="db_title">待办医嘱</td>
              <td class="db_time">2017-10-23 16:16:53</td>
            </tr>
            <tr>
              <td class="db_detail" colspan="2">20号床 20:00 输液</td>
            </tr>
          </table>
        </router-link>
        <router-link to="imwjz" tag="li">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td rowspan="2" class="ico">
                <img src="../assets/icon/xqyj.png" alt="">
              </td>
              <td class="db_title">系统危机值预警</td>
              <td class="db_time">2017-10-23 16:16:53</td>
            </tr>
            <tr>
              <td class="db_detail" colspan="2">20号床 20:00 输液</td>
            </tr>
          </table>
        </router-link>
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
      return {}
    },   
    components:{
      headTop,
      footGuide,
    },
  }
</script>
<style lang="scss" scoped>
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
</style>
