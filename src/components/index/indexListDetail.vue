<template>
    <div class="bgcolor">
        <div class="moredetail">
            <h3>安驿客栈（泸沽湖白格蓝调站）</h3>
            <p class="sourcep">来源：泸沽湖发布 <span>发布时间：2018-8-7</span></p>
        </div>
        <div class="descriptcontent">
            <img class="firstimg" src="../../assets/images/ynlgh_03.jpg" alt="">
            <p class="desdetail">安驿客栈，一家非常不错的客栈。本着自己也是开客栈的心态，所以外出选择住宿的要
                求还是比较高的。在携程上选了好久。最终选择这里。5.0分，能做到几百条评论还能保持在5.0分实属难得。所以怎么样
                也要来感受一下。事实证明我的选择是对的，不管是卫生还是服务都没得说，订房之后马上接到客栈电话询问需不需要接。
                因为下雨没带伞，告诉帅哥我们需要雨伞。到达停车场之后有点意外，因为怕行李多客栈居然来了4个帅哥帮忙拿行李。当时
                哪个感动呀！特别要表扬的应该是南卡帅哥，刚办理好入住就贴心的为咋家送上两份热呼呼的甜点。陪着咱们聊天喝茶。像许久
                未见的朋友一样。住在这里很有亲切感！所以来丽江的朋友可以放心选择这家。当然来腾冲也可以考虑选择我自己的和堂真美客栈
                ！不会让你们失望哦！不说了，上图。前四张为丽江安驿客栈。后五张为腾冲和堂真美..
            </p>
            <img class="firstimg" src="../../assets/images/ynlgh_06.jpg" alt="">
            <div class="titdiv clearfix"><span class="icon-s lf"></span> <span class="hoteltit lf">酒店设施</span></div>
            <ul>
                <li>服务设施宴会厅、餐厅、咖啡厅、酒吧、会议室、夜总会、桑拿、送餐服务 、洗衣服务、叫醒服务、礼宾司服务、水疗服务、擦鞋服务、健身设施、外币兑换、医疗支持等。</li>
                <li>娱乐设施康体娱乐休闲商务设施齐全，商务中心、桑拿、健身室、游泳池、健康水会、KTV包房、美容美发室、网球场、台球室、乒乓球室、商店、纪念品商店等各种服务项目一应俱全。</li>
                <li>餐饮设施武陵源国际度假酒店拥有多个特色中西餐厅，其中豪华大气的泰和盛世中餐厅面积680平方米，可同时容纳1200人用餐;豪华宴会厅可容纳700人的会议或用餐;另设有11间贵宾厢房、咖啡厅、大堂吧、茶室、池畔吧、行政酒廊。</li>
                <li>会议设施酒店多功能会议室可容纳500-600人会议，构思独特，布置灵活;视听器材品质优良，一应俱全;专业的会议及宴会团队，能随时为您精心安排各种会议展览。</li>
                <li>支付方式 前台现金支付或网上在线支付。</li>
            </ul>
        </div>
        <div class="height15">
        </div>
    </div>
</template>

<script>
export default {
  name: 'indexListDetail',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .titdiv{height: .66rem; background: #eeeeee; overflow: hidden; margin-top: .28rem}
    .titdiv .icon-s{width: .08rem; height:.33rem; background: #0ca2e1; display: inline-block;margin: .16rem 0 0 .15rem}
    .titdiv .hoteltit{display:inline-block;padding-left:.2rem; line-height: .66rem; color: #333;font-size: .28rem}
    .descriptcontent{background: #fff; border-top: solid 1px #e7e7e7; padding: 0 5%; margin-top: .1rem}
    .descriptcontent ul{margin-top: .2rem}
    .descriptcontent ul li{ line-height: .4rem}
    .desdetail{
        line-height: .45rem;
        height: 5.85rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 13;
        -webkit-box-orient: vertical;
        padding-top: .2rem
    }
    .descriptcontent .firstimg{ margin-top: .1rem}
    .bgcolor{background: #f0f0f0;width: 100%; height: 100%}
    .moredetail{
        height: .92rem;
        border-bottom: solid 1px #e7e7e7;
        background: #fff;
        padding: 0.2rem 5%;
    }
    .moredetail h3{font-size: .3rem; color: #333}
    .sourcep{color:#888;padding-top: .1rem}
    .sourcep span{padding-left: .3rem; }
</style>
