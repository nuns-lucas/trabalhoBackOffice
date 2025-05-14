<template>
  <div>
    <!-- Filtros -->
    <div class="row mb-3">
      <!-- Filtro por Status -->
      <div class="col-md-4">
        <div class="input-group">
          <label class="input-group-text" for="filtroStatus">Status:</label>
          <select 
            id="filtroStatus"
            v-model="filtroStatus" 
            class="form-select"
            @change="aplicarFiltros"
          >
            <option value="">Todos os status</option>
            <option 
              v-for="status in statusProblema" 
              :key="status" 
              :value="status"
            >
              {{ formatarStatus(status) }}
            </option>
          </select>
        </div>
      </div>

      <!-- Filtro por Tipo -->
      <div class="col-md-4 ms-auto">
        <div class="input-group">
          <label class="input-group-text" for="filtroTipo">Tipo:</label>
          <select 
            id="filtroTipo"
            v-model="filtroTipo" 
            class="form-select"
            @change="aplicarFiltros"
          >
            <option value="">Todos os tipos</option>
            <option 
              v-for="tipo in tiposProblema" 
              :key="tipo" 
              :value="tipo"
            >
              {{ formatarTipo(tipo) }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Tabela com scroll -->
    <div class="table-responsive tabela-scroll">
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
          <tr 
            v-for="ocorrencia in ocorrenciasFiltradas" 
            :key="ocorrencia.id"
            @click="selecionarOcorrencia(ocorrencia)" 
            class="tabela-linha"
          >
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
import { defineComponent, ref, computed, watch } from 'vue';
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
  setup(props, { emit }) {
    const filtroStatus = ref('');
    const filtroTipo = ref('');

    const statusProblema = computed(() => {
      const status = new Set();
      props.ocorrencias.forEach(oc => status.add(oc.status));
      return Array.from(status);
    });

    const tiposProblema = computed(() => {
      const tipos = new Set();
      props.ocorrencias.forEach(oc => tipos.add(oc.tipo));
      return Array.from(tipos);
    });

    const ocorrenciasFiltradas = computed(() => {
      return props.ocorrencias.filter(oc => {
        const statusMatch = !filtroStatus.value || oc.status === filtroStatus.value;
        const tipoMatch = !filtroTipo.value || oc.tipo === filtroTipo.value;
        return statusMatch && tipoMatch;
      });
    });

    // Observa mudanças nas ocorrências filtradas e emite o evento
    watch(ocorrenciasFiltradas, (novasOcorrencias) => {
      emit('ocorrencias-filtradas', novasOcorrencias);
    });

    const selecionarOcorrencia = (ocorrencia) => {
      emit('selecionarOcorrencia', ocorrencia); // Emite o evento para o componente pai
    };

    return {
      filtroStatus,
      filtroTipo,
      statusProblema,
      tiposProblema,
      ocorrenciasFiltradas,
      selecionarOcorrencia
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
    formatarTipo(tipo) {
      return tipo ? tipo.charAt(0).toUpperCase() + tipo.slice(1) : '';
    },
    formatarStatus(status) {
      return status ? status.charAt(0).toUpperCase() + status.slice(1) : '';
    },
    aplicarFiltros() {
      // Método vazio para disparar a reatividade do filtro
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

/* Adiciona limite de altura e scroll */
.tabela-scroll {
  max-height: 200px; /* Ajusta o limite de altura com base no espaço restante */
  overflow-y: auto;
}

.tabela-linha {
  cursor: pointer; /* Adiciona um cursor de ponteiro para indicar que a linha é clicável */
}

.tabela-linha:hover {
  background-color: #f1f3f5; /* Adiciona um efeito de hover */
}
</style>