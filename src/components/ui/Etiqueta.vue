<template>
  <span class="etiqueta" :class="nivel">
    {{ texto }}
  </span>
</template>

<script>
export default {
  name: 'Etiqueta',
  props: {
    nivel: {
      type: String,
      validator: value => ['alta', 'media', 'baixa'].includes(value)
    }
  },
  computed: {
    texto() {
      return this.nivel.toUpperCase()
    }
  }
};
</script>

<style scoped>
.etiqueta {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  margin-right: 8px;
}

.alta {
  background: #dc3545;
  color: white;
}

.media {
  background: #ffc107;
  color: #343a40;
}

.baixa {
  background: #28a745;
  color: white;
}
</style>
