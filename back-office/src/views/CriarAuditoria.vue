<template>
  <div class="criar-auditoria-page">
    <Sidebar />
    <div class="conteudo">
      <div class="topo">
        <button class="botao-voltar" @click="voltarParaDetalhes">← Voltar</button>
        <h2 class="titulo-form">{{ ocorrencia ? 'Criar Auditoria' : 'Ocorrência não encontrada' }}</h2>
      </div>

      <div v-if="ocorrencia" class="form-container">
        <div class="duas-colunas">
          <!-- Coluna Esquerda - Foto -->
          <div class="coluna-foto">
            <img v-if="ocorrencia.foto" :src="ocorrencia.foto" :alt="`Foto da ocorrência ${ocorrencia.id}`"
              class="foto-ocorrencia" />
            <div v-else class="foto-placeholder">
              <span>Sem foto disponível</span>
            </div>

            <!-- Resumo da ocorrência -->
            <div class="resumo-ocorrencia">
              <h4>Detalhes da Ocorrência</h4>
              <p class="resumo-item"><strong>Tipo:</strong> {{ formatarTipo(ocorrencia.tipo) }}</p>
              <p class="resumo-item"><strong>Linha:</strong> {{ ocorrencia.linha }}</p>
              <p class="resumo-item"><strong>Paragem:</strong> {{ ocorrencia.paragem }}</p>
              <p class="resumo-item"><strong>Data:</strong> {{ formatarData(ocorrencia.data) }}</p>
              <p class="resumo-item"><strong>Mensagem:</strong> {{ ocorrencia.mensagem }}</p>
            </div>
          </div>

          <!-- Coluna Direita - Formulário de Auditoria -->
          <div class="coluna-form">
            <h3>Criar Nova Auditoria</h3>

            <form @submit.prevent="criarNovaAuditoria" class="formulario-auditoria">
              <div class="form-group">
                <label for="titulo">Nome da Auditoria*</label>
                <input type="text" id="titulo" v-model="novaAuditoria.titulo" required
                  placeholder="Ex: Auditoria de Atraso na Linha 47" />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="origem">Origem*</label>
                  <select id="origem" v-model="novaAuditoria.origem" required>
                    <option value="" disabled>Selecione a origem</option>
                    <option value="Interna">Interna</option>
                    <option value="Externa">Externa</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="tipo">Tipo*</label>
                  <select id="tipo" v-model="novaAuditoria.tipo" required>
                    <option value="" disabled>Selecione o tipo</option>
                    <option value="atraso">Atraso</option>
                    <option value="avaria">Avaria</option>
                    <option value="incidente">Incidente</option>
                    <option value="segurança">Segurança</option>
                    <option value="avalia">Avaliação</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="peritos">Peritos Responsáveis*</label>
                <!-- Mensagem de alerta quando não há peritos disponíveis -->
                <div v-if="semPeritosDisponiveis" class="info-alerta">
                  <p>Não há peritos disponíveis no momento. Todos os peritos estão ocupados com outras auditorias ou indisponíveis.</p>
                </div>
                <!-- Seletor de peritos apenas se houver peritos disponíveis -->
                <div v-else class="peritos-selector">
                  <select id="peritos" v-model="peritoSelecionado">
                    <option value="" disabled>Selecione os peritos</option>
                    <option v-for="perito in peritosDisponiveis" :key="perito.id" :value="perito.id">
                      {{ perito.nome }}
                    </option>
                  </select>
                  <button type="button" class="btn-add" @click="adicionarPerito" :disabled="!peritoSelecionado">
                    Adicionar
                  </button>
                </div>

                <!-- Lista de peritos selecionados -->
                <div class="peritos-selecionados" v-if="novaAuditoria.peritos.length > 0">
                  <div v-for="(peritoId, index) in novaAuditoria.peritos" :key="`selected-${peritoId}`"
                    class="perito-item">
                    {{ getNomePerito(peritoId) }}
                    <button type="button" class="btn-remove" @click="removerPerito(index)">
                      ×
                    </button>
                  </div>
                </div>
                <p class="error" v-if="peritoError">{{ peritoError }}</p>
              </div>

              <!-- Seção de Materiais -->
              <div class="form-group">
                <label>Materiais Necessários</label>
                <div class="materiais-selector">
                  <select v-model="materialSelecionado">
                    <option value="" disabled>Selecione um material</option>
                    <option v-for="material in materiaisDisponiveis" :key="material.id" :value="material.id">
                      {{ material.nome }} (Disponível: {{ material.quantidade }} {{ material.unidade }})
                    </option>
                  </select>
                  <input type="number" v-model.number="quantidadeMaterial" min="1" 
                    :max="getMaterialDisponivel(materialSelecionado)" class="input-quantidade" />
                  <button type="button" class="btn-add" @click="adicionarMaterial" :disabled="!materialSelecionado">
                    Adicionar
                  </button>
                </div>

                <!-- Lista de materiais selecionados -->
                <div class="materiais-selecionados" v-if="novaAuditoria.materiais.length > 0">
                  <h4>Materiais Selecionados:</h4>
                  <div v-for="(material, index) in novaAuditoria.materiais" :key="`material-${material.materialId}`"
                    class="material-item">
                    {{ getNomeMaterial(material.materialId) }} - {{ material.quantidade }} {{ getUnidadeMaterial(material.materialId) }}
                    <button type="button" class="btn-remove" @click="removerMaterial(index)">
                      ×
                    </button>
                  </div>
                </div>
                <p class="error" v-if="materialError">{{ materialError }}</p>
              </div>

              <div class="form-group">
                <label for="dataFinalizacao">Data Prevista de Finalização*</label>
                <input type="date" id="dataFinalizacao" v-model="novaAuditoria.dataFinalizacao" :min="dataMinima"
                  required />
              </div>

              <div class="form-group">
                <label for="descricao">Detalhes Adicionais</label>
                <textarea id="descricao" v-model="novaAuditoria.descricao"
                  placeholder="Detalhe os objetivos e escopo da auditoria" rows="4"></textarea>
              </div>

              <div class="form-actions">
                <button type="submit" class="btn-primary" :disabled="semPeritosDisponiveis || novaAuditoria.peritos.length === 0">
                  Criar Auditoria
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
import { useAuditorias } from '@/state/auditorias';
import { usePeritos } from '@/state/peritos';
import { useMateriais } from '@/state/materiais';
import Sidebar from '@/components/layout/Sidebar.vue';

