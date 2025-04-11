<template>
  <div class="lista-ocorrencias-scroll">
    <div
      v-for="ocorrencia in ocorrenciasFiltradas"
      :key="ocorrencia.id"
      class="ocorrencia-card row"
      :class="'status-' + ocorrencia.status"
      @click="$emit('selecionarOcorrencia', ocorrencia)"
    >
      <div class="col-4">
        <img
          v-if="ocorrencia.foto"
          :src="ocorrencia.foto"
          alt="Foto da ocorrência"
          class="foto-ocorrencia"
        />
      </div>
      <div class="col-8">
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
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'OcorrenciasCard',
  props: {
    ocorrencias: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    ocorrenciasFiltradas() {
      // Filtra ocorrências com status "Pendente" ou "Encaminhado"
      const filtradas = this.ocorrencias.filter(
        (ocorrencia) =>
          (ocorrencia.status === 'Pendente' || ocorrencia.status === 'Encaminhado') &&
          (ocorrencia.tipo === 'atraso' || ocorrencia.tipo === 'avaria')
      );

      // Agrupa por tipo e ordena por data (mais recentes primeiro)
      const agrupadas = {
        atraso: [],
        avaria: [],
      };

      filtradas.forEach((ocorrencia) => {
        if (agrupadas[ocorrencia.tipo]) {
          agrupadas[ocorrencia.tipo].push(ocorrencia);
        }
      });

      // Ordena cada grupo por data e pega as 5 mais recentes
      Object.keys(agrupadas).forEach((tipo) => {
        agrupadas[tipo] = agrupadas[tipo]
          .sort((a, b) => new Date(b.data) - new Date(a.data))
          .slice(0, 4);
      });

      // Combina os dois grupos em um único array
      return [...agrupadas.atraso, ...agrupadas.avaria];
    },
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
          minute: '2-digit',
        };
        return new Date(data).toLocaleString('pt-PT', options);
      } catch {
        return data; // Fallback para o valor original se a formatação falhar
      }
    },
    formatarTipo(tipo) {
      return tipo ? tipo.charAt(0).toUpperCase() + tipo.slice(1) : '';
    },
  },
});
</script>

<style scoped>
.lista-ocorrencias-scroll {
  max-height: 700px; /* Define o limite de altura */
  padding: 8px;
  display: grid;
  gap: 16px;
  
}

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

.foto-ocorrencia {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
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