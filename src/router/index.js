import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../components/Tabs.vue'

const routes = [
  {
    path: "/",
    redirect: "/welcome",
  },
  {
    path: '/home',
    component: Tabs,
    children: [
      {
        path: '',
        name: "home",
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/Welcome.vue')
  },
  {
    path: '/card-details',
    name: 'card-details',
    component: () => import('@/views/CardDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
