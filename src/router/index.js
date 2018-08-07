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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:index
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path:'/eatpage',
      name:"eatpage",
      component:eatPage
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
    }
  ]
})
