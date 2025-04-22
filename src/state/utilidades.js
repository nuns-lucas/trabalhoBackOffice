// Função utilitária para verificar se uma data pertence à semana atual
export const isSemanaAtual = (data) => {
  const agora = new Date();
  const inicioSemana = new Date(agora.setDate(agora.getDate() - agora.getDay()));
  const fimSemana = new Date(inicioSemana);
  fimSemana.setDate(inicioSemana.getDate() + 6);

  const dataOcorrencia = new Date(data);
  return dataOcorrencia >= inicioSemana && dataOcorrencia <= fimSemana;
};

// Função utilitária para verificar se uma data pertence à semana passada
export const isSemanaPassada = (data) => {
  const agora = new Date();
  const inicioSemanaAtual = new Date(agora.setDate(agora.getDate() - agora.getDay()));
  const fimSemanaPassada = new Date(inicioSemanaAtual);
  fimSemanaPassada.setDate(inicioSemanaAtual.getDate() - 1);
  const inicioSemanaPassada = new Date(fimSemanaPassada);
  inicioSemanaPassada.setDate(fimSemanaPassada.getDate() - 6);

  const dataOcorrencia = new Date(data);
  return dataOcorrencia >= inicioSemanaPassada && dataOcorrencia <= fimSemanaPassada;
};

// Helper para salvar no localStorage
export const salvarLocalStorage = (chave, dados) => {
  try {
    localStorage.setItem(chave, JSON.stringify(dados));
  } catch (erro) {
    console.error(`Erro ao salvar dados de ${chave}:`, erro);
  }
};

// Helper para carregar do localStorage
export const carregarLocalStorage = (chave, estadoPadrao) => {
  try {
    const dadosSalvos = localStorage.getItem(chave);
    if (dadosSalvos) {
      return JSON.parse(dadosSalvos);
    }
  } catch (erro) {
    console.error(`Erro ao carregar dados de ${chave}:`, erro);
  }
  return estadoPadrao;
};