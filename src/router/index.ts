import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '@/pages/Home.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { layout: 'HomeLayout' },
    // children: [
    //   {
    //     path: '/dashboard',
    //     name: 'dashboard',
    //     component: Dashboard,
    //   },
    // ],
  },
  {
    path: '/watch',
    name: 'watch.index',
    component: Home,
    meta: { layout: 'SideLessHomeLayout' },
    children: [
      {
        path: ':id',
        name: 'watch.show',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Home,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Home,
  },
  {
    path: '/forget',
    name: 'forget',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router