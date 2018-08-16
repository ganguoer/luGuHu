<template>
  <div id="comment">
     <div class="top">
       <p><span>4.4分</span><span>94%推荐</span><span>卫生 4.5</span><span>环境 4.4</span><span>服务 4.4</span><span>设施 4.2</span></p>
     </div>

      <div class="comments">
        <ul>
          <li class='commentList'>
            <div class="comtop">
              <span class="icon-1-24"></span>
              <span class="score">4.5</span>
              <span class='name'>Jiali0517</span>
            </div>
            <p class='date'>2017-08入住，2017-08-17发表</p>
            <p class='content_d' style='-webkit-box-orient: vertical;'>环境很好，有游泳池，早餐也不错，晚上很安静，就是出行一定要有车 才方便，最好先预约，不然价格优惠少， 性价比不错。环境很好，有游泳池，早餐也不错，晚上很安静，就是出行一定要有车才方便，最好先预约，不然价格优惠少， 性价比不错。环境很好，有游</p>
            <div class="content_img">
              <img  src="../../../static/images/hotel.png" alt="">
            </div>
            <div class='reply'>
              <span>酒店回复：</span>感谢您对我们酒店的点评，我们会继续努力为您提供更加便捷幼稚的服务。期待您再次光临入住。
            </div>
            <p  class='reply1'>查看酒店回复 <span class='icon-bottom'></span></p>
          </li>
        </ul>
      </div>

  </div>

</template>

<script>

export default{
    name:'comment',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.top{
  height: 0.64rem;
  line-height: 0.64rem;
  background-color: #f5f5f5;
}
.top>p{
  padding-left: 0.2rem;
}
.top>p>span{
   padding-right: 0.2rem;
}
.top>p>span:first-child{
  color: #fba207;
}
.commentList{
  padding: 0.3rem 0.24rem 0.2rem;
  border-bottom: 1px solid #e7e7e7;
}
.comtop{
  position: relative;
}
.icon-1-24{
  font-size: 0.68rem;
  color: #0ca2e1;
}
  .score{
    font-size: 0.24rem;
    color: #fff;
    position: absolute;
    top: 0.13rem;
    left: 0.15rem;
  }
  .name{
    font-size: 0.22rem;
    color: #9b9b9b;
    position: absolute;
    top: 0.13rem;
    left: 0.8rem;
  }
  .date{
    font-size: 0.18rem;
    color: #666;
    margin-bottom: 0.14rem;
  }
  .content_d{
    font-size: 0.22rem;
    color: #444444;
    line-height: 0.36rem;
    margin-bottom: 0.14rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
   -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .content_img>img{
    width: 1.39rem;
    height: 1.4rem;
    display: inline-block;
  }
  .reply{
    background-color: #f5f5f5;
    box-sizing: border-box;
    padding: 0.15rem 0.24rem;
    margin-top:0.14rem;
    display: none;
  }
  .reply>span{
    font-size: 0.22rem;
    font-weight: 700;
    color: #444;
  }
  .reply1{
    margin-top: 0.14rem;
  }
</style>
