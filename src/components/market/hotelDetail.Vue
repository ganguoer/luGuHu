<template>
 <div id="hotelDetail">
    <div class="top">
      <img src="../../../static/images/hoteldetail.png" alt="">
      <img class='shadow' src="../../../static/images/shadow.png" alt="">
      <p class='detailtitle'>泸沽湖同策戴斯大酒店  <span>高档型</span> <span>2017年开业</span></p>
    </div>
   <div class="comment">
       <p class='ping'> <span> <strong>4.5</strong>分</span> 158条点评  <router-link class='fr' to='/comment'>点评</router-link> </p>
       <p class='address'>阿诗玛北路（阿诗玛转台旁）  <router-link class='fr'  to='/comment'>地图</router-link> </p>
   </div>
   <div class="bg"></div>
   <div class="detailList">
     <div class="toplist">
         <div class="tll">
           09月04日 <span>今天 入住</span>
         </div>
       <div class="tll">
           09月04日 <span>明天 离店</span>
       </div>
     </div>
     <ul>
       <li class='contentlist'>
         <img src="../../../static/images/detaillist.png" alt="酒店房型">
         <div class="listR">
           <div class="listcon">
             <p>标准景观双床房 </p>
             <span>27m2     大床   8-17层</span>
           </div>
           <div class="price">
             <p><span>￥</span><strong>321</strong> 起</p>
              <span class='reserve'>预定</span>
           </div>
         </div>
       </li>
       <li class='contentlist'>
         <img src="../../../static/images/detaillist.png" alt="">
         <div class="listR">
           <div class="listcon">
             <p>标准景观双床房 </p>
             <span>27m2     大床   8-17层</span>
           </div>
           <div class="price">
             <p><span>￥</span><strong>321</strong> 起</p>
             <span class='reserve'>预定</span>
           </div>
         </div>
       </li>
     </ul>

   </div>

   <div class="details">
       <h5>酒店设施</h5>
       <div class="hotelD"></div>
       <h5>酒店政策</h5>
       <div class="hotelD"></div>
       <h5>儿童与加床 </h5>
       <div class="hotelD"></div>
       <h5>膳食安排 </h5>
       <div class="hotelD"></div>
       <h5>宠物 </h5>
       <div class="hotelD"></div>
   </div>
 </div>

</template>

<script>
export default{
    name:'hotelDetail',
    data(){
        return{

        }
    }
}

</script>

<style scoped>
  #hotelDetail{
    /*text-align: center;*/
  }
  .top{
    width: 100%;
    position: relative;
  }
.top>img{
  height: 4.24rem;
  display: block;
}
  .top .shadow{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1rem;
}
.top .detailtitle{
  width: 100%;
  padding: 0.24rem 0rem 0.24rem 0.3rem;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  font-size: 0.28rem;
  text-align: left;
  box-sizing: border-box;
}
  .detailtitle span{
    font-size: 0.18rem;
  }

  .comment{
    border-bottom: 1px solid #e7e7e7;
    text-align: left;
  }
  .comment p{
    height: 0.86rem;
    line-height: 0.86rem;
    margin: 0 0.3rem;
  }
  .ping{
    border-bottom: 1px solid #e7e7e7;
    font-size: 0.2rem;
    color: #8e8e8e;
  }
  .ping>span{
    color: #fba207;
    font-size: 0.24rem;
  }
  .ping>span>strong{
    font-size: 0.32rem;
    font-weight: 400;
  }
  .comment p a{
    color: #fba207;
    font-size: 0.24rem;
  }
  .address{
    color: #333333;
  }

.bg{
  height: 0.24rem;
  background-color: #f5f5f5;
}
.toplist{
  display: flex;
  height: 0.95rem;
}
.tll{
  flex: 1;
}
.contentlist{
  box-sizing: border-box;
  padding: 0.24rem 0.28rem;
  height: 1.64rem;
  border-bottom: 1px solid #e7e7e7;
}
.contentlist img{
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.1rem;
  float: left;
}
.listR{
  margin-left: 1.4rem;
}
  .listcon{
    width: 70%;
    float: left;
  }
  .listcon>p{
    font-size: 0.28rem;
    color: #333;
    height: 0.5rem;
    line-height: 0.5rem;
  }
  .listcon>span{
    font-size: 0.24rem;
    color: #b4b4b4;
  }
  .price{
    float: right;
  }
  .price>p{
    font-size: 0.2rem;
    color: #b7b7b7;
    margin-bottom: 0.3rem;
  }
  .price>p>span{
    font-size: 0.2rem;
    color: #fb5b59;
  }
  .price>p>strong{
    font-size: 0.3rem;
    color: #fb5b59;
  }
  .reserve{
    background-color: #fba207;
    padding: 0.1rem 0.36rem;
    border-radius: 0.24rem;
    color: #fff;
    font-size: 0.24rem;
  }
  .details>h5{
    font-size: 0.28rem;
    color: #0ca2e1;
    background-color: #f5f5f5;
    height: 0.8rem;
    line-height: 0.8rem;
    margin: 0;
    padding-left: 0.3rem;
    font-weight: 400;
  }
.hotelD{
  height: 2rem;
}
</style>
