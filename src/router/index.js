import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import snow from '@/components/snow'
import banjo from '@/components/banjo'
import ch from '@/components/ch'
import lauren from '@/components/lauren'
import ggg from '@/components/ggg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/snow',
      name: 'snow',
      component: snow
    },
    {
      path: '/banjo',
      name: 'banjo',
      component: banjo
    },
    {
      path: '/ch',
      name: 'ch',
      component: ch
    },
    {
      path: '/lauren',
      name: 'lauren',
      component: lauren
    },
    {
      path: '/ggg',
      name: 'ggg',
      component: ggg
    },
  ]
})
