<template>
  <div class="rejeitar-page">
    <Sidebar />
    <div class="conteudo">
      <div class="topo">
        <button class="botao-voltar" @click="voltarParaDetalhes">← Voltar</button>
        <h2 class="titulo-form">{{ ocorrencia ? 'Rejeitar Ocorrência' : 'Ocorrência não encontrada' }}</h2>
      </div>

      <div v-if="ocorrencia" class="form-container">
        <div class="duas-colunas">
          <!-- Coluna Esquerda - Foto -->
          <div class="coluna-foto">
            <img 
              v-if="ocorrencia.foto" 
              :src="ocorrencia.foto" 
              :alt="`Foto da ocorrência ${ocorrencia.id}`"
              class="foto-ocorrencia" 
            />
            <div v-else class="foto-placeholder">
              <span>Sem foto disponível</span>
            </div>

            <!-- Resumo da ocorrência -->
            <div class="resumo-ocorrencia">
              <h4>Resumo da Ocorrência</h4>
              <p class="resumo-item"><strong>Tipo:</strong> {{ formatarTipo(ocorrencia.tipo) }}</p>
              <p class="resumo-item"><strong>Linha:</strong> {{ ocorrencia.linha }}</p>
              <p class="resumo-item"><strong>Paragem:</strong> {{ ocorrencia.paragem }}</p>
              <p class="resumo-item"><strong>Data:</strong> {{ formatarData(ocorrencia.data) }}</p>
            </div>
          </div>
          
          <!-- Coluna Direita - Formulário de Rejeição -->
          <div class="coluna-form">
            <h3>Confirmação de Rejeição</h3>
            <p class="aviso-rejeicao">
              Você está prestes a rejeitar esta ocorrência. Esta ação é irreversível.
            </p>
            
            <form @submit.prevent="confirmarRejeicao" class="formulario-rejeicao">
              <div class="form-group">
                <label for="motivoRejeicao">Motivo da Rejeição*</label>
                <select id="motivoRejeicao" v-model="motivoRejeicao" required>
                  <option value="" disabled>Selecione o motivo</option>
                  <option value="Informações incompletas">Informações incompletas</option>
                  <option value="Duplicada">Ocorrência duplicada</option>
                  <option value="Fora de escopo">Fora do escopo de atuação</option>
                  <option value="Dados incorretos">Dados incorretos ou inconsistentes</option>
                  <option value="Outro">Outro motivo</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="observacoes">Observações adicionais</label>
                <textarea 
                  id="observacoes" 
                  v-model="observacoes" 
                  rows="4" 
                  placeholder="Especifique detalhes sobre a rejeição desta ocorrência..."
                ></textarea>
              </div>
              
              <div class="confirmacao-container">
                <label class="confirmacao-label">
                  <input type="checkbox" v-model="confirmado">
                  <span>Confirmo que avaliei esta ocorrência adequadamente e desejo rejeitá-la</span>
                </label>
              </div>

              <div class="form-actions">
                <button 
                  type="submit" 
                  class="btn-primary btn-danger" 
                  :disabled="!confirmado || !motivoRejeicao"
                >
                  Rejeitar Ocorrência
                </button>
                <button type="button" class="btn-secondary" @click="voltarParaDetalhes">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div v-else class="erro-container">
        <p>A ocorrência não foi encontrada ou você não tem acesso a ela.</p>
        <button @click="voltarParaMenu" class="botao-voltar">Voltar para o Menu</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useOcorrencias } from '@/state/ocorrencias';
import Sidebar from '@/components/layout/Sidebar.vue';

export default {
  name: 'RejeitarOcorrencia',
  components: {
    Sidebar
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { estado, rejeitarOcorrencia } = useOcorrencias();
    
    // Obter o ID da ocorrência a partir dos parâmetros da rota
    const ocorrenciaId = Number(route.params.id);
    
    // Buscar a ocorrência pelo ID
    const ocorrencia = computed(() => 
      estado.ocorrencias.find(o => o.id === ocorrenciaId)
    );
    
    // Estado do formulário
    const motivoRejeicao = ref('');
    const observacoes = ref('');
    const confirmado = ref(false);
    
    // Voltar para a página de detalhes
    const voltarParaDetalhes = () => {
      router.push({ name: 'AuditoriaForm', params: { id: ocorrenciaId } });
    };
    
    // Voltar para o menu principal
    const voltarParaMenu = () => {
      router.push('/');
    };
    
    // Formatar data
    const formatarData = (data) => {
      if (!data) return '--/--/----';
      try {
        return new Date(data).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch {
        return data;
      }
    };

    // Formatar tipo
    const formatarTipo = (tipo) => {
      return tipo ? tipo.charAt(0).toUpperCase() + tipo.slice(1) : '';
    };
    
    // Confirmar rejeição
    const confirmarRejeicao = () => {
      if (!confirmado.value || !motivoRejeicao.value) {
        return;
      }
      
      // Armazenar motivo e observações (em uma implementação real, isto seria salvo)
      const motivo = motivoRejeicao.value;
      const obs = observacoes.value;
      
      // Rejeitar a ocorrência
      rejeitarOcorrencia(ocorrenciaId);
      
      alert('Ocorrência rejeitada com sucesso!');
      voltarParaMenu();
    };
    
    return {
      ocorrencia,
      motivoRejeicao,
      observacoes,
      confirmado,
      voltarParaDetalhes,
      voltarParaMenu,
      formatarData,
      formatarTipo,
      confirmarRejeicao
    };
  }
};
</script>

<style scoped>
.sidebar {
  max-height: 100vh;
}

.rejeitar-page {
  display: flex;
  min-height: 100vh;
}

.conteudo {
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
}

.topo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.botao-voltar {
  padding: 8px 16px;
  background-color: #257401;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 15px;
}

.botao-voltar:hover {
  background-color: #1a5002;
}

.titulo-form {
  font-size: 1.8rem;
  margin: 0;
}

.form-container, .erro-container {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.duas-colunas {
  display: flex;
  gap: 30px;
}

.coluna-foto {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.foto-ocorrencia {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.foto-placeholder {
  width: 100%;
  height: 300px;
  background-color: #e9ecef;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 20px;
}

.resumo-ocorrencia {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  margin-top: 10px;
}

.resumo-ocorrencia h4 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.resumo-item {
  margin: 8px 0;
}

.coluna-form {
  flex: 1;
}

.coluna-form h3 {
  margin-top: 0;
  margin-bottom: 20px;
}

.aviso-rejeicao {
  padding: 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  border-radius: 4px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 0.9rem;
}

select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.confirmacao-container {
  margin: 25px 0;
}

.confirmacao-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.confirmacao-label input {
  margin-right: 10px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
}

.btn-primary {
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
}

.btn-danger {
  background-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
}

.btn-danger:disabled {
  background-color: #e4606d;
  cursor: not-allowed;
}

.btn-secondary {
  padding: 10px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: #5a6268;
}
</style>