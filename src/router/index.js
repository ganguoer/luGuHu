import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/Index'

import eatPage from '@/components/index/eatPage'
import my from '@/components/my/my'   //我的页面
import order from '@/components/my/order'   //我的订单页面
import myInfo from '@/components/my/myInfo'   //我的信息详情页面
import notify from '@/components/my/notify'   //我的 通知 页面

import guide from '@/components/guide/guide' //自导首页
import scenic from '@/components/guide/scenic' //自导详情页

import market from '@/components/market/market'  //微商城
import hotel from '@/components/market/hotel'  //微商城
import hotelDetail from '@/components/market/hotelDetail'  //微商城
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
      path: '/guide',    //自导页面
      name: 'guide',
      component: guide
    },
    {
      path: '/scenic',
      name: 'scenic',
      component: scenic
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
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    },
    {
      path: '/notify',
      name: 'notify',
      component: notify
    }
  ]
})
