<template>
<div id="hotel">
   <!--<div class="top">-->

   <!--</div>-->
   <div class="seardh">
     <span class="icon-1-15"></span>
     <input type="search" placeholder='景点名称/目的地'  class='search'>
   </div>

  <div class="page-loadmore-wrapper">
    <mt-loadmore  @top-status-change="handleTopChange"
                  :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"
                  :auto-fill="false" ref="loadmore">
      <ul class="page-loadmore-list" v-if="list>0">
      </ul>
      <div class="hotelList">
        <ul>
          <li class="hotelL" v-for="(item,index) in list" :key="index">
            <router-link class='toHotel' to='/hotelDetail'>
              <img :src="item.srcimg" alt="">
              <div class="hotelC clearfix">
                <div class="conL">
                  <p class="title">{{item.title}}</p>
                  <span >{{item.comment}} </span>  <span class="type">{{item.type}}</span>
                  <p class='detail'>{{item.address}}</p>
                  <div class="star">
                    <span class='icon-1-21'></span>
                    <span class='icon-1-21'></span>
                    <span class='icon-1-21'></span>
                    <span class='icon-1-21'></span>
                    <span class='icon-1-21'></span>
                    <span class="score">{{item.star}}分</span>
                  </div>
                </div>
                <div class="conR">
                  ￥<strong>{{item.price}}</strong>起
           </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div slot="top" class="mint-loadmore-top" style="text-align:center">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <mt-spinner v-show="topStatus == 'loading'" color="#26a2ff"></mt-spinner>
      </div>
      <div v-if="allLoaded" style="text-align:center;">没有更多数据了</div>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
        <span v-show="bottomStatus === 'loading'">
                                    <mt-spinner v-show="bottomStatus == 'loading'" color="#26a2ff"></mt-spinner>
                                </span>
      </div>
    </mt-loadmore>
  </div>

</div>

</template>

<script>
  import config from "../../assets/js/config.js";
  export default{
    name:'hotel',
    data(){
      return{
        value:'',
        pageNum: 1, //页码
        InitialLoading: true, //初始加载
        list: [], //数据
        allLoaded: false, //数据是否加载完毕
        bottomStatus: "", //底部上拉加载状态
        topStatus: "", //顶部下拉加载状态
        translate: 0, //
        moveTranslate: 0,
      }
    },
    mounted() {
      this.getmsg();
    },
    methods: {
      getmsg() {
        var that = this;
        that.$ajax.get(config.market.hotel).then(function(response) {
          that.list = eval(response.data);
          console.log(that.list);
        });
      },
      handleBottomChange(status) {
        this.moveTranslate = 1;
        this.bottomStatus = status;
      },
      loadBottom() {
        var that = this;
        this.handleBottomChange("loading"); //上拉时 改变状态码
        this.pageNum += 1;
        that.$ajax.get(config.market.hotel).then(function(response) {
          //上拉加载更多 模拟数据请求这里为了方便使用一次性定时器
          if (that.pageNum <= 3) {
            //最多下拉三次
            that.list = that.list.concat(eval(response.data)); //上拉加载 每次数值加12
          } else {
            that.allLoaded = true; //模拟数据加载完毕 禁用上拉加载
          }
          that.handleBottomChange("loadingEnd"); //数据加载完毕 修改状态码
          that.$refs.loadmore.onBottomLoaded();
        });
      },
      handleTopChange(status) {
        this.moveTranslate = 1;
        this.topStatus = status;
      }
    }
}

</script>

<style scoped>
  #hotel{
    text-align: center;
  }
.top{
  width: 100%;
  height: 0.88rem;
  background-color: #fff;
}
.seardh{
  padding: 0.18rem 0;
  border-bottom: 1px solid #e4e4e4;
  background-color: #f4f4f4;
  position: relative;
}
.search::-webkit-input-placeholder{
  color:#666666;
}
.search:-moz-placeholder{
  color:#666666;
}
.search::-moz-placeholder{
  color:#666666;
}
.search:-ms-input-placeholder {
  color: #666666;
}
.seardh>span{
  font-size: 0.28rem;
  color: #666666;
  position: absolute;
  top: 0.34rem;
  left: 1.52rem;
}
.seardh>input{
  border: 1px solid #f0f0f0;
  height: 0.6rem;
  background-color: #fff;
  border-radius: 0.3rem;
  width: 65%;
  padding-left: 0.6rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
  .hotelList{
    width: 100%;
    background-color: #fff;
  }
  .hotelL{
    height: 2.39rem;
    border-bottom: 1px solid #e4e4e4;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 0.4rem 0.38rem;
  }
  .toHotel{
    display: block;
    width: 100%;
  }
.hotelL img{
  float: left;
  width: 1.57rem;
}
  .hotelC{
    margin-left:1.77rem;
    text-align: left;
  }
  .conL{
    width: 70%;
    float: left;
    font-size: 0.24rem;
    color: #959595;
  }
  .title{
    font-size: 0.3rem;
    color: #333333;
    margin-bottom: 0.06rem;
  }
  .detail{
    margin-top: 0.1rem;
    margin-bottom:0.12rem;
  }
  .type{
    color: #fba207;
    font-size: 0.18rem;
    border: 1px solid #fbb500;
    border-radius: 0.16rem;
    padding: 0rem 0.07rem;
    margin-left: 0.1rem;
  }
  .star>span{
     color: #fba207;
  }
.star .score{
    font-size: 0.24rem;
    color: #888888;
    margin-left:0.1rem;
  }
  .conR{
    float: right;
    color: #959595;
    margin-top: 1.2rem;
  }
  .conR>strong{
    font-size: 0.34rem;
    color: #f73e3e;
  }

  .page-loadmore-wrapper {
    overflow: scroll;
    margin-bottom: 1.8rem;
  }
  .mint-cell-wrapper{padding: 0 5%}
</style>
