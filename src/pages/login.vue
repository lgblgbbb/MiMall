<template>
  <div class="login">
    <div class="container">
      <a href="/#/index" class="logo">
        <img class="logo-img" src="../../public/imgs/login-logo.png" />
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3 class="account-mtdhods">
            <span class="account">帐号登录</span>
            <span class="spline">|</span>
            <span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username" />
          </div>
          <div class="input">
            <input
              type="password"
              placeholder="请输入密码"
              v-model="password"
            />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">
              手机短信登录/注册
            </div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from "@/components/NavFooter.vue";
import VueCookie from 'vue-cookie';

export default {
  components: { NavFooter },
  data() {
    return {
      username: "",
      password: "",
      userId: "",
    };
  },
  methods:{
    login(){
        let {username,password} = this
        this.axios.post('/user/login',{
            username,
            password
        }).then((res)=>{
            this.$cookie.set('userId',res.id,{expires:'1M'})
            this.$store.dispatch('saveUserName',res.username)
            this.$router.push('/index')
        })
    },
    register(){
        this.axios.post('/user/register',{
            username:'aabbaa',
            password:'aabbaa',
            email:'xiaoli@163.com'
        }).then((res)=>{
            alert('注册成功')
        })
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/base.scss";

.login {
  .logo {
    display: inline-block;
    .logo-img {
      width: auto;
      height: 100%;
    }
  }

  .wrapper {
    background: url("../../public/imgs/login-bg.jpg") no-repeat center;

    .container {
      height: 576px;
      position: relative;

      .login-form {
        box-sizing: border-box;
        @include positionR(absolute, 29px, 0);
        @include wh(410px, 510px);
        padding: 0 31px;
        background-color: $colorG;

        .account-mtdhods {
          font-size: 24px;
          line-height: 24px;
          text-align: center;
          margin: 40px auto 29px;
          .account {
            color: $colorA;
          }
          .spline {
            margin: 0 32px;
            font-size: 26px;
          }
        }

        .input {
          @include wh(348px, 50px);
          @include bd();
          margin-bottom: 20px;
          input {
            @include wh(100%, 100%);
            border: none;
            padding-left: 18px;
          }
        }

        .btn-box {
          .btn {
            width: 100%;
            line-height: 50px;
            font-size: $fontI;
          }
        }

        .tips {
          @include flex();
          margin-top: 14px;
          font-size: $fontJ;
          cursor: pointer;
          .sms {
            color: $colorA;
            .register {
              color: $colorA;
            }
          }

          .reg {
            color: $colorD;
            span {
              margin: 0 7px;
            }
          }
        }
      }
    }
  }
}
</style>