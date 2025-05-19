<template>
  <div class="ocorrencia-detalhes">
    <header class="oc-header-nav">
      <h1 class="oc-header-titulo">Detalhes da Ocorrência</h1>
    </header>

    <main class="oc-detalhes-content">
      <div v-if="carregando" class="oc-carregando">
        <p>Carregando detalhes da ocorrência...</p>
      </div>

      <div v-else-if="!ocorrencia" class="oc-nao-encontrada">
        <p>Ocorrência não encontrada ou você não tem permissão para visualizá-la.</p>
        <button class="oc-botao-voltar" @click="voltar">Voltar</button>
      </div>

      <div v-else class="oc-detalhes-container">
        <!-- Cabeçalho com informações principais -->
        <div class="oc-cabecalho" :class="getStatusClass(ocorrencia.status)">
          <div class="oc-cabecalho-info">
            <h2 class="oc-titulo-detalhes">
              {{ ocorrencia.tipo || 'Ocorrência' }} #{{ ocorrencia.id }}
            </h2>
            <span class="oc-status-badge">{{ ocorrencia.status || 'Pendente' }}</span>
          </div>
          <div class="oc-cabecalho-meta">
            <span>Submetida em: {{ formatarData(ocorrencia.data) }}</span>
            <span v-if="ocorrencia.dataAtualizacao">
              Atualizada: {{ formatarData(ocorrencia.dataAtualizacao) }}
            </span>
          </div>
        </div>

        <!-- Informações gerais -->
        <div class="oc-bloco">
          <h3 class="oc-bloco-titulo">Informações Gerais</h3>
          <div class="oc-grid-info">
            <div class="oc-info-item">
              <span class="oc-label">Tipo:</span>
              <span>{{ ocorrencia.tipo || 'Não especificado' }}</span>
            </div>
            <div class="oc-info-item">
              <span class="oc-label">Status Atual:</span>
              <span>{{ ocorrencia.status || 'Pendente' }}</span>
            </div>
            <div class="oc-info-item">
              <span class="oc-label">Data:</span>
              <span>{{ formatarData(ocorrencia.data) }}</span>
            </div>
            <div class="oc-info-item">
              <span class="oc-label">Reportada por:</span>
              <span>{{ ocorrencia.nome || user.nome }}</span>
            </div>
          </div>
        </div>

        <!-- Foto ou imagem da ocorrência -->
        <div v-if="ocorrencia.foto" class="oc-bloco">
          <h3 class="oc-bloco-titulo">Imagem</h3>
          <div class="oc-foto-container" @click="ampliarImagem(ocorrencia.foto)">
            <img :src="ocorrencia.foto" alt="Imagem da ocorrência" class="oc-foto" />
            <div class="oc-foto-dica">Toque para ampliar</div>
          </div>
        </div>

        <!-- Descrição -->
        <div class="oc-bloco">
          <h3 class="oc-bloco-titulo">Descrição</h3>
          <p class="oc-descricao-completa">{{ ocorrencia.mensagem || 'Sem descrição disponível' }}</p>
        </div>

        <!-- Localização -->
        <div class="oc-bloco" v-if="ocorrencia.endereco || temCoordenadas">
          <h3 class="oc-bloco-titulo">Localização</h3>
          
          <div v-if="ocorrencia.endereco" class="oc-info-item oc-info-endereco">
            <span class="oc-label">Endereço:</span>
            <span>{{ ocorrencia.endereco }}</span>
          </div>
          
          
        </div>

        <!-- Auditoria relacionada (se houver) -->
        <div class="oc-bloco" v-if="auditoriaRelacionada">
          <h3 class="oc-bloco-titulo">Auditoria Relacionada</h3>
          <div class="oc-auditoria-info">
            <div class="oc-info-item">
              <span class="oc-label">ID da Auditoria:</span>
              <span>#{{ auditoriaRelacionada.id }}</span>
            </div>
            <div class="oc-info-item">
              <span class="oc-label">Status:</span>
              <span>{{ auditoriaRelacionada.status || 'Em processamento' }}</span>
            </div>
            <div class="oc-info-item" v-if="auditoriaRelacionada.data">
              <span class="oc-label">Data da Auditoria:</span>
              <span>{{ formatarData(auditoriaRelacionada.data) }}</span>
            </div>
          </div>
          <div v-if="auditoriaRelacionada.conclusao" class="oc-conclusao-auditoria">
            <h4>Conclusão da Auditoria:</h4>
            <p>{{ auditoriaRelacionada.conclusao }}</p>
          </div>
        </div>

        <!-- Histórico de status (se houver) -->
        <div class="oc-bloco" v-if="ocorrencia.historico && ocorrencia.historico.length > 0">
          <h3 class="oc-bloco-titulo">Histórico de Status</h3>
          <div class="oc-timeline">
            <div 
              v-for="(item, index) in ocorrencia.historico" 
              :key="index"
              class="oc-timeline-item"
            >
              <div class="oc-timeline-marker"></div>
              <div class="oc-timeline-content">
                <div class="oc-timeline-header">
                  <span class="oc-timeline-status">{{ item.status }}</span>
                  <span class="oc-timeline-date">{{ formatarData(item.data) }}</span>
                </div>
                <p v-if="item.comentario" class="oc-timeline-comentario">
                  {{ item.comentario }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Botões de ação -->
        <div class="oc-acoes">
          <button class="oc-botao-secundario" @click="voltar">Voltar</button>
        </div>
      </div>
    </main>

    <!-- Modal para imagem ampliada -->
    <div class="oc-modal" v-if="imagemAmpliada" @click="fecharImagem">
      <div class="oc-modal-content">
        <span class="oc-modal-fechar" @click.stop="fecharImagem">&times;</span>
        <img :src="imagemAmpliada" alt="Imagem ampliada" class="oc-imagem-ampliada" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useOcorrencias } from '@/state/ocorrencias';
