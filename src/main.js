// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import { store } from './state/state.js'
Vue.config.productionTip = false
export const eventBus = new Vue()
Vue.use(VueResource)
Vue.http.options.root = 'https://vue-http-5161.firebaseio.com/userdata.json'
var app = new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
app()
