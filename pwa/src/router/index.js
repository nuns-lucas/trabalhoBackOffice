import { createRouter, createWebHashHistory } from 'vue-router'

// Importações das páginas
import ClienteHome from '../views/Cliente/ClienteHome.vue'
import PerfilCliente from '../views/Cliente/Perfil/Index.vue'
import Submeter from '../views/Cliente/Submeter/Index.vue'
import OcorrenciaDetalhes from '../views/Cliente/Ocorrencia/OcorrenciaDetalhes.vue'
import LocalizacaoOcorrencia from '../views/Cliente/Ocorrencia/Localizacao.vue'
import HomePage from '../views/Login/HomePage.vue'
import WelcomePage from '../views/Login/WelcomePage.vue'
import Transportes from '../views/Cliente/Transportes/Index.vue'
import RotaAutocarro from '../views/Cliente/Transportes/Rota.vue'
import LoginPage from '../views/Login/LoginPage.vue'
import AuditoriasRealizadas from '../views/Perito/AuditoriasRealizadas.vue'
import PerfilPerito from '../views/Perito/Perfil.vue'
import DetalhesAuditoria from '../views/Perito/DetalhesAuditoria.vue'
import ResolverOcorrencias from '../views/Perito/ResolverOcorrencias.vue'
import DetalhesOcorrenciaPerito from '../views/Perito/DetalhesOcorrencia.vue'
import Loc from '../views/Perito/Loc.vue'
import LoginPeritos from '../views/Login/LoginPeritos.vue'
import IniciarAuditoria from '../views/Perito/IniciarAuditoria.vue'
import VerAuditoria from '../views/Perito/VerAuditoria.vue'

const routes = [
  // Rotas públicas
  { path: '/', component: WelcomePage },
  { path: '/home', component: HomePage},
  { path: '/login', component: LoginPage},
  { path: '/login-peritos', component: LoginPeritos},
  // Rotas para o cliente
  { path: '/cliente/transportes', component: Transportes },
  { path: '/cliente/rota/:numero', component: RotaAutocarro },
  { path: '/cliente', component: ClienteHome },
  { path: '/cliente/perfil', component: PerfilCliente },
  { path: '/cliente/submeter', component: Submeter },
  { path: '/cliente/ocorrencia/:id', name: 'ClienteOcorrenciaDetalhes', component: OcorrenciaDetalhes },
  { path: '/cliente/localizacao/:id', component: LocalizacaoOcorrencia },
  // Rotas para o perito
  { path: '/perito', component: VerAuditoria },
  { path: '/perito/resolver-auditoria', component: IniciarAuditoria },
  { path: '/perito/auditorias', component: AuditoriasRealizadas },
  { path: '/perito/perfil', component: PerfilPerito },
  { path: '/perito/detalhe-auditoria', component: DetalhesAuditoria },
  { path: '/perito/resolver', component: ResolverOcorrencias },
  { path: '/perito/detalhe-ocorrencia', component: DetalhesOcorrenciaPerito },
  { path: '/perito/loc', component: Loc }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router