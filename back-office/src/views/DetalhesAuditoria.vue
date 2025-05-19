<template>
  <div class="detalhes-auditoria">
    <main class="conteudo-principal">
      <div class="cabecalho">
        <button class="botao-voltar" @click="voltarParaHistorico">
          <i class="fas fa-arrow-left"></i> Voltar
        </button>
        <h2 class="titulo-secao">Detalhes da Auditoria</h2>
      </div>

      <div v-if="carregando" class="bloco-carregando">
        <p>Carregando detalhes da auditoria...</p>
      </div>

      <div v-else-if="!auditoria" class="bloco-erro">
        <p>Auditoria não encontrada ou você não tem permissão para visualizá-la.</p>
        <button class="botao-primario" @click="voltarParaHistorico">
          Voltar para o Histórico
        </button>
      </div>

      <div v-else class="conteudo-auditoria">
        <!-- Cabeçalho com informações principais -->
        <div class="bloco-info bloco-header" :class="`header-${auditoria.status?.toLowerCase().replace(' ', '-')}`">
          <div class="info-principal">
            <h3 class="titulo-auditoria">{{ auditoria.titulo || `Auditoria #${auditoria.id}` }}</h3>
            <span class="status" :class="`status-${auditoria.status?.toLowerCase().replace(' ', '-')}`">
              {{ auditoria.status || 'Sem status' }}
            </span>
          </div>
          <div class="info-secundaria">
            <span class="data-criacao">Criada em: {{ formatarData(auditoria.data) }}</span>
            <span v-if="auditoria.dataFinalizacao" class="data-finalizacao">
              Finalização prevista: {{ formatarData(auditoria.dataFinalizacao) }}
            </span>
          </div>
        </div>

        <!-- Layout principal: Imagem à esquerda, Informações à direita -->
        <div class="layout-principal">
          <!-- Coluna da esquerda - Imagem e Mapa -->
          <div class="coluna-visual">
            <!-- Imagem da auditoria/ocorrência -->
            <div class="bloco-info bloco-imagem">
              <h3>Imagem</h3>
              <div v-if="obterImagemPrincipal" class="imagem-principal-container"
                @click="ampliarImagem(obterImagemPrincipal)">
                <img :src="obterImagemPrincipal" alt="Imagem principal" class="imagem-principal" />
              </div>
              <div v-else class="info-vazia imagem-vazia">
                <span>Sem imagem disponível</span>
              </div>
            </div>
          </div>

          <!-- Coluna da direita - Informações -->
          <div class="coluna-info">
            <!-- Informações Gerais -->
            <div class="bloco-info bloco-compacto">
              <h3>Informações Gerais</h3>
              <div class="info-grid">
                <div class="info-item">
                  <span class="label">ID:</span>
                  <span>{{ auditoria.id }}</span>
                </div>
                <div class="info-item">
                  <span class="label">Tipo:</span>
                  <span>{{ auditoria.tipo || 'Não especificado' }}</span>
                </div>
                <div class="info-item">
                  <span class="label">Origem:</span>
                  <span>{{ auditoria.origem || 'Não especificada' }}</span>
                </div>
                <div class="info-item">
                  <span class="label">Status:</span>
                  <span>{{ auditoria.status || 'Não definido' }}</span>
                </div>
                <div class="info-item">
                  <span class="label">Paragem:</span>
                  <span>{{ auditoria.paragem || 'N/A' }}</span>
                </div>
                <div class="info-item" v-if="auditoria.conclusao">
                  <span class="label">Conclusão:</span>
                  <span>{{ auditoria.conclusao }}</span>
                </div>
              </div>
            </div>

            <!-- Equipe Responsável -->
            <div class="bloco-info bloco-compacto">
              <h3>Equipe Responsável</h3>
              <div class="info-item">
                <span class="label">Perito Principal:</span>
                <span>{{ nomePeritoResponsavel }}</span>
              </div>
              <div v-if="peritosAdicionais.length > 0">
                <h4 class="subtitulo">Peritos Adicionais</h4>
                <ul class="lista-peritos lista-compacta">
                  <li v-for="perito in peritosAdicionais" :key="perito.id">
                    {{ perito.nome }}
                  </li>
                </ul>
              </div>
              <div v-else class="info-vazia">
                <span>Nenhum perito adicional atribuído</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Detalhes da Ocorrência Relacionada -->
        <div class="bloco-info bloco-compacto" v-if="ocorrenciaRelacionada">
          <h3>Detalhes da Ocorrência Relacionada</h3>
          <div class="info-grid">
            <div class="info-item">
              <span class="label">ID:</span>
              <span>{{ ocorrenciaRelacionada.id }}</span>
            </div>
            <div class="info-item">
              <span class="label">Tipo:</span>
              <span>{{ ocorrenciaRelacionada.tipo }}</span>
            </div>
            <div class="info-item">
              <span class="label">Reportada por:</span>
              <span>{{ ocorrenciaRelacionada.nome }}</span>
            </div>
            <div class="info-item">
              <span class="label">Email:</span>
              <span>{{ ocorrenciaRelacionada.email }}</span>
            </div>
            <div class="info-item">
              <span class="label">Status:</span>
              <span>{{ ocorrenciaRelacionada.status }}</span>
            </div>
          </div>
          <div class="info-item full-width">
            <span class="label">Mensagem:</span>
            <span>{{ ocorrenciaRelacionada.mensagem }}</span>
          </div>
        </div>

        <!-- Descrição da Auditoria -->
        <div class="bloco-info bloco-compacto">
          <h3>Descrição da Auditoria</h3>
          <div class="texto-descricao">
            <p>{{ auditoria.descricao || 'Sem descrição disponível.' }}</p>
          </div>
        </div>


        <!-- Atualizações da Auditoria -->
        <div class="bloco-info bloco-compacto bloco-atualizacoes" v-if="atualizacoes && atualizacoes.length > 0">
          <h3>Atualizações</h3>
          <div class="lista-atualizacoes">
            <div v-for="(atualizacao, index) in atualizacoes" :key="index" class="atualizacao-item">
              <div class="atualizacao-cabecalho">
                <span class="atualizacao-autor">{{ atualizacao.peritoNome }}</span>
                <span class="atualizacao-data">{{ formatarDataHora(atualizacao.data) }}</span>
              </div>
              <div class="atualizacao-conteudo">
                <p>{{ atualizacao.mensagem }}</p>
              </div>
            </div>
          </div>
        </div>


        <!-- Materiais Utilizados -->
        <div class="bloco-info bloco-compacto" v-if="materiaisUtilizados.length > 0">
          <h3>Materiais Utilizados</h3>
          <table class="tabela-materiais">
            <thead>
              <tr>
                <th>Material</th>
                <th>Quantidade</th>
                <th>Unidade</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="material in materiaisUtilizados" :key="material.id">
                <td>{{ material.nome }}</td>
                <td>{{ material.quantidade }}</td>
                <td>{{ material.unidade }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mapa de Localização -->
        <div class="bloco-info bloco-mapa" v-if="temCoordenadas">
          <h3>Localização</h3>
          <div class="mapa-container">
            <!-- Aqui entraria um componente de mapa -->
            <div class="info-item">
              <span class="label">Coordenadas:</span>
              <span>{{ obterCoordenadas }}</span>
            </div>
            <div class="info-item" v-if="obterEndereco">
              <span class="label">Endereço:</span>
              <span>{{ obterEndereco }}</span>
            </div>
            <div class="mapa-container">
              <MapaOcorrencias :ocorrencias="dadosParaMapa" />
            </div>
          </div>
        </div>


        <!-- Ações disponíveis -->
        <div class="bloco-acoes">
          <button v-if="auditoria.status === 'Concluída'" class="botao-primario" @click="exportarPDF">
            Exportar PDF
          </button>
        </div>
      </div>

      <!-- Modal para ampliar imagens -->
      <div class="modal-imagem" v-if="imagemAmpliada" @click="fecharImagem">
        <div class="modal-conteudo">
          <span class="fechar-modal" @click.stop="fecharImagem">&times;</span>
          <img :src="imagemAmpliada" alt="Imagem ampliada" class="imagem-ampliada" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuditorias } from '@/state/auditorias';
