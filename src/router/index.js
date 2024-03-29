// router.js

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView';
import Shop from '../views/Shop.vue';
import Contact from '../views/Contact.vue';
import SigninVue from '../views/Signin.vue';
import AdminVue from '@/views/Admin.vue';
import Profile from '../views/Profile.vue';
import SingleVue from '@/views/SingleVue.vue';
import Cart from '@/views/Cart.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/Shop/:productId',
    name: 'singleview',
    component: SingleVue,
    props: true
  },
  {
    path: '/',
    name: 'Signin',
    component: SigninVue,
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: AdminVue,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
