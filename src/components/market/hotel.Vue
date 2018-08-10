<template>
<div id="hotel">
   <div class="top">

   </div>
   <div class="seardh">
     <span class="icon-1-15"></span>
     <input type="search" placeholder='景点名称/目的地'  class='search'>
   </div>
   <div class="hotelList">
     <ul>
       <li class="hotelL">
          <router-link class='toHotel' to='/hotelDetail'>
            <img src="../../../static/images/hotel.png" alt="">
            <div class="hotelC clearfix">
              <div class="conL">
                <p class="title">新云南皇冠假日酒店</p>
                <span >800人点评 </span>  <span class="type">高档型</span>
                <p class='detail'>距离泸沽湖景区2.7公里</p>
                <div class="star">
                  <span class='icon-1-21'></span>
                  <span class='icon-1-21'></span>
                  <span class='icon-1-21'></span>
                  <span class='icon-1-21'></span>
                  <span class='icon-1-21'></span>
                  <span class="score">5分</span>
                </div>
              </div>
              <div class="conR">
                ￥<strong>2500</strong>起
           </div>
            </div>
          </router-link>
       </li>
     </ul>
   </div>
</div>

</template>

<script>
export default{
    name:'hotel',
    data(){
      value:''
    },
    methods: {

    }
}

</script>

<style scoped>
  #hotel{
    text-align: center;
  }
.top{
  width: 100%;
  height: 0.88rem;
  background-color: #fff;
}
.seardh{
  padding: 0.18rem 0;
  border-bottom: 1px solid #e4e4e4;
  background-color: #f4f4f4;
  position: relative;
}
.search::-webkit-input-placeholder{
  color:#666666;
}
.search:-moz-placeholder{
  color:#666666;
}
.search::-moz-placeholder{
  color:#666666;
}
.search:-ms-input-placeholder {
  color: #666666;
}
.seardh>span{
  font-size: 0.28rem;
  color: #666666;
  position: absolute;
  top: 0.34rem;
  left: 1.52rem;
}
.seardh>input{
  border: 1px solid #f0f0f0;
  height: 0.6rem;
  background-color: #fff;
  border-radius: 0.3rem;
  width: 65%;
  padding-left: 0.6rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
  .hotelList{
    width: 100%;
    background-color: #fff;
  }
  .hotelL{
    height: 2.39rem;
    border-bottom: 1px solid #e4e4e4;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 0.4rem 0.38rem;
  }
  .toHotel{
    display: block;
    width: 100%;
  }
.hotelL img{
  float: left;
  width: 1.57rem;
}
  .hotelC{
    margin-left:1.77rem;
    text-align: left;
  }
  .conL{
    width: 70%;
    float: left;
    font-size: 0.24rem;
    color: #959595;
  }
  .title{
    font-size: 0.3rem;
    color: #333333;
    margin-bottom: 0.06rem;
  }
  .detail{
    margin-top: 0.1rem;
    margin-bottom:0.12rem;
  }
  .type{
    color: #fba207;
    font-size: 0.18rem;
    border: 1px solid #fbb500;
    border-radius: 0.16rem;
    padding: 0rem 0.07rem;
    margin-left: 0.1rem;
  }
  .star>span{
     color: #fba207;
  }
.star .score{
    font-size: 0.24rem;
    color: #888888;
    margin-left:0.1rem;
  }
  .conR{
    float: right;
    color: #959595;
    margin-top: 1.2rem;
  }
  .conR>strong{
    font-size: 0.34rem;
    color: #f73e3e;
  }
</style>