export default {
  name: 'CriarAuditoria',
  components: {
    Sidebar
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { estado: estadoOcorrencias, atualizarOcorrencia } = useOcorrencias();
    const { criarAuditoria, estado: estadoAuditorias } = useAuditorias(); // Adicionado o acesso ao estado das auditorias
    const { estado: estadoPeritos } = usePeritos();
    const { estado: estadoMateriais, adicionarMateriaisAuditoria, atualizarEstoqueMaterial } = useMateriais();

    // Obter o ID da ocorrência a partir dos parâmetros da rota
    const ocorrenciaId = Number(route.params.id);

    // Buscar a ocorrência pelo ID
    const ocorrencia = computed(() =>
      estadoOcorrencias.ocorrencias.find(o => o.id === ocorrenciaId)
    );

    // Verificar quais peritos já estão associados a auditorias ativas
    const peritosComAuditoriaAtiva = computed(() => {
      // Criar uma lista de IDs dos peritos que já têm auditoria ativa
      const peritosIndisponiveisIds = [];
      
      // Verifica todas as auditorias
      estadoAuditorias.auditorias.forEach(auditoria => {
        // Se a auditoria estiver ativa ou em andamento
        if (auditoria.ativa || auditoria.status === 'Em andamento') {
          // Adiciona o perito principal
          if (auditoria.peritoId) {
            peritosIndisponiveisIds.push(auditoria.peritoId);
          }
          // Adiciona todos os peritos associados
          if (auditoria.peritos && Array.isArray(auditoria.peritos)) {
            auditoria.peritos.forEach(peritoId => {
              if (!peritosIndisponiveisIds.includes(peritoId)) {
                peritosIndisponiveisIds.push(peritoId);
              }
            });
          }
        }
      });
      
      return peritosIndisponiveisIds;
    });

    // Filtrar peritos disponíveis - agora excluindo aqueles com auditorias ativas
    const peritosDisponiveis = computed(() =>
      estadoPeritos.peritos.filter(p => 
        p.status === 'Disponível' && 
        !peritosComAuditoriaAtiva.value.includes(p.id)
      )
    );

    // Verificar se há peritos disponíveis
    const semPeritosDisponiveis = computed(() => 
      peritosDisponiveis.value.length === 0
    );

    // Data mínima: data atual
    const hoje = new Date();
    const dataMinima = hoje.toISOString().split('T')[0];

    // Nova auditoria
    const novaAuditoria = ref({
      titulo: '',
      origem: '',
      tipo: '',
      peritos: [],
      peritoId: null, // Campo adicionado para relacionamento com o perito principal
      dataFinalizacao: '',
      descricao: '',
      ocorrenciaId: ocorrenciaId,
      localizacao: ocorrencia.value?.paragem || '',
      data: new Date().toISOString(),
      ativa: true,
      status: "Em andamento",
      materiais: [] // Array para armazenar os materiais
    });

    // Perito selecionado temporariamente
    const peritoSelecionado = ref('');
    const peritoError = ref('');

    // Estado para seleção de materiais
    const materialSelecionado = ref('');
    const quantidadeMaterial = ref(1);
    const materialError = ref('');

    // Filtrar materiais disponíveis
    const materiaisDisponiveis = computed(() =>
      estadoMateriais.materiais.filter(m => !novaAuditoria.value.materiais.some(ma => ma.materialId === m.id))
    );

    // Obter quantidade disponível de um material
    const getMaterialDisponivel = (materialId) => {
      if (!materialId) return 0;
      const material = estadoMateriais.materiais.find(m => m.id === materialId);
      return material ? material.quantidade : 0;
    };

    // Obter nome de um material pelo ID
    const getNomeMaterial = (materialId) => {
      const material = estadoMateriais.materiais.find(m => m.id === materialId);
      return material ? material.nome : 'Material não encontrado';
    };

    // Obter unidade de um material pelo ID
    const getUnidadeMaterial = (materialId) => {
      const material = estadoMateriais.materiais.find(m => m.id === materialId);
      return material ? material.unidade : '';
    };

    // Verifica se um perito está atribuído a alguma auditoria ativa
    const peritoEstaAtivo = (peritoId) => {
      return peritosComAuditoriaAtiva.value.includes(peritoId);
    };

    // Adicionar material à auditoria
    const adicionarMaterial = () => {
      if (!materialSelecionado.value || !quantidadeMaterial.value) {
        materialError.value = 'Selecione um material e a quantidade';
        return;
      }

      const material = estadoMateriais.materiais.find(m => m.id === materialSelecionado.value);

      if (!material) {
        materialError.value = 'Material não encontrado';
        return;
      }

      if (quantidadeMaterial.value > material.quantidade) {
        materialError.value = 'Quantidade solicitada maior que a disponível';
        return;
      }

      novaAuditoria.value.materiais.push({
        materialId: materialSelecionado.value,
        quantidade: quantidadeMaterial.value
      });

      materialSelecionado.value = '';
      quantidadeMaterial.value = 1;
      materialError.value = '';
    };

    // Remover material da auditoria
    const removerMaterial = (index) => {
      novaAuditoria.value.materiais.splice(index, 1);
    };

    // Adicionar perito à lista
    const adicionarPerito = () => {
      if (!peritoSelecionado.value) return;

      // Verificar se o perito já foi adicionado
      if (novaAuditoria.value.peritos.includes(peritoSelecionado.value)) {
        peritoError.value = 'Este perito já foi adicionado';
        return;
      }

      // Verificar se o perito está ativo em outra auditoria
      if (peritoEstaAtivo(peritoSelecionado.value)) {
        peritoError.value = 'Este perito já está associado a outra auditoria ativa';
        return;
      }

      // Se for o primeiro perito adicionado, defina-o como peritoId principal
      if (novaAuditoria.value.peritos.length === 0) {
        novaAuditoria.value.peritoId = peritoSelecionado.value;
      }

      novaAuditoria.value.peritos.push(peritoSelecionado.value);
      peritoSelecionado.value = '';
      peritoError.value = '';
    };

    // Remover perito da lista
    const removerPerito = (index) => {
      const peritoRemovido = novaAuditoria.value.peritos[index];
      
      // Se estiver removendo o perito principal, redefina o peritoId
      if (peritoRemovido === novaAuditoria.value.peritoId) {
        // Se ainda houver outros peritos, selecione o primeiro como principal
        if (novaAuditoria.value.peritos.length > 1) {
          // Encontre o próximo perito que não seja o que está sendo removido
          const novoPeritoPrincipal = novaAuditoria.value.peritos.find(
            (id, i) => i !== index
          );
          novaAuditoria.value.peritoId = novoPeritoPrincipal;
        } else {
          // Se não houver mais peritos, defina como null
          novaAuditoria.value.peritoId = null;
        }
      }
      
      novaAuditoria.value.peritos.splice(index, 1);
    };

    // Obter nome do perito pelo ID
    const getNomePerito = (id) => {
      const perito = estadoPeritos.peritos.find(p => p.id === id);
      return perito ? perito.nome : 'Desconhecido';
    };

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

    // Criar auditoria
    const criarNovaAuditoria = () => {
      if (novaAuditoria.value.peritos.length === 0) {
        peritoError.value = 'É necessário adicionar pelo menos um perito';
        return;
      }

      // Garantir que o peritoId está definido (usar o primeiro perito como principal)
      if (!novaAuditoria.value.peritoId) {
        novaAuditoria.value.peritoId = novaAuditoria.value.peritos[0];
      }

      // Preencher os dados da ocorrência
      if (ocorrencia.value) {
        novaAuditoria.value.descricaoOcorrencia = ocorrencia.value.mensagem;
      }

      // Adicionar mensagem para visualização na interface
      if (!novaAuditoria.value.mensagem) {
        novaAuditoria.value.mensagem = novaAuditoria.value.descricao || novaAuditoria.value.titulo;
      }

      try {
        // 1. Criar auditoria
        const auditoriaId = criarAuditoria(novaAuditoria.value);
        
        // 2. Adicionar materiais à auditoria e atualizar estoque
        if (novaAuditoria.value.materiais.length > 0) {
          // Adicionar materiais à auditoria
          if (adicionarMateriaisAuditoria) {
            adicionarMateriaisAuditoria(auditoriaId, novaAuditoria.value.materiais);
          }
          
          // Atualizar o estoque de cada material
          novaAuditoria.value.materiais.forEach(material => {
            if (atualizarEstoqueMaterial) {
              atualizarEstoqueMaterial(material.materialId, -material.quantidade);
            }
          });
        }
        
        // 3. Atualizar a ocorrência para status "Finalizada" em vez de removê-la
        if (ocorrenciaId) {
          atualizarOcorrencia(ocorrenciaId, {
            status: 'Finalizada',
            auditoria: {
              id: auditoriaId,
              data: new Date().toISOString()
            }
          });
        }

        alert('Auditoria criada com sucesso e ocorrência finalizada!');
        voltarParaMenu();
      } catch (error) {
        console.error("Erro ao criar auditoria:", error);
        alert('Erro ao criar auditoria. Verifique o console para mais detalhes.');
      }
    };

    return {
      ocorrencia,
      novaAuditoria,
      peritosDisponiveis,
      peritoSelecionado,
      peritoError,
      dataMinima,
      materiaisDisponiveis,
      materialSelecionado,
      quantidadeMaterial,
      materialError,
      adicionarPerito,
      removerPerito,
      getNomePerito,
      getMaterialDisponivel,
      getNomeMaterial,
      getUnidadeMaterial,
      adicionarMaterial,
      removerMaterial,
      voltarParaDetalhes,
      voltarParaMenu,
      formatarData,
      formatarTipo,
      criarNovaAuditoria,
      semPeritosDisponiveis, // Adicionado para verificar se há peritos disponíveis
      peritoEstaAtivo // Adicionado para verificar o status de um perito específico
    };
  }
};
</script>

