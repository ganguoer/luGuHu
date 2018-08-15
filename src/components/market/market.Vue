<template>
<div id="market">
    <div class="top">
      <img src="../../assets/images/index_02.jpg" alt="">
    </div>
    <div class="mid">
       <div class="clearfix">
         <div class="midL">
           <router-link class='linkto' to='/scenic'>
             <img src="../../../static/images/scenic.png" alt="" style='margin-top: 0.2rem;width: 70%;'>
            <p> 门票</p>
           </router-link>
         </div>
         <div class="midR">
           <router-link class='linkto' to='/hotel'>
             <img src="../../../static/images/hotelbg.png" alt="" style='margin-top: 0.5rem;'>
             <p>酒店</p>
           </router-link>
         </div>
       </div>
       <div class="midB">
         <router-link class='linkto' to='/tourGuideList'>
           <img src="../../../static/images/guidebg.png" alt="" style='margin-top: 0.5rem;width: 87%;'>
           <span>导游</span>
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
  #market{
    text-align: center;
  }
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
    position: relative;
  }
  .linkto>span{
    position: absolute;
    top: 56%;
    right: 30%;
  }
</style>
