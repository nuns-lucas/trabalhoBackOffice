import { reactive, readonly } from 'vue';
import { salvarLocalStorage, carregarLocalStorage } from './utilidades';

const STORAGE_KEY = 'materiais';

// Estado inicial padrão
const estadoPadrao = {
  materiais: [
    {
      id: 1,
      nome: 'Medidor ultrassônico',
      descricao: 'Medidor para identificar problemas em estruturas metálicas',
      quantidade: 3,
      quantidadeMinima: 2,
      unidade: 'unidade'
    },
    {
      id: 2,
      nome: 'Alicate isolado',
      descricao: 'Alicate para instalações elétricas',
      quantidade: 5,
      quantidadeMinima: 3,
      unidade: 'unidade'
    },
    {
      id: 3,
      nome: 'Decíbelímetro digital',
      descricao: 'Medidor de decibéis para análise de ruídos',
      quantidade: 1,
      quantidadeMinima: 2,
      unidade: 'unidade'
    },
    {
      id: 4,
      nome: 'Luva de proteção',
      descricao: 'Luva para proteção dos peritos em campo',
      quantidade: 20,
      quantidadeMinima: 10,
      unidade: 'par'
    },
    {
      id: 5,
      nome: 'Lanterna potente',
      descricao: 'Lanterna para inspeções noturnas ou em áreas escuras',
      quantidade: 8,
      quantidadeMinima: 5,
      unidade: 'unidade'
    }
  ],
  materiaisAuditoria: [] // materiais associados a auditorias
};

// Estado global para materiais
const estado = reactive(carregarLocalStorage(STORAGE_KEY, estadoPadrao));

// Salvar estado no localStorage
const salvarEstado = () => {
  salvarLocalStorage(STORAGE_KEY, estado);
};

// Métodos para manipular o estado
const adicionarMaterial = (material) => {
  // Gerar um ID único
  const id = Math.max(0, ...estado.materiais.map(m => m.id)) + 1;
  
  // Adicionar o material com o ID gerado
  estado.materiais.push({
    ...material,
    id
  });
  
  salvarEstado();
  return id;
};

const editarMaterial = (id, dadosAtualizados) => {
  const index = estado.materiais.findIndex(m => m.id === id);
  if (index !== -1) {
    estado.materiais[index] = {
      ...estado.materiais[index],
      ...dadosAtualizados
    };
    salvarEstado();
    return true;
  }
  return false;
};

const removerMaterial = (id) => {
  const materiaisAntigos = [...estado.materiais];
  estado.materiais = estado.materiais.filter(m => m.id !== id);
  salvarEstado();
  return materiaisAntigos.length !== estado.materiais.length;
};

const adicionarMateriaisAuditoria = (auditoriaId, materiais) => {
  // Remover materiais existentes para esta auditoria, se houver
  estado.materiaisAuditoria = estado.materiaisAuditoria.filter(m => m.auditoriaId !== auditoriaId);
  
  // Adicionar os novos materiais
  estado.materiaisAuditoria.push(...materiais.map(m => ({ ...m, auditoriaId })));
  
  // Atualizar o estoque
  materiais.forEach(material => {
    const materialEstoque = estado.materiais.find(m => m.id === material.materialId);
    if (materialEstoque) {
      materialEstoque.quantidade -= material.quantidade;
    }
  });
  
  salvarEstado();
};

const getMateriaisPorAuditoria = (auditoriaId) => {
  return estado.materiaisAuditoria.filter(m => m.auditoriaId === auditoriaId);
};

// Hook para acesso ao estado
export const useMateriais = () => {
  return {
    estado: readonly(estado),
    adicionarMaterial,
    editarMaterial,
    removerMaterial,
    adicionarMateriaisAuditoria,
    getMateriaisPorAuditoria
  };
};