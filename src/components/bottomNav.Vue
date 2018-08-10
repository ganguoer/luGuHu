<template>
  <div class="footer">
    <div v-for='(item,index) of items' :key="index" :class='[item.cls,{on:index === idx}]' @click="$router.push(item.push)">
      <span  :class='[item.icon,{onb:index === idx}]'> </span>
      <p :class="['colorChange',{on:index === idx}]" >{{item.name}}</p>
    </div>
     <div class="mark"></div>
  </div>
</template>

<script type="text/javascript">

  export default{
    name:'bottomNav',
    props:['idx'],
    data(){
      return {
        items:[{
          cls:"home",
          name:"首页",
          push:"/",
          icon:"icon-1-07",
        },
          {
            cls:"info",
            name:"资讯",
            push:"/sceSpotDys",
            icon:"icon-1-08",
          },
          {
            cla:"market",
            name:"微商城",
            push:"/market",
            icon:"icon-1-09",
          },
          {
            cla:"guide",
            name:"自导",
            push:"/guide",
            icon:"icon-1-10",
          },
          {
            cla:"my",
            name:"我的",
            push:"/my",
            icon:"icon-1-11",
          }]
      }
    }
  }

</script>

<style scoped>
  .footer{
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    height: 1.3rem;
    background: #3c3c3c;
    width: 100%;
    z-index: 1;
  }
  div{
    flex: 1;
    margin-top: 0.16rem;
    z-index: 3;
  }
  div span{
    background-image: linear-gradient(to bottom, #09b2f8, #91daf8);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 0.44rem;
  }
  div p{
    color:#fff;
    font-size: 0.22rem;



    padding-top: 0.12rem;
    z-index: 2;
  }
  /*.on{*/
    /*background-image: linear-gradient(to top, #09b2f8, #91daf8);*/
    /*height: 0.3rem;*/
    /*width: 0.3rem;*/
    /*margin-top: -0.1rem;*/
    /*border-radius: 50px 50px 0 0;*/
  /*}*/

  .onb{
    margin-top: -0.2rem;
  }
.mark{
  height: 0.4rem;
  width: 94%;
  border-radius: 0.2rem;
  background-color: #06b1f8;
  position: absolute;
  left: 3%;
  bottom: 0.14rem;
  z-index: 2;
}
</style>
