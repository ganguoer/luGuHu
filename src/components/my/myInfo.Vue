<template>
  <div id="myInfo">
     <div class="infoT">
        <div class="userimg">
           <span>头像</span>
          <img src="../../../static/images/my.png" alt="">
        </div>
       <p>昵称  ganguoer</p>
       <p>手机号 18411111111</p>
     </div>
     <div class="bg"></div>
     <div class="infoB">
        <p>姓名 张xx</p>
        <p>性别 女</p>
        <p>生日 1999/9/19</p>
        <p>地址 北京市北京市</p>
     </div>

    <div class="btn">退出登录</div>
  </div>

</template>

<script>
  export default{
    name:'myInfo',
    data(){
      return{

      }
    },
  }

</script>

<style scoped>
  #myInfo{
    font-size: 0.3rem;
    color: #333;
    text-align: left;
  }
.infoT{
  height: 2.96rem;
  border-bottom: 1px solid #e4e4e4;
  background-color: #fff;
}
.userimg{
  height: 1.17rem;
  margin: 0 0.3rem;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  -webkit-display:flex;
}
.userimg>img{
  width: 0.92rem;
  height: 0.92rem;
  border-radius: 50%;
  margin-top: 0.12rem;
}
.userimg>span{
  flex: 1;
  margin-top: 0.42rem;
}
.bg{
  height: 0.36rem;
}
  .infoB{
    height: 3.53rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
  }
  p{
    height: 0.87rem;
    line-height: 0.87rem;
    margin: 0 0.3rem;
    border-bottom: 1px solid #e4e4e4;
  }
  p:last-child{
    border-bottom: none;
  }
  .btn{
    background-color: #f73e3e;
    width: 4.64rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 0.4rem;
    color: #fff;
    font-size: 0.32rem;
    text-align: center;
    margin: 1rem auto;
  }
</style>
