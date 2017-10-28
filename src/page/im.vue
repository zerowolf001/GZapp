<template>
  <div id="im">
    <head-top head-title="任务"></head-top>
    <div class="message">
      <ul>
        <router-link :to="{path:'imyz'}" tag="li" v-if="TaskData.da">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td rowspan="2" class="ico">
                  <img src="../assets/icon/xqdb.png" alt="">
              </td>
              <td class="db_title">医嘱任务</td>
              <td class="db_time">{{TaskData.da.time}}</td>
            </tr>
            <tr>
              <td class="db_detail" colspan="2">{{TaskData.da.bedNum}}  {{TaskData.da.type}}</td>
            </tr>
          </table>
        </router-link>
        <router-link to="imwjz" tag="li" v-if="TaskData.de">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td rowspan="2" class="ico">
                <img src="../assets/icon/xqyj.png" alt="">
              </td>
              <td class="db_title">病患需求</td>
              <td class="db_time">{{TaskData.de.dateTime}} {{TaskData.de.insertTime}}</td>
            </tr>
            <tr>
              <td class="db_detail" colspan="2">{{TaskData.de.bedNum}} {{TaskData.de.insertTime}} {{TaskData.de.Description}}</td>
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
  import {mission} from '../service/getData'

  export default {
    data() {
      return {
        StationID:'0397',
        TaskData:'',
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
        this.TaskData = await mission(this.StationID);
      }
    }
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
