<template>
  <div class="bgcolor">
      <div class="search_div">
        <div class="search_wrap">
          <span class="icon-1-15 iconsearch"></span>
          <input type="text" value="酒店名称/目的地" id="inputValue">
        </div>
      </div>
      <div class="page-loadmore-wrapper" style="height:17rem">
        <mt-loadmore  @top-status-change="handleTopChange"
                :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"
                :auto-fill="false" ref="loadmore">
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
      <div class="height15"></div>
  </div>
</template>

<script>
import config from "../../assets/js/config.js";
import { Loadmore } from "mint-ui";
export default {
  name: "eatPage",
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
    };
  },
  mounted() {
    // this.getmsg();
    $("#inputValue").on("focus", function() {
      $(this).val("");
    });
    $("#inputValue").on("blur", function() {
      if ($(this).val() == "") {
        $(this).val("酒店名称/目的地");
      }
    });
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
    // loadTop() {
    //     var that=this;
    //   //下拉刷新 模拟数据请求这里为了方便使用一次性定时器
    //     this.handleTopChange("loading"); //下拉时 改变状态码
    //     this.pageNum = 1;
    //     this.allLoaded = false; //下拉刷新时解除上拉加载的禁用
    //     that.$ajax.get(config.homePage.msgList).then(function(response) {
    //         that.list = eval(response.data); //下拉刷新 数据初始化
    //         that.handleTopChange("loadingEnd"); //数据加载完毕 修改状态码
    //         that.$refs.loadmore.onTopLoaded();
    //     });
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bgcolor {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
}
.search_div {
  height: 0.86rem;
  padding-top: 0.3rem;
  border-bottom: solid 1px #d6d6d6;
  background: #f4f4f4;
}
.search_wrap {
  width: 75%;
  border: solid 1px #f0f0f0;
  border-radius: 15px;
  height: 0.57rem;
  margin: 0 auto;
  position: relative;
}
.iconsearch {
  position: absolute;
  left: 0.3rem;
  top: 0.15rem;
  width: 0.26rem;
  height: 0.26rem;
}
.search_wrap input {
  height: 0.57rem;
  width: 85%;
  margin-left: 15%;
  line-break: 0.57rem;
  color: #666;
}
.moredetail li:first-child {
  border-top: none;
}
.moredetail li {
  height: 2.86rem;
  border-top: solid 1px #e7e7e7;
  border-bottom: solid 1px #e7e7e7;
  background: #fff;
  padding: 0.2rem 5%;
}
.moredetail li h3 {
  font-size: 0.3rem;
  color: #333;
}
.sourcep {
  color: #888;
  padding-top: 0.1rem;
}
.sourcep span {
  padding-left: 0.4rem;
}
.cont-detail {
  margin-top: 0.15rem;
}
.img-msg {
  width: 2.98rem;
  height: 1.85rem;
}
.list-msg {
  margin-left: 0.25rem;
  width: 3.5rem;
}
.list-msg p {
  text-indent: 0.4rem;
  height: 1.45rem;
  line-height: 0.36rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.list-msg span {
  display: block;
  text-align: right;
  color: #ee9906;
}
.page-loadmore-wrapper {
  overflow: scroll;
}
</style>
