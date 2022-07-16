import { createWebHistory, createRouter } from 'vue-router';
import SwapAPI from '@/views/SwapAPI';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SwapAPI,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `SwapAPI: ${to.name}`;
  next();
});

export default router;
