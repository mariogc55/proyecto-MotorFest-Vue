import { createRouter, createWebHistory } from 'vue-router';
import CarsView from '@/views/CarsView.vue';
import CarDetailsView from '@/views/CarDetailsView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: CarsView
  },
  {
    path: '/car/:id',
    name: 'car-details',
    component: CarDetailsView,
    props: true
  }
];

const router = createRouter({
  // En lugar de import.meta.env.BASE_URL, usa un valor de cadena vacío.
  history: createWebHistory(),
  routes
});

export default router;