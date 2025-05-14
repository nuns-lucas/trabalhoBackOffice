<template>
  <div class="layout">
    <Sidebar />
    <div class="conteudo">
      <div class="topo">
        <button class="botao-voltar" @click="voltarParaMenu">← Voltar</button>
        <h2 class="titulo-detalhes">Detalhes da Ocorrência</h2>
      </div>
      <div class="ocorrencia-detalhes">
        <div v-if="ocorrencia" class="detalhes">
          <!-- Foto da Ocorrência -->
          <div class="ocorrencia-foto-container">
            <img :src="ocorrencia.foto" alt="Foto da Ocorrência" class="ocorrencia-foto" />
          </div>
          <!-- Informações da Ocorrência -->
          <div class="ocorrencia-info">
            <h3>{{ ocorrencia.mensagem }}</h3>
            <p><strong>Localização:</strong> {{ ocorrencia.localizacao }}</p>
            <p><strong>Data:</strong> {{ formatarData(ocorrencia.data) }}</p>
            <p><strong>Status:</strong> <Badge :status="ocorrencia.status" /></p>
            <p><strong>Responsável:</strong> {{ ocorrencia.responsavel || 'Não atribuído' }}</p>
          </div>
          <!-- Ações: Atribuir Responsável ou Concluir Ocorrência -->
          <div class="acoes">
            <div v-if="ocorrencia.status === 'Pendente'" class="atribuir-responsavel">
              <label for="responsavel" class="atribuir-label">Atribuir Responsável:</label>
              <select id="responsavel" v-model="responsavelSelecionado" class="atribuir-select">
                <option v-for="perito in peritos" :key="perito.id" :value="perito.id">
                  {{ perito.nome }}
                </option>
              </select>
              <button @click="atribuirResponsavel" class="atribuir-botao">Atribuir</button>
            </div>
            <div v-else-if="ocorrencia.status === 'Encaminhado'" class="concluir-ocorrencia">
              <button @click="concluirOcorrencia" class="atribuir-botao">Concluir Ocorrência</button>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Carregando ocorrência...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { defineComponent, computed, ref } from 'vue';
import { useOcorrencias } from '@/state/ocorrencias';
import Sidebar from '@/components/layout/Sidebar.vue';
import Badge from '@/components/ui/Badge.vue';

export default defineComponent({
  name: 'EditarOcorrencia',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    Sidebar,
    Badge
  },
  methods: {
    formatarData(data) {
      if (!data) return '--/--/----';
      try {
        return new Date(data).toLocaleDateString('pt-PT', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch {
        return data;
      }
    }
  },
  setup(props) {
    const router = useRouter();

    const { estado, atribuirResponsavel, atualizarStatus } = useOcorrencias();

    const ocorrencia = computed(() =>
      estado.ocorrencias.find(o => o.id === Number(props.id)) // Converte o id para número
    );

    // Busca os peritos do estado
    const peritos = computed(() => estado.peritos);

    const responsavelSelecionado = ref('');

    const voltarParaMenu = () => {
      router.push({ name: 'MenuOcorrencias' }); // Navega para o menu de ocorrências
    };

    const atribuirResponsavelHandler = () => {
      if (!responsavelSelecionado.value) {
        alert('Por favor, selecione um responsável.');
        return;
      }
      atribuirResponsavel(ocorrencia.value.id, responsavelSelecionado.value);
      alert(`Responsável "${responsavelSelecionado.value}" atribuído com sucesso.`);
    };

    const concluirOcorrenciaHandler = () => {
      atualizarStatus(ocorrencia.value.id, 'Concluída');
      alert('Ocorrência concluída com sucesso.');
    };

    return {
      ocorrencia,
      peritos,
      responsavelSelecionado,
      atribuirResponsavel: atribuirResponsavelHandler,
      concluirOcorrencia: concluirOcorrenciaHandler,
      voltarParaMenu
    };
  }
});
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.conteudo {
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.topo {
  display: flex;
  align-items: center;
  gap: 20px; /* Espaçamento entre o botão e o título */
  width: 100%;
}

.botao-voltar {
  padding: 10px 15px;
  background-color: #257401; /* Cor verde */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold; /* Deixa o texto em negrito */
  text-align: left;
  margin-left: 20px; /* Posiciona o título próximo à sidebar */
  align-self: flex-start; /* Garante que o título fique no canto superior esquerdo */
}

.botao-voltar:hover {
  background-color: #1a5002; /* Cor verde mais escura no hover */
}

.titulo-detalhes {
  font-size: 2rem; /* Tamanho do título */
  font-weight: bold;
  text-align: left;
  align-self: flex-start; /* Garante que o título fique no canto superior esquerdo */
}

.ocorrencia-detalhes {
  width: 600px; /* Define uma largura fixa para o card */
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Garante que a imagem não ultrapasse os limites do card */
  display: flex;
  flex-direction: column;
  margin-top: 20px; /* Adiciona espaço entre o título e o card */
}

.ocorrencia-foto-container {
  width: 100%;
  height: 200px; /* Define a altura da imagem */
  overflow: hidden; /* Garante que a imagem não ultrapasse os limites */
}

.ocorrencia-foto {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Faz a imagem preencher o espaço sem distorção */
}

.ocorrencia-info {
  padding: 20px; /* Adiciona espaçamento interno para os detalhes */
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espaçamento entre os elementos */
  text-align: left; /* Alinha o texto à esquerda */
}

.acoes {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espaçamento entre os elementos */
}

.atribuir-responsavel {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espaçamento entre a label, o dropdown e o botão */
}

.atribuir-label,
.atribuir-select,
.atribuir-botao {
  width: 100%; /* Todos os elementos terão o mesmo tamanho */
}

button {
  padding: 10px 15px;
  background-color: #257401;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #1a5002;
}

select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>