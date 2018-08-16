<template>
<div id="scenic">
  <div class="seardh">
    <span class="icon-1-15"></span>
    <input type="search" placeholder='导游/景区'  class='search'>
  </div>
    <mt-cell>
        <div class="page-loadmore-wrapper" style="height:13rem;width:100%">
            <mt-loadmore  @top-status-change="handleTopChange":bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded":auto-fill="false" ref="loadmore">
                <ul class="page-loadmore-list" v-if="list>0">
                </ul>
                <ul>
                    <li class="scenicList clearfix" v-for="(item,index) in list" :key="index">
                        <router-link class='scenic_a' :to="{path:'/tourDetail/?id='+item.id}" @click="routefn()">
                            <img :src="item.img" alt=" jingqu ">
                            <div class="conlist">
                                <div class="conlistL">
                                    <p class='title'>{{item.name}}</p>
                                    <p class='descript'> <span class="numberSale">销量：<em>{{item.salenumber}}</em></span> <span class="lines">|</span> <span class="satisfaction">满意度：<em>{{item.agree}}</em></span></p>
                                    <p class='star'>
                                    <span class='icon-1-21' v-for="(item,index) in item.startnumber"></span>
                                    <strong>{{item.startnumber}}分</strong>
                                    </p>
                                </div>
                                <div class="conlistR">
                                    <span>￥</span><strong>{{item.price}}</strong>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
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
    </mt-cell>

</div>

</template>

<script>
import config from "../../assets/js/config.js";
export default{
    name:'scenic',
    data(){
        return{
            pageNum: 1, //页码
            InitialLoading: true, //初始加载
            list: 0, //数据
            allLoaded: false, //数据是否加载完毕
            bottomStatus: "", //底部上拉加载状态
            topStatus: "", //顶部下拉加载状态
            translate: 0, //
            moveTranslate: 0
        }
    },
    mounted(){
        this.getmsg();
        // this. getmsg1()
    },
    methods:{
        getmsg() {
            var that = this;
            that.$ajax.get(config.market.tourlist).then(function(response) {
                that.list = eval(response.data);
                console.log(that.list)
            });
        },
        routefn() {
            this.$route.params;
        },
        handleBottomChange(status) {
            this.moveTranslate = 1;
            this.bottomStatus = status;
        },
        loadBottom() {
            var that = this;
            this.handleBottomChange("loading"); //上拉时 改变状态码
            this.pageNum += 1;
            that.$ajax.get(config.market.tourlist).then(function(response) {
                    //上拉加载更多 模拟数据请求这里为了方便使用一次性定时器
                    if (that.pageNum <= 3) {
                    //最多下拉三次
                    that.list = that.list.concat(eval(response.data)); //上拉加载 每次数值加12
                    } else {
                    that.allLoaded = true; //模拟数据加载完毕 禁用上拉加载
                    }
                    that.handleBottomChange("loadingEnd"); //数据加载完毕 修改状态码
                    that.$refs.loadmore.onBottomLoaded();
                    console.log(1)
                });
        },
        handleTopChange(status) {
            this.moveTranslate = 1;
            this.topStatus = status;
        },
        // getmsg1() {
        //     var that = this;
        //     that.$ajax.post("http://192.168.2.232:8080/zzycms1/productSystemApi/findById2",{"id":1},{headers:{'Content-Type':'text/html'}}
        //     ).then(function(response) {
        //         console.log(response.data);
        //     });
        // }
    }
}

</script>

<style scoped>
.mint-cell-value{width: 100%}
  #scenic{

  }
  .descript em{font-style: normal;}
  .descript .lines{ padding:0 .2rem}
  /*搜索框*/
  .seardh{
    text-align: center;
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

  /*底部列表*/
  .scenicList{
    padding: 0.38rem 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: 1px solid #e4e4e4;
  }
  .scenic_a{
    display: block;
  }
.scenicList img{
  width: 1.57rem;
  height: 1.6rem;
  display: block;
  float: left;
}

  .conlist{
    float: left;
    margin-left: 0.2rem;
    width: 72%;
  }
  .conlistL{
    float: left;
    width: 73%;
  }
  .conlistL .title{
    font-size: 0.3rem;
    color: #333;
    margin-bottom: 0.04rem;
  }
  .descript{
    font-size: 0.24rem;
    color: #959595;
    margin-bottom: 0.5rem;
  }
  .descript>.nature{
    color: #fba207;
    padding: 0.01rem 0.08rem;
    border: 1px solid #fba207;
    border-radius: 0.2rem;
  }
  .star strong{
    font-size: 0.24rem;
    color: #888888;
    font-weight: 400;
  }
.icon-1-21{
  color: #fba207;
}
  .conlistR{
    float: right;
    margin-top: 1.12rem;
  }
  .conlistR span{
    font-size: 0.2rem;
    color: #898989;
  }
  .conlistR strong{
    font-size: 0.36rem;
    color: #f73e3e;
  }
  .page-loadmore-wrapper {
    overflow: scroll;
    }
</style>
