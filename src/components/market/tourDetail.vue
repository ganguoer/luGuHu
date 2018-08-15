<template>
<div id="scenicDetail">
  <div class="top">
    <img src="../../../static/images/dydetail.jpg" alt="" class="bigimg">
    <div class="tourphoto"></div>
    <div class="photoimg"><img src="../../../static/images/dy_09.jpg"></div>
  </div>
  <p class="tourname">杰克</p>
  <div class="link clearfix">
      <div class="lf"><a href="tel:15932000248"><span class="icon-1-19"></span>15932000248</a></div>
      <div class="lf weichart"><span class="icon-1-20"></span>微信交谈</div>
  </div>
  <div class='descript'> 
      <span class="numberSale">销量：<em>2</em></span> <span class="lines">|</span> <span class="satisfaction">满意度：<em>100%</em></span>
      <span class="evaluate"> <em>点评</em> ></span>
  </div>
   <div class="details">
      <div class="cheng">
         <div class="chengD clearfix">
            <div class="chengDl">
               <div class='ctitle'>优惠套餐价</div>
               <p class='know'>石林五日游</p>
            </div>
           <div class="chengDr">
               <p class='price'> <span>￥</span><strong>105</strong> </p>
               <div class='reserve'>预订</div>
           </div>
         </div>
        <div class="bg"></div>
      </div>

     <div class="cheng">
       <h5 class='piao'>服务宗旨</h5>
       <div class="chengD specisl">
           <p>1、为您提供热情、周到、细致的服务，生动活泼的讲解。</p>
           <p>2、持国家旅游局颁发的《导游证》带团，保证服务质量。</P>
           <p>3、坚持三不原则：不私自带客人进入收取回佣的购物店；不私自增加约定行程之外的其他消费点；不推荐客人进入非法性的消费场所。</p>
           <p>4、全程陪同讲解，提供能够为您提供吃、住、行、游、购、娱等各方面的向导服务。</p>
       </div>
       <h5 class='piao'>产品详情</h5>
       <div class="chengD specisl">
           <p>用胶片记录那些美好的景致，静止注定逝去的幻象，定格温暖的回忆，然后让它们慢慢变得陈旧而安静，搁浅在岁月低处落上尘埃。</p>
       </div>
       <div class="clearfix my-detailtit">
           <span class="liness"></span><span class="dot"></span>我的详细资料<span class="dot"></span><span class="liness"></span>
       </div>
       <ul class="clearfix listmsg">
            <li>年龄：26</li>
            <li>星座：水平座</li>
            <li>性格：活泼开朗</li>
            <li>惯籍：北京</li>
            <li>性格：活泼开朗</li>
            <li>学历：大学本科</li>
            <li>工龄：三年</li>
            <li>资质：中韩文高级导游</li>
            <li>爱好：户外运动，旅游</li>
        </ul>
         <div class="clearfix my-detailtit">
           <span class="liness"></span><span class="dot"></span>我的带队宣言<span class="dot"></span><span class="liness"></span>
       </div>
       <ul class="clearfix listmsg">
           <p>用我热情周到的服务让您的旅途更加轻松愉快！</p>
        </ul>
     </div>
</div>
</div>

</template>

<script>
export default{
    name:"tourDetail",
    data(){
        return{

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
