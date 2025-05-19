<template>
  <div class="detalhes-auditoria-content">
    <main class="da-main-content">
      <div v-if="auditoria">
        <h2 class="da-titulo">{{ auditoria.titulo || 'Auditoria Ativa' }}</h2>


        <div v-if="auditoria.imagem" class="da-foto-container">
          <h3>Imagem</h3>
          <img :src="auditoria.imagem" alt="Imagem da auditoria" class="da-foto"/>
        </div>
        <div v-else class="da-sem-foto">
          <p>Sem imagem disponível</p>
        </div>

        <div class="da-caixa">
          <div class="da-status">
            <p><strong>Status:</strong> <span :class="getStatusClass(auditoria.status)">{{ auditoria.status }}</span></p>
          </div>
          
          <p><strong>Localização:</strong> {{ auditoria.localizacao || 'Não informado' }}</p>
          <p><strong>Data de início:</strong> {{ formatarData(auditoria.data) }}</p>
          <p><strong>Prazo de conclusão:</strong> {{ formatarData(auditoria.dataFinalizacao) }}</p>
          
          <div class="da-descricao">
            <p><strong>Descrição:</strong></p>
            <p>{{ auditoria.descricao || 'Sem descrição disponível' }}</p>
          </div>
          
          <div class="da-resultados" v-if="auditoria.resultados && auditoria.resultados.length > 0">
            <p><strong>Resultados anteriores:</strong></p>
            <ul>
              <li v-for="(resultado, index) in auditoria.resultados" :key="index">
                {{ resultado.mensagem }} - {{ formatarData(resultado.data) }}
              </li>
            </ul>
          </div>
        </div>

        
        
        <div class="da-acoes">
          <button class="da-botao da-botao-resolver" @click="resolver(auditoria)">
            Iniciar Auditoria
          </button>
        </div>
      </div>
      
      <div v-else class="da-sem-auditoria">
        <h3>Nenhuma auditoria ativa designada para você</h3>
        <p>Quando uma nova auditoria for atribuída, ela aparecerá aqui.</p>
      </div>
    </main>
  </div>
</template>

<script>
import { useAuditorias } from '@/state/auditorias';
import { usePeritos } from '@/state/peritos';

export default {
  name: "VerAuditoria",
  data() {
    return {
      auditoria: null,
      peritoLogado: null,
      carregando: true
    };
  },
  created() {
    this.carregarPeritoLogado();
    this.carregarAuditoriaAtiva();
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
    
    carregarAuditoriaAtiva() {
      try {
        this.carregando = true;
        const { estado: estadoAuditorias } = useAuditorias();
        
        // Se não temos um perito logado, não mostramos nenhuma auditoria
        if (!this.peritoLogado) {
          this.auditoria = null;
          this.carregando = false;
          return;
        }
        
        // Encontrar a primeira auditoria ativa para este perito
        const peritoId = this.peritoLogado.id;
        
        const auditoriaAtiva = estadoAuditorias.auditorias.find(auditoria => {
          // Auditoria ativa e não concluída
          const estaAtiva = auditoria.ativa === true;
          const naoConcluida = auditoria.status !== 'Concluída';
          
          // Verificar se o perito está associado à auditoria
          const peritoResponsavel = auditoria.peritoId === peritoId;
          const peritoEstaNaEquipe = Array.isArray(auditoria.peritos) && 
                                   auditoria.peritos.includes(peritoId);
          
          return estaAtiva && naoConcluida && (peritoResponsavel || peritoEstaNaEquipe);
        });
        
        this.auditoria = auditoriaAtiva || null;
        this.carregando = false;
      } catch (error) {
        console.error('Erro ao carregar auditoria ativa:', error);
        this.auditoria = null;
        this.carregando = false;
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
        case 'concluída': return 'status-resolvida';
        case 'pendente': return 'status-aberta';
        case 'rejeitada': return 'status-rejeitada';
        default: return 'status-default';
      }
    },
    
    resolver(auditoria) {
      localStorage.setItem("auditoriaResolver", JSON.stringify(auditoria));
      this.$router.push("/perito/resolver-auditoria");
    }
  }
};

// Mantém o estilo consistente
import '@/assets/cssPerito/VerOcorrencias.css';
</script>

<!-- filepath: /home/lucas/repos/kreca/pwa/src/views/Perito/VerAuditoria.vue -->
<style scoped>
.detalhes-auditoria-content {
  padding: 12px; /* Reduzido de 20px para 12px */
  height: auto;
  overflow: visible;
  max-width: 100%;
}

