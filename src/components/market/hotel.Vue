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
            <router-link class='toHotel'  :to="{path:'/hotelDetail/?id='+item.id}">
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

  <div class="footfix">
       <div class='fix' @click="showToggle">价格/星级</div>
       <div class='fix' @click="actionSheet">欢迎度排序</div>
    <div class="star_price" v-show="isShow" @click='showed'>
         <div class='star_b'>
           <p>价格(单选)</p>
            <div class="select clearfix">
              <span>不限</span>
              <span>￥150元以下</span>
              <span>￥150-￥300</span>
              <span>￥301-￥450</span>
              <span>￥451-￥600</span>
              <span>￥601-￥1000</span>
              <span>￥1000以上</span>
            </div>
           <p>星级(单选)</p>
           <div class="selects clearfix">
              <span>不限</span>
              <span>快捷连锁</span>
              <span>二星级及一下/经济</span>
              <span>三星级/舒适</span>
              <span>四星级/高档</span>
              <span>五星级/豪华</span>
           </div>
           <div class='isSure'> 确定 </div>
         </div>
    </div>
    <mt-actionsheet  :actions="data"  v-model="sheetVisible" cancelText=''>
    </mt-actionsheet>

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
        data: [
          {
          name: '欢迎度排序',
          method : this.getCamera	// 调用methods中的函数
          },
          {
          name: '评分 高→低',
          method : this.getLibrary	// 调用methods中的函数
          },
          {
            name: '价格 低→高',
            method : this.getLibrary	// 调用methods中的函数
          },
          {
            name: '价格 高→低',
            method : this.getLibrary	// 调用methods中的函数
          },
          {
            name: '距离 近→远',
            method : this.getLibrary	// 调用methods中的函数
          }
        ],

        // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
        sheetVisible: false,
        isShow: false

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
      },
      actionSheet: function(){
        // 打开action sheet
        this.sheetVisible = true;
      },
      showToggle: function(){
        // 打开action sheet
        this.isShow = !this.isShow
      },
      showed:function () {
        this.isShow = !this.isShow
      },
      getCamera: function(){
        console.log("打开照相机")
      },
      getLibrary: function(){
        console.log("打开相册")
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
    margin-bottom: 2.8rem;
  }
  .mint-cell-wrapper{padding: 0 5%}


  /* 星级、欢迎度 */
  .footfix{
    position: fixed;
    height: 1.11rem;
    line-height: 1.11rem;
    background-color: #fba207;
    bottom: 1.3rem;
    display: flex;
    width: 100%;
    z-index: 99;
  }
  .footfix>.fix{
    flex: 1;
    font-size: 0.28rem;
    color: #fff;
  }
  .footfix>div.fix:first-child{
    border-right: 1px solid #fffafa;
  }
  .star_price{
    z-index: 99;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 13.34rem;
    background-color:rgba(0,0,0,0.5);
  }
  .star_b{
    z-index:100;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    padding: 0.25rem 0.24rem;
    text-align: left;
  }
  .mint-actionsheet-list .mint-actionsheet-listitem,.mint-actionsheet-list .mint-actionsheet-button{
    font-size: 0.24rem!important;
  }

  .star_b p{
    font-size: 0.24rem;
    color: #333333;
    height: 0.29rem;
    line-height: 0.29rem;
    margin-bottom: 0.1rem;
  }
  .select>span{
    display:block;
    float: left;
    width: 1.73rem;
    height: 0.69rem;
    line-height: 0.69rem;
    font-size: 0.24rem;
    color: #666666;
    background-color: #ececec;
    text-align: center;
    margin: 0.08rem 0;
    margin-right: 0.03rem;
    overflow: hidden;
  }
  .select{
    margin-bottom: 0.2rem;
  }
  .selects{
    margin-bottom: 0.2rem;
  }
  .select>span:first-child{
    background-color: #fba207;
    color: #fff;
  }
  .selects>span:first-child{
    background-color: #fba207;
    color: #fff;
  }
  .selects>span{
    display:block;
    float: left;
    width: 2.32rem;
    height: 0.69rem;
    line-height: 0.69rem;
    font-size: 0.24rem;
    color: #666666;
    background-color: #ececec;
    text-align: center;
    margin: 0.08rem 0;
    margin-right: 0.03rem;
    overflow: hidden;
  }
  .isSure{
    width: 4.64rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background-color: #0ca2e1;
    border-radius: 0.4rem;
    color: #fff;
    text-align: center;
    margin: 0.3rem auto 0.3rem;
  }

</style>
