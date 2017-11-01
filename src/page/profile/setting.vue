<template>
  <div id="setting">
    <head-top head-title="设置" go-back='true'></head-top>
    <div class="setting">
        <dl class="set_container">
          <dd class="set_list">
            <dl>
              <dd>修改密码：<em></em></dd>
              <dd>消息推送：<em><toggle-button :labels="true" :value="true" /></em></dd>
              <dd>开启语音： <em><toggle-button :labels="true"/></em></dd>
              <dd>版本号：<em>v1.0.0 BETA</em></dd>
            </dl>
          </dd>
          <dd class="set_list">
            <dl>
              <dd class="align" @click="loginOut">退出当前账号</dd>
            </dl>
          </dd>
        </dl>
    </div>
  </div>
</template>
<script>
  import headTop from '../../components/head'
  import ToggleButton from '../../components/switch.vue'

  export default {
    data() {
      return{}
    },
    mounted(){
    },
    components:{
      headTop,
      ToggleButton
    },
    methods:{
      loginOut() {
        window.android.removeUserinfo();
        this.$router.push({path:'/'});
      }
    }
  }
</script>
<style lang="scss">
  .setting {
    margin-top:2.5rem;
  }
  dl.set_container {
    margin-bottom:.1rem;
    margin-left:.4rem;
    margin-right:.4rem;
    .set_list {
      margin-bottom:1rem;
      background-color: #fff;
      dd {
        position:relative;
        border-bottom:1px solid #eee;
        font-size:.6rem;
        padding:.4rem 1rem .4rem .5rem;
        em {
          float: right;
          font-size: .55rem;
          color: #999;
          font-style: normal;
          font-weight: 400;
        }
        &.align {
          text-align: center;
          color:#47a7f0;
          font-size:.65rem;
          border:none;
        }
      }
    }

  }
</style>
