// index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue' // NEW
import AccessDeniedView from '@/views/AccessDeniedView.vue' // NEW
import { useAuth } from '@/stores/auth' // NEW
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: HomeView,
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: AboutView,
//   },
// ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { requiresAuth: true }, // limited
    },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/denied', name: 'denied', component: AccessDeniedView },
    { path: '/FireRegister', name: 'FireRegister', component: FirebaseRegisterView },
    { path: '/FireLogin', name: 'FireLogin', component: FirebaseSigninView },
    // { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.beforeEach((to) => {
  const { isAuthenticated } = useAuth()
  if (to.meta?.requiresAuth && !isAuthenticated.value) {
    return {
      path: '/login',
      query: { redirect: to.fullPath }, // redirect after login
    }
  }
  return true
})

export default router
