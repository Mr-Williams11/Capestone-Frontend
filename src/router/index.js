// router.js

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView';
import Shop from '../views/Shop.vue';
import Contact from '../views/Contact.vue';
import SigninVue from '../views/Signin.vue';
import AdminVue from '@/views/Admin.vue';
import Profile from '../views/Profile.vue';

const routes = [
  {
    path: '/',
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
    path: '/Signin',
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