<style scoped>
.sidebar {
  max-height: 100vh;
}

.criar-auditoria-page {
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

.form-container,
.erro-container {
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

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.form-row .form-group {
  flex: 1;
  margin-bottom: 0;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 0.9rem;
}

input,
select,
textarea {
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

.peritos-selector,
.materiais-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.peritos-selector select,
.materiais-selector select {
  flex: 1;
}

.input-quantidade {
  width: 100px;
  text-align: center;
}

.btn-add {
  padding: 10px 15px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-add:hover {
  background-color: #5a6268;
}

.btn-add:disabled {
  background-color: #adb5bd;
  cursor: not-allowed;
}

.peritos-selecionados,
.materiais-selecionados {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.materiais-selecionados h4 {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.perito-item,
.material-item {
  display: flex;
  align-items: center;
  background-color: #e9ecef;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.btn-remove {
  background: none;
  border: none;
  color: #dc3545;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
  padding: 0 5px;
}

.btn-remove:hover {
  color: #c82333;
}

.error {
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 5px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
}

.btn-primary {
  padding: 10px 20px;
  background-color: #257401;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #1a5002;
}

.btn-primary:disabled {
  background-color: #94b682;
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

/* Estilo para a mensagem de alerta de peritos */
.info-alerta {
  background-color: #fff3cd;
  color: #856404;
  padding: 12px 15px;
  border-radius: 6px;
  margin-bottom: 15px;
  border-left: 4px solid #ffc107;
}

.info-alerta p {
  margin: 0;
  font-size: 0.95rem;
}
</style>