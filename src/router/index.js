// index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue' // NEW
import AccessDeniedView from '@/views/AccessDeniedView.vue' // NEW
import { useAuth } from '@/stores/auth' // NEW
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import GetAllBooksAPI from '@/views/GetAllBooksAPI.vue'

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
  history: createWebHistory(process.BASE_URL),
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
    { path: '/addBook', name: 'addBook', component: AddBookView },
    { path: '/getBookCount', name: 'getBookCount', component: GetBookCountView },
    { path: '/WeatherCheck', name: 'WeatherCheck', component: WeatherView },
    { path: '/CountBookAPI', name: 'CountBookAPI', component: CountBookAPI },
    { path: '/GetAllBooksAPI', name: 'GetAllBooksAPI', component: GetAllBooksAPI },
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
