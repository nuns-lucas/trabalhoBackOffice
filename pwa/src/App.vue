<template>
  <div class="mobile-frame">
    <Header v-if="mostrarHeader" />

    <main class="content">
      <router-view />
    </main>

    <BottomNav v-if="mostrarBarra" />
    <BottomNavPerito v-if="mostrarBarraPerito" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BottomNav from './components/BottomNav.vue';
import BottomNavPerito from './components/BottomNavPerito.vue';
import Header from './components/Header.vue';
import '@/assets/app.css';

const route = useRoute();

const paginasComBarra = [
  '/cliente', 
  '/cliente/perfil', 
  '/cliente/submeter', 
  '/cliente/transportes'
  // Não incluímos a página de detalhes aqui, pois geralmente não queremos
  // mostrar a barra de navegação em páginas de detalhes para maximizar o espaço
];

// Atualizado para incluir a página de detalhes de ocorrência
const paginasComHeader = [
  '/cliente', 
  '/cliente/perfil', 
  '/cliente/submeter', 
  '/cliente/transportes',
  // Incluindo a rota dinâmica para detalhes de ocorrência
  '/perito',
  '/perito/auditorias',
  '/perito/perfil',
  '/perito/detalhe-auditoria',
  '/perito/resolver',
  '/perito/detalhe-ocorrencia',
  '/perito/loc',
  '/perito/resolver-auditoria',
];

const paginasComBarraPerito = [
  '/perito',
  '/perito/auditorias',
  '/perito/perfil'
];

const mostrarBarra = computed(() => paginasComBarra.includes(route.path));
const mostrarHeader = computed(() => paginasComHeader.includes(route.path));
const mostrarBarraPerito = computed(() => paginasComBarraPerito.includes(route.path));


</script>