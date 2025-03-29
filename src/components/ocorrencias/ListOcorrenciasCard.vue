<template>
  <div class="lista-ocorrencias">
    <div
      v-for="ocorrencia in ocorrencias"
      :key="ocorrencia.id"
      class="ocorrencia-card"
      :class="'status-' + ocorrencia.status"
    >
      <div class="cabecalho">
        <span class="data">{{ formatarData(ocorrencia.data) }}</span>
      </div>
      <p class="mensagem">{{ ocorrencia.mensagem }}</p>
      <div class="rodape">
        <span class="tipo">{{ formatarTipo(ocorrencia.tipo) }}</span>
        <span class="status">{{ ocorrencia.status }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Badge from '@/components/ui/Badge.vue';

export default defineComponent({
  name: 'OcorrenciasCard',
  components: {
    Badge
  },
  props: {
    ocorrencias: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    formatarData(data) {
      if (!data) return 'Data não informada';

      try {
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        };
        return new Date(data).toLocaleString('pt-PT', options);
      } catch {
        return data; // Fallback para o valor original se a formatação falhar
      }
    },
    formatarTipo(tipo) {
      return tipo ? tipo.charAt(0).toUpperCase() + tipo.slice(1) : '';
    }
  }
});
</script>

<style scoped>
.ocorrencia-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid;
}

.ocorrencia-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.status-Pendente {
  border-left-color: #dc3545;
}

.status-Encaminhado {
  border-left-color: #ffc107;
}

.status-Concluída {
  border-left-color: #28a745;
}


.lista-ocorrencias {
  display: grid;
  gap: 16px;
  padding: 8px;
}




.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.data {
  font-size: 0.8rem;
  color: #6c757d;
}

.mensagem {
  margin: 0 0 12px 0;
  font-size: 1rem;
  line-height: 1.4;
  color: #495057;
}

.rodape {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}

.tipo {
  background: #f1f3f5;
  padding: 4px 8px;
  border-radius: 4px;
  color: #495057;
}

.status {
  color: #6c757d;
  font-style: italic;
}

@media (max-width: 768px) {
  .ocorrencia-card {
    padding: 12px;
  }
}
</style>