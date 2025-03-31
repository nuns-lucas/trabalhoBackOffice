import { createRouter, createWebHistory } from 'vue-router';
import MenuGeral from '@/views/MenuGeral.vue';
import MenuAtrasos from '@/views/MenuAtrasos.vue';
import MenuOcorrencias from '@/views/MenuOcorrencias.vue';

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
  },
  {
    path: '/ocorrencias',
    name: 'MenuOcorrencias',
    component: MenuOcorrencias
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
