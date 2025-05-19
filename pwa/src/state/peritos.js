import { reactive, readonly } from 'vue';
import { salvarLocalStorage, carregarLocalStorage } from './utilidades';

const STORAGE_KEY = 'peritos';

// Estado inicial padrão
const estadoPadrao = {
  peritos: [
    {
      id: 1,
      nome: "João Silva",
      contacto: "joao.silva@example.com",
      senha: "123456",
      status: "Disponível",
      ocorrenciasConcluidas: 10
    },
    {
      id: 2,
      nome: "Maria Oliveira",
      contacto: "maria.oliveira@example.com",
      senha: "123456",
      status: "Disponível",
      ocorrenciasConcluidas: 7
    },
    {
      id: 3,
      nome: "Carlos Souza",
      contacto: "carlos.souza@example.com",
      senha: "123456",
      status: "Não disponível",
      ocorrenciasConcluidas: 5
    }
  ]
};

// Estado global para peritos
const estado = reactive(carregarLocalStorage(STORAGE_KEY, estadoPadrao));

// Salvar estado no localStorage
const salvarEstado = () => {
  salvarLocalStorage(STORAGE_KEY, estado);
};

// Adicionar um novo perito
const adicionarPerito = (perito) => {
  const id = Math.max(0, ...estado.peritos.map(p => p.id)) + 1;
  estado.peritos.push({
    ...perito,
    id,
    ocorrenciasConcluidas: 0
  });
  salvarEstado();
  return id;
};

// Atualizar um perito existente
const atualizarPerito = (id, dadosAtualizados) => {
  const index = estado.peritos.findIndex(p => p.id === id);
  if (index !== -1) {
    estado.peritos[index] = {
      ...estado.peritos[index],
      ...dadosAtualizados
    };
    salvarEstado();
    return true;
  }
  return false;
};

// Remover um perito
const removerPerito = (id) => {
  const peritosAntigos = [...estado.peritos];
  estado.peritos = estado.peritos.filter(p => p.id !== id);
  salvarEstado();
  return peritosAntigos.length !== estado.peritos.length;
};

// Atualizar o status de um perito
const atualizarStatusPerito = (id, novoStatus) => {
  const perito = estado.peritos.find(p => p.id === id);
  if (perito) {
    perito.status = novoStatus;
    salvarEstado();
    return true;
  }
  return false;
};

// Incrementar ocorrências concluídas
const incrementarOcorrenciasConcluidas = (id) => {
  const perito = estado.peritos.find(p => p.id === id);
  if (perito) {
    perito.ocorrenciasConcluidas++;
    salvarEstado();
    return true;
  }
  return false;
};

// Hook para acesso ao estado
export const usePeritos = () => {
  return {
    estado: readonly(estado),
    adicionarPerito,
    atualizarPerito,
    removerPerito,
    atualizarStatusPerito,
    incrementarOcorrenciasConcluidas
  };
};