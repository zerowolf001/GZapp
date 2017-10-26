<template>
    <div id="im_yz">
      <head-top head-title="待办医嘱" go-back='true'></head-top>
      <div class="im_yz">
        <section class="tab_title">
          <span :class="{choosed: categoryType === 1}" @click="categoryType = 1">待执行</span>
          <span :class="{choosed: categoryType === 2}" @click="categoryType = 2">已执行</span>
        </section>
        <section v-if="categoryType === 1">
          <div class="dbyz">
            <ul>
              <li>
                <div class="hr_detail">
                  <div class="hr_title">
                    <p>C1-006今日医嘱</p>
                    <span>10-26 12:00:23</span>
                  </div>
                  <div class="yz_hr_detail">
                    注意伤口渗血，复合氨基酸2瓶，口服避孕药。量体温，量血压。注意伤口渗血，复合氨基酸2瓶，口服避孕药。量体温，量血压。
                  </div>
                  <div class="yz_click"><router-link to="yzdetail">查看详情></router-link></div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section v-if="categoryType === 2">
          <div class="dbyz">
            <ul>
              <li>
                <div class="hr_detail">
                  <div class="hr_title">
                    <p>C2-9999今日医嘱</p>
                    <span>10-26 12:00:23</span>
                  </div>
                  <div class="yz_hr_detail">
                    注意伤口渗血，复合氨基酸2瓶，口服避孕药。量体温，量血压。注意伤口渗血，复合氨基酸2瓶，口服避孕药。量体温，量血压。
                  </div>
                  <div class="yz_click"><router-link to="yzdetail">查看详情></router-link></div>
                </div>
              </li>
              <li>
                <div class="hr_detail">
                  <div class="hr_title">
                    <p>C2-9999今日医嘱</p>
                    <span>10-26 12:00:23</span>
                  </div>
                  <div class="yz_hr_detail">
                    注意伤口渗血，复合氨基酸2瓶，口服避孕药。量体温，量血压。注意伤口渗血，复合氨基酸2瓶，口服避孕药。量体温，量血压。
                  </div>
                  <div class="yz_click"><router-link to="yzdetail">查看详情></router-link></div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>

    </div>
</template>
<script>
    import headTop from '../components/head'

    export default {
      data() {
        return{
          categoryType: 1,
        }
      },
      components:{
        headTop,
      },

    }
</script>
<style lang="scss" scoped>
  $blue:#47a8f0;
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
    span {
      height: 1.5rem;
      width: 33.333%;
      text-align: center;
      line-height: 1.5rem;
      font-size: .5rem;
      color:#ccc;
      &.choosed {
        border-bottom:1px solid $blue;
        color: $blue;
      }
    }
  }
  .im_yz {
    margin-top:1.95rem;
  }
  .dbyz {
    li {
      margin-bottom:3px;
      .hr_time {
        text-align: center;
        color:#aeaeae;
        font-size:.55rem;
        height:1.2rem;
      }
      .hr_detail {
        background-color:#fff;
      }
      .hr_detail .hr_title {
        display: flex;
        padding:.2rem;
        line-height: 1rem;
        height:1.4rem;
        border-bottom: 1px solid #f3f3f3;
        p {
          font-size: .55rem;
          float: left;
          width: 75%;
          padding-left:.5rem;
        }
        span {
          float: right;
          font-size: .5rem;
          color:rgb(191,190,192);
        }
      }
      .yz_hr_detail{
        padding:.3rem .5rem;
        color:rgb(191,190,192);
      }
      .yz_click {
        background-color: #fff;
        padding:0 .5rem;
        height:1.2rem;
        a {
          color:#fff;
          background-color: $blue;
          padding:.05rem .2rem;
          border-radius: .2rem;
          float:right;
        }
      }
    }
  }
</style>
