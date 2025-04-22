import { reactive, readonly } from 'vue';
import { salvarLocalStorage, carregarLocalStorage } from './utilidades';

const STORAGE_KEY = 'auditorias';

// Estado inicial padrão
const estadoPadrao = {
  auditorias: [
    {
      id: 1,
      titulo: "Auditoria de Atrasos",
      descricao: "Verificação de atrasos em linhas principais.",
      data: "2023-11-20T10:00:00",
      ativa: true,
      peritoId: 1,
      tipo: "atraso",
      mensagem: "Verificação de atrasos sistemáticos na linha 47",
      status: "Em andamento"
    },
    {
      id: 2,
      titulo: "Auditoria de Avarias",
      descricao: "Inspeção de veículos com problemas mecânicos.",
      data: "2023-11-18T14:30:00",
      ativa: false,
      peritoId: 2,
      tipo: "avaria",
      mensagem: "Verificação de problemas em freios reportados na frota 12",
      status: "Concluída"
    },
    {
      id: 3,
      titulo: "Auditoria de Incidentes",
      descricao: "Análise de incidentes reportados por passageiros.",
      data: "2023-11-15T09:00:00",
      ativa: true,
      peritoId: 1,
      tipo: "incidente",
      mensagem: "Análise de incidentes com passageiros na linha 33",
      status: "Em andamento"
    },
    {
      id: 4,
      titulo: "Auditoria de Rotas",
      descricao: "Revisão de rotas e horários para otimização.",
      data: "2023-11-10T16:00:00",
      ativa: false,
      peritoId: 3,
      tipo: "atraso",
      mensagem: "Revisão de otimização de rotas para diminuir atrasos",
      status: "Concluída"
    },
    {
      id: 5,
      titulo: "Auditoria de Responsáveis",
      descricao: "Avaliação do desempenho dos responsáveis pelas ocorrências.",
      data: "2023-11-05T11:15:00",
      ativa: true,
      peritoId: 2,
      tipo: "avalia",
      mensagem: "Avaliação periódica de responsáveis de zona norte",
      status: "Pendente"
    }
  ]
};

// Estado global para auditorias
const estado = reactive(carregarLocalStorage(STORAGE_KEY, estadoPadrao));

// Salvar estado no localStorage
const salvarEstado = () => {
  salvarLocalStorage(STORAGE_KEY, estado);
};

// Criar uma nova auditoria
const criarAuditoria = (novaAuditoria) => {
  const id = Math.max(0, ...estado.auditorias.map(a => a.id)) + 1;
  estado.auditorias.push({
    id,
    titulo: novaAuditoria.titulo,
    descricao: novaAuditoria.descricao,
    tipo: novaAuditoria.tipo,
    origem: novaAuditoria.origem,
    peritoId: novaAuditoria.peritoId,
    peritos: [...(novaAuditoria.peritos || [])],
    dataFinalizacao: novaAuditoria.dataFinalizacao,
    data: new Date().toISOString(),
    ocorrenciaId: novaAuditoria.ocorrenciaId,
    localizacao: novaAuditoria.localizacao,
    mensagem: novaAuditoria.mensagem || novaAuditoria.descricao,
    status: novaAuditoria.status || "Em andamento",
    ativa: true
  });
  salvarEstado();
  return id;
};

// Atualizar uma auditoria existente
const atualizarAuditoria = (id, dadosAtualizados) => {
  const auditoria = estado.auditorias.find(a => a.id === id);
  if (auditoria) {
    Object.assign(auditoria, dadosAtualizados);
    salvarEstado();
    return true;
  }
  return false;
};

// Remover uma auditoria
const removerAuditoria = (id) => {
  const index = estado.auditorias.findIndex(a => a.id === id);
  if (index !== -1) {
    estado.auditorias.splice(index, 1);
    salvarEstado();
    return true;
  }
  return false;
};

// Alterar o status de uma auditoria
const alterarStatusAuditoria = (id, novoStatus) => {
  const auditoria = estado.auditorias.find(a => a.id === id);
  if (auditoria) {
    auditoria.status = novoStatus;
    salvarEstado();
    return true;
  }
  return false;
};

// Obter auditorias por ocorrência
const obterAuditoriasPorOcorrencia = (ocorrenciaId) => {
  return estado.auditorias.filter(a => a.ocorrenciaId === ocorrenciaId);
};

// Obter auditorias por perito
const obterAuditoriasPorPerito = (peritoId) => {
  return estado.auditorias.filter(a => a.peritoId === peritoId);
};

// Hook para acesso ao estado
export const useAuditorias = () => {
  return {
    estado: readonly(estado),
    criarAuditoria,
    atualizarAuditoria,
    removerAuditoria,
    alterarStatusAuditoria,
    obterAuditoriasPorOcorrencia, // Corrigido: mudei getAuditoriasPorOcorrencia para obterAuditoriasPorOcorrencia
    obterAuditoriasPorPerito
  };
};