import { reactive, readonly } from 'vue';
import { salvarLocalStorage, carregarLocalStorage, isSemanaAtual, isSemanaPassada } from './utilidades';
import { useAuditorias } from './auditorias';

const STORAGE_KEY = 'ocorrencias';

// Estado inicial padrão
const estadoPadrao = {
  ocorrencias: [
    
  ]
};

// Estado global para ocorrências
const estado = reactive(carregarLocalStorage(STORAGE_KEY, estadoPadrao));

// Salvar estado no localStorage
const salvarEstado = () => {
  salvarLocalStorage(STORAGE_KEY, estado);
};

// Hook para acesso ao estado
export const useOcorrencias = () => {
  const { criarAuditoria: criarAuditoriaFunc } = useAuditorias();

  // Adicionar nova ocorrência
  const adicionarOcorrencia = (novaOcorrencia) => {
    const id = Date.now();
    estado.ocorrencias.push({
      id,
      ...novaOcorrencia,
      data: new Date().toISOString(),
      status: 'Aberta',
      foto: novaOcorrencia.foto || '',
    });
    salvarEstado();
    return id;
  };

  // Atualizar status de uma ocorrência
  const atualizarStatus = (id, novoStatus) => {
    const ocorrencia = estado.ocorrencias.find((o) => o.id === id);
    if (ocorrencia) {
      ocorrencia.status = novoStatus;
      salvarEstado();
      return true;
    }
    return false;
  };

  // Atribuir responsável e mudar para "Aberta"
  const atribuirResponsavel = (id, responsavelId) => {
    const ocorrencia = estado.ocorrencias.find((o) => o.id === id);
    if (ocorrencia && ocorrencia.status === 'Aberta') {
      ocorrencia.responsavelId = responsavelId;
      ocorrencia.status = 'Aberta';
      salvarEstado();
      return true;
    }
    return false;
  };

  // Rejeitar ocorrência
  const rejeitarOcorrencia = (id) => {
    const ocorrencia = estado.ocorrencias.find((o) => o.id === id);
    if (ocorrencia) {
      ocorrencia.status = 'Rejeitada';
      salvarEstado();
      return true;
    }
    return false;
  };

  // Criar auditoria a partir de uma ocorrência
  const criarAuditoria = (novaAuditoria) => {
    const id = criarAuditoriaFunc(novaAuditoria);

    // Atualizar o status da ocorrência para "Aberta"
    const ocorrencia = estado.ocorrencias.find((o) => o.id === novaAuditoria.ocorrenciaId);
    if (ocorrencia && ocorrencia.status === 'Aberta') {
      ocorrencia.status = 'Aberta';
      salvarEstado();
    }

    return id;
  };

  // Obter ocorrências por perito
  const obterOcorrenciasPorPerito = (peritoId) => {
    return estado.ocorrencias.filter(o => o.responsavelId === peritoId);
  };

  // Calcular mudança entre semanas
  const calcularMudanca = (tipo) => {
    const semanaAtual = estado.ocorrencias.filter(
      (o) => o.tipo === tipo && isSemanaAtual(o.data)
    ).length;
    const semanaPassada = estado.ocorrencias.filter(
      (o) => o.tipo === tipo && isSemanaPassada(o.data)
    ).length;
    const diferenca = semanaAtual - semanaPassada;
    const porcentagem = ((diferenca / (semanaPassada || 1)) * 100).toFixed(1);
    return `${porcentagem}% ${diferenca >= 0 ? '' : '-'}`;
  };

  // Calcular classe CSS para um status
  const calcularClasse = (status) => {
    if (status === 'Aberta') return 'status-aberta'; // Verde
    if (status === 'Aberta') return 'status-auditoria-aberta'; // Amarelo
    if (status === 'Rejeitada') return 'status-rejeitada'; // Vermelho
    if (status === 'Auditorias') return 'status-auditorias';
    if (status === 'Peritos') return 'status-peritos';
    return '';
  };

  // Atualizar campos de uma ocorrência
  const atualizarOcorrencia = (id, dadosAtualizados) => {
    const ocorrencia = estado.ocorrencias.find((o) => o.id === id);
    if (ocorrencia) {
      // Mesclar os dados atualizados com a ocorrência existente
      Object.assign(ocorrencia, dadosAtualizados);
      salvarEstado();
      return true;
    }
    return false;
  };

  // E também adicionar atualizarOcorrencia ao objeto retornado
  return {
    estado: readonly(estado),
    adicionarOcorrencia,
    atualizarStatus,
    atribuirResponsavel,
    rejeitarOcorrencia,
    calcularMudanca,
    calcularClasse,
    criarAuditoria,
    obterOcorrenciasPorPerito,
    atualizarOcorrencia  // Adicionar esta linha
  };
};