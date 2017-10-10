<template>
  <div id="ops">
    <head-top head-title="手术安排" go-back='true'></head-top>
    <div class="ops">
      <section class="tab_title">
        <span :class="{choosed: categoryType === 1}" @click="categoryType = 1">全部</span>
        <span :class="{choosed: categoryType === 2}" @click="categoryType = 2">今日</span>
        <span :class="{choosed: categoryType === 3}" @click="categoryType = 3">明日</span>
      </section>
      <transition name="router-fade">
        <section v-if="categoryType === 1">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td rowspan="3">&nbsp;</td>
              <td>&nbsp;</td>
              <td rowspan="4">&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
        </section>
        <section v-if="categoryType === 2">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td rowspan="3">&nbsp;</td>
              <td>&nbsp;</td>
              <td rowspan="4">&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
        </section>
        <section v-if="categoryType === 3">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td rowspan="3">&nbsp;</td>
              <td>&nbsp;</td>
              <td rowspan="4">&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="2">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
        </section>
      </transition>
    </div>
  </div>

</template>
<script>
  import headTop from '../components/head'

  export default {
      data(){
          return {
              categoryType: 1,
              toggled: false,
          }
      },
    components:{
      headTop,
    },
  }
</script>
<style>
  .ops {
    margin-top:2.2rem;
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
    height: 1.5rem;
    margin: .5rem 0;
  }
  .tab_title span {
    height: 1.5rem;
    width: 33.333%;
    text-align: center;
    line-height: 1.5rem;
    font-size: .5rem;
    color:#ccc;
  }
  .tab_title span.choosed {
    border-bottom:1px solid #47a8f0;
    color: #47a8f0;
  }
</style>
