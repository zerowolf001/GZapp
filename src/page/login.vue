<template>
  <div class="login">
    <div class="login-header width-full">
      <div class="container width-full header-logo clearfix">
        <svg class="octicon" height="48" version="1.1" viewBox="0 0 16 16" width="48"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      </div>
    </div>
    <div class="loginContainer">
      <div class="active-form">
        <form class="loginForm">
          <div class="active-form-header">
            <h1>控台登录</h1>
          </div>
          <div class="active-form-body">
            <label for="login_field">
              账号
            </label>
            <input class="form-control input-block" type="text" id="login_field"  v-model.lazy="userAccount" tabindex="1">
            <label for="password">
              密码
              <!--<a href="" class="label-link">忘记密码？</a>-->
            </label>
            <input class="form-control input-block" type="password" id="password" v-model="passWord" tabindex="2">
            <!--<div class="button_switch" :class="{change_to_text: showPassword}">
              <div class="circel_button" :class="{trans_to_right: showPassword}" @click="changePassWordType"></div>
              <span>abc</span>
              <span>...</span>
            </div>-->
            <a class="btn btn-primary btn-block" @click="mobileLogin">登 录</a>
          </div>
        </form>
        <p class="create-account-callout">
          无法登录？请先<router-link to="/setServer" class="to_forget">设置</router-link>
        </p>
      </div>
    </div>
    <alert-tip v-if="showAlert" :showHide="showAlert" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
  import alertTip from '../components/alertTip'
  import {accountLogin} from '../service/getData'

  export default {
    data() {
      return {
        userInfo:null,//获取到的用户信息
        userAccount: null, //用户名
        passWord: null, //密码
        showAlert: false, //显示提示组件
        alertText: null, //提示的内容
      }
    },
    components: {
      alertTip
    },
    methods:{
      async mobileLogin() {
        if (!this.userAccount) {
          this.showAlert = true;
          this.alertText = '请输入账号';
          setTimeout(() => {
            this.showAlert = false;
          }, 2000);
        }else if (!this.passWord) {
          this.showAlert = true;
          this.alertText = '请输入密码';
          setTimeout(() => {
            this.showAlert = false;
          }, 2000);
        } else {
          this.userInfo = await accountLogin(this.userAccount, this.passWord)
        }

//        else {
//          this.$router.push({path:'/home'});
//        }
        if (!this.userInfo) {
          this.showAlert = true;
          this.alertText = '用户名或密码错误';
          setTimeout(() => {
            this.showAlert = false;
          }, 2000);
        } else {
          this.$router.push({path:'/home'});
        }
      }
    }
  }
</script>
