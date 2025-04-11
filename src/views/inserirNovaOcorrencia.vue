<template>
  <div class="inserir-ocorrencia">
    <h2>Inserir Nova Ocorrência</h2>
    <form @submit.prevent="adicionarOcorrencia">
      <div class="form-group">
        <label for="tipo">Tipo de Ocorrência</label>
        <select id="tipo" v-model="novaOcorrencia.tipo" required>
          <option value="atraso">Atraso</option>
          <option value="avaria">Avaria</option>
          <option value="incidente">Incidente</option>
        </select>
      </div>

      <div class="form-group">
        <label for="mensagem">Descrição</label>
        <textarea
          id="mensagem"
          v-model="novaOcorrencia.mensagem"
          placeholder="Descreva a ocorrência"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="nome">Foto Link</label>
        <input
          type="text"
          id="foto"
          v-model="novaOcorrencia.foto"
          placeholder="foto da ocorrência"
          required
        />
      </div>

     
      <button type="submit" class="btn btn-primary">Adicionar Ocorrência</button>
    </form>
  </div>
</template>

<script>
import { useOcorrencias } from '@/state/ocorrencias';
import { ref } from 'vue';

export default {
  name: 'InserirNovaOcorrencia',
  setup() {
    const { adicionarOcorrencia } = useOcorrencias();
    const novaOcorrencia = ref({
      tipo: '',
      mensagem: '',
      foto: '',
      nome: 'Usuário Anônimo', 
      latitude: null,
      longitude: null,
    });

    // Obter localização automaticamente
    const obterLocalizacao = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            novaOcorrencia.value.latitude = position.coords.latitude;
            novaOcorrencia.value.longitude = position.coords.longitude;
          },
          (error) => {
            console.error('Erro ao obter localização:', error);
            alert('Não foi possível obter a localização.');
          }
        );
      } else {
        alert('Geolocalização não é suportada pelo navegador.');
      }
    };

    // Chamar a função para obter localização ao carregar a página
    obterLocalizacao();

    const adicionarNovaOcorrencia = () => {
      if (!novaOcorrencia.value.latitude || !novaOcorrencia.value.longitude) {
        alert('A localização ainda não foi obtida. Tente novamente.');
        return;
      }

      adicionarOcorrencia(novaOcorrencia.value);
      alert('Ocorrência adicionada com sucesso!');
      novaOcorrencia.value = {
        tipo: '',
        mensagem: '',
        nome: 'Usuário Anônimo',
        latitude: novaOcorrencia.value.latitude,
        longitude: novaOcorrencia.value.longitude,
      };
      
    };

    return {
      novaOcorrencia,
      adicionarOcorrencia: adicionarNovaOcorrencia,
    };
  },
};
</script>

<style scoped>
.inserir-ocorrencia {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

select,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: none;
  height: 100px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>