import { useOcorrencias } from '@/state/ocorrencias';
import { usePeritos } from '@/state/peritos';
import { useMateriais } from '@/state/materiais';
import Sidebar from '@/components/layout/Sidebar.vue';
import MapaOcorrencias from '@/components/ocorrencias/MapaOcorrencias.vue';
import { gerarPDFAuditoria } from '@/utils/pdfGenerator';

export default {
  name: 'DetalhesAuditoria',
  components: {
    Sidebar,
    MapaOcorrencias
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { estado: estadoAuditorias } = useAuditorias();
    const { estado: estadoOcorrencias } = useOcorrencias();
    const { estado: estadoPeritos } = usePeritos();
    const { estado: estadoMateriais, getMateriaisPorAuditoria } = useMateriais();

    const auditoria = ref(null);
    const carregando = ref(true);
    const imagemAmpliada = ref(null);
    const atualizacoes = ref([]);

    // Preparar dados para o mapa
    const dadosParaMapa = computed(() => {
      const dados = [];

      // Adicionar dados da auditoria se tiver coordenadas
      if (auditoria.value && auditoria.value.latitude && auditoria.value.longitude) {
        dados.push({
          id: auditoria.value.id,
          tipo: auditoria.value.tipo || 'Auditoria',
          data: auditoria.value.data || new Date(),
          mensagem: auditoria.value.descricao || auditoria.value.titulo || `Auditoria #${auditoria.value.id}`,
          latitude: auditoria.value.latitude,
          longitude: auditoria.value.longitude
        });
      }
      // Se a auditoria não tiver coordenadas mas a ocorrência relacionada tiver
      else if (ocorrenciaRelacionada.value && ocorrenciaRelacionada.value.latitude && ocorrenciaRelacionada.value.longitude) {
        dados.push({
          id: ocorrenciaRelacionada.value.id,
          tipo: ocorrenciaRelacionada.value.tipo || 'Ocorrência',
          data: ocorrenciaRelacionada.value.data || new Date(),
          mensagem: ocorrenciaRelacionada.value.mensagem || `Ocorrência #${ocorrenciaRelacionada.value.id}`,
          latitude: ocorrenciaRelacionada.value.latitude,
          longitude: ocorrenciaRelacionada.value.longitude
        });
      }

      return dados;
    });

    // Carregar atualizações do localStorage
    const carregarAtualizacoes = () => {
      try {
        // Tentar carregar do localStorage primeiro (para compatibilidade)
        const atualizacoesLocalStorage = localStorage.getItem('resultados');
        if (atualizacoesLocalStorage) {
          atualizacoes.value = JSON.parse(atualizacoesLocalStorage);
        }
        // Se não houver no localStorage, verificar se a auditoria tem resultados
        else if (auditoria.value && auditoria.value.resultados && auditoria.value.resultados.length > 0) {
          atualizacoes.value = auditoria.value.resultados;
        } else {
          atualizacoes.value = [];
        }
      } catch (error) {
        console.error('Erro ao carregar atualizações:', error);
        atualizacoes.value = [];
      }
    };

    const auditoriaId = computed(() => {
      return parseInt(route.params.id);
    });

    // Buscar informações da auditoria
    onMounted(() => {
      carregarAuditoria();
      carregarAtualizacoes();
    });

    // Formatar data e hora para exibição
    const formatarDataHora = (dataString) => {
      if (!dataString) return 'Data não disponível';

      try {
        const data = new Date(dataString);
        return data.toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch (e) {
        return 'Data inválida';
      }
    };

    const carregarAuditoria = () => {
      carregando.value = true;

      try {
        if (estadoAuditorias && estadoAuditorias.auditorias) {
          const auditoriaEncontrada = estadoAuditorias.auditorias.find(a => a.id === auditoriaId.value);
          if (auditoriaEncontrada) {
            auditoria.value = { ...auditoriaEncontrada };

            // Se não tiver array de imagens, inicializar
            if (!auditoria.value.imagens) {
              auditoria.value.imagens = [];

              // Se tiver imagem, adicionar ao array
              if (auditoria.value.imagem) {
                auditoria.value.imagens.push(auditoria.value.imagem);
              }
            }

            // Se tiver resultados, carregar nas atualizações
            if (auditoria.value.resultados && auditoria.value.resultados.length > 0) {
              atualizacoes.value = auditoria.value.resultados;
            }
          }
        }
      } catch (error) {
        console.error('Erro ao carregar auditoria:', error);
      } finally {
        carregando.value = false;
        // Após carregar a auditoria, carregar as atualizações também
        carregarAtualizacoes();
      }
    };

    // Buscar ocorrência relacionada
    const ocorrenciaRelacionada = computed(() => {
      if (!auditoria.value || !auditoria.value.ocorrenciaId || !estadoOcorrencias || !estadoOcorrencias.ocorrencias) {
        return null;
      }

      return estadoOcorrencias.ocorrencias.find(o => o.id === auditoria.value.ocorrenciaId) || null;
    });

    // Obter nome do perito responsável
    const nomePeritoResponsavel = computed(() => {
      if (!auditoria.value || !auditoria.value.peritoId || !estadoPeritos || !estadoPeritos.peritos) {
        return 'Não atribuído';
      }

      const perito = estadoPeritos.peritos.find(p => p.id === auditoria.value.peritoId);
      return perito ? perito.nome : 'Desconhecido';
    });

    // Obter lista de peritos adicionais
    const peritosAdicionais = computed(() => {
      if (!auditoria.value || !auditoria.value.peritos || !estadoPeritos || !estadoPeritos.peritos) {
        return [];
      }

      // Filtra o perito principal, se estiver na lista
      return estadoPeritos.peritos.filter(p =>
        auditoria.value.peritos.includes(p.id) &&
        p.id !== auditoria.value.peritoId
      );
    });

    // Obter materiais utilizados na auditoria
    const materiaisUtilizados = computed(() => {
      if (!auditoria.value || !getMateriaisPorAuditoria || !estadoMateriais || !estadoMateriais.materiais) {
        return [];
      }

      const materiaisAuditoria = getMateriaisPorAuditoria(auditoria.value.id) || [];

      return materiaisAuditoria.map(ma => {
        const materialInfo = estadoMateriais.materiais.find(m => m.id === ma.materialId);
        return {
          id: ma.id,
          nome: materialInfo ? materialInfo.nome : 'Material desconhecido',
          quantidade: ma.quantidade,
          unidade: materialInfo ? materialInfo.unidade : 'unid.'
        };
      });
    });

    // Verificar se tem coordenadas
    const temCoordenadas = computed(() => {
      if (auditoria.value && (auditoria.value.latitude || auditoria.value.longitude)) {
        return true;
      }
      if (ocorrenciaRelacionada.value && (ocorrenciaRelacionada.value.latitude || ocorrenciaRelacionada.value.longitude)) {
        return true;
      }
      return false;
    });

    // Obter coordenadas
    const obterCoordenadas = computed(() => {
      if (auditoria.value && auditoria.value.latitude && auditoria.value.longitude) {
        return `${auditoria.value.latitude}, ${auditoria.value.longitude}`;
      }
      if (ocorrenciaRelacionada.value && ocorrenciaRelacionada.value.latitude && ocorrenciaRelacionada.value.longitude) {
        return `${ocorrenciaRelacionada.value.latitude}, ${ocorrenciaRelacionada.value.longitude}`;
      }
      return 'Não disponível';
    });

    // Obter endereço
    const obterEndereco = computed(() => {
      if (auditoria.value && auditoria.value.endereco) {
        return auditoria.value.endereco;
      }
      if (ocorrenciaRelacionada.value && ocorrenciaRelacionada.value.endereco) {
        return ocorrenciaRelacionada.value.endereco;
      }
      return '';
    });

    // Obter imagem principal
    const obterImagemPrincipal = computed(() => {
      if (auditoria.value && auditoria.value.imagens && auditoria.value.imagens.length > 0) {
        return auditoria.value.imagens[0];
      }
      if (auditoria.value && auditoria.value.imagem) {
        return auditoria.value.imagem;
      }
      if (ocorrenciaRelacionada.value && ocorrenciaRelacionada.value.foto) {
        return ocorrenciaRelacionada.value.foto;
      }
      return '';
    });

    // Formatar data para exibição
    const formatarData = (dataString) => {
      if (!dataString) return 'Data não disponível';

      try {
        const data = new Date(dataString);
        return data.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });
      } catch (e) {
        return 'Data inválida';
      }
    };

    // Voltar para o histórico
    const voltarParaHistorico = () => {
      router.push({ name: 'HistoricoOcorrencias' });
    };

    // Ampliar imagem
    const ampliarImagem = (url) => {
      imagemAmpliada.value = url;
    };

    // Fechar imagem ampliada
    const fecharImagem = () => {
      imagemAmpliada.value = null;
    };

    const exportarPDF = () => {
      // Preparar dados para o PDF
      let atualizacoesParaPDF = [];

      // Tentar usar as atualizações já carregadas
      if (atualizacoes.value && atualizacoes.value.length > 0) {
        atualizacoesParaPDF = atualizacoes.value;
      }
      // Se não houver, tentar buscar da auditoria
      else if (auditoria.value && auditoria.value.resultados && auditoria.value.resultados.length > 0) {
        atualizacoesParaPDF = auditoria.value.resultados;
      }

      const dadosPDF = {
        nomePeritoResponsavel: nomePeritoResponsavel.value,
        formatarData: formatarData,
        materiaisUtilizados: materiaisUtilizados.value,
        ocorrenciaRelacionada: ocorrenciaRelacionada.value,
        temCoordenadas: temCoordenadas.value,
        obterCoordenadas: obterCoordenadas.value,
        obterEndereco: obterEndereco.value,
        atualizacoes: atualizacoesParaPDF,
        formatarDataHora: formatarDataHora
      };

      // Chamar a função do utilitário
      gerarPDFAuditoria(auditoria.value, dadosPDF);
    };

    return {
      auditoria,
      carregando,
      ocorrenciaRelacionada,
      nomePeritoResponsavel,
      peritosAdicionais,
      materiaisUtilizados,
      temCoordenadas,
      obterCoordenadas,
      obterEndereco,
      obterImagemPrincipal,
      imagemAmpliada,
      atualizacoes,
      formatarData,
      formatarDataHora,
      voltarParaHistorico,
      ampliarImagem,
      fecharImagem,
      exportarPDF,
      dadosParaMapa
    };
  }
};
</script>

