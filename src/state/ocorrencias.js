import { reactive } from 'vue';

const STORAGE_KEY = 'estadoOcorrencias';

// Função para carregar os dados do localStorage
const carregarEstado = () => {
  const estadoSalvo = localStorage.getItem(STORAGE_KEY);
  if (estadoSalvo) {
    return JSON.parse(estadoSalvo);
  }
  // Estado inicial padrão caso não haja dados no localStorage
  return {
    ocorrencias: [
      {
        id: 1,
        nome: "luiz",
        tipo: "atraso",
        mensagem: "Autocarro 47 atrasado na paragem Central - 25 minutos de espera",
        latitude: 41.4425,
        longitude: -8.2918,
        data: "2023-11-25T08:15:00",
        status: "Encaminhado",
        linha: "47",
        paragem: "Central",
        foto: "https://images.newrr.rr.pt/fila-autocarroslx195097d2_capa1.jpg",
        responsavel: "João Silva"
      },
      {
        id: 2,
        nome: "Fabio",
        tipo: "avaria",
        mensagem: "Autocarro 12 com porta danificada na Rua da República",
        latitude: 41.4432,
        longitude: -8.2963,
        data: "2023-11-25T09:30:00",
        status: "Encaminhado",
        linha: "12",
        paragem: "Rua da República",
        foto: "https://example.com/foto2.jpg",
        responsavel: "Maria Oliveira"
      },
      {
        id: 3,
        nome: "Shrek",
        tipo: "incidente",
        mensagem: "Queda de passageiro ao entrar no autocarro 5",
        latitude: 41.4418,
        longitude: -8.2935,
        data: "2023-11-25T10:45:00",
        status: "Concluída",
        linha: "5",
        paragem: "Hospital",
        foto: "https://img.contacto.lu/public/luxemburgo/vltr3w-o-grave-acidente-com-o-autocarro-de-passageiros-aconteceu-esta-manha-na-a1-na-zona-da-mealhada./alternates/BASE_SIXTEEN_NINE/O%20grave%20acidente%20com%20o%20autocarro%20de%20passageiros%20aconteceu%20esta%20manh%C3%A3%20na%20A1%20na%20zona%20da%20Mealhada.",
        responsavel: null
      },
      {
        id: 4,
        nome: "Shrek",
        tipo: "atraso",
        mensagem: "Autocarro 33 com atraso de 15 minutos na rotunda",
        latitude: 41.4451,
        longitude: -8.2887,
        data: "2023-11-25T11:20:00",
        status: "Pendente",
        linha: "33",
        paragem: "Rotunda das Oliveiras",
        foto: "https://example.com/foto4.jpg",
        responsavel: null
      }
    ],
    trabalhadores: [
      { id: 1, nome: "João Silva" },
      { id: 2, nome: "Maria Oliveira" },
      { id: 3, nome: "Carlos Souza" }
    ],
    statusAutocarros: {
      operacionais: 42,
      atrasados: 7,
      avariados: 2
    }
  };
};

// Função para salvar os dados no localStorage
const salvarEstado = (estado) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
};

// Estado reativo carregado do localStorage
export const estadoOcorrencias = reactive(carregarEstado());

export const useOcorrencias = () => {
  const adicionarOcorrencia = (novaOcorrencia) => {
    estadoOcorrencias.ocorrencias.push({
      id: Date.now(),
      ...novaOcorrencia,
      data: new Date().toISOString(),
      status: "Pendente",
      foto: novaOcorrencia.foto || "",
      responsavel: null
    });
    salvarEstado(estadoOcorrencias); // Salva o estado atualizado
  };

  const atualizarStatus = (id, novoStatus) => {
    const ocorrencia = estadoOcorrencias.ocorrencias.find(o => o.id === id);
    if (ocorrencia) {
      ocorrencia.status = novoStatus;
      salvarEstado(estadoOcorrencias); // Salva o estado atualizado
    }
  };

  const atribuirResponsavel = (id, responsavel) => {
    const ocorrencia = estadoOcorrencias.ocorrencias.find(o => o.id === id);
    if (ocorrencia && ocorrencia.status === "Pendente") {
      ocorrencia.responsavel = responsavel;
      ocorrencia.status = "Encaminhado";
      salvarEstado(estadoOcorrencias); // Salva o estado atualizado
    }
  };

  const obterTrabalhadores = () => {
    return estadoOcorrencias.trabalhadores;
  };

  return {
    estado: estadoOcorrencias,
    adicionarOcorrencia,
    atualizarStatus,
    atribuirResponsavel,
    obterTrabalhadores
  };
};