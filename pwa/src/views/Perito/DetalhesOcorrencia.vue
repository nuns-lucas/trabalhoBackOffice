<template>
  <div class="detalhes-ocorrencia-content">
    <main class="do-main-content">
      <h2 class="do-titulo">Ocorrência #{{ ocorrencia.id }}</h2>

      <div class="do-caixa">
        <div class="do-status">
          <p><strong>Status:</strong> <span :class="getStatusClass(ocorrencia.status)">{{ ocorrencia.status }}</span></p>
        </div>
        
        <p><strong>Tipo:</strong> {{ ocorrencia.tipo }}</p>
        <p><strong>Data:</strong> {{ formatarData(ocorrencia.data) }}</p>
        <p><strong>Linha:</strong> {{ ocorrencia.linha || 'Não informado' }}</p>
        <p><strong>Paragem:</strong> {{ ocorrencia.paragem || 'Não informado' }}</p>
        <p><strong>Submetido por:</strong> {{ ocorrencia.nome }}</p>
        
        <div class="do-descricao">
          <p><strong>Descrição:</strong></p>
          <p>{{ ocorrencia.mensagem }}</p>
        </div>
        
        <div v-if="endereco">
          <p><strong>Endereço:</strong></p>
          <p>{{ endereco }}</p>
        </div>
        <div v-else-if="ocorrencia.latitude && ocorrencia.longitude">
          <p><strong>Localização:</strong></p>
          <p>Latitude: {{ ocorrencia.latitude }}, Longitude: {{ ocorrencia.longitude }}</p>
          <p v-if="carregandoEndereco">Obtendo endereço...</p>
        </div>
      </div>

      <div v-if="ocorrencia.foto" class="do-foto-container">
        <h3>Imagem</h3>
        <img :src="ocorrencia.foto" alt="Imagem da ocorrência" class="do-foto" @click="irParaLocalizacao"/>
      </div>
      <div v-else class="do-sem-foto">
        <p>Sem imagem disponível</p>
      </div>
      
      <div class="do-acoes">
        <button class="do-botao do-botao-resolver" @click="resolver">Resolver Ocorrência</button>
      </div>
    </main>

    <BottomVoltar />
  </div>
</template>

<script>
import BottomVoltar from "@/components/BottomVoltar.vue";

export default {
  name: "DetalhesOcorrencia",
  components: {
    BottomVoltar
  },
  data() {
    return {
      ocorrencia: JSON.parse(localStorage.getItem("ocorrenciaSelecionada")) || {},
      endereco: null,
      carregandoEndereco: false,
      erroEndereco: null
    };
  },
  mounted() {
    // Converter coordenadas em endereço
    if (this.ocorrencia.latitude && this.ocorrencia.longitude) {
      this.converterCoordenadas();
    }
  },
  methods: {
    converterCoordenadas() {
      this.carregandoEndereco = true;
      
      // Usando a API de Geocoding do Google Maps
      const geocoder = new google.maps.Geocoder();
      const latlng = {
        lat: parseFloat(this.ocorrencia.latitude),
        lng: parseFloat(this.ocorrencia.longitude)
      };
      
      geocoder.geocode({ location: latlng }, (results, status) => {
        this.carregandoEndereco = false;
        
        if (status === "OK") {
          if (results[0]) {
            this.endereco = results[0].formatted_address;
          } else {
            this.erroEndereco = "Endereço não encontrado";
          }
        } else {
          this.erroEndereco = `Geocoder falhou: ${status}`;
          console.error(this.erroEndereco);
        }
      });
    },
    
    formatarData(dataISO) {
      if (!dataISO) return 'Data não informada';
      
      try {
        const data = new Date(dataISO);
        return data.toLocaleDateString('pt-PT', {
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
    
    irParaLocalizacao() {
      if (this.ocorrencia.latitude && this.ocorrencia.longitude) {
        localStorage.setItem("ocorrenciaLocalizacao", JSON.stringify({
          id: this.ocorrencia.id,
          morada: this.endereco || '',
          foto: this.ocorrencia.foto || '',
          latitude: this.ocorrencia.latitude,
          longitude: this.ocorrencia.longitude
        }));
        this.$router.push('/perito/loc');
      }
    },
    
    resolver() {
      localStorage.setItem("ocorrenciaResolver", JSON.stringify(this.ocorrencia));
      this.$router.push('/perito/resolver');
    }
  },
};
</script>

<style scoped>
.detalhes-ocorrencia-content {
  padding: 20px;
}

.do-titulo {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.do-caixa {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.do-status {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.do-descricao {
  margin: 15px 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  border-left: 3px solid #2196F3;
}

.do-foto-container {
  text-align: center;
  margin: 20px 0;
}

.do-foto {
  max-width: 100%;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  transition: transform 0.3s ease;
}

.do-foto:hover {
  transform: scale(1.02);
}

.do-sem-foto {
  text-align: center;
  padding: 30px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin: 20px 0;
  color: #757575;
}

.do-acoes {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.do-botao {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.do-botao-resolver {
  background-color: #4CAF50;
  color: white;
}

.do-botao-resolver:hover {
  background-color: #388E3C;
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