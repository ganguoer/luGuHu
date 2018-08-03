<template>
  <div id="app">

    <mt-header fixed title="泸沽湖"></mt-header>

    <div class="content">
      <router-view/>
    </div>

    <bottom-nav :idx="0"></bottom-nav>
 </div>
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
  text-align: center;
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
