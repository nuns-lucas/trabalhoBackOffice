import { reactive, readonly } from 'vue';
import { salvarLocalStorage, carregarLocalStorage, isSemanaAtual, isSemanaPassada } from './utilidades';
import { useAuditorias } from './auditorias';

const STORAGE_KEY = 'ocorrencias';

// Estado inicial padrão
const estadoPadrao = {
  ocorrencias: []
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
    // Garantir que o objeto tenha um id único
    const id = Date.now();
    
    // Criar objeto completo com valores padrão
    estado.ocorrencias.push({
      id,
      ...novaOcorrencia,
      data: new Date().toISOString(),
      status: 'Aberta',
      foto: novaOcorrencia.foto || '',
      // Garantir que campos essenciais existam
      tipo: novaOcorrencia.tipo || 'Outro',
      mensagem: novaOcorrencia.mensagem || '',
      usuarioId: novaOcorrencia.usuarioId || null,
      email: novaOcorrencia.email || '',
      nome: novaOcorrencia.nome || 'Utilizador',
      latitude: novaOcorrencia.latitude || null,
      longitude: novaOcorrencia.longitude || null,
      endereco: novaOcorrencia.endereco || 'Não disponível'
    });
    
    salvarEstado();
    
    // Adicionar à lista de ocorrências do usuário se tiver ID
    if (novaOcorrencia.usuarioId) {
      try {
        const ocorrenciasUsuario = JSON.parse(
          localStorage.getItem(`ocorrencias_usuario_${novaOcorrencia.usuarioId}`) || '[]'
        );
        ocorrenciasUsuario.push(id);
        localStorage.setItem(
          `ocorrencias_usuario_${novaOcorrencia.usuarioId}`, 
          JSON.stringify(ocorrenciasUsuario)
        );
      } catch (error) {
        console.error('Erro ao salvar ocorrência na lista do usuário:', error);
      }
    }
    
    // Manter compatibilidade com front-office
    try {
      const todasOcorrencias = JSON.parse(localStorage.getItem('ocorrencias') || '[]');
      if (Array.isArray(todasOcorrencias)) {
        const ocorrenciasFormatadas = [...estado.ocorrencias];
        localStorage.setItem('ocorrencias', JSON.stringify(ocorrenciasFormatadas));
      }
    } catch (error) {
      console.error('Erro ao atualizar formato de ocorrências para front-office:', error);
    }
    
    return id;
  };

  // Atualizar status de uma ocorrência
  const atualizarStatus = (id, novoStatus) => {
    const ocorrencia = estado.ocorrencias.find((o) => o.id === parseInt(id));
    if (ocorrencia) {
      ocorrencia.status = novoStatus;
      salvarEstado();
      return true;
    }
    return false;
  };

  // Atribuir responsável e mudar para "Em Análise"
  const atribuirResponsavel = (id, responsavelId) => {
    const ocorrencia = estado.ocorrencias.find((o) => o.id === parseInt(id));
    if (ocorrencia && ocorrencia.status === 'Aberta') {
      ocorrencia.responsavelId = responsavelId;
      ocorrencia.status = 'Em Análise';
      salvarEstado();
      return true;
    }
    return false;
  };

  // Rejeitar ocorrência
  const rejeitarOcorrencia = (id) => {
    const ocorrencia = estado.ocorrencias.find((o) => o.id === parseInt(id));
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

    // Atualizar o status da ocorrência para "Em Auditoria"
    const ocorrencia = estado.ocorrencias.find((o) => o.id === parseInt(novaAuditoria.ocorrenciaId));
    if (ocorrencia && ocorrencia.status === 'Em Análise') {
      ocorrencia.status = 'Em Auditoria';
      salvarEstado();
    }

    return id;
  };

  // Obter ocorrências por perito
  const obterOcorrenciasPorPerito = (peritoId) => {
    return estado.ocorrencias.filter(o => o.responsavelId === peritoId);
  };

  // Obter ocorrências por usuário
  const obterOcorrenciasPorUsuario = (usuarioId) => {
    return estado.ocorrencias.filter(o => o.usuarioId === usuarioId);
  };

  // Obter ocorrências por email
  const obterOcorrenciasPorEmail = (email) => {
    return estado.ocorrencias.filter(o => o.email === email);
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
    switch (status?.toLowerCase()) {
      case 'aberta': return 'status-aberta';
      case 'em análise': return 'status-analise';
      case 'em auditoria': return 'status-auditoria';
      case 'rejeitada': return 'status-rejeitada';
      case 'concluída': return 'status-concluida';
      case 'auditorias': return 'status-auditorias';
      case 'peritos': return 'status-peritos';
      default: return '';
    }
  };

  // Atualizar campos de uma ocorrência
  const atualizarOcorrencia = (id, dadosAtualizados) => {
    const ocorrencia = estado.ocorrencias.find((o) => o.id === parseInt(id));
    if (ocorrencia) {
      // Mesclar os dados atualizados com a ocorrência existente
      Object.assign(ocorrencia, dadosAtualizados);
      salvarEstado();
      return true;
    }
    return false;
  };

  // Buscar ocorrência por ID
  const obterOcorrenciaPorId = (id) => {
    return estado.ocorrencias.find(o => o.id === parseInt(id)) || null;
  };

  // Obter estatísticas gerais de ocorrências
  const obterEstatisticas = () => {
    const total = estado.ocorrencias.length;
    const abertas = estado.ocorrencias.filter(o => o.status === 'Aberta').length;
    const emAnalise = estado.ocorrencias.filter(o => o.status === 'Em Análise').length;
    const emAuditoria = estado.ocorrencias.filter(o => o.status === 'Em Auditoria').length;
    const concluidas = estado.ocorrencias.filter(o => o.status === 'Concluída').length;
    const rejeitadas = estado.ocorrencias.filter(o => o.status === 'Rejeitada').length;
    
    const porTipo = {};
    estado.ocorrencias.forEach(o => {
      porTipo[o.tipo] = (porTipo[o.tipo] || 0) + 1;
    });
    
    return {
      total,
      abertas,
      emAnalise,
      emAuditoria,
      concluidas,
      rejeitadas,
      porTipo
    };
  };

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
    obterOcorrenciasPorUsuario,
    obterOcorrenciasPorEmail,
    atualizarOcorrencia,
    obterOcorrenciaPorId,
    obterEstatisticas
  };
};