<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { onMounted, onBeforeUnmount, watch, ref } from 'vue';
import {
  Chart,
  PieController,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Registre os componentes necessários do Chart.js
Chart.register(PieController, ArcElement, Tooltip, Legend);

export default {
  name: 'PieChart',
  props: {
    dados: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const canvas = ref(null);
    let chartInstance = null;

    const renderChart = () => {
      if (chartInstance) {
        chartInstance.destroy(); // Destroi o gráfico existente antes de recriar
      }

      chartInstance = new Chart(canvas.value, {
        type: 'pie',
        data: {
          labels: Object.keys(props.dados),
          datasets: [
            {
              data: Object.values(props.dados),
              backgroundColor: [
                '#007bff',
                '#28a745',
                '#ffc107',
                '#dc3545',
                '#6f42c1',
                '#fd7e14'
              ]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    };

    onMounted(renderChart);

    watch(
      () => props.dados,
      () => {
        renderChart(); // Recria o gráfico quando os dados mudam
      },
      { deep: true }
    );

    onBeforeUnmount(() => {
      if (chartInstance) {
        chartInstance.destroy(); // Limpa o gráfico ao desmontar o componente
      }
    });

    return { canvas };
  }
};
</script>