import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index.js'


Vue.use(VueRouter)

var router = new VueRouter({
  routes
})

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})

// new Vue({
//   render: h => h(App)
// }).$mount('#app')