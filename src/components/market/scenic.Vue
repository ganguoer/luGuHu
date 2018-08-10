<template>
<div id="scenic">
  <div class="seardh">
    <span class="icon-1-15"></span>
    <input type="search" placeholder='景点名称/目的地'  class='search'>
  </div>

  <div class="scenicLists">
      <ul>
        <li class="scenicList clearfix">
          <router-link class='scenic_a' to='/scenicDetail'>
          <img src="../../../static/images/sceniclist.png" alt=" jingqu ">
          <div class="conlist">
               <div class="conlistL">
                 <p class='title'>神奇的女儿国生态游</p>
                 <p class='descript'> <span>泸沽湖 </span> <span>5A景区</span> <span class='nature'>自然风光</span></p>
                 <p class='star'>
                   <span class='icon-1-21'></span>
                   <span class='icon-1-21'></span>
                   <span class='icon-1-21'></span>
                   <span class='icon-1-21'></span>
                   <span class='icon-1-21'></span>
                   <strong>5分</strong>
                 </p>
               </div>
               <div class="conlistR">
                   <span>￥</span><strong>157</strong>
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
    name:'scenic',
    data(){
        return{

        }
    }
}

</script>

<style scoped>
  #scenic{

  }
  /*搜索框*/
  .seardh{
    text-align: center;
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

  /*底部列表*/
  .scenicList{
    padding: 0.38rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: 1px solid #e4e4e4;
  }
  .scenic_a{
    display: block;
  }
.scenicList img{
  width: 1.57rem;
  height: 1.6rem;
  display: block;
  float: left;
}

  .conlist{
    float: left;
    margin-left: 0.2rem;
    width: 72%;
  }
  .conlistL{
    float: left;
    width: 70%;
  }
  .conlistL .title{
    font-size: 0.3rem;
    color: #333;
    margin-bottom: 0.04rem;
  }
  .descript{
    font-size: 0.24rem;
    color: #959595;
    margin-bottom: 0.5rem;
  }
  .descript>.nature{
    color: #fba207;
    padding: 0.01rem 0.08rem;
    border: 1px solid #fba207;
    border-radius: 0.2rem;
  }
  .star strong{
    font-size: 0.24rem;
    color: #888888;
    font-weight: 400;
  }
.icon-1-21{
  color: #fba207;
}
  .conlistR{
    float: right;
    margin-top: 1.12rem;
  }
  .conlistR span{
    font-size: 0.2rem;
    color: #898989;
  }
  .conlistR strong{
    font-size: 0.36rem;
    color: #f73e3e;
  }
</style>
