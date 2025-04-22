<template>
  <div class="auditoria-form-page">
    <Sidebar />
    <div class="conteudo">
      <div class="topo">
        <button class="botao-voltar" @click="voltarParaMenu">← Voltar</button>
        <h2 class="titulo-form">{{ ocorrencia ? 'Detalhes da Ocorrência' : 'Ocorrência não encontrada' }}</h2>
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
          </div>
          
          <!-- Coluna Direita - Informações -->
          <div class="coluna-info">
            <!-- Informações da Ocorrência -->
            <div class="ocorrencia-info">
              <h3>Detalhes da Ocorrência</h3>
              <div class="ocorrencia-detalhe">
                <span class="label">Status:</span>
                <Badge :status="ocorrencia.status" />
              </div>
              <div class="ocorrencia-detalhe">
                <span class="label">Tipo:</span>
                <span class="valor">{{ formatarTipo(ocorrencia.tipo) }}</span>
              </div>
              <div class="ocorrencia-detalhe">
                <span class="label">Mensagem:</span>
                <span class="valor">{{ ocorrencia.mensagem }}</span>
              </div>
              <div class="ocorrencia-detalhe">
                <span class="label">Linha:</span>
                <span class="valor">{{ ocorrencia.linha }}</span>
              </div>
              <div class="ocorrencia-detalhe">
                <span class="label">Paragem:</span>
                <span class="valor">{{ ocorrencia.paragem }}</span>
              </div>
              <div class="ocorrencia-detalhe">
                <span class="label">Data:</span>
                <span class="valor">{{ formatarData(ocorrencia.data) }}</span>
              </div>
              <div class="ocorrencia-detalhe">
                <span class="label">Nome:</span>
                <span class="valor">{{ ocorrencia.nome }}</span>
              </div>
              <div class="ocorrencia-detalhe" v-if="ocorrencia.responsavelId">
                <span class="label">Responsável:</span>
                <span class="valor">{{ getNomeResponsavel(ocorrencia.responsavelId) }}</span>
              </div>
            </div>
            
            <!-- Ações para ocorrências abertas -->
            <div v-if="ocorrencia.status === 'Aberta'" class="acoes-container">
              <div class="acoes">
                <div class="rejeitar-container">
                  <button @click="irParaRejeitar" class="botao-rejeitar">Rejeitar Ocorrência</button>
                </div>
                <div class="criar-auditoria-container">
                  <button @click="irParaCriarAuditoria" class="botao-criar-auditoria">Criar Auditoria</button>
                </div>
              </div>
            </div>

            <!-- Detalhes para ocorrências já processadas -->
            <div v-else class="status-info">
              <p v-if="ocorrencia.status === 'Auditoria aberta'" class="status-message status-auditoria">
                Esta ocorrência já possui uma auditoria em andamento.
              </p>
              <p v-else-if="ocorrencia.status === 'Rejeitada'" class="status-message status-rejeitada">
                Esta ocorrência foi rejeitada e não pode ser alterada.
              </p>
            </div>
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
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useOcorrencias } from '@/state/ocorrencias';
import { usePeritos } from '@/state/peritos';
import Sidebar from '@/components/layout/Sidebar.vue';
import Badge from '@/components/ui/Badge.vue';

export default {
  name: 'AuditoriaForm',
  components: {
    Sidebar,
    Badge
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { estado } = useOcorrencias();
    const { estado: estadoPeritos } = usePeritos();
    
    // Obter o ID da ocorrência a partir dos parâmetros da rota
    const ocorrenciaId = Number(route.params.id);
    
    // Buscar a ocorrência pelo ID
    const ocorrencia = computed(() => 
      estado.ocorrencias.find(o => o.id === ocorrenciaId)
    );
    
    // Voltar para o menu
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
    
    // Obter nome do responsável
    const getNomeResponsavel = (responsavelId) => {
      const perito = estadoPeritos.peritos.find(p => p.id === responsavelId);
      return perito ? perito.nome : 'Desconhecido';
    };
    
    // Navegar para página de rejeição
    const irParaRejeitar = () => {
      router.push({ 
        name: 'RejeitarOcorrencia', 
        params: { id: ocorrenciaId }
      });
    };
    
    // Navegar para página de criação de auditoria
    const irParaCriarAuditoria = () => {
      router.push({ 
        name: 'CriarAuditoria', 
        params: { id: ocorrenciaId }
      });
    };
    
    return {
      ocorrencia,
      voltarParaMenu,
      formatarData,
      formatarTipo,
      getNomeResponsavel,
      irParaRejeitar,
      irParaCriarAuditoria
    };
  }
};
</script>

<style scoped>
.sidebar {
  max-height: 100vh;
}

.auditoria-form-page {
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
  align-items: center;
}

.foto-ocorrencia {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.foto-placeholder {
  width: 100%;
  height: 400px;
  background-color: #e9ecef;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #6c757d;
}

.coluna-info {
  flex: 1;
}

.ocorrencia-info {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
}

.ocorrencia-info h3 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.ocorrencia-detalhe {
  display: flex;
  margin-bottom: 10px;
}

.ocorrencia-detalhe .label {
  font-weight: 600;
  width: 100px;
}

.ocorrencia-detalhe .valor {
  flex: 1;
}

.acoes-container {
  margin-top: 30px;
}

.acoes {
  display: flex;
  gap: 15px;
}

.rejeitar-container, .criar-auditoria-container {
  flex: 1;
}

.botao-rejeitar {
  width: 100%;
  padding: 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
}

.botao-rejeitar:hover {
  background-color: #c82333;
}

.botao-criar-auditoria {
  width: 100%;
  padding: 12px;
  background-color: #257401;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
}

.botao-criar-auditoria:hover {
  background-color: #1a5002;
}

.status-info {
  margin-top: 30px;
  padding: 15px;
  border-radius: 6px;
}

.status-message {
  padding: 10px;
  border-radius: 4px;
  font-weight: 500;
}

.status-auditoria {
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
}

.status-rejeitada {
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}
</style>