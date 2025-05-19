<!-- filepath: /home/lucas/repos/kreca/pwa/src/views/Perito/DetalhesAuditoria.vue -->
<template>
  <div class="detalhes-auditoria-content">
    <main class="da-main-content">
      <div v-if="auditoria">
        <h2 class="da-titulo">{{ auditoria.titulo || 'Detalhes da Auditoria' }}</h2>

        <div class="da-caixa">
          <div class="da-status">
            <p><strong>Status:</strong> <span :class="getStatusClass(auditoria.status)">{{ auditoria.status }}</span>
            </p>
          </div>

          <div class="da-info-grid">
            <p><strong>Localização:</strong> {{ enderecoFormatado || auditoria.localizacao || 'Não informado' }}</p>
            <p><strong>Data:</strong> {{ formatarDataCurta(auditoria.data) }}</p>
          </div>
          
          <!-- Exibir coordenadas e botão para visualizar no mapa, se disponíveis -->
          <div v-if="auditoria.latitude && auditoria.longitude" class="da-coords">
            <p class="da-coordenadas">
              <a :href="getMapaUrl(auditoria.latitude, auditoria.longitude)" target="_blank" class="da-mapa-link">
                Ver no mapa 🗺️
              </a>
            </p>
            <div v-if="carregandoEndereco" class="da-carregando-endereco">
              <p>Obtendo endereço...</p>
            </div>
          </div>
          
          <p v-if="auditoria.dataConclusao"><strong>Concluída em:</strong> {{ formatarData(auditoria.dataConclusao) }}
          </p>
          <p><strong>Prevista para:</strong> {{ formatarDataCurta(auditoria.dataFinalizacao) }}</p>

          <div class="da-descricao">
            <p><strong>Descrição:</strong></p>
            <p>{{ auditoria.descricao || 'Sem descrição disponível' }}</p>
          </div>

          <!-- Link para imagem (se existir) -->
          <div v-if="auditoria.imagem" class="da-foto-container">
            <h3>Imagem</h3>
            <img :src="auditoria.imagem" alt="Imagem da auditoria" class="da-foto" />
          </div>
          <div v-else class="da-sem-foto">
            <p>Sem imagem disponível</p>
          </div>
        </div>

        <!-- Resultados da auditoria -->
        <div v-if="auditoria.resultados && auditoria.resultados.length > 0" class="da-caixa da-resultados-container">
          <p class="da-resultados-titulo"><strong>Histórico da auditoria:</strong></p>
          <div class="da-resultados-list">
            <div v-for="(resultado, index) in auditoria.resultados" :key="index" class="da-resultado-item">
              <div class="da-resultado-info">
                <p class="da-resultado-header">
                  <span class="da-resultado-data">{{ formatarDataCurta(resultado.data) }}</span>
                  <span v-if="resultado.peritoNome" class="da-resultado-perito">por {{ resultado.peritoNome }}</span>
                </p>
                <p class="da-resultado-mensagem">{{ resultado.mensagem }}</p>
              </div>
              <a v-if="resultado.imagem" :href="resultado.imagem" target="_blank" class="da-mini-link">🖼️</a>
            </div>
          </div>
        </div>

        <div class="da-voltar">
          <button @click="voltarParaLista" class="da-botao da-botao-voltar">
            Voltar
          </button>
        </div>
      </div>

      <div v-else class="da-sem-auditoria">
        <h3>Auditoria não encontrada</h3>
        <p>Não foi possível carregar os detalhes da auditoria selecionada.</p>
        <button @click="voltarParaLista" class="da-botao da-botao-voltar">Voltar</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "DetalhesAuditoria",
  data() {
    return {
      auditoria: null,
      enderecoFormatado: null,
      carregandoEndereco: false
    };
  },
  created() {
    this.carregarAuditoria();
  },
  methods: {
    carregarAuditoria() {
      try {
        const auditoriaData = localStorage.getItem('auditoriaSelecionada');

        if (auditoriaData) {
          this.auditoria = JSON.parse(auditoriaData);
          
          // Se houver coordenadas, buscar o endereço real
          if (this.auditoria.latitude && this.auditoria.longitude) {
            this.buscarEnderecoReal();
          }
        }
      } catch (error) {
        console.error('Erro ao carregar auditoria:', error);
        this.auditoria = null;
      }
    },
    
    async buscarEnderecoReal() {
      if (!this.auditoria.latitude || !this.auditoria.longitude) return;
      
      this.carregandoEndereco = true;
      
      try {
        // Usar o serviço de geocodificação reversa do OpenStreetMap
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${this.auditoria.latitude}&lon=${this.auditoria.longitude}&zoom=18&addressdetails=1`;
        
        const response = await fetch(url, {
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'KrecaPWA/1.0' // Importante para não violar os termos de uso da API
          }
        });
        
        if (!response.ok) {
          throw new Error('Falha ao obter o endereço');
        }
        
        const data = await response.json();
        
        // Formatar o endereço de maneira legível
        if (data && data.address) {
          const addr = data.address;
          const partes = [];
          
          // Montar o endereço com as partes disponíveis
          if (addr.road) partes.push(addr.road);
          if (addr.house_number) partes.push(addr.house_number);
          if (addr.suburb) partes.push(addr.suburb);
          if (addr.city || addr.town) partes.push(addr.city || addr.town);
          if (addr.postcode) partes.push(addr.postcode);
          
          this.enderecoFormatado = partes.join(', ');
        }
      } catch (error) {
        console.error('Erro ao buscar endereço:', error);
        // Em caso de erro, manter o endereço original
        this.enderecoFormatado = this.auditoria.localizacao || 'Endereço não disponível';
      } finally {
        this.carregandoEndereco = false;
      }
    },

    formatarCoordenadas(lat, lng) {
      if (!lat || !lng) return '';
      return `${Number(lat).toFixed(6)}, ${Number(lng).toFixed(6)}`;
    },
    
    getMapaUrl(lat, lng) {
      return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=17`;
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

    formatarDataCurta(dataISO) {
      if (!dataISO) return 'N/I';

      try {
        const data = new Date(dataISO);
        return data.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit'
        });
      } catch (e) {
        return 'N/I';
      }
    },

    getStatusClass(status) {
      switch (status?.toLowerCase()) {
        case 'aberta': return 'status-aberta';
        case 'em andamento': return 'status-andamento';
        case 'concluída': return 'status-resolvida';
        case 'pendente': return 'status-aberta';
        case 'rejeitada': return 'status-rejeitada';
        default: return 'status-default';
      }
    },

    voltarParaLista() {
      this.$router.go(-1); // Voltar para a página anterior
    }
  }
};
</script>

