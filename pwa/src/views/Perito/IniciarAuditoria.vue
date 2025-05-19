<template>
  <div class="iniciar-auditoria-content">
    <div class="ia-card">
      <header class="ia-header">
        <h2 class="ia-titulo">{{ auditoria?.titulo || 'Iniciar Auditoria' }}</h2>
        <span class="ia-status-badge" :class="getStatusClass(auditoria?.status)">{{ auditoria?.status || 'Carregando...' }}</span>
      </header>

      <div v-if="carregando" class="ia-loading">
        <div class="ia-loading-spinner"></div>
        <p>Carregando auditoria...</p>
      </div>

      <div v-else-if="!auditoria" class="ia-erro">
        <i class="ia-icon-erro">!</i>
        <p>Não foi possível carregar a auditoria.</p>
        <button class="ia-botao ia-botao-voltar" @click="voltarParaLista">Voltar</button>
      </div>

      <main v-else class="ia-main">
        <div class="ia-secao">
          <div class="ia-secao-header">
            <h3>Detalhes da Auditoria</h3>
          </div>
          <div class="ia-caixa">
            <div class="ia-info-grid">
              <div class="ia-info-item">
                <span class="ia-info-label">Localização</span>
                <span class="ia-info-valor">{{ auditoria.localizacao || 'Não informado' }}</span>
              </div>
              
              <div class="ia-info-item">
                <span class="ia-info-label">Data de início</span>
                <span class="ia-info-valor">{{ formatarData(auditoria.data) }}</span>
              </div>
              
              <div class="ia-info-item">
                <span class="ia-info-label">Prazo de conclusão</span>
                <span class="ia-info-valor">{{ formatarData(auditoria.dataFinalizacao) }}</span>
              </div>
            </div>
            
            <div class="ia-descricao">
              <h4>Descrição</h4>
              <p>{{ auditoria.descricao || 'Sem descrição disponível' }}</p>
            </div>
          </div>
        </div>

        <div class="ia-secao">
          <div class="ia-secao-header">
            <h3>Atualizar Status</h3>
          </div>
          <div class="ia-caixa">
            <div class="ia-campo">
              <label for="novoStatus">Status da Auditoria</label>
              <select id="novoStatus" v-model="formData.status" required>
                <option value="Em andamento">Em andamento</option>
                <option value="Concluída">Concluída</option>
                <option value="Pendente">Pendente</option>
              </select>
            </div>

            <div class="ia-campo">
              <label for="comentario">Observações</label>
              <textarea 
                id="comentario" 
                v-model="formData.comentario" 
                placeholder="Descreva suas observações ou o resultado da auditoria..."
                rows="4"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div class="ia-acoes">
          <button 
            class="ia-botao ia-botao-salvar" 
            @click="salvarAuditoria"
            :disabled="enviando"
          >
            <span class="ia-botao-icone">✓</span>
            {{ enviando ? 'Salvando...' : 'Salvar Auditoria' }}
          </button>
          <button 
            class="ia-botao ia-botao-voltar" 
            @click="voltarParaLista"
            :disabled="enviando"
          >
            <span class="ia-botao-icone">←</span>
            Cancelar
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { useAuditorias } from '@/state/auditorias';

export default {
  name: "IniciarAuditoria",
  data() {
    return {
      auditoria: null,
      carregando: true,
      enviando: false,
      peritoLogado: null,
      formData: {
        status: 'Em andamento',
        comentario: ''
      }
    };
  },
  created() {
    this.carregarPeritoLogado();
    this.carregarAuditoria();
  },
  methods: {
    carregarPeritoLogado() {
      try {
        const peritoData = localStorage.getItem('peritoLogado');
        if (peritoData) {
          this.peritoLogado = JSON.parse(peritoData);
        }
      } catch (error) {
        console.error('Erro ao carregar dados do perito:', error);
      }
    },
    
    carregarAuditoria() {
      try {
        const auditoriaData = localStorage.getItem('auditoriaResolver');
        
        if (auditoriaData) {
          this.auditoria = JSON.parse(auditoriaData);
          // Inicializar o status com o status atual da auditoria
          this.formData.status = this.auditoria.status !== 'Aberta' ? 
                                 this.auditoria.status : 'Em andamento';
        }
        
        this.carregando = false;
      } catch (error) {
        console.error('Erro ao carregar auditoria:', error);
        this.auditoria = null;
        this.carregando = false;
      }
    },
    
    async salvarAuditoria() {
      if (!this.formData.comentario) {
        alert('Por favor, adicione uma observação sobre a auditoria.');
        return;
      }
      
      this.enviando = true;
      
      try {
        const { atualizarAuditoria } = useAuditorias();
        
        // Criar um objeto com o resultado da auditoria para adicionar ao histórico
        const resultado = {
          peritoId: this.peritoLogado?.id,
          peritoNome: this.peritoLogado?.nome,
          data: new Date().toISOString(),
          mensagem: this.formData.comentario
        };
        
        // Preparar o objeto de atualização
        const dadosAtualizados = {
          status: this.formData.status,
          resultados: [...(this.auditoria.resultados || []), resultado]
        };
        
        // Se a auditoria for concluída, atualizar outros campos
        if (this.formData.status === 'Concluída') {
          dadosAtualizados.dataConclusao = new Date().toISOString();
        }
        
        // Atualizar auditoria
        atualizarAuditoria(this.auditoria.id, dadosAtualizados);
        
        alert('Auditoria atualizada com sucesso!');
        this.voltarParaLista();
      } catch (error) {
        console.error('Erro ao salvar auditoria:', error);
        alert('Ocorreu um erro ao salvar a auditoria.');
      } finally {
        this.enviando = false;
      }
    },
    
    voltarParaLista() {
      this.$router.push('/perito');
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
        case 'concluída': return 'status-resolvida';
        case 'pendente': return 'status-aberta';
        case 'rejeitada': return 'status-rejeitada';
        default: return 'status-default';
      }
    }
  }
};
</script>

