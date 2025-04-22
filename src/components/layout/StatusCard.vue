<template>
  <div class="status-card" :class="statusClass">
    <h3 class="title">{{ title }}</h3>
    <p class="count">{{ count }}</p>
    <p class="change" :class="arrowClass">
      <span>{{ arrow }}</span> {{ formattedDifference }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'StatusCard',
  props: {
    title: String,
    count: Number,
    currentWeek: Number, // Quantidade da semana atual
    previousWeek: Number, // Quantidade da semana passada
    statusClass: String
  },
  computed: {
    // Calcula a diferença percentual entre semanas
    difference() {
      if (this.previousWeek === 0) return 100; // Evita divisão por zero
      return (((this.currentWeek - this.previousWeek) / this.previousWeek) * 100).toFixed(1);
    },
    // Formata a diferença com o símbolo de porcentagem
    formattedDifference() {
      return `${this.difference}% vs semana passada`;
    },
    // Define a seta com base na diferença
    arrow() {
      return this.difference < 0 ? '↓' : '↑';
    },
    // Define a classe da seta com base na diferença
    arrowClass() {
      return this.difference < 0 ? 'negative' : 'positive';
    }
  }
};
</script>

<style scoped>
.status-card {
  flex: 1;
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left; /* Alinha todo o conteúdo à esquerda */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Garante alinhamento consistente */
  height: 150px; /* Define uma altura fixa para todos os cards */
  
}

.status-card h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  text-align: center; /* Centraliza o título */
  flex-grow: 1; /* Garante que o título fique no topo */
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap; /* Impede quebras de linha */
}

.status-card .count {
  font-size: 2rem;
  margin: 10px 0;
  text-align: center; /* Centraliza o número */
  flex-grow: 1; /* Garante que o número fique no centro vertical */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Define cores para valores positivos e negativos */
.status-card .positive {
  color: #28a745; /* Verde para valores positivos */
}

.status-card .negative {
  color: #dc3545; /* Vermelho para valores negativos */
}

.status-card .change {
  font-size: 0.9rem;
  text-align: center; /* Centraliza o texto de diferença */
  max-width: 100%; /* Limita a largura do texto */
  white-space: nowrap; /* Impede quebras de linha */
}
</style>