<template>
  <div>
    <BarChart :dados="dados" />
  </div>
</template>

<script>
import BarChart from './BarChart.vue'

export default {
  name: 'GraficosHistorico',
  components: {
    BarChart
  },
  props: {
    tipo: {
      type: String,
      required: true
    },
    dados: {
      type: Object,
      required: true
    }
  }
}
</script>