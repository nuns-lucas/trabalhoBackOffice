<template>
  <div class="cartao" :class="{ sombra: sombra }">
    <div class="cabecalho" v-if="titulo">
      <h5>{{ titulo }}</h5>
    </div>
    <div class="corpo">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cartao',
  props: {
    titulo: String,
    sombra: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.cartao {
  background: white;
  border-radius: 10px;
  margin-bottom: 20px;
}

.cartao.sombra {
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.cabecalho {
  padding: 15px 10px;
  border-bottom: 1px solid #eee;
}

.cabecalho h5 {
  margin: 0;
  font-size: 1.1rem;
}

.corpo {
  padding: 20px;
}
</style>
