<template>
  <div>
    <mt-cell>
      <div class="page-loadmore-wrapper" style="height:17rem">
        <mt-loadmore  @top-status-change="handleTopChange"
                      :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"
                      :auto-fill="false" ref="loadmore">
          <ul class="page-loadmore-list" v-if="list>0">
          </ul>
          <div class="platform">
            <ul>
              <li class="platformList" v-for="(item,index) in list" :key="index">
                <span class="date">{{item.times}}</span>
                <h3>{{item.title}}</h3>
                <div class="platinfo">
                  <img :src="item.srcimg" alt="">
                  <p style="-webkit-box-orient: vertical; ">{{item.descript}}</p>
                </div>
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
    </mt-cell>
  </div>

</template>

<script>
  import config from "../../assets/js/config.js";
  export default {
    name: "coupon",
    data() {
      return {
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
    mounted() {
      this.getmsg();
    },
    methods: {
      getmsg() {
        var that = this;
        that.$ajax.get(config.my.coupon).then(function(response) {
          that.list = eval(response.data);
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
        that.$ajax.get(config.my.coupon).then(function(response) {
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
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-cell-value{width: 100%}

  .platform{
    width: 100%;
  }
  .platformList{
    height: 2.6rem;
    border-radius: 0.06rem;
    border:1px solid #e4e4e4;
    background-color: #fff;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    padding: 0.36rem 0.5rem 0.4rem 0.28rem;
    position: relative;
    margin-top: 0.8rem;
    text-align: left;
  }
  .platformList>.date{
    font-size: 0.2rem;
    color: #fff;
    background-color: #bebebe;
    padding: 0.04rem 0.24rem;
    border-radius: 0.1rem;
    position: absolute;
    top: -0.36rem;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    left: 50%;
  }
  .platformList>h3{
    font-size: 0.3rem;
    color: #333333;
    font-weight: 400;
    text-align: left;
    margin-bottom: 0.3rem;
  }
  .platinfo{

  }
  .platinfo>img{
    width: 1.1rem;
    height: 1.1rem;
    float: left;
  }
  .platinfo>p{
    margin-left: 1.34rem;
    font-size: 0.24rem;
    line-height: 0.3rem;
    color: #666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

  }
  .page-loadmore-wrapper {
    overflow: scroll;
  }
  .mint-cell-wrapper{padding: 0 5%}
</style>
