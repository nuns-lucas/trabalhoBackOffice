import { reactive, readonly } from 'vue';
import { salvarLocalStorage, carregarLocalStorage, isSemanaAtual, isSemanaPassada } from './utilidades';
import { useAuditorias } from './auditorias';

const STORAGE_KEY = 'ocorrencias';

// Estado inicial padrão
const estadoPadrao = {
  ocorrencias: [
    {
      id: 1,
      nome: "luiz",
      tipo: "atraso",
      mensagem: "Autocarro 47 atrasado na paragem Central - 25 minutos de espera",
      latitude: 41.4425,
      longitude: -8.2918,
      data: "2023-11-25T08:15:00",
      status: "Aberta",
      linha: "47",
      paragem: "Central",
      foto: "https://images.newrr.rr.pt/fila-autocarroslx195097d2_capa1.jpg",
    },
    {
      id: 2,
      nome: "Fabio",
      tipo: "avaria",
      mensagem: "Autocarro 12 com porta danificada na Rua da República",
      latitude: 41.4432,
      longitude: -8.2963,
      data: "2023-11-25T09:30:00",
      status: "Aberta",
      linha: "12",
      paragem: "Rua da República",
      foto: "https://example.com/foto2.jpg",
    },
    {
      id: 3,
      nome: "Shrek",
      tipo: "incidente",
      mensagem: "Queda de passageiro ao entrar no autocarro 5",
      latitude: 41.4418,
      longitude: -8.2935,
      data: "2023-11-22T10:45:00",
      status: "Rejeitada",
      linha: "5",
      paragem: "Hospital",
      foto: "https://img.contacto.lu/public/luxemburgo/vltr3w-o-grave-acidente-com-o-autocarro-de-passageiros-aconteceu-esta-manha-na-a1-na-zona-da-mealhada./alternates/BASE_SIXTEEN_NINE/O%20grave%20acidente%20com%20o%20autocarro%20de%20passageiros%20aconteceu%20esta%20manh%C3%A3%20na%20A1%20na%20zona%20da%20Mealhada.",
    },
    {
      id: 4,
      nome: "Shrek",
      tipo: "atraso",
      mensagem: "Autocarro 33 com atraso de 15 minutos na rotunda",
      latitude: 41.4451,
      longitude: -8.2887,
      data: "2023-11-23T11:20:00",
      status: "Aberta",
      linha: "33",
      paragem: "Rotunda das Oliveiras",
      foto: "https://example.com/foto4.jpg",
    },
    {
      id: 5,
      nome: "Ana",
      tipo: "avaria",
      mensagem: "Autocarro 20 com problema no motor na Avenida Principal",
      latitude: 41.4500,
      longitude: -8.3000,
      data: "2023-10-15T14:30:00",
      status: "Rejeitada",
      linha: "20",
      paragem: "Avenida Principal",
      foto: "https://example.com/foto5.jpg",
    },
    {
      id: 6,
      nome: "Pedro",
      tipo: "avaria",
      mensagem: "Autocarro 8 com pneu furado na Rua das Flores",
      latitude: 41.4520,
      longitude: -8.3100,
      data: "2023-09-10T09:00:00",
      status: "Rejeitada",
      linha: "8",
      paragem: "Rua das Flores",
      foto: "https://example.com/foto6.jpg",
    },
    {
      id: 7,
      nome: "Joana",
      tipo: "atraso",
      mensagem: "Autocarro 15 atrasado 20 minutos na Praça Central",
      latitude: 41.4600,
      longitude: -8.3200,
      data: "2023-08-05T18:45:00",
      status: "Rejeitada",
      linha: "15",
      paragem: "Praça Central",
      foto: "https://example.com/foto7.jpg",
    },
    {
      id: 8,
      nome: "Ricardo",
      tipo: "atraso",
      mensagem: "Autocarro 22 atrasado 10 minutos na Estação Norte",
      latitude: 41.4700,
      longitude: -8.3300,
      data: "2023-07-20T07:15:00",
      status: "Aberta",
      linha: "22",
      paragem: "Estação Norte",
      foto: "https://example.com/foto8.jpg",
    },
    {
      id: 9,
      nome: "Carla",
      tipo: "incidente",
      mensagem: "Passageiro escorregou ao descer do autocarro 10 na Rua Nova",
      latitude: 41.4800,
      longitude: -8.3400,
      data: "2023-07-12T12:00:00",
      status: "Rejeitada",
      linha: "10",
      paragem: "Rua Nova",
      foto: "https://example.com/foto9.jpg",
    },
    {
      id: 10,
      nome: "João",
      tipo: "avaria",
      mensagem: "Autocarro 30 com problema no sistema de freios na Rua Central",
      latitude: 41.4850,
      longitude: -8.3500,
      data: "2023-06-15T10:00:00",
      status: "Aberta",
      linha: "30",
      paragem: "Rua Central",
      foto: "https://example.com/foto10.jpg",
    },
    {
      id: 11,
      nome: "Mariana",
      tipo: "atraso",
      mensagem: "Autocarro 18 atrasado 25 minutos na Praça do Mercado",
      latitude: 41.4900,
      longitude: -8.3600,
      data: "2023-05-10T15:30:00",
      status: "Rejeitada",
      linha: "18",
      paragem: "Praça do Mercado",
      foto: "https://example.com/foto11.jpg",
    },
    {
      id: 12,
      nome: "Carlos",
      tipo: "incidente",
      mensagem: "Passageiro caiu ao descer do autocarro 12 na Avenida das Flores",
      latitude: 41.4950,
      longitude: -8.3700,
      data: "2023-04-20T09:45:00",
      status: "Rejeitada",
      linha: "12",
      paragem: "Avenida das Flores",
      foto: "https://example.com/foto12.jpg",
    },
    {
      id: 13,
      nome: "Ana",
      tipo: "avaria",
      mensagem: "Autocarro 25 com problema no motor na Rua Nova",
      latitude: 41.5000,
      longitude: -8.3800,
      data: "2023-03-15T11:20:00",
      status: "Aberta",
      linha: "25",
      paragem: "Rua Nova",
      foto: "https://example.com/foto13.jpg",
    },
    {
      id: 14,
      nome: "Pedro",
      tipo: "atraso",
      mensagem: "Autocarro 40 atrasado 15 minutos na Estação Sul",
      latitude: 41.5050,
      longitude: -8.3900,
      data: "2023-02-25T08:10:00",
      status: "Rejeitada",
      linha: "40",
      paragem: "Estação Sul",
      foto: "https://example.com/foto14.jpg",
    },
    {
      id: 15,
      nome: "Joana",
      tipo: "incidente",
      mensagem: "Queda de passageiro ao entrar no autocarro 50 na Praça Central",
      latitude: 41.5100,
      longitude: -8.4000,
      data: "2023-01-30T14:00:00",
      status: "Rejeitada",
      linha: "50",
      paragem: "Praça Central",
      foto: "https://example.com/foto15.jpg",
    },
    {
      id: 16,
      nome: "Ricardo",
      tipo: "avaria",
      mensagem: "Autocarro 60 com problema elétrico na Rua das Palmeiras",
      latitude: 41.5150,
      longitude: -8.4100,
      data: "2023-12-05T16:30:00",
      status: "Rejeitada",
      linha: "60",
      paragem: "Rua das Palmeiras",
      foto: "https://example.com/foto16.jpg",
    },
    {
      id: 17,
      nome: "Carla",
      tipo: "atraso",
      mensagem: "Autocarro 70 atrasado 30 minutos na Avenida Principal",
      latitude: 41.5200,
      longitude: -8.4200,
      data: "2023-11-15T07:50:00",
      status: "Aberta",
      linha: "70",
      paragem: "Avenida Principal",
      foto: "https://example.com/foto17.jpg",
    },
    {
      id: 18,
      nome: "Luiz",
      tipo: "incidente",
      mensagem: "Passageiro escorregou ao descer do autocarro 80 na Rua do Comércio",
      latitude: 41.5250,
      longitude: -8.4300,
      data: "2023-10-10T13:15:00",
      status: "Rejeitada",
      linha: "80",
      paragem: "Rua do Comércio",
      foto: "https://example.com/foto18.jpg",
    },
    {
      id: 19,
      nome: "Fabio",
      tipo: "avaria",
      mensagem: "Autocarro 90 com problema no sistema de ar condicionado na Praça Nova",
      latitude: 41.5300,
      longitude: -8.4400,
      data: "2023-09-20T10:40:00",
      status: "Rejeitada",
      linha: "90",
      paragem: "Praça Nova",
      foto: "https://example.com/foto19.jpg",
    },
    {
      id: 20,
      nome: "Mariana",
      tipo: "atraso",
      mensagem: "Autocarro 100 atrasado 20 minutos na Estação Central",
      latitude: 41.5350,
      longitude: -8.4500,
      data: "2023-08-25T06:30:00",
      status: "Aberta",
      linha: "100",
      paragem: "Estação Central",
      foto: "https://example.com/foto20.jpg",
    },
    {
      id: 21,
      nome: "João",
      tipo: "avaria",
      mensagem: "Autocarro 110 com problema no motor na Rua das Laranjeiras",
      latitude: 41.5400,
      longitude: -8.4600,
      data: "2023-07-15T09:00:00",
      status: "Rejeitada",
      linha: "110",
      paragem: "Rua das Laranjeiras",
      foto: "https://example.com/foto21.jpg",
    },
    {
      id: 22,
      nome: "Ana",
      tipo: "atraso",
      mensagem: "Autocarro 120 atrasado 10 minutos na Avenida das Rosas",
      latitude: 41.5450,
      longitude: -8.4700,
      data: "2023-06-10T12:20:00",
      status: "Rejeitada",
      linha: "120",
      paragem: "Avenida das Rosas",
      foto: "https://example.com/foto22.jpg",
    },
    {
      id: 23,
      nome: "Pedro",
      tipo: "incidente",
      mensagem: "Passageiro caiu ao entrar no autocarro 130 na Praça Velha",
      latitude: 41.5500,
      longitude: -8.4800,
      data: "2023-05-05T11:45:00",
      status: "Rejeitada",
      linha: "130",
      paragem: "Praça Velha",
      foto: "https://example.com/foto23.jpg",
    },
    {
      id: 24,
      nome: "Joana",
      tipo: "avaria",
      mensagem: "Autocarro 140 com problema no sistema de portas na Rua Nova",
      latitude: 41.5550,
      longitude: -8.4900,
      data: "2023-04-20T14:30:00",
      status: "Rejeitada",
      linha: "140",
      paragem: "Rua Nova",
      foto: "https://example.com/foto24.jpg",
    },
    {
      id: 25,
      nome: "Ricardo",
      tipo: "atraso",
      mensagem: "Autocarro 150 atrasado 5 minutos na Estação Norte",
      latitude: 41.5600,
      longitude: -8.5000,
      data: "2025-04-19T08:10:00",
      status: "Aberta",
      linha: "150",
      paragem: "Estação Norte",
      foto: "https://example.com/foto25.jpg",
    },
    {
      id: 26,
      nome: "Carla",
      tipo: "incidente",
      mensagem: "Passageiro escorregou ao descer do autocarro 160 na Avenida Central",
      latitude: 41.5650,
      longitude: -8.5100,
      data: "2025-04-24T10:50:00",
      status: "Aberta",
      linha: "160",
      paragem: "Avenida Central",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQIWeGpbhP876U-WvYeEzzINtmn5FeAE1Wg&s",
    },
    {
      id: 27,
      nome: "Luiz",
      tipo: "avaria",
      mensagem: "Autocarro 170 com problema no sistema de suspensão na Rua das Palmeiras",
      latitude: 41.5700,
      longitude: -8.5200,
      data: "2025-04-25T13:30:00",
      status: "Aberta",
      linha: "170",
      paragem: "Rua das Palmeiras",
      foto: "https://i.etsystatic.com/22237519/r/il/c36cd9/5405852543/il_570xN.5405852543_j7xu.jpg",
    },
    {
      id: 28,
      nome: "Fabio",
      tipo: "atraso",
      mensagem: "Autocarro 180 atrasado 15 minutos na Praça Nova",
      latitude: 41.5750,
      longitude: -8.5300,
      data: "2025-04-25T07:20:00",
      status: "Aberta",
      linha: "180",
      paragem: "Praça Nova",
      foto: "https://example.com/foto28.jpg",
    },
    {
      id: 29,
      nome: "Mariana",
      tipo: "incidente",
      mensagem: "Passageiro caiu ao entrar no autocarro 190 na Estação Central",
      latitude: 41.5800,
      longitude: -8.5400,
      data: "2025-04-21T04:40:00",
      status: "Aberta",
      linha: "190",
      paragem: "Estação Central",
      foto: "https://example.com/foto29.jpg",
    }
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

  return {
    estado: readonly(estado),
    adicionarOcorrencia,
    atualizarStatus,
    atribuirResponsavel,
    rejeitarOcorrencia,
    calcularMudanca,
    calcularClasse,
    criarAuditoria,
    obterOcorrenciasPorPerito
  };
};