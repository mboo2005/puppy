import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import GeoSelect from '@/components/geoSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/geo',
      name: 'geo',
      component: GeoSelect
    }
  ]
})
