import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Show from '../views/Show.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'Show',
    component: Show,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
