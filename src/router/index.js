import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Bookings from '../views/Bookings.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: Bookings
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
