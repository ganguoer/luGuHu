<template>
 <div id="guide">
    <div class="guideL" :class="{ active: isActive0 }" @click="search()">
         <span class='icon-1-12'></span>
         <p>景区</p>
    </div>
   <div class="guideR">
     <ul class=''>
       <li :class="{ active: isActive1 }" @click="search1()">
         <span class='icon-1-13'></span>
         <p>手绘图</p>
       </li>
       <li :class="{ active: isActive2 }" @click="search2()">
         <span class='icon-1-14'></span>
         <p>定位</p>
       </li>
       <li :class="{ active: isActive3 }" @click="search3()">
         <span class='icon-1-15'></span>
         <p>查找</p>
       </li>
     </ul>
   </div>

    <div class="guideB">
      <div class="detail">
        <span class='icon-1-16'></span>景区概况
      </div>
      <div class="detail line">
        <span class='icon-1-17'></span>浏览路线
      </div>
    </div>
 </div>

</template>

<script>
export default{
    name:'guide',
    data(){
        return{
          isActive0: false,
          isActive1: false,
          isActive2: false,
          isActive3: false,
        }
    },
    methods: {
      search:function () {
        var that=this;
        that.isActive0=!that.isActive0;
      },
      search1:function () {
        var that=this;
        that.isActive1=!that.isActive1;
      },
      search2:function () {
        var that=this;
        that.isActive2=!that.isActive2;
      },
      search3:function () {
        var that=this;
        that.isActive3=!that.isActive3;
      }
    }
}

</script>

<style scoped>

#guide{
  background: url("../../../static/images/map.jpg") no-repeat 0 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 11.24rem;
  background-size: cover;
  position: relative;
}
  .guideL{
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    border-radius: 0.1rem;
    position: absolute;
    top: 0.66rem;
    left: 0.33rem;
    /*color: #f73e3e;*/
    color: #555555;
    box-sizing: border-box;
    padding: 0.16rem 0;
  }
.guideL.active{
  color: #f73e3e!important;
}
.guideR .active{
    color: #f73e3e!important;
  }
  .guideL>span{
    font-size: 0.34rem;
  }
  .guideL>p{
    font-size: 0.24rem;
  }
  .guideR{
    position: absolute;
    top: 0.66rem;
    right: 0.33rem;
    color: #f73e3e;
  }
  .guideR li{
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    border-radius: 0.1rem;
    color: #555555;
    box-sizing: border-box;
    padding: 0.16rem 0;
    margin-bottom: 0.26rem;
  }
  .guideR li p{
    font-size: 0.24rem;
  }

.icon-1-13{
  font-size: 0.3rem;
}
.icon-1-14{
  font-size: 0.4rem;
}
.icon-1-15{
  font-size: 0.38rem;
}
  .guideB{
    height: 1.08rem;
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    position: absolute;
    bottom: 0rem;
    left: 0;
    width: 100%;
    color: #666;
    font-size: 0.3rem;
    display: flex;
  }
  .detail{
    width: 45%;
    border-right:1px solid #e4e4e4;
    margin: 0.38rem 0;
    flex: 1;
    box-sizing: border-box;
  }
  .detail.line{
    border-right:none;
  }
  .detail>span{
    padding-right: 0.16rem;
  }
</style>
