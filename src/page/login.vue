<template>
  <div class="login">
    <div class="login-header width-full">
      <div class="container width-full header-logo clearfix">
        <img src="../assets/logo.png" alt="">
      </div>
    </div>
    <div class="loginContainer">
      <div class="active-form">
        <form class="loginForm">
          <div class="active-form-header">
            <h1>博均医疗PDA</h1>
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
          //this.userInfo = await accountLogin(this.userAccount, this.passWord)
          this.$router.push({path:'/home'});
        }
//        else {
//          this.$router.push({path:'/home'});
//        }
        /*if (!this.userInfo) {
          this.showAlert = true;
          this.alertText = '用户名或密码错误';
          setTimeout(() => {
            this.showAlert = false;
          }, 2000);
        } else {
          this.$router.push({path:'/home'});
        }*/
      }
    }
  }
</script>
