<template>
  <div id="myInfo">
     <div class="infoT">
        <div class="userimg">
           
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
    height: 0.86rem;
    line-height: 0.86rem;
    margin: 0 0.3rem;
    border-bottom: 1px solid #e4e4e4;
  }
  p:last-child{
    border-bottom: none;
  }
</style>
