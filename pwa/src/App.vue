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

const paginasComBarra = ['/cliente', '/cliente/perfil', '/cliente/submeter', '/cliente/transportes'];
const paginasComHeader = ['/cliente', '/cliente/perfil', '/cliente/submeter', '/cliente/transportes','/perito','/perito/auditorias','/perito/perfil','/perito/detalhe-auditoria','/perito/resolver','/perito/detalhe-ocorrencia','/perito/loc'];
const paginasComBarraPerito = ['/perito','/perito/auditorias','/perito/perfil'];

const mostrarBarra = computed(() => paginasComBarra.includes(route.path));
const mostrarHeader = computed(() => paginasComHeader.includes(route.path));
const mostrarBarraPerito = computed(() => paginasComBarraPerito.includes(route.path));


</script>