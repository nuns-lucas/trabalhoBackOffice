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
      validator: (value) => ['Pendente', "Encaminhado", "Concluída"].includes(value)
    }
  },
  computed: {
    statusText() {
      const map = {
        Pendente: 'Pendente',
        Encaminhado: 'Encaminhado',
        Concluída: 'Concluída'
      };
      return map[this.status] || this.status;
    },
    statusClass() {
      const map = {
        Pendente: 'bg-danger text-dark',
        Encaminhado: 'bg-warning text-dark',
        Concluída: 'bg-success text-dark',
      };
      return map[this.status] || 'bg-light text-dark';
    }
  }
};
</script>