import { useAuditorias } from '@/state/auditorias';

const route = useRoute();
const router = useRouter();
const { estado: estadoOcorrencias, buscarOcorrencias } = useOcorrencias();
const { estado: estadoAuditorias } = useAuditorias();

const ocorrenciaId = parseInt(route.params.id);
const carregando = ref(true);
const ocorrencia = ref(null);
const imagemAmpliada = ref(null);
const user = JSON.parse(localStorage.getItem('userLogado') || '{}');

// Carregar dados da ocorrência
onMounted(async () => {
  await carregarOcorrencia();
});

async function carregarOcorrencia() {
  carregando.value = true;
  
  try {
    // Tentar buscar ocorrência do estado
    let ocorrenciaEncontrada = null;
    
    if (estadoOcorrencias && estadoOcorrencias.ocorrencias) {
      ocorrenciaEncontrada = estadoOcorrencias.ocorrencias.find(o => o.id === ocorrenciaId);
    }
    
    // Se não encontrou no estado, buscar do localStorage
    if (!ocorrenciaEncontrada) {
      const ocorrenciasLS = localStorage.getItem('ocorrencias');
      
      if (ocorrenciasLS) {
        try {
          const parsedData = JSON.parse(ocorrenciasLS);
          
          if (Array.isArray(parsedData)) {
            ocorrenciaEncontrada = parsedData.find(o => o.id === ocorrenciaId);
          } else if (parsedData.ocorrencias && Array.isArray(parsedData.ocorrencias)) {
            ocorrenciaEncontrada = parsedData.ocorrencias.find(o => o.id === ocorrenciaId);
          }
        } catch (e) {
          console.error('Erro ao processar ocorrências do localStorage:', e);
        }
      }
      
      // Verificar no formato antigo de submissões
      if (!ocorrenciaEncontrada) {
        const submissoesLS = localStorage.getItem('submissoes');
        if (submissoesLS) {
          try {
            const submissoes = JSON.parse(submissoesLS);
            ocorrenciaEncontrada = submissoes.find(o => o.id === ocorrenciaId);
          } catch (e) {
            console.error('Erro ao processar submissões do localStorage:', e);
          }
        }
      }
    }
    
    // Verificar se a ocorrência pertence ao usuário logado
    if (ocorrenciaEncontrada && ocorrenciaEncontrada.email === user.email) {
      ocorrencia.value = ocorrenciaEncontrada;
      
      // Garantir que o objeto tenha todos os campos necessários
      if (!ocorrencia.value.historico) {
        ocorrencia.value.historico = [];
      }
      
      if (ocorrencia.value.status && !ocorrencia.value.historico.length) {
        // Criar um histórico básico se não existir
        ocorrencia.value.historico.push({
          status: ocorrencia.value.status,
          data: ocorrencia.value.data,
          comentario: 'Ocorrência registrada'
        });
      }
    } else {
      ocorrencia.value = null;
    }
  } catch (error) {
    console.error('Erro ao carregar ocorrência:', error);
    ocorrencia.value = null;
  } finally {
    carregando.value = false;
  }
}


