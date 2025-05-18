<template>
  <div class="ver-ocorrencias-content">
    <main class="vo-main-content">
      <h2 class="vo-titulo">Lista de Ocorrências</h2>
      
      <div v-if="ocorrencias.length === 0" class="vo-sem-ocorrencias">
        <p>Nenhuma ocorrência encontrada.</p>
      </div>
      
      <div
        class="vo-caixa"
        v-for="ocorrencia in ocorrencias"
        :key="ocorrencia.id"
      >
        <p><strong>Tipo:</strong> {{ ocorrencia.tipo }}</p>
        <p><strong>Status:</strong> <span :class="getStatusClass(ocorrencia.status)">{{ ocorrencia.status }}</span></p>
        <p><strong>Linha:</strong> {{ ocorrencia.linha || 'Não informado' }}</p>
        <p><strong>Paragem:</strong> {{ ocorrencia.paragem || 'Não informado' }}</p>
        <p><strong>Data:</strong> {{ formatarData(ocorrencia.data) }}</p>
        <div class="vo-botoes">
          <img src="@/assets/list.webp" alt="Ver detalhes" @click="verDetalhes(ocorrencia)" />
          <img src="@/assets/tools.webp" alt="Resolver" @click="resolver(ocorrencia)" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "VerOcorrencias",
  data() {
    return {
      ocorrencias: []
    };
  },
  created() {
    this.carregarOcorrencias();
  },
  methods: {
    carregarOcorrencias() {
      try {
        // Tentar buscar as ocorrências do localStorage
        const dadosLocalStorage = localStorage.getItem('ocorrencias');
        
        if (dadosLocalStorage) {
          const dados = JSON.parse(dadosLocalStorage);
          
          // Verificar se os dados são um array de ocorrências ou um objeto com a propriedade 'ocorrencias'
          if (Array.isArray(dados)) {
            this.ocorrencias = dados;
          } else if (dados.ocorrencias && Array.isArray(dados.ocorrencias)) {
            this.ocorrencias = dados.ocorrencias;
          } else {
            this.ocorrencias = [];
            console.error('Formato de dados inválido no localStorage');
          }
        } else {
          this.ocorrencias = [];
        }
      } catch (error) {
        console.error('Erro ao carregar ocorrências:', error);
        this.ocorrencias = [];
      }
    },
    
    formatarData(dataISO) {
      if (!dataISO) return 'Data não informada';
      
      try {
        const data = new Date(dataISO);
        return data.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch (e) {
        return dataISO;
      }
    },
    
    getStatusClass(status) {
      switch (status?.toLowerCase()) {
        case 'aberta': return 'status-aberta';
        case 'em andamento': return 'status-andamento';
        case 'resolvida': return 'status-resolvida';
        case 'rejeitada': return 'status-rejeitada';
        default: return 'status-default';
      }
    },
    
    verDetalhes(ocorrencia) {
      localStorage.setItem("ocorrenciaSelecionada", JSON.stringify(ocorrencia));
      this.$router.push("/perito/detalhe-ocorrencia");
    },
    
    resolver(ocorrencia) {
      localStorage.setItem("ocorrenciaResolver", JSON.stringify(ocorrencia));
      this.$router.push("/perito/resolver");
    }
  }
};

import '@/assets/cssPerito/VerOcorrencias.css';
</script>

<style scoped>
.vo-sem-ocorrencias {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin: 20px 0;
}

.status-aberta {
  color: #ff9800;
  font-weight: bold;
}

.status-andamento {
  color: #2196F3;
  font-weight: bold;
}

.status-resolvida {
  color: #4CAF50;
  font-weight: bold;
}

.status-rejeitada {
  color: #F44336;
  font-weight: bold;
}

.status-default {
  color: #757575;
}
</style>