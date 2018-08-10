<template>
<div id="scenicDetail">
  <div class="top">
     <img src="../../../static/images/scenicdetail.png" alt="">
     <p class='dtitle'><span class='icon-1-23'></span> 云南省丽江市宁蒗彝族自治县泸沽湖格姆女神山索道 <span class='icon-left-21'></span></p>
    <div class="bg"></div>
  </div>

   <div class="details">
      <div class="cheng">
         <h5 class='piao'>成人票</h5>
         <div class="chengD clearfix">
            <div class="chengDl">
               <div class='ctitle'>云南省丽江市宁蒗彝族自治县泸沽湖格姆女神山</div>
               <p class='explain'><span class='icon-1-22'></span>17:00前可订今日票  <span class='icon-1-22'></span>随时退 </p>
               <p class='know'>购买须知 ></p>
            </div>
           <div class="chengDr">
               <p class='price'> <span>￥</span><strong>105</strong> </p>
               <span class='pay'>在线支付</span>
               <div class='reserve'>预订</div>
           </div>
         </div>
        <div class="bg"></div>
      </div>

     <div class="cheng">
       <h5 class='piao'>成人票</h5>
       <div class="chengD clearfix">
         <div class="chengDl">
           <div class='ctitle'>云南省丽江市宁蒗彝族自治县泸沽湖格姆女神山</div>
           <p class='explain'><span class='icon-1-22'></span>17:00前可订今日票  <span class='icon-1-22'></span>随时退 </p>
           <p class='know'>购买须知 ></p>
         </div>
         <div class="chengDr">
           <p class='price'> <span>￥</span><strong>105</strong> </p>
           <span class='pay'>在线支付</span>
           <div class='reserve'>预订</div>
         </div>
       </div>
       <div class="bg"></div>
     </div>

     <div class="cheng">
       <h5 class='piao'>学生票</h5>
       <div class="chengD clearfix">
         <div class="chengDl">
           <div class='ctitle'>云南省丽江市宁蒗彝族自治县泸沽湖格姆女神山</div>
           <p class='explain'><span class='icon-1-22'></span>17:00前可订今日票  <span class='icon-1-22'></span>随时退 </p>
           <p class='know'>购买须知 ></p>
         </div>
         <div class="chengDr">
           <p class='price'> <span>￥</span><strong>105</strong> </p>
           <span class='pay'>在线支付</span>
           <div class='reserve'>预订</div>
         </div>
       </div>
       <div class="bg"></div>
     </div>

     <div class="cheng">
       <h5 class='piao'>门票预订说明</h5>
       <div class="chengD">

       </div>
   </div>
</div>
</div>

</template>

<script>
export default{
    name:'scenicDetail',
    data(){
        return{

        }
    }
}

</script>

<style scoped>
#scenicDetail{
    margin-bottom: 1.7rem;
}
.top img{
  height: 4.2rem;

}
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
  .chengD{
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
    font-size: 0.24rem;
    color: #444444;
    margin-bottom: 0.14rem;
  }
  .explain{
    font-size: 0.2rem;
  }
  .icon-1-22{
    color: #fba207;
  }
  .know{
    margin-top: 0.4rem;
    font-size: 0.2rem;
    color: #333333;
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
