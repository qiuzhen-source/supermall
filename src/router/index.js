import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu from '@/components/menu/menu'
Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path : '/menu',
    component: Menu
  }
]
export default new Router({
  routes
})
