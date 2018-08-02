<template>
  <div id="app">
    <mt-header fixed title="我的"></mt-header>

    <div class="content">
      <router-view/>
    </div>

<!--底部导航-->
      <mt-tabbar v-model="selected">
        <mt-tab-item id="index">
          <img slot="icon" src="../static/images/1.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="order">
          <img slot="icon" src="../static/images/1.png">
          资讯
        </mt-tab-item>
        <mt-tab-item id="market">
          <img slot="icon" src="../static/images/1.png">
          微商城
        </mt-tab-item>
        <mt-tab-item id="guide">
          <img slot="icon" src="../static/images/1.png">
          自导
        </mt-tab-item>
        <mt-tab-item id="my">
          <img slot="icon" src="../static/images/1.png">
          我的
        </mt-tab-item>
      </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
        selected: 'my'
      }
  },

  watch: {
    selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
      console.log(val)
    }
  },

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
  margin-top: 0.4rem;
}
  .mint-tabbar{
    height: 0.65rem;
    background: #3c3c3c;
  }
  .mint-tab-item-label{
    color: #fff;
  }
.mint-header{
  background-color: #333;
  font-size: 0.16rem;
  color: #fff;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #3c3c3c;
  color: #06b1f8;
}

.mint-tab-item-label {
  color: #fff;
  background: #06b1f8;
  height: 0.2rem;
  line-height: 0.2rem;
}
.mint-tabbar > .mint-tab-item.is-selected>.mint-tab-item-icon{
  /*margin-top: -0.05rem;*/
}
/*.mint-tabbar > .mint-tab-item.is-selected>.mint-tab-item-label{*/
  /*color: #fff;*/
  /*background: #06b1f8;*/
  /*border-top: 10px solid #fff;*/
  /*border-radius:0.15rem 0.15rem 0 0;*/
  /*margin-top: -0.05rem;*/
/*}*/
</style>
