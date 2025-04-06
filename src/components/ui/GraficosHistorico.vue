<template>
  <div>
    <BarChart v-if="tipo === 'bar'" :dados="dados" />
    <PieChart v-if="tipo === 'pie'" :dados="dados" />
  </div>
</template>

<script>
import BarChart from './BarChart.vue'
import PieChart from './PieChart.vue'

export default {
  name: 'GraficosHistorico',
  components: {
    BarChart,
    PieChart
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