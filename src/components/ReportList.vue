<template>
  <div class="reports-table">
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Localização</th>
            <th>Data</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ocorrencia in ocorrencias" :key="ocorrencia.id">
            <td>{{ ocorrencia.id }}</td>
            <td>{{ ocorrencia.tipo }}</td>
            <td>{{ ocorrencia.localizacao }}</td>
            <td>{{ formatDate(ocorrencia.data) }}</td>
            <td>
              <Badge :status="ocorrencia.status" />
            </td>
            <td>
              <button 
                class="btn btn-sm btn-primary me-2"
                @click="$emit('view', ocorrencia)"
              >
                Ver
              </button>
              <button 
                class="btn btn-sm btn-danger"
                @click="$emit('delete', ocorrencia.id)"
              >
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useOcorrencias } from '../state/ocorrencias';
import Badge from './Badge.vue';

const { ocorrencias, fetchOcorrencias } = useOcorrencias();

// Carrega os dados ao montar o componente
onMounted(() => {
  fetchOcorrencias();
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR');
};
</script>