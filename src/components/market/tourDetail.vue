<template>
<div id="scenicDetail">
  <div  v-for="(item,index) in list" :key="index">
  <div class="top">
    <img src="../../../static/images/dydetail.jpg" alt="" class="bigimg">
    <div class="tourphoto"></div>
    <div class="photoimg"><img :src="item.img"></div>
  </div>
  <p class="tourname">{{item.name}}</p>
  <div class="link clearfix">
      <div class="lf"><a href="tel:15932000248"><span class="icon-1-19"></span>{{item.tel}}</a></div>
      <div class="lf weichart"><span class="icon-1-20"></span>微信交谈</div>
  </div>
  <div class='descript'>
      <span class="numberSale">销量：<em>{{item.salenumber}}</em></span> <span class="lines">|</span> <span class="satisfaction">满意度：<em>{{item.agree}}</em></span>
      <span class="evaluate"> <em>点评</em> ></span>
  </div>
   <div class="details">
      <div class="cheng">
         <div class="chengD clearfix">
            <div class="chengDl">
               <div class='ctitle'>优惠套餐价</div>
               <p class='know'>{{item.title}}</p>
            </div>
           <div class="chengDr">
               <p class='price'> <span>￥</span><strong>{{item.price}}</strong> </p>
               <div class='reserve'>预订</div>
           </div>
         </div>
        <div class="bg"></div>
      </div>

     <div class="cheng">
       <h5 class='piao'>服务宗旨</h5>
       <div class="chengD specisl" v-html="item.zongzhi">
           {{item.zongzhi}}
       </div>
       <h5 class='piao'>产品详情</h5>
       <div class="chengD specisl" v-html="item.prodetail">
           {{item.prodetail}}
       </div>
       <div class="clearfix my-detailtit">
           <span class="liness"></span><span class="dot"></span>我的详细资料<span class="dot"></span><span class="liness"></span>
       </div>
       <div class="clearfix listmsg" v-html="item.ziliao">
            {{item.ziliao}}
        </div>
         <div class="clearfix my-detailtit">
           <span class="liness"></span><span class="dot"></span>我的带队宣言<span class="dot"></span><span class="liness"></span>
       </div>
       <ul class="clearfix listmsg" v-html="item.xuanyan">
           {{item.xuanyan}}
        </ul>
     </div>
    </div>
    </div>
</div>

</template>

<script>
import config from "../../assets/js/config.js";
export default{
    name:"tourDetail",
    data(){
        return{
          list:0
        }
    },
     mounted(){
        this.getmsg();
        // this. getmsg1()
    },
    methods:{
        getmsg() {
            var that = this;
            that.$ajax.get(config.market.tourdetail).then(function(response) {
                that.list = eval(response.data);
                console.log(that.list)
            });
        }
    }
}

</script>

<style scoped>
.listmsg{padding:.4rem .3rem;}
.listmsg li{float:left;width:50%;color:#333}
.listmsg p{color:#333}
.my-detailtit{height:.3rem; line-height:.3rem;width:3.5rem;text-align:center; margin:0 auto; color:#0ca2e1}
.liness{width:.56rem;height:1px;background:#0ca2e1; display:inline-block;vertical-align:middle;}
.dot{width:2px;height:2px;background:#0ca2e1;display:inline-block;vertical-align:middle;margin:0 .1rem}
#scenicDetail{padding-bottom:1.5rem}
.specisl{padding:0 .3rem}
.specisl p{line-height:.45rem; color:#333}
.details{border-top:solid .17rem #efefef}
.descript{height:.84rem; line-height:.84rem; padding-left:.3rem;position:relative}
.descript em{font-style: normal;}
.descript .lines{ padding:0 .2rem;}
.evaluate{position:absolute;right:.3rem;}
.evaluate em{color:#ee9906}
.top{ position:relative;z-index:1}
.top .bigimg{height: 3.69rem;}
.tourname{width:100%; text-align:center;margin-top:.45rem; color:#000;font-size:.28rem}
.link{margin-left:.3rem;margin-top:.23rem;padding-bottom:.25rem;border-bottom:solid 1px #e7e7e7}
.weichart{margin-left:.6rem}
.tourphoto{
    position:absolute;
    bottom:0;
    left:50%;
    margin-left:-1.44rem;
    width:2.88rem;
    height:1.43rem;
    z-index:2;
    overflow:hidden;
    background:url(../../../static/images/tourbg.png);
    background-size:100%
}
.icon-1-19:before{font-size:.32rem;color:#fe3c3c;margin-right:.1rem;vertical-align:middle}
.icon-1-20:before{font-size:.32rem;color:#25c025;margin-right:.1rem;vertical-align:middle}
.photoimg{position:absolute;width:1.54rem; height:1.54rem;left:50%; margin-left:-.77rem;bottom:-0.36rem;z-index:3;border-radius:50%;overflow:hidden}
.dtitle{
  font-size: 0.24rem;
  color: #333333;
  height: 0.78rem;
  line-height: 0.78rem;
  background-color: #fff;
  padding-left: 0.3rem;
}

 .icon-1-23{
   color: #0ca2e1;
   font-size: 0.24rem;
 }
  .icon-left-21{
    font-size: 0.18rem;
    color: #a3a3a3;
    float: right;
    padding-right: 0.3rem;
    margin-top: 0.26rem;
  }
.bg{
  height: 0.2rem;
  background-color: #efefef;
}

.piao{
  margin: 0rem;
  border-left: 0.08rem  solid #0ca2e1;
  font-size: 0.28rem;
  color: #333333;
  margin: 0.16rem 0.3rem;
  padding-left: 0.14rem;
}
  .specisl{
    width: 100%;
    box-sizing: border-box;
    border-top: 3px solid #efefef;
    padding: 0.16rem 0;
  }
  .chengDl{
    width: 74%;
    float: left;
    padding-left: 0.3rem;
    border-right: 1px solid #efefef;
  }
  .ctitle{
    font-size: 0.28rem;
    color: #222;
    margin-bottom: 0.14rem;
  }
  .explain{
    font-size: 0.2rem;
  }
  .icon-1-22{
    color: #fba207;
  }
  .know{
    font-size: 0.2rem;
    color: #8e8e8e;
  }
  .chengDr{
    width: 20%;
    float: right;
  }
  .price{
    margin-bottom: 0.18rem;
    padding-left: 0.16rem;
  }
  .price span{
     font-size: 0.2rem;
    color: #929292;
  }
  .price strong{
    font-size: 0.3rem;
    color: #f73e3e;
  }
.pay{
  font-size: 0.2rem;
  color: #888888;
  padding-left: 0.12rem;
}
.chengD{
    padding:.3rem
}
  .reserve{
    font-size: 0.24rem;
    color: #fff;
    width: 1.26rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    background-color: #fba207;
    border-radius: 0.25rem;
    margin-top:0.1rem;
  }
</style>
