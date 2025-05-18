import { createRouter, createWebHashHistory } from 'vue-router'

// Importações das páginas
import ClienteHome from '../views/Cliente/ClienteHome.vue'
import PerfilCliente from '../views/Cliente/Perfil/Index.vue'
import Submeter from '../views/Cliente/Submeter/Index.vue'
import Transportes from '../views/Cliente/Transportes/Index.vue'
import RotaAutocarro from '../views/Cliente/Transportes/Rota.vue'
import DetalhesOcorrenciaCliente from '../views/Cliente/Ocorrencia/Detalhes.vue'
import LocalizacaoOcorrencia from '../views/Cliente/Ocorrencia/Localizacao.vue'
import HomePage from '../views/Login/HomePage.vue'
import WelcomePage from '../views/Login/WelcomePage.vue'
import RegisterPage from '../views/Login/RegisterPage.vue'
import LoginPage from '../views/Login/LoginPage.vue'
import AuditoriasRealizadas from '../views/Perito/AuditoriasRealizadas.vue'
import VerOcorrencias from '../views/Perito/VerOcorrencias.vue'
import PerfilPerito from '../views/Perito/Perfil.vue'
import DetalhesAuditoria from '../views/Perito/DetalhesAuditoria.vue'
import ResolverOcorrencias from '../views/Perito/ResolverOcorrencias.vue'
import DetalhesOcorrenciaPerito from '../views/Perito/DetalhesOcorrencia.vue'
import Loc from '../views/Perito/Loc.vue'


const routes = [
  { path: '/', component: WelcomePage },
  { path: '/home', component: HomePage},
  { path: '/registo', component: RegisterPage},
  { path: '/login', component: LoginPage},
  { path: '/cliente', component: ClienteHome },
  { path: '/cliente/perfil', component: PerfilCliente },
  { path: '/cliente/submeter', component: Submeter },
  { path: '/cliente/transportes', component: Transportes },
  { path: '/cliente/rota/:numero', component: RotaAutocarro },
  { path: '/cliente/ocorrencia/:id', component: DetalhesOcorrenciaCliente },
  { path: '/cliente/localizacao/:id', component: LocalizacaoOcorrencia },
  { path: '/perito', component: VerOcorrencias },
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