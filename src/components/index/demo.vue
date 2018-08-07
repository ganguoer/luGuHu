<template>
<div class="page-loadmore">
<div class="page-title" style="text-align:center;">页面头部</div>
<div class="page-loadmore-wrapper" ref="wrapper" style="height:300px">
    <mt-spinner v-show="list<1 && InitialLoading" color="#26a2ff"></mt-spinner>
    <mt-loadmore :top-method="loadTop"  @top-status-change="handleTopChange"
            :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"
            :auto-fill="false" ref="loadmore">
    <!-- :auto-fill="true" 时页面加载完毕时 默认执行loadBottom 值为false时 自己写一个加载 -->
        <ul class="page-loadmore-list" v-if="list>0">
        </ul>
          <ul class="moredetail">
            <li v-for="(item,index) in list" :key="index">
              <h3>{{item.title}}</h3>
              <p class="sourcep">来源：{{item.source}}<span>发布时间：{{item.times}}</span></p>
              <div class="clearfix cont-detail">
                <div class="lf img-msg"><img :src="item.srcimg"></div>
                <div class="lf list-msg">
                  <p>{{item.descript}}</p>
                  <router-link :to="{path:'/indexlistdetail'}" ><span>>>  查看详情</span></router-link>
                </div>
              </div>
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
<div class="page-footer">页面底部</div>
</div>
</template>
<script>
import config from '../../assets/js/config.js'
export default {
  data() {
    return {
      pageNum: 1, //页码
      InitialLoading: true, //初始加载
      list: 0, //数据
      allLoaded: false, //数据是否加载完毕
      bottomStatus: "", //底部上拉加载状态
    //   wrapperHeight: 0, //容器高度
      topStatus: "", //顶部下拉加载状态
      translate: 0, //
      moveTranslate: 0
    };
  },
  mounted() {
    // let windowWidth = document.documentElement.clientWidth; //获取屏幕高度
    // if (windowWidth > 768) {
    //   //这里根据自己的实际情况设置容器的高度
    //   this.wrapperHeight = document.documentElement.clientHeight - 130;
    // } else {
    //   this.wrapperHeight = document.documentElement.clientHeight - 90;
    // }
    // setTimeout(() => {
    //   //页面挂载完毕 模拟数据请求 这里为了方便使用一次性定时器
    //   this.list = 12;
    // }, 1500);
    this.getmsg();
  },
  methods: {
    getmsg(){
      var that=this;
      that.$ajax.get(config.homePage.msgList).then(function(response) {
        that.list=eval(response.data)
        console.log(that.list)
      });
    },
    handleBottomChange(status) {
      this.moveTranslate = 1;
      this.bottomStatus = status;
    },
    loadBottom() {
        var that=this;
        this.handleBottomChange("loading"); //上拉时 改变状态码
        this.pageNum += 1;
        that.$ajax.get(config.homePage.msgList).then(function(response) {
            //上拉加载更多 模拟数据请求这里为了方便使用一次性定时器
            if (that.pageNum <= 3) {
            //最多下拉三次
            that.list =that.list.concat(eval(response.data)); //上拉加载 每次数值加12
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
    // translateChange(translate) {
    //   const translateNum = +translate;
    //   this.translate = translateNum.toFixed(2);
    //   this.moveTranslate = (1 + translateNum / 70).toFixed(2);
    // },
    loadTop() {
        var that=this;
      //下拉刷新 模拟数据请求这里为了方便使用一次性定时器
        this.handleTopChange("loading"); //下拉时 改变状态码
        this.pageNum = 1;
        this.allLoaded = false; //下拉刷新时解除上拉加载的禁用
        that.$ajax.get(config.homePage.msgList).then(function(response) {
            this.list = eval(response.data); //下拉刷新 数据初始化
            this.handleTopChange("loadingEnd"); //数据加载完毕 修改状态码
            this.$refs.loadmore.onTopLoaded();
        });
    }
  }
};
</script>
<style scoped>
.page-title,
.page-footer {
  text-align: center;
  position: absolute;
}
.page-title {
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.page-footer {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.page-title + * {
  margin-top: 50px;
}
@media (min-width: 768px) {
  .page-title {
    height: 90px;
    line-height: 90px;
  }
  .page-title + * {
    margin-top: 90px;
  }
}
.page-loadmore-listitem {
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.page-loadmore-listitem {
  border-top: 1px solid #eee;
}

.page-loadmore-wrapper {
  overflow: scroll;
}
.page-loadmore-list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}

  .moredetail li:first-child{border-top: none}
  .moredetail li{height: 2.86rem;border-top: solid 1px #e7e7e7;border-bottom:solid 1px #e7e7e7;background:#fff;padding: .2rem 5%}
  .moredetail li h3{font-size: .3rem;color: #333}
  .sourcep{color:#888;padding-top: .1rem}
  .sourcep span{padding-left: .4rem}
  .cont-detail{margin-top: .15rem;}
  .img-msg{width: 2.98rem; height: 1.85rem;}
  .list-msg{margin-left: .25rem;width: 3.5rem;}
  .list-msg p{text-indent: .4rem; height: 1.45rem; line-height: .36rem; overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 4;-webkit-box-orient: vertical;}
  .list-msg span{display: block;text-align: right; color: #ee9906}
</style>