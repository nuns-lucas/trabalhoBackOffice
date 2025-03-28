import { reactive } from 'vue';

export const estadoOcorrencias = reactive({
  ocorrencias: [
    {
      id: 1,
      tipo: "atraso",
      mensagem: "Autocarro 47 atrasado na paragem Central - 25 minutos de espera",
      urgencia: "alta",
      latitude: 41.4425,
      longitude: -8.2918,
      data: "2023-11-25T08:15:00",
      status: "pendente",
      linha: "47",
      paragem: "Central"
    },
    {
      id: 2,
      tipo: "avaria",
      mensagem: "Autocarro 12 com porta danificada na Rua da República",
      urgencia: "media",
      latitude: 41.4432,
      longitude: -8.2963,
      data: "2023-11-25T09:30:00",
      status: "em reparação",
      linha: "12",
      paragem: "Rua da República"
    },
    {
      id: 3,
      tipo: "incidente",
      mensagem: "Queda de passageiro ao entrar no autocarro 5",
      urgencia: "alta",
      latitude: 41.4418,
      longitude: -8.2935,
      data: "2023-11-25T10:45:00",
      status: "resolvido",
      linha: "5",
      paragem: "Hospital"
    },
    {
      id: 4,
      tipo: "atraso",
      mensagem: "Autocarro 33 com atraso de 15 minutos na rotunda",
      urgencia: "baixa",
      latitude: 41.4451,
      longitude: -8.2887,
      data: "2023-11-25T11:20:00",
      status: "pendente",
      linha: "33",
      paragem: "Rotunda das Oliveiras"
    }
  ],
  statusAutocarros: {
    operacionais: 42,
    atrasados: 7,
    avariados: 2
  }
});

export const useOcorrencias = () => {
  const adicionarOcorrencia = (novaOcorrencia) => {
    estadoOcorrencias.ocorrencias.push({
      id: Date.now(),
      ...novaOcorrencia,
      data: new Date().toISOString(),
      status: "pendente"
    });
  };

  const atualizarStatus = (id, novoStatus) => {
    const ocorrencia = estadoOcorrencias.ocorrencias.find(o => o.id === id);
    if (ocorrencia) {
      ocorrencia.status = novoStatus;
    }
  };

  return {
    estado: estadoOcorrencias,
    adicionarOcorrencia,
    atualizarStatus
  };
};
