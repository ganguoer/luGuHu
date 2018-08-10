import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/Index'

import eatPage from '@/components/index/eatPage'
import my from '@/components/my/my'   //我的页面
import order from '@/components/my/order'   //我的订单页面

import detailScenic from '@/components/index/detailScenic'

import myInfo from '@/components/my/myInfo'   //我的信息详情页面
import notify from '@/components/my/notify'   //我的 通知 页面
import indexListDetail from '@/components/index/indexListDetail'   //我 吃住行游详情页
import demo from '@/components/index/demo'

import guide from '@/components/guide/guide' //自导首页
// import scenic from '@/components/guide/scenic' //自导详情页

import market from '@/components/market/market'  //微商城
import hotel from '@/components/market/hotel'  //酒店
import hotelDetail from '@/components/market/hotelDetail'  //微商城

import comment from '@/components/market/comment'  //微商城评论
import scenic from '@/components/market/scenic'    //门票
import scenicDetail from '@/components/market/scenicDetail'    //门票详情
import tour from '@/components/market/tour'    //门票


import scenicSpotDynamics from '@/components/news/scenicSpotDynamics' //景区动态

import activeList from '@/components/news/activeList'
import marketList from '@/components/news/marketList'
import sportList from '@/components/news/sportList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:index
    },
    {
      path:'/eatpage',
      name:"eatpage",
      component:eatPage
    },
    {
      path: '/market',    //微商城页面
      name: 'market',
      component: market
    },
    {
      path: '/hotel',    //酒店页面
      name: 'hotel',
      component: hotel
    },
    {
      path: '/hotelDetail',    //酒店详情页面
      name: 'hotelDetail',
      component: hotelDetail
    },
    {
      path: '/comment',    //酒店详情评论
      name: 'comment',
      component: comment
    },
    {
      path:'/scenic',
      name:'scenic',
      component: scenic
    },
    {
      path:'/scenicDetail',
      name:'scenicDetail',
      component: scenicDetail
    },
    {
      path:'/tour',
      name:'tour',
      component: tour
    },
    {
      path: '/guide',    //自导页面
      name: 'guide',
      component: guide
    },
    {
      path: '/my',   //我的页面
      name: 'my',
      component: my
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/detailScenic',
      name: 'detailScenic',
      component: detailScenic
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    },
    {
      path: '/notify',
      name: 'notify',
      component: notify
    },
    {
      path:'/indexlistdetail',
      name:'indexlistdetail',
      component:indexListDetail
    },
    {
      path:'/demo',
      name:'demo',
      component:demo
    },
    {
      path:'/sceSpotDys',
      name:'scenicSpotDynamics',
      component:scenicSpotDynamics
    },
    {
      path:'/activeList',
      name:'activeList',
      component:activeList
    },
    {
      path:'/marketList',
      name:'marketList',
      component:marketList
    },
    {
      path:'/sportList',
      name:'sportList',
      component:sportList
    }
  ]
})
