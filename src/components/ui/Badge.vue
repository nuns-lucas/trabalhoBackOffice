<template>
  <span :class="['badge', statusClass]">
    {{ statusText }}
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    status: {
      type: String,
      required: true,
      validator: (value) =>
        ['Pendente', 'Encaminhado', 'Concluída', 'Disponível', 'Não disponível'].includes(value)
    }
  },
  computed: {
    statusText() {
      const map = {
        Pendente: 'Pendente',
        Encaminhado: 'Encaminhado',
        Concluída: 'Concluída',
        Disponível: 'Disponível',
        'Não disponível': 'Não disponível'
      };
      return map[this.status] || this.status;
    },
    statusClass() {
      const map = {
        Pendente: 'bg-danger text-dark',
        Encaminhado: 'bg-warning text-dark',
        Concluída: 'bg-success text-dark',
        Disponível: 'bg-success text-light', // Verde para "Disponível"
        'Não disponível': 'bg-danger text-light' // Vermelho para "Não disponível"
      };
      return map[this.status] || 'bg-light text-dark';
    }
  }
};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.25em 0.5em;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  border-radius: 0.25rem;
}
</style>