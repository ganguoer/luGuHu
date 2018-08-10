<template>
    <div class="bgcolor">
        <div v-for="(item,index) in msg" :key="index">
            <div class="moredetail">
                <h3>{{item.titname}}</h3>
                <p class="sourcep">来源：{{item.resource}} <span>发布时间：{{item.times}}</span></p>
            </div>
            <div class="descriptcontent" v-html="item.hm">
                {{item.hm}}
            </div>
        </div>
        <div class="height15"></div>
    </div>
</template>

<script>
import config from "../../assets/js/config.js";
export default {
    name: 'marketlist',
    data () {
        return {
        msg: []
        }
    },
    mounted(){
        this.getmsg();
    },
    methods:{
        getmsg(){
            let id = this.$route.query.id
            var that=this;
            that.$ajax.get(config.news.marketlist).then(function(response) {
                that.msg=eval(response.data)
            });
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