<style scoped>
.detalhes-auditoria-content {
  padding: 10px;
  height: auto;
  overflow: visible;
  max-width: 100%;
}

.da-main-content {
  padding-bottom: 55px;
  overflow: visible;
}

.da-titulo {
  text-align: center;
  margin: 0 0 10px 0;
  color: #5BB12F;
  font-size: 1.2rem;
}

/* Container de caixa compacto */
.da-caixa {
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

/* Espaçamento entre informações */
.da-caixa p {
  margin: 5px 0;
  font-size: 0.8rem;
  line-height: 1.2;
}

/* Seção de descrição compacta */
.da-descricao {
  margin: 8px 0;
  padding: 6px;
  background-color: #f9f9f9;
  border-radius: 4px;
  border-left: 2px solid #5BB12F;
  word-break: break-word;
  overflow-wrap: break-word;
}

/* Link para imagem */
.da-link-container {
  margin: 8px 0;
  text-align: center;
}

.da-link-imagem {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  background-color: #f0f9eb;
  border-radius: 4px;
  color: #5BB12F;
  font-size: 0.8rem;
  text-decoration: none;
  transition: background-color 0.2s;
}

.da-link-imagem:hover {
  background-color: #e1f3d8;
}

.da-icon-image {
  margin-right: 4px;
  font-style: normal;
}

/* Container de resultados */
.da-resultados-container {
  margin-bottom: 10px;
}

.da-resultados-titulo {
  margin-bottom: 6px;
  font-size: 0.85rem;
  color: #333;
}

.da-resultados-list {
  max-height: 200px;
  overflow-y: auto;
  border-top: 1px solid #f0f0f0;
}

.da-resultado-item {
  padding: 6px 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.da-resultado-info {
  flex: 1;
  min-width: 0;
}

.da-resultado-header {
  display: flex;
  justify-content: space-between;
  margin: 0 0 2px 0;
  font-size: 0.7rem;
  color: #666;
}

.da-resultado-perito {
  color: #5BB12F;
}

.da-resultado-mensagem {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.2;
  word-break: break-word;
}

.da-mini-link {
  font-size: 0.8rem;
  margin-left: 5px;
  flex-shrink: 0;
  text-decoration: none;
}

/* Mensagem sem auditoria */
.da-sem-auditoria {
  text-align: center;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin: 10px 0;
}

.da-sem-auditoria h3 {
  color: #5BB12F;
  margin-bottom: 6px;
  font-size: 1rem;
}

.da-sem-auditoria p {
  color: #666;
  font-size: 0.8rem;
  margin: 0 0 10px 0;
}

/* Botão de voltar */
.da-voltar {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.da-botao {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.85rem;
  transition: background-color 0.2s ease;
}

.da-botao-voltar {
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
}

.da-botao-voltar:hover {
  background-color: #e6e6e6;
}

/* Status coloridos */
.da-status {
  margin-bottom: 6px;
  padding-bottom: 6px;
  border-bottom: 1px solid #eee;
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

/* Layout grid para informações principais */
.da-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px;
}

/* Para telas muito pequenas, remover o grid */
@media (max-width: 320px) {
  .da-info-grid {
    display: block;
  }
}

/* Novos estilos para as coordenadas e link do mapa */
.da-coords {
  margin: 6px 0;
  font-size: 0.8rem;
}

.da-coordenadas {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0;
}

.da-mapa-link {
  color: #2196F3;
  text-decoration: none;
  font-size: 0.75rem;
  background-color: #e3f2fd;
  padding: 3px 6px;
  border-radius: 4px;
  margin-left: 5px;
  white-space: nowrap;
}

.da-mapa-link:hover {
  background-color: #bbdefb;
}

.da-carregando-endereco {
  font-size: 0.75rem;
  color: #666;
  font-style: italic;
  margin-top: 2px;
}

/* Estilo para container de foto */
.da-foto-container {
  margin: 10px 0;
  text-align: center;
}

.da-foto-container h3 {
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #333;
}

.da-foto {
  max-width: 100%;
  max-height: 180px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.12);
}

.da-sem-foto {
  text-align: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 6px;
  margin: 10px 0;
  color: #757575;
  font-size: 0.85rem;
}
</style>