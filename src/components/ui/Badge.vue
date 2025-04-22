<template>
  <span class="badge" :class="badgeClass">{{ statusFormatado }}</span>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true
    }
  },
  computed: {
    badgeClass() {
      switch(this.status) {
        case 'Aberta':
          return 'badge-success'; // Verde
        case 'Auditoria aberta':
          return 'badge-warning'; // Amarelo
        case 'Rejeitada':
          return 'badge-danger'; // Vermelho
        default:
          return 'badge-secondary';
      }
    },
    statusFormatado() {
      return this.status;
    }
  }
}
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
}

.badge-success {
  background-color: #28a745;
  color: white;
}

.badge-warning {
  background-color: #ffc107;
  color: #212529;
}

.badge-danger {
  background-color: #dc3545;
  color: white;
}

.badge-secondary {
  background-color: #6c757d;
  color: white;
}
</style>