<template>
  <div class='login'>
    <div class="login-wrap" v-show="showLogin">
      <p v-show="showTishi">{{tishi}}</p>
      <div class='bgf'>
        <div class='tele clearfix'>
          <label for="" class='fl'>手机号</label> <input type="text" placeholder="注册或绑定手机号" v-model="telephone" maxlength="20">
        </div>
        <div class='tele clearfix'>
          <label for="" class='fl'>动态码</label> <input type="password" placeholder="短信动态码" v-model="code" maxlength="10">  <span class='fr getCode'>获取动态码</span>
        </div>
      </div>

      <button @click="login">登录</button>
      <div class='wx'>
        <span class='icon-1-20'></span>
        <span @click="ToRegister">使用微信账号登录</span>
      </div>

    </div>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        showLogin: true,
        showTishi: false,
        tishi: '',
        telephone: '',
        code: '',
      }
    }
  }
</script>


<style scoped>
  .login{
    height: 13rem;
    width:100% ;
    background-color: #efefef;
    position: fixed;
    left: 0;
    top: 0;
  }
  .login-wrap{text-align:center;margin-top: 1.75rem;}
  .bgf{
    background-color: #fff;
  }
  .tele{
    border-bottom: 1px solid #efefef;
    padding: 0.3rem 0.26rem;
  }
  label{
    height:0.4rem;
    line-height:0.4rem;
    font-size: 0.28rem;
    color: #333333;
  }
  input{
    width:4rem;
    height:0.4rem;
    line-height:0.4rem;
    float: left;
    outline:none;
    padding-left:0.4rem;
    box-sizing:border-box;
    font-size: 0.28rem;
    color: #666;
  }
  input::placeholder{
    font-size: 0.28rem;
    color: #666;
  }
  .getCode{
    font-size: 0.24rem;
    color: #fba207;
    padding: 0.06rem 0.1rem;
    border: 1px solid #fba207;
    border-radius: 0.1rem;
  }
  p{color:red;}
  button{
    display:block;
    width:4.64rem;
    height:0.8rem;
    line-height: 0.8rem;
    margin:0 auto;
    border:none;
    background-color:#0ca2e1;
    border-radius: 0.4rem;
    color:#fff;
    font-size:0.28rem;
    margin-bottom:5rem;
    margin-top: 0.56rem;
  }
  .wx{
    border-radius: 0.4rem;
    width: 3.07rem;
    height: 0.76rem;
    line-height: 0.76rem;
    margin: 0 auto;
    border: 1px solid #0ca2e1;
  }
  span{cursor:pointer; color: #0ca2e1;font-size: 0.24rem}
</style>

