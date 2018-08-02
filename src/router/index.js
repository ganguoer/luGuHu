import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import my from '@/components/my/my'   //我的页面
import order from '@/components/my/order'   //我的订单页面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
