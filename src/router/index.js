import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import LiveChatroom from '../views/LiveChatroom'


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/LiveChatroom',
    name: 'LiveChatroom',
    component: LiveChatroom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
