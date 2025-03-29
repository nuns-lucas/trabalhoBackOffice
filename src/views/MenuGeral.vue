<template>
  <div class="menu-geral">
    <Sidebar />
    <div class="conteudo">
      <!-- Título da seção -->
      <h2 class="titulo-secao">Ocorrências Ativas Recentes</h2>

      <!-- Lista de Ocorrências Não Resolvidas -->
      <ListaOcorrencias
        :ocorrencias="ocorrenciasAtivas"
        v-if="ocorrenciasAtivas.length"
      />
      <div v-else class="sem-dados">
        <i class="bi bi-check-circle-fill"></i>
        Nenhuma ocorrência ativa no momento
      </div>

      <!-- Mapa de Ocorrências -->
      <MapaOcorrencias :ocorrencias="ocorrenciasAtivas" class="mapa-container"/>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useOcorrencias } from '@/state/ocorrencias';
import Sidebar from '@/components/layout/Sidebar.vue';
import ListaOcorrencias from '@/components/ocorrencias/ListaOcorrencias.vue';
import MapaOcorrencias from '@/components/ocorrencias/MapaOcorrencias.vue';

export default {
  name: 'MenuGeral',
  components: { Sidebar, ListaOcorrencias, MapaOcorrencias },
  setup() {
    const { estado } = useOcorrencias();

    // Filtra as 5 ocorrências mais recentes não resolvidas
    const ocorrenciasAtivas = computed(() => {
      return [...estado.ocorrencias]
        .filter(o => o.status !== 'Concluída')
        .sort((a, b) => new Date(b.data) - new Date(a.data))
        .slice(0, 5);
    });

    return {
      ocorrenciasAtivas
    };
  }
};
</script>

<style scoped>
.menu-geral {
  display: flex;
  min-height: 100vh;
}

.conteudo {
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
}

.titulo-secao {
  color: #2c3e50;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}

.sem-dados {
  padding: 20px;
  text-align: center;
  color: #28a745;
  background: white;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.sem-dados i {
  font-size: 1.5rem;
  margin-bottom: 10px;
  display: block;
  color: #28a745;
}

.mapa-container {
  margin-top: 30px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .conteudo {
    padding: 15px;
  }

  .titulo-secao {
    font-size: 1.3rem;
  }
}
</style>