<style scoped>
bloco-atualizacoes {
  background-color: #f8f9fa;
  border-left: 4px solid #0d6efd;
}

.lista-atualizacoes {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.atualizacao-item {
  padding: 10px;
  background-color: #fff;
  border-radius: 6px;
  border-left: 3px solid #0d6efd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.atualizacao-cabecalho {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 0.85rem;
}

.atualizacao-autor {
  font-weight: 600;
  color: #495057;
}

.atualizacao-data {
  color: #6c757d;
}

.atualizacao-conteudo {
  font-size: 0.95rem;
}

.atualizacao-conteudo p {
  margin: 0;
}

.detalhes-auditoria {
  display: flex;
  min-height: 100vh;
}

.conteudo-principal {
  flex: 1;
  padding: 15px 20px;
  background-color: #f4f6f9;
}

.cabecalho {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background-color: #ffffff;
  padding: 12px 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  gap: 15px;
}

.botao-voltar {
  background-color: #257401;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: background-color 0.2s;
}

.botao-voltar:hover {
  background-color: #1a5002;
}

.titulo-secao {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
  flex-grow: 1;
}

.bloco-carregando,
.bloco-erro {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}

.bloco-erro {
  color: #721c24;
  background-color: #f8d7da;
}

.conteudo-auditoria {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.bloco-info {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.bloco-compacto {
  padding: 12px;
}

.bloco-header {
  color: white;
  padding: 15px;
}

/* Headers for different status */
.header-concluída {
  background-color: #28a745;
}

.header-em-andamento {
  background-color: #fbff00;
}

.header-pendente {
  background-color: #dc3545;
  color: #212529;
}

.header-cancelada {
  background-color: #dc3545;
}

.titulo-auditoria {
  color: white;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.info-principal {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-secundaria {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 0.85rem;
  opacity: 0.9;
}

.status {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.2);
}

/* Layout Principal */
.layout-principal {
  display: flex;
  gap: 15px;
}

.coluna-visual {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.coluna-info {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mapa-container {
  margin-top: 15px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  height: auto;
}

@media (max-width: 768px) {
  .layout-principal {
    flex-direction: column;
  }

  .coluna-visual,
  .coluna-info {
    width: 100%;
  }
}

/* Imagem Principal */
.imagem-principal-container {
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
}

.imagem-principal {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s;
}

.imagem-principal:hover {
  transform: scale(1.05);
}

.imagem-vazia {
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 5px;
}

/* Grid para informações */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.info-item {
  display: flex;
  margin-bottom: 8px;
}

.info-item.full-width {
  grid-column: 1 / -1;
}

.info-item .label {
  min-width: 120px;
  font-weight: 600;
  color: #495057;
  font-size: 0.9rem;
}

.bloco-info h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.1rem;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.bloco-info h4.subtitulo {
  margin-top: 12px;
  margin-bottom: 6px;
  font-size: 0.95rem;
  color: #495057;
}

.lista-peritos.lista-compacta {
  margin: 0;
  padding-left: 20px;
}

.lista-peritos.lista-compacta li {
  margin-bottom: 3px;
  font-size: 0.9rem;
}

.texto-descricao,
.conclusoes-texto {
  line-height: 1.5;
  color: #212529;
  font-size: 0.95rem;
}

.tabela-materiais {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  font-size: 0.9rem;
}

.tabela-materiais th,
.tabela-materiais td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

.tabela-materiais th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #495057;
}

/* Mapa */
.bloco-mapa {
  margin-top: 15px;
}

.mapa-container {
  display: flex;
  flex-direction: column;
}

.mapa-placeholder {
  height: 250px;
  background-color: #f8f9fa;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: #6c757d;
  font-style: italic;
}

.bloco-conclusoes {
  background-color: #f8fff8;
  border-left: 4px solid #28a745;
}

.info-vazia {
  color: #6c757d;
  font-style: italic;
  padding: 8px 0;
  font-size: 0.9rem;
}

.bloco-acoes {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px 0;
}

.botao-primario {
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  border: none;
  transition: background-color 0.2s;
  background-color: #257401;
  color: white;
}

.botao-primario:hover {
  background-color: #1a5002;
}

.modal-imagem {
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
}

.modal-conteudo {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.fechar-modal {
  position: absolute;
  top: -40px;
  right: 0;
  color: white;
  font-size: 30px;
  cursor: pointer;
}

.imagem-ampliada {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

@media print {
  .bloco-info {
    page-break-inside: avoid;
  }

  .layout-principal {
    page-break-inside: avoid;
  }

  h3 {
    page-break-after: avoid;
  }

  table {
    page-break-inside: avoid;
  }

  .imagem-principal-container {
    page-break-inside: avoid;
  }
}

/* Estilo para o indicador de carregamento */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-spinner {
  padding: 20px 30px;
  background-color: white;
  border-radius: 8px;
  font-weight: bold;
  color: #257401;
}

/* Estilo para informação do mapa no PDF */
.map-pdf-info {
  padding: 15px;
  background-color: #f8f9fa;
  border: 1px dashed #ddd;
  border-radius: 5px;
  text-align: center;
  margin: 15px 0;
  color: #6c757d;
  font-style: italic;
}

/* Ajuste para estrutura de conteúdo PDF */
.pdf-container .bloco-info {
  break-inside: avoid;
  margin-bottom: 10mm;
}

.pdf-container .layout-principal {
  display: block;
}

.pdf-container .coluna-visual,
.pdf-container .coluna-info {
  width: 100%;
  margin-bottom: 10mm;
}

.pdf-container .imagem-principal-container {
  height: auto;
  max-height: 150mm;
}

.pdf-container .bloco-header {
  margin-bottom: 10mm;
}
</style>