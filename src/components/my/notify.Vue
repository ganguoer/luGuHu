<template>
  <div id="notify">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">平台通知</mt-tab-item>
      <mt-tab-item id="2">消息通知</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="platform">
           <ul>
             <li class="platformList">
                 <span class="date">2017年09月11日  14：22</span>
                 <h3>第三届阿诗玛文化节十一劲爆来袭！</h3>
                  <div class="platinfo">
                    <img src="../../../static/images/notify.png" alt="">
                     <p style="-webkit-box-orient: vertical; ">金秋十月，在“阿诗玛”的故乡，演绎体验电影《阿诗玛》经典片段及情景金秋十月，在“阿诗玛”的故乡，演绎体验电影《阿诗玛》经典片段及情景...</p>
                  </div>
             </li>
             <li class="platformList">
               <span class="date">2017年09月11日  14：22</span>
               <h3>第三届阿诗玛文化节十一劲爆来袭！</h3>
               <div class="platinfo">
                 <img src="../../../static/images/notify.png" alt="">
                 <p style="-webkit-box-orient: vertical; ">金秋十月，在“阿诗玛”的故乡，演绎体验电影《阿诗玛》经典片段及情景金秋十月，在“阿诗玛”的故乡，演绎体验电影《阿诗玛》经典片段及情景...</p>
               </div>
             </li>
           </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="platform">
          <ul>
            <li class="platformList">
              <span class="date">2017年09月11日  14：22</span>
              <h3>您的优惠券2天后过期</h3>
              <div class="platinfo">
                <img src="../../../static/images/ticket.png" alt="">
                <p style="-webkit-box-orient: vertical; ">您的50元景点门票优惠券将在2天后过期，赶紧使用。</p>
              </div>
            </li>
            <li class="platformList">
              <span class="date">2017年09月11日  14：22</span>
              <h3>您的旅行结束</h3>
              <div class="platinfo">
                <img src="../../../static/images/ticket.png" alt="">
                <p style="-webkit-box-orient: vertical; ">您的行程已经结束，快快来对导游评价吧!</p>
              </div>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>

    </mt-tab-container>
  </div>

</template>

<script>
  export default{
    name:'notify',
    data(){
      return{
        selected:'1'
      }
    },
  }

</script>

<style scoped>
  .mint-navbar {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
    border:1px solid #e4e4e4;
  }
 .mint-tab-item-label{
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
  }
.platform{
  width: 100%;
}
.platform ul{
  width: 90%;
  margin: 0 auto;
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
    color: #666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

  }
</style>
