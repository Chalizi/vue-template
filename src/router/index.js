import Vue from 'vue'
import About from '../components/About.vue'
import Hello from '../components/Hello.vue'

var routes = [
  {
    path: '/',
    component: Hello,
    children: [
      {
        path: '/about',
        component: About
      }
    ]
  },

]

export default routes