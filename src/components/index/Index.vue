<template>
  <div>
    <div class="topbanner"><img src="../../assets/images/index_02.jpg"></div>
    <ul class="navheader">
      <li>
        <router-link :to="{path:'/eatpage'}">
          <div class="navitem">
            <img src="../../assets/images/index_05.jpg" >
          </div>
          <p>吃</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/eatpage'}">
          <div class="navitem">
            <img src="../../assets/images/index_07.jpg" >
          </div>
          <p>住</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/eatpage'}">
          <div class="navitem">
            <img src="../../assets/images/index_09.jpg" >
          </div>
          <p>行</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/eatpage'}">
          <div class="navitem">
            <img src="../../assets/images/index_11.jpg" >
          </div>
          <p>游</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/eatpage'}">
          <div class="navitem">
            <img src="../../assets/images/index_13.jpg" >
          </div>
          <p>购</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/eatpage'}">
          <div class="navitem">
            <img src="../../assets/images/index_15.jpg" >
          </div>
          <p>娱</p>
        </router-link>
      </li>
    </ul>
    <div class="scenicmap"><img src="../../assets/images/index_23.jpg"></div>
    <p class="introduce">泸沽湖，俗称左所海，古名勒得海、鲁枯湖，纳西族摩梭语“泸”为山沟，“沽”为里，意即山沟里的湖，湖位于四川省盐源县与云南省宁蒗县交界处，为川滇共辖，湖东为盐源县泸
      沽湖镇（原左所区），湖西为宁蒗县永宁乡。湖泊略呈北西一东南走向，南北长9.5公里，东西宽5.2公里，湖岸线长约44公里，湖泊面积50.1平方公里，集水面积247.6平方公里，
      最大水深105.3米，平均水深为40.3米，湖水库容量为22.52亿立方米，湖水最大透明度达12米，湖面海拔2685米。
    </p>
    <router-link :to="{path:'/detailScenic'}" class="detail-text"> >>  查看详情</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style scoped>
  .navheader{width: 90%; margin: 0 auto; margin-top: .2rem;position: relative;z-index: 2}
  .navheader li{width: 15%;margin-right: 2%; text-align: center;font-size: .28rem; float: left;}
  .navheader li p{padding-top: .1rem; color:#666}
  .navheader li:nth-last-child(1){margin-right:0}
  .navitem{width:.85rem;height:.85rem;margint: 0 auto}
  .scenicmap{position: relative; z-index: 1; top: -.18rem;width: 100%}
  .introduce{width:90%; margin: 0 auto; position: relative; top: -.55rem; z-index: 3; text-align: left; text-indent: .3rem;height: 1.2rem; line-height: .4rem;overflow: hidden; color: #6d6d6d}
  .detail-text{color: #fba207;color: #fba207;position: relative;right: 5%;text-align: right;width: 100%; display: block;top: -.39rem;}
</style>
