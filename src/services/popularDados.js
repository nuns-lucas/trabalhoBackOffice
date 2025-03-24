export const popularDadosTeste = () => {
  const dados = {
    ocorrencias: [
      {
        id: 1,
        tipo: "atraso",
        mensagem: "Autocarro 47 atrasado na paragem Central",
        urgencia: "alta",
        latitude: 41.443,
        longitude: -8.29,
        data: "2023-11-15T08:30:00",
        status: "pendente"
      },
      {
        id: 2,
        tipo: "avaria",
        mensagem: "Autocarro 12 com pneu furado",
        urgencia: "media",
        latitude: 41.445,
        longitude: -8.295,
        data: "2023-11-15T09:15:00",
        status: "resolvido"
      },
      {
        id: 3,
        tipo: "atraso",
        mensagem: "Autocarro 5 com 20min de atraso",
        urgencia: "baixa",
        latitude: 41.441,
        longitude: -8.293,
        data: "2023-11-15T10:05:00",
        status: "pendente"
      }
    ],
    statusAutocarros: {
      operacionais: 18,
      atrasados: 3,
      avariados: 1
    }
  };

  // Salva no localStorage
  localStorage.setItem('ocorrencias', JSON.stringify(dados.ocorrencias));
  localStorage.setItem('operacionais', dados.statusAutocarros.operacionais);
  localStorage.setItem('atrasados', dados.statusAutocarros.atrasados);
  localStorage.setItem('avariados', dados.statusAutocarros.avariados);

  console.log("✅ Dados de teste carregados com sucesso!");
};
