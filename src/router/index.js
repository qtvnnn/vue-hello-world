import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Counter from '@/components/Counter'
import ProductList from '@/components/ProductList'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HelloWorld,
      isShowLeftMenu: true,
      menuName: 'Dashboard',
      children: [
        {
          path: '/',
          name: 'HomePage 1',
          component: HelloWorld,
          isShowLeftMenu: true,
          menuName: 'HomePage 1'
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      isShowLeftMenu: false,
      expand: false,
      menuName: 'Login'
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter,
      isShowLeftMenu: true,
      menuName: 'Counter'
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductList,
      isShowLeftMenu: true,
      menuName: 'Products'
    }
  ]
})
export default router
