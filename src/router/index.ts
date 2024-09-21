import { useAccountStore } from '@/stores/account';
import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('@/views/HomePage.vue');
const LoginPage = () => import('@/views/LoginPage.vue');
const RegisterPage = () => import('@/views/RegisterPage.vue');
const LevelSelect = () => import('@/views/main/GameLevelSelect.vue');
const MyAccount = () => import('@/views/account/MyAccount.vue');
const Account = () => import('@/views/account/Account.vue');
const Game = () => import('@/views/main/Game.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage,
      redirect: { name: 'LevelSelect' },
      children: [
        {
          path: '/home/level-select',
          name: 'LevelSelect',
          component: LevelSelect,
        },
        {
          path: '/home/game',
          name: 'Game',
          component: Game,
        },
        // {
        //   path: '/home/account',
        //   name: 'Account',
        //   component: MyAccount,
        // },
      ],
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      children: [
        {
          path: '/account/my-account',
          name: 'MyAccount',
          component: MyAccount,
        },
      ],
    },
  ],
});

// 开发时暂时不需要登录
// router.beforeEach((to) => {
//   const accountStore = useAccountStore()
//   const { loginState } = accountStore
//   if (to.name !== 'Login' && to.name !== 'Register' && loginState === 'notLogin') {
//     return { name: 'Login' }
//   }
//   return true
// })

export default router;
