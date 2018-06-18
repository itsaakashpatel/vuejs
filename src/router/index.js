import Vue from 'vue'
import Router from 'vue-router'
import RouterDemo from '../components/RouterDemo.vue'
import Home from '../components/Home.vue'
import RouterEdit from '../components/RouterEdit.vue'
import RouterDetail from '../components/RouterDetail.vue'

const RouterStart = resolve => {
  require.ensure(['../components/RouterStart.vue'], () => {
    resolve(require('../components/RouterStart.vue'))
  })
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/router/',
      name: 'router',
      component: RouterDemo,
      children: [
        {path: '', component: RouterStart},
        {path: ':id', component: RouterDetail},
        {path: ':id/edit', component: RouterEdit}
      ]
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/404',
      redirect: '/router'
    },
    // All routes - Generic catch
    {
      path: '*',
      redirect: '/router'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    }
  }
})
