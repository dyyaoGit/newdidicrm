import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      redirect: '/news',
      component: layout,
      children: [
        {
          path: 'news',
          name: '新闻列表页',
          component: () => import('@/components/index')
        },
        {
          path: 'news/add',
          name: '新闻添加',
          component: () => import('~views/news/add')
        }
      ]
    }
  ]
})