<style scoped>
.iniciar-auditoria-content {
  padding: 15px;
  padding-bottom: 70px;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  min-height: calc(100vh - 85px);
  box-sizing: border-box;
}

.ia-card {
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  box-sizing: border-box;
}

.ia-header {
  background: linear-gradient(135deg, #5BB12F, #4a9827);
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  box-sizing: border-box;
}

.ia-titulo {
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.ia-status-badge {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
}

.ia-main {
  padding: 15px;
  box-sizing: border-box;
}

.ia-loading {
  text-align: center;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
}

.ia-loading-spinner {
  border: 3px solid rgba(91, 177, 47, 0.2);
  border-top: 3px solid #5BB12F;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.ia-erro {
  text-align: center;
  padding: 30px 20px;
  background-color: #feeeee;
  border-radius: 8px;
  margin: 20px;
  color: #F44336;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.ia-icon-erro {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #F44336;
  color: white;
  border-radius: 50%;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.ia-secao {
  margin-bottom: 20px;
  box-sizing: border-box;
}

.ia-secao-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.ia-secao-header h3 {
  margin: 0;
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  position: relative;
  padding-left: 12px;
}

.ia-secao-header h3::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background-color: #5BB12F;
  border-radius: 2px;
}

.ia-caixa {
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
}

.ia-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

.ia-info-item {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.ia-info-label {
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 4px;
}

.ia-info-valor {
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  word-break: break-word; /* Evita transbordamento de texto */
}

.ia-descricao {
  margin: 15px 0 5px 0;
  padding: 12px 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border-left: 3px solid #5BB12F;
  box-sizing: border-box;
}

.ia-descricao h4 {
  margin: 0 0 8px 0;
  color: #4a9827;
  font-size: 0.9rem;
  font-weight: 600;
}

.ia-descricao p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #444;
  word-break: break-word;
}

.ia-campo {
  margin-bottom: 15px;
  box-sizing: border-box;
  width: 100%;
}

.ia-campo label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #555;
}

.ia-campo select, .ia-campo textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  background-color: #fff;
  box-sizing: border-box;
}

.ia-campo select:focus, .ia-campo textarea:focus {
  border-color: #5BB12F;
  box-shadow: 0 0 0 2px rgba(91, 177, 47, 0.2);
  outline: none;
}

.ia-campo textarea {
  resize: vertical;
  min-height: 100px;
  line-height: 1.5;
  font-family: inherit;
}

.ia-acoes {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 25px;
  box-sizing: border-box;
}

.ia-botao {
  padding: 14px 16px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;
}

.ia-botao:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.ia-botao-icone {
  font-size: 1.1rem;
}

.ia-botao-salvar {
  background-color: #5BB12F;
  color: white;
  box-shadow: 0 2px 6px rgba(91, 177, 47, 0.3);
}

.ia-botao-salvar:hover:not(:disabled) {
  background-color: #4a9827;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(91, 177, 47, 0.4);
}

.ia-botao-voltar {
  background-color: #f5f5f5;
  color: #555;
  border: 1px solid #e0e0e0;
}

.ia-botao-voltar:hover:not(:disabled) {
  background-color: #e9e9e9;
}

/* Classes de status */
.status-aberta {
  background-color: rgba(255, 153, 0, 0);
  color: #e67e00;
}

.status-andamento {
  background-color: rgba(33, 149, 243, 0);
  color: #ffffff;
}

.status-resolvida {
  background-color: rgba(76, 175, 79, 0);
  color: #ffffff;
}

.status-rejeitada {
  background-color: rgba(244, 67, 54, 0);
  color: #ffffff;
}

.status-default {
  background-color: rgba(117, 117, 117, 0);
  color: #ffffff;
}

/* Responsividade */
@media (max-width: 480px) {
  .iniciar-auditoria-content {
    padding: 0;
  }
  
  .ia-card {
    border-radius: 0;
    box-shadow: none;
  }
  
  .ia-info-grid {
    grid-template-columns: 1fr;
  }
  
  .ia-main {
    padding: 12px;
  }
  
  .ia-caixa {
    padding: 12px;
  }
  
  .ia-header {
    padding: 15px;
  }
  
  .ia-titulo {
    font-size: 1.3rem;
  }
  
  .ia-campo select, .ia-campo textarea {
    padding: 10px;
  }
  
  .ia-botao {
    padding: 12px;
  }
}

/* Para dispositivos muito pequenos */
@media (max-width: 350px) {
  .ia-main {
    padding: 10px;
  }
  
  .ia-caixa {
    padding: 10px;
  }
  
  .ia-descricao {
    padding: 10px;
  }
}
</style>