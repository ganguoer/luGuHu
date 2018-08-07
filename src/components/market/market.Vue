<template>
<div id="market">
    <div class="top">
      <img src="../../assets/images/index_02.jpg" alt="">
    </div>
    <div class="mid">
       <div class="clearfix">
         <div class="midL">
           <router-link class='linkto' to='/hotel'>
             <img src="../../../static/images/scenic.png" alt="">
             门票
           </router-link>
         </div>
         <div class="midR">
           <router-link class='linkto' to='/hotel'>
             <img src="../../../static/images/hotelbg.png" alt="">
             酒店
           </router-link>
         </div>
       </div>
       <div class="midB">
         <router-link class='linkto' to='/hotel'>
           <img src="../../../static/images/guidebg.png" alt="">
           导游
         </router-link>
       </div>
    </div>
</div>

</template>

<script>

export default{
    name:'market',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
  .mid{
    margin:  0.6rem 0.55rem 0;
  }
.midL{
  width: 49.4%;
  height: 2.46rem;
  background: linear-gradient(to right,#61d9f3,#6897d6);
  float: left;
  /*margin-right: 0.06rem;*/
}
.midR{
  width: 49.4%;
  height: 2.46rem;
  background: linear-gradient(to right,#44baa5,#4bbf4b);
  float: right;
}
.midB{
  width: 100%;
  height: 2.46rem;
  background: linear-gradient(to right,#f9bf24,#f4c545,#f05d79);
  margin-top: 0.08rem;
}
  .linkto{
    width: 100%;
    height: 100%;
    display: block;
    font-size: 0.3rem;
    color: #fff;
  }
</style>
