<template>
   <div id="my">
       <div class="myimg">
         <img src="../../../static/images/my.png" alt="">
          <p>巴拉巴拉小魔仙</p>
       </div>
       <div class="bg"></div>
        <div class="myOrder">
           <div class="order">
               <span>我的订单</span>
               <div class="orderR">
                 <router-link to="/order">查看全部订单</router-link>
                 <span class="arrowright"> > </span>
               </div>
           </div>
           <ul class="orderList">
             <li>
               <router-link to="/order">
                 <span class="icon-1-01"></span><span>待付款</span>
               </router-link>
             </li>
             <li>
               <router-link to="/order">
                 <span class="icon-1-02"></span><span>已完成</span>
               </router-link>
             </li>
             <li>
               <router-link to="/order">
                 <span class="icon-1-03"></span><span>已退款</span>
               </router-link>
             </li>
           </ul>
        </div>
     <div class="bg"></div>
     <div class="myinfo">
       <div class="order">
         <span>个人信息</span>
         <div class="orderR">
           <router-link to="/order">查看详情</router-link>
           <span class="arrowright"> > </span>
         </div>
       </div>
     </div>
     <div class="bg"></div>
     <div class="myinfo">
       <div class="order">
         <span class="ling">消息 <img src="../../../static/images/my-info.png" alt=""></span>
         <div class="orderR">
           <router-link to="/order">查看详情</router-link>
           <span class="arrowright"> > </span>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
export default{
    name:'my',
    data(){
        return{

        }
    }
}

</script>

<style scoped>

#my{
  background: #f9f9f9;
}
.myimg{
  background: #fff;
  height: 1.85rem;
  border-bottom: 1px solid #e4e4e4;
  margin: 0 auto;
}
.myimg img{
  width: 0.98rem;
  height: 0.98rem;
  border-radius: 50%;
  margin-top: 0.4rem;

}
  .bg{
    background: #f9f9f9;
    height: 0.1rem;
  }
  .myOrder{
    height: 1.23rem;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  .myinfo{
    height: 0.37rem;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }

  .order{
    color: #000;
    height: 0.37rem;
    line-height: 0.37rem;
    border-bottom: 1px solid #e4e4e4;
    margin: 0 0.12rem;
  }
  .order>span{
    font-size: 0.14rem;
    float: left;
  }
  .orderR{
    float: right;
    color: #606060;
  }
  .orderR>a{
    color: #606060;
    padding-right: 0.06rem;
  }
  /*.arrowright{*/
    /*width: 0.2rem;*/
    /*height: 0.2rem;*/
  /*}*/
.orderList{
  width: 80%;
  margin: 0 auto;
  height: 0.85rem;
}
  .orderList li{
    float: left;
    margin: 0 10.5%;
    margin-top: 0.23rem;
  }
  .orderList>li>a>span:first-child{
    display: block;
    font-size: 0.20rem;
    margin-bottom: 0.08rem;
  }
  span.ling{
    position: relative;
  }
.order span img{
  position: absolute;
  top: 0.07rem;
  left: 0.32rem;
  display: inline-block;
  width: 0.08rem;
}
</style>
