import { createRouter, createWebHistory } from 'vue-router';
import { auth, onAuthStateChanged } from '@/firebase';
import MenuGeral from '@/views/MenuGeral.vue';
import MenuAtrasos from '@/views/MenuAtrasos.vue';
import MenuOcorrencias from '@/views/MenuOcorrencias.vue';
import EditarOcorrencia from '@/views/EditarOcorrencia.vue';
import HistoricoOcorrencias from '@/views/MenuHistorico.vue';
import Login from '@/views/login.vue';
import PerfilPerito from '@/views/PerfilPerito.vue';
import HistoricoPerito from '@/views/HistoricoPerito.vue';
import MenuPerito from '@/views/MenuPerito.vue';
import InserirNovaOcorrencia from '@/views/inserirNovaOcorrencia.vue';

const routes = [
  {
    path: '/inserirOcorrencia',
    name: 'InserirNovaOcorrencia',
    component: InserirNovaOcorrencia,
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    name: 'MenuGeral',
    component: MenuGeral,
    meta: { requiresAuth: true }
  },
  {
    path: '/atrasos',
    name: 'MenuAtrasos',
    component: MenuAtrasos,
    meta: { requiresAuth: true }
  },
  {
    path: '/ocorrencias',
    name: 'MenuOcorrencias',
    component: MenuOcorrencias,
    meta: { requiresAuth: true }
  },
  {
    path: '/ocorrencia/:id',
    name: 'EditarOcorrencia',
    component: EditarOcorrencia,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/historico',
    name: 'HistoricoOcorrencias',
    component: HistoricoOcorrencias,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/peritos',
    name: 'MenuPerito',
    component: MenuPerito,
    meta: { requiresAuth: true }
  },
  {
    path: '/perito/:id',
    name: 'PerfilPerito',
    component: PerfilPerito,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/perito/:id/historico',
    name: 'HistoricoPerito',
    component: HistoricoPerito,
    props: true,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        next('/login');
      }
    });
  } else {
    next();
  }
});

export default router;