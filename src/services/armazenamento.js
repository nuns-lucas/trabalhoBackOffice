export default {
  buscarOcorrencias() {
    return JSON.parse(localStorage.getItem('ocorrencias')) || [];
  },
  buscarAtrasos() {
    return this.buscarOcorrencias().filter(o => o.tipo === 'atraso');
  },
  salvarOcorrencias(dados) {
    localStorage.setItem('ocorrencias', JSON.stringify(dados));
  }
};
