<template>
  <div>
    <mt-cell>
      <div class="page-loadmore-wrapper" >
        <mt-loadmore  @top-status-change="handleTopChange"
                      :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"
                      :auto-fill="false" ref="loadmore">
          <ul class="page-loadmore-list" v-if="list>0">
          </ul>
          <div class="all">
            <ul>
              <li class="list-order clearfix" v-for="(item,index) in list" :key="index">
                <div class="leftA">
                  <h5>{{item.title}}</h5>
                  <p>入住时间：{{item.startTimes}}  </p>
                  <p>离店时间：{{item.leaveTimes}}</p>
                </div>
                <div class="rightA">
                  <h6>{{item.price}}</h6>
                  <p>{{item.status}}</p>
                  <button>删除订单</button>
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
    name: "order3",
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
        that.$ajax.get(config.my.order3).then(function(response) {
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
        that.$ajax.get(config.my.order3).then(function(response) {
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

  .list-order{
    height: 2.6rem;
    border:1px solid #e4e4e4;
    border-radius: 6px;
    background: #fff;
    margin-top: 0.2rem;
    box-shadow:  3px 3px 2px #e4e4e4;
    -webkit-box-shadow: 3px 3px 3px #e4e4e4;
  }

  .list-order .leftA{
    float: left;
    width: 60%;
    text-align: left;
    margin-left: 4%;
  }

  .leftA>h5{
    font-size: 0.3rem;
    color: #333;
    margin-top: 0.34rem;
    margin-bottom: 0.26rem;
  }
  .leftA p{
    font-size: 0.2rem;
    color: #979797;
  }
  .list-order .rightA{
    float: right;
    width: 30%;
    text-align: right;
    margin-right: 4%;
  }
  .rightA>h6{
    color: #f73e3e;
    font-size: 0.32rem;
    margin-top: 0.34rem;
    margin-bottom: 0.64rem;
  }
  .rightA>p{
    font-size: 0.2rem;
    color: #fba207;
    margin-bottom: 0.2rem;
  }
  .rightA>button{
    font-size: 0.24rem;
    color: #1a1816;
    border-radius: 6px;
    background-color: #f9f9f9;
    border:1px solid #e4e4e4;
    padding: 0.06rem 0.2rem;
  }
  .page-loadmore-wrapper {
    overflow: scroll;
    width: 100%;
  }
  .mint-cell-wrapper{padding: 0 5%}
</style>
