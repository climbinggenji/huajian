import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import work from '@/components/work'
import about from '@/components/about'
import service from '@/components/service'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/work',
      name: 'work',
      component: work,
      children: [
        {
          path: '/work/retail',
          name: 'retail',
          component: resolve => require(['@/components/work/retail'], resolve)
        },
        {
          path: '/work/brand',
          name: 'brand',
          component: resolve => require(['@/components/work/brand'], resolve)
        },
        {
          path: '/work/creativity',
          name: 'creativity',
          component: resolve => require(['@/components/work/creativity'], resolve)
        },
        {
          path: '/work/interior',
          name: 'interior',
          component: resolve => require(['@/components/work/interior'], resolve)
        }
      ]
    },
    {
      path: '/retail-detail',
      name: 'retail-detail',
      component: resolve => require(['@/components/work/retail-detail'], resolve)
    },
    {
      path: '/brand-detail',
      name: 'brand-detail',
      component: resolve => require(['@/components/work/brand-detail'], resolve)
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
  ]
})
