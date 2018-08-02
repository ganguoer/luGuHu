import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/Index'
import my from '@/components/my/my'   //我的页面
import eatPage from '@/components/index/eatPage'
import order from '@/components/my/order'   //我的订单页面

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
    }
  ]
})
