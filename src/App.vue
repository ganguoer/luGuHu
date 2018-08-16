<template>
  <div id="app">
    <!--header-->
    <div class="header">
      <mt-header fixed title="泸沽湖">
        <router-link to="/"  slot="left">
          <mt-button icon="back" @click="$router.back(-1)"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>

    <!--content-->
    <div class="content">
      <router-view/>
    </div>
    <!--footer-->
    <div class="footer">
       <bottom-nav :idx="0"></bottom-nav>
    </div>

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
  },

}
</script>

<style >
#app {
  font-family: "Microsoft YaHei","微软雅黑",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%
}
.header,.content,.footer{
  position:absolute;
  left:0;
  width:100%;
}
.header {
  top:0;
  height:0.8rem;
}
.content {
  top:0.8rem;
  bottom:1.3rem;
  overflow-y:auto;
}
.footer {
  bottom:0;
  height:1.3rem;
}

.mint-header{
  background-color: #333333;
  height: .8rem;
}
.mint-header-title{
  font-size: 0.34rem;
}
.height15{height:1.5rem}
</style>
