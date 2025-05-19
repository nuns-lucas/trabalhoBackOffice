import { createRouter, createWebHashHistory } from 'vue-router';
import { auth, onAuthStateChanged } from '@/firebase';
import MenuGeral from '@/views/MenuGeral.vue';
import MenuOcorrencias from '@/views/MenuOcorrencias.vue';
import EditarOcorrencia from '@/views/EditarOcorrencia.vue';
import HistoricoOcorrencias from '@/views/MenuHistorico.vue';
import Login from '@/views/login.vue';
import PerfilPerito from '@/views/PerfilPerito.vue';
import HistoricoPerito from '@/views/HistoricoPerito.vue';
import MenuPerito from '@/views/MenuPerito.vue';
import InserirNovaOcorrencia from '@/views/inserirNovaOcorrencia.vue';
import AuditoriaForm from '@/views/AuditoriaForm.vue';
import RejeitarOcorrencia from '@/views/RejeitarOcorrencia.vue';
import CriarAuditoria from '@/views/CriarAuditoria.vue';
import GestaoMateriais from '@/views/GestaoMateriais.vue';
import DetalhesAuditoria from '@/views/DetalhesAuditoria.vue';

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
  },
  {
    path: '/ocorrencia/:id',
    name: 'AuditoriaForm',
    component: AuditoriaForm
  },
  {
    path: '/ocorrencia/:id/rejeitar',
    name: 'RejeitarOcorrencia',
    component: RejeitarOcorrencia
  },
  {
    path: '/ocorrencia/:id/criar-auditoria',
    name: 'CriarAuditoria',
    component: CriarAuditoria
  },
  {
    path: '/materiais',
    name: 'GestaoMateriais',
    component: GestaoMateriais,
    meta: { requiresAuth: true }
  },
  {
    path: '/auditoria/:id',
    name: 'DetalhesAuditoria',
    component: DetalhesAuditoria,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
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