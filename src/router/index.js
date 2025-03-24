import { createRouter, createWebHistory } from 'vue-router';
import MenuGeral from '@/views/MenuGeral.vue';
import MenuAtrasos from '@/views/MenuAtrasos.vue';

const routes = [
  {
    path: '/',
    name: 'MenuGeral',
    component: MenuGeral
  },
  {
    path: '/atrasos',
    name: 'MenuAtrasos',
    component: MenuAtrasos
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
