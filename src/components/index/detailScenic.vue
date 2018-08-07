<template>
<div>
    <mt-swipe :auto="5000" @change="handleChange">
        <mt-swipe-item><img src="../../assets/images/detailindex_02.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/detailindex_02.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/detailindex_02.jpg"></mt-swipe-item>
    </mt-swipe>
    <ul class="msg-ul">
        <li>开放时间：1月1日-12月31日 周一-周日</li>
        <li>电话：0834-6390322;0834-6390302</li>
        <li>推荐游玩时间：4月-10月</li>
    </ul>
    <h3 class="scenic-smart">景区概况</h3>
    <p class="smartdetail">泸沽湖古称鲁窟海子，又名左所海，俗称亮海。纳西族摩梭语“泸”为山沟，“沽”为里，意即山沟里的湖。泸沽湖旅游景区四周崇山峻岭，
        一年有三个月以上的积雪期。森林资源丰富，山清水秀，空气清新，景色迷人，泸沽湖被当地摩梭人奉为“母亲湖”。也被人们誉为“蓬莱仙境”。
        泸沽湖位于四川省与云南省交界处，为川滇共辖。湖泊略呈北西一东南走向，南北长9.5公里，东西宽5.2公里，湖岸线长约44公里，湖泊面积50.1平方
        公里，集水面积247.6平方公里，最大水深105.3米，平均水深为40.3米，湖水库容量为22.52亿立方米，湖水最大透明度达12米，湖面海拔2685米。 [1]
    </p>
    <h3 class="scenic-smart">交通</h3>
    <div class="conent">
        <p>客车：</p>
        <p>1.在丽江客运站乘坐大巴客车，先到宁蒗县城，到县城后乘坐小面包车(约30元/人)可前往泸沽湖。</p>
        <p>2.在丽江客运站乘坐到永宁的大巴在大落水村下即可，票价50元。</p>
        <p>3.丽江古城口玉河广场停车场每天早上有发往泸沽湖的旅游专线车，可抵达大洛水村和里格岛，往返车费160元/人，单程100元/人，早上8:00发车，车程</p>
        <p>4.丽江高快客运站每天有两班车发往泸沽湖大洛水村，分别是8:00和8:30，车程3小时左右，车费约100元/人</p>
        <p>5.丽江客运站每天有两班车发往泸沽湖大洛水村，分别是8:30和9:00，车程3小时，车费约106元/人</p>
        <p>租车：</p>
        <p>从丽江市区到泸沽湖可以自己租车，一般淡季为350-550元，旺季为550-800元</p>
    </div>
    <p class="addressmsg">地址：丽江市宁蒗彝族自治县永宁乡泸沽湖</p>
    <div id="addressdetail"></div>
    <div class="height15"></div>
</div>
</template>
<style scoped>
.addressmsg{
    height: .5rem;
    line-height: .5rem;
    padding: 0 5%;
    padding-top: .20rem;
    padding-bottom: .15rem
}
#addressdetail{
    width: 90%;
    margin:0 auto;
    height: 3.75rem
}
.scenic-smart{
    padding: .3rem ;
    font-weight: normal
}
.smartdetail{
    padding: .1rem .3rem .2rem;
    line-height: .44rem;
    border-bottom: solid 1px #eee;
}
.msg-ul li{
    height: .75rem;
    line-height: .75rem;
    text-align: left;
    padding-left: .35rem;
    border-bottom: solid 1px #eee;
}
.mint-swipe{
    height: 4.23rem;
    width: 100%
}
.conent p{
    padding: 0 .3rem;
    line-height: .44rem
}
.mint-swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #fff;
    opacity: .5;
    margin: 0 3px;
}
.mint-swipe-indicator .is-active {
    background: #fff;
    opacity: 1;
}
</style>
<script>
export default {
  name: "detailScenic",
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
      this.addressfn();
  },
  methods: {
    handleChange(index) {
        speed:'2000'
    },
    addressfn(){
        var map = new BMap.Map("addressdetail");          // 创建地图实例  
        var point = new BMap.Point(100.760136,27.700396);  // 创建点坐标  
        map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别 
        map.enableScrollWheelZoom(true); 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

