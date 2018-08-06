<template>
  <div id="app">

<<<<<<< HEAD
     <!-- <header :headTitle="headMsg"></header> -->
    <mt-header fixed title="我的"></mt-header>
=======
    <mt-header fixed title="泸沽湖"></mt-header>
>>>>>>> 8b517b7aab0a6f7b44142d70dea6f190a656d5ac

    <div class="content">
      <router-view/>
    </div>

<<<<<<< HEAD
<!--底部导航-->
    


  </div>
=======
    <bottom-nav :idx="0"></bottom-nav>
 </div>
>>>>>>> 8b517b7aab0a6f7b44142d70dea6f190a656d5ac
</template>

<script>
  import bottomNav from '@/components/bottomNav'  //底部导航
  export default {
  name: 'App',
  data(){
      return{

      }
  },
  components:{
      'bottom-nav':bottomNav
  }

}
</script>

<style >
#app {
  font-family: "Microsoft YaHei","微软雅黑",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content{
  margin-top: 0.8rem;
}
.mint-header{
  background-color: #333333;
}
.mint-header-title{
  font-size: 0.34rem;
}

</style>
