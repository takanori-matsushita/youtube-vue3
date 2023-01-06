import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '@/pages/Home.vue'
import Watch from '@/pages/Watch/index.vue'
import Upload from '@/pages/Upload/index.vue'
import Login from '@/pages/Login/index.vue'

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
    path: '/upload',
    name: 'upload',
    component: Upload,
    meta: { layout: 'HomeLayout' },
  },
  {
    path: '/watch',
    name: 'watch.index',
    component: Watch,
    meta: { layout: 'SideLessHomeLayout' },
    children: [
      {
        path: ':id',
        name: 'watch.show',
        component: Watch
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
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