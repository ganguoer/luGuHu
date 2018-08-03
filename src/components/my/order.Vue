<template>
<div id="order">

  <mt-navbar v-model="selected">
    <mt-tab-item id="1">全部</mt-tab-item>
    <mt-tab-item id="2">待付款</mt-tab-item>
    <mt-tab-item id="3">已完成</mt-tab-item>
    <mt-tab-item id="4">已退款</mt-tab-item>
  </mt-navbar>

  <!-- tab-container -->
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
       <div class="all">
         <ul>
           <li class="list-order">
             <div class="leftA">
                  <h5>泸沽湖同策戴斯大酒店</h5>
                  <p>入住时间：2017-10-01 12:00  </p>
                  <p>离店时间：2017-10-07 12:00</p>
             </div>
             <div class="rightA">
                 <h6>￥318</h6>
                  <p>待付款</p>
                  <button>删除订单</button>
             </div>
           </li>
           <li class="list-order">
             <div class="leftA">
               <h5>泸沽湖同策戴斯大酒店</h5>
               <p>入住时间：2017-10-01 12:00  </p>
               <p>离店时间：2017-10-07 12:00</p>
             </div>
             <div class="rightA">
               <h6>￥318</h6>
               <p>待付款</p>
               <button>删除订单</button>
             </div>
           </li>
         </ul>
       </div>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      22222222222222222222
    </mt-tab-container-item>
    <mt-tab-container-item id="3">
      3333333333333333333333
    </mt-tab-container-item>
    <mt-tab-container-item id="4">
      4444444444444444444444444
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>

<script>
export default{
    name:'order',
    data(){
        return{
          selected:'1'
        }
    },
}

</script>

<style >

  .mint-navbar {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .mint-tab-item-label {
    color: #000;
    background: #fff;
    font-size: 0.28rem!important;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #fe3c3c;
    color: #fe3c3c;
    margin-bottom: -2px;
  }
/*内容部分*/
  .mint-tab-container {
    overflow: hidden;
    position: relative;
    margin-top: 0.2rem;
  }

  .list-order{
    width: 92%;
    margin: 0 auto;
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
</style>