// Buscar auditoria relacionada a esta ocorrência
const auditoriaRelacionada = computed(() => {
  if (!ocorrencia.value || !estadoAuditorias || !estadoAuditorias.auditorias) {
    return null;
  }
  
  // Procurar auditoria que tenha esta ocorrência como origem
  const auditoria = estadoAuditorias.auditorias.find(a => a.ocorrenciaId === ocorrencia.value.id);
  return auditoria || null;
});

// Formatar data para exibição
function formatarData(data) {
  if (!data) return 'Data não disponível';
  
  try {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (e) {
    return 'Data inválida';
  }
}

// Obter classe CSS para o status
function getStatusClass(status) {
  if (!status) return 'status-pendente-bg';
  
  const statusLower = status.toLowerCase();
  if (statusLower.includes('resolvid') || statusLower.includes('conclui')) {
    return 'status-resolvida-bg';
  } else if (statusLower.includes('analis')) {
    return 'status-analise-bg';
  } else if (statusLower.includes('audit')) {
    return 'status-auditoria-bg';
  } else if (statusLower.includes('rejeit')) {
    return 'status-rejeitada-bg';
  } else if (statusLower.includes('abert')) {
    return 'status-aberta-bg';
  } else {
    return 'status-pendente-bg';
  }
}

// Ampliar imagem
function ampliarImagem(url) {
  imagemAmpliada.value = url;
}

// Fechar imagem ampliada
function fecharImagem() {
  imagemAmpliada.value = null;
}

// Voltar para a página anterior
function voltar() {
  router.push('/cliente');
}


</script>

<style scoped>
.ocorrencia-detalhes {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
  position: relative;
}

.oc-header-nav {
  background-color: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.oc-voltar-btn {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-size: 0.9rem;
  color: #5BB12F;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
}

.oc-back-icon {
  width: 18px;
  height: 18px;
  margin-right: 6px;
}

.oc-header-titulo {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  flex-grow: 1;
  text-align: center;
  padding-right: 30px;
  color: #333;
}

.oc-detalhes-content {
  padding: 15px 20px;
  max-width: 800px;
  margin: 0 auto;
}

.oc-back-arrow {
  font-size: 1.2rem;
  margin-right: 8px;
  font-weight: bold;
}

.oc-carregando,
.oc-nao-encontrada {
  text-align: center;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.oc-botao-voltar {
  background-color: #5BB12F;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 15px;
  cursor: pointer;
  font-weight: 600;
}

.oc-detalhes-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.oc-cabecalho {
  background-color: #5BB12F;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Classes de background de status */
.status-finalizada-bg {
  background-color: #28a745;
}

.status-analise-bg {
  background-color: #17a2b8;
}

.status-auditoria-bg {
  background-color: #7952b3;
}

.status-rejeitada-bg {
  background-color: #dc3545;
}

.status-aberta-bg {
  background-color: #ffc107;
  color: #212529;
}

.status-pendente-bg {
  background-color: #6c757d;
}

.oc-cabecalho-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.oc-titulo-detalhes {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.oc-status-badge {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.oc-cabecalho-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  opacity: 0.9;
}

.oc-bloco {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.oc-bloco-titulo {
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
  padding-bottom: 8px;
  border-bottom: 1px solid #eeeeee;
}

.oc-grid-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px 20px;
}

.oc-info-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.oc-info-endereco {
  grid-column: 1 / -1;
}

.oc-label {
  font-weight: 600;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 4px;
}

.oc-foto-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.oc-foto {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.oc-foto-container:hover .oc-foto {
  transform: scale(1.02);
}

.oc-foto-dica {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
}

.oc-descricao-completa {
  line-height: 1.6;
  color: #333;
  white-space: pre-line;
}

.oc-mapa-container {
  margin-top: 10px;
  min-height: 200px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666;
}

.oc-auditoria-info {
  margin-bottom: 15px;
}

.oc-conclusao-auditoria {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed #ddd;
}

.oc-conclusao-auditoria h4 {
  margin-top: 0;
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 8px;
}

.oc-conclusao-auditoria p {
  margin: 0;
  font-style: italic;
  color: #666;
  line-height: 1.5;
}

/* Timeline para histórico de status */
.oc-timeline {
  position: relative;
  margin: 0 0 0 20px;
  padding: 0;
}

.oc-timeline:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: #e9ecef;
}

.oc-timeline-item {
  margin-bottom: 20px;
  position: relative;
}

.oc-timeline-marker {
  position: absolute;
  left: -25px;
  width: 12px;
  height: 12px;
  background-color: #5BB12F;
  border-radius: 50%;
  top: 6px;
}

.oc-timeline-content {
  margin-left: 15px;
  background-color: #f8f9fa;
  padding: 10px 15px;
  border-radius: 6px;
}

.oc-timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.oc-timeline-status {
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

.oc-timeline-date {
  font-size: 0.8rem;
  color: #666;
}

.oc-timeline-comentario {
  margin: 0;
  color: #555;
  font-size: 0.9rem;
  white-space: pre-line;
}

/* Botões de ação */
.oc-acoes {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 15px;
}

.oc-botao-secundario,
.oc-botao-primario {
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s, transform 0.2s;
}

.oc-botao-secundario {
  background-color: #f1f1f1;
  color: #333;
}

.oc-botao-primario {
  background-color: #5BB12F;
  color: white;
}

.oc-botao-secundario:hover,
.oc-botao-primario:hover {
  transform: translateY(-2px);
}

.oc-botao-secundario:hover {
  background-color: #e5e5e5;
}

.oc-botao-primario:hover {
  background-color: #4a9525;
}

/* Modal para imagem ampliada */
.oc-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 40px;
  box-sizing: border-box;
}

.oc-modal-content {
  position: relative;
  max-width: 100%;
  max-height: 100%;
}

.oc-modal-fechar {
  position: absolute;
  top: -35px;
  right: -35px;
  color: white;
  font-size: 30px;
  cursor: pointer;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
}

.oc-imagem-ampliada {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .oc-header-nav {
    padding: 12px 15px;
  }

  .oc-detalhes-content {
    padding: 12px;
  }

  .oc-cabecalho {
    padding: 15px;
  }
  
  .oc-cabecalho-info {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .oc-status-badge {
    margin-top: 10px;
  }
  
  .oc-cabecalho-meta {
    flex-direction: column;
    gap: 5px;
  }
  
  .oc-grid-info {
    grid-template-columns: 1fr;
  }
  
  .oc-acoes {
    flex-direction: column;
    gap: 10px;
  }
  
  .oc-botao-secundario,
  .oc-botao-primario {
    width: 100%;
  }

  .oc-modal-fechar {
    top: -30px;
    right: 0px;
  }
}
</style>