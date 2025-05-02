import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue'; // Pastikan ini digunakan
import BookingPage from '@/views/Booking.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/booking',
    name: 'booking',
    component: BookingPage
  },
  {
    path: '/signup', // Rute untuk halaman SignUp
    name: 'signup',
    component: SignUp
  },
  {
    path: '/signin', // Rute untuk halaman SignIn
    name: 'signin',
    component: SignIn
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