.da-main-content {
  padding-bottom: 60px; /* Reduzido de 70px para 60px */
  overflow: visible;
}

.da-titulo {
  text-align: center;
  margin: 0 0 12px 0; /* Reduzido de 20px para 12px */
  color: #5BB12F;
  font-size: 1.3rem; /* Reduzido de 1.5rem */
}

/* Container de caixa mais compacto */
.da-caixa {
  background-color: white;
  border-radius: 8px; /* Reduzido de 10px */
  padding: 10px; /* Reduzido de 15px */
  margin-bottom: 12px; /* Reduzido de 15px */
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}

/* Espaçamento entre informações diminuído */
.da-caixa p {
  margin: 6px 0; /* Reduzido de 8px */
  font-size: 0.85rem; /* Reduzido de 0.9rem */
  line-height: 1.3;
}

/* Seção de descrição e resultados mais compacta */
.da-descricao, .da-resultados {
  margin: 10px 0; /* Reduzido de 15px */
  padding: 8px; /* Reduzido de 10px */
  background-color: #f9f9f9;
  border-radius: 4px;
  border-left: 2px solid #5BB12F; /* Reduzido de 3px */
  word-break: break-word;
  overflow-wrap: break-word;
}

/* Diferenciação para resultados */
.da-resultados {
  border-left: 2px solid #2196F3;
}

/* Lista mais compacta */
.da-resultados ul {
  padding-left: 18px; /* Reduzido de 20px */
  margin: 0;
  box-sizing: border-box;
  width: 100%;
}

.da-resultados li {
  margin: 3px 0; /* Reduzido de 5px */
  font-size: 0.85rem;
  line-height: 1.3;
  word-break: break-word;
}

/* Layout de imagem otimizado */
.da-foto-container {
  text-align: center;
  margin: 10px 0; /* Reduzido de 20px */
}

.da-foto {
  max-width: 100%;
  max-height: 180px; /* Limitamos a altura da imagem */
  object-fit: cover; /* Mantém as proporções cortando se necessário */
  border-radius: 6px; /* Reduzido de 8px */
  box-shadow: 0 2px 4px rgba(0,0,0,0.12);
  transition: transform 0.2s ease;
}

.da-foto:hover {
  transform: scale(1.01); /* Efeito reduzido de 1.02 */
}

.da-sem-foto {
  text-align: center;
  padding: 15px; /* Reduzido de 30px */
  background-color: #f5f5f5;
  border-radius: 6px; /* Reduzido de 8px */
  margin: 10px 0; /* Reduzido de 20px */
  color: #757575;
  font-size: 0.85rem;
}

/* Mensagem sem auditoria mais compacta */
.da-sem-auditoria {
  text-align: center;
  padding: 20px; /* Reduzido de 30px */
  background-color: #f5f5f5;
  border-radius: 8px;
  margin: 15px 0; /* Reduzido de 20px */
}

.da-sem-auditoria h3 {
  color: #5BB12F;
  margin-bottom: 8px; /* Reduzido de 10px */
  font-size: 1.1rem;
}

.da-sem-auditoria p {
  color: #666;
  font-size: 0.85rem;
  margin: 0;
}

/* Botões de ação mais compactos */
.da-acoes {
  display: flex;
  justify-content: center;
  margin: 15px 0; /* Reduzido de 20px */
}

.da-botao {
  padding: 10px 20px; /* Reduzido de 12px 24px */
  border: none;
  border-radius: 6px; /* Reduzido de 8px */
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem; /* Reduzido de 1rem */
  transition: background-color 0.2s ease;
}

.da-botao-resolver {
  background-color: #5BB12F;
  color: white;
}

.da-botao-resolver:hover {
  background-color: #4a9827;
}

/* Status coloridos */
.da-status {
  margin-bottom: 8px; /* Reduzido de valor anterior */
  padding-bottom: 8px; /* Reduzido */
  border-bottom: 1px solid #eee;
}

.status-aberta, .status-andamento, .status-resolvida, .status-rejeitada, .status-default {
  font-size: 0.9rem; /* Tamanho uniforme */
  font-weight: bold;
}

.status-aberta {
  color: #ff9800;
}

.status-andamento {
  color: #2196F3;
}

.status-resolvida {
  color: #4CAF50;
}

.status-rejeitada {
  color: #F44336;
}

.status-default {
  color: #757575;
}

/* Layout grid para informações principais - nova adição para compactar */
@media (min-width: 340px) {
  .da-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }
}
</style>