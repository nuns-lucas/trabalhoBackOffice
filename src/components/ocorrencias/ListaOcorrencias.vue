<template>
  <div>
    <!-- Filtro por tipo -->
    <div class="row mb-3">
      <div class="col-md-4">
        <div class="input-group">
          <select 
            v-model="filtroStatus" 
            class="form-select"
            @change="aplicarFiltros"
          >
            <option value="">Todos os tipos</option>
            <option 
              v-for="status in statusProblema" 
              :key="status" 
              :value="status"
            >
              {{ formatarTipo(status) }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Tabela -->
    <div class="table-responsive">
      <table class="table table-hover align-middle">
        <thead>
          <tr>
            <th>Status</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ocorrencia in ocorrenciasFiltradas" :key="ocorrencia.id">
            <td>
              <Badge :status="ocorrencia.status" />
            </td>
            <td>{{ ocorrencia.nome }}</td>
            <td>{{ ocorrencia.mensagem }}</td>
            <td>
              <span class="badge bg-secondary">
                {{ formatarTipo(ocorrencia.tipo) }}
              </span>
            </td>
            <td>{{ formatarData(ocorrencia.data) }}</td>
          </tr>
          <tr v-if="ocorrenciasFiltradas.length === 0">
            <td colspan="6" class="text-center text-muted py-4">
              Nenhuma ocorrência encontrada com os filtros atuais
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import Badge from '@/components/ui/Badge.vue';

export default defineComponent({
  name: 'ListaOcorrencias',
  components: { Badge },
  props: {
    ocorrencias: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup(props) {
    const filtroStatus = ref('');

    const statusProblema = computed(() => {
      const status = new Set();
      props.ocorrencias.forEach(oc => status.add(oc.status));
      return Array.from(status);
    });

    const ocorrenciasFiltradas = computed(() => {
      if (!filtroStatus.value) return props.ocorrencias;
      return props.ocorrencias.filter(oc => oc.status === filtroStatus.value);
    });

    return {
      filtroStatus,
      statusProblema,
      ocorrenciasFiltradas
    };
  },
  methods: {
    formatarData(data) {
      if (!data) return '--/--/----';
      try {
        return new Date(data).toLocaleDateString('pt-BR');
      } catch {
        return data;
      }
    },
    formatarTipo(status) {
      return status ? status.charAt(0).toUpperCase() + status.slice(1) : '';
    }
  }
});
</script>

<style scoped>
.table {
  margin-bottom: 0;
}
.table th {
  font-weight: 600;
  font-size: 0.8rem;
}
</style>