import { useAccountStore } from '@/stores/account'
import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/views/HomePage.vue')
const LoginPage = () => import('@/views/LoginPage.vue')
const RegisterPage = () => import('@/views/RegisterPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage
    }
  ]
})

router.beforeEach((to) => {
  const accountStore = useAccountStore()
  const { loginState } = accountStore
  if (to.name !== 'Login' && to.name !== 'Register' && loginState === 'notLogin') {
    return { name: 'Login' }
  }
  return true
})

export default router
