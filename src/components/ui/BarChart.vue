<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { onMounted, onBeforeUnmount, watch, ref } from 'vue';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registre os componentes necessários do Chart.js
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default {
  name: 'BarChart',
  props: {
    dados: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const canvas = ref(null);
    let chartInstance = null;

    // Array de cores para as barras
    const generateColors = (length) => {
      const colors = [
        '#007bff', '#28a745', '#ffc107', '#dc3545', '#6f42c1', '#fd7e14', '#20c997', '#6610f2'
      ];
      // Repete as cores se o número de barras for maior que o número de cores disponíveis
      return Array.from({ length }, (_, i) => colors[i % colors.length]);
    };

    const renderChart = () => {
      if (chartInstance) {
        chartInstance.destroy(); // Destroi o gráfico existente antes de recriar
      }

      let labels = Object.keys(props.dados);
      const data = Object.values(props.dados);

      // Ordena os meses se os labels forem nomes de meses
      const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
      ];
      if (labels.every((label) => meses.includes(label))) {
        labels = labels.sort((a, b) => meses.indexOf(a) - meses.indexOf(b));
      }

      chartInstance = new Chart(canvas.value, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Quantidade',
              data: labels.map((label) => props.dados[label]), // Garante que os dados sigam a ordem dos labels
              backgroundColor: generateColors(data.length) // Gera cores diferentes para cada barra
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1, // Incrementa em números inteiros
                callback: (value) => Math.round(value) // Garante que os valores sejam inteiros
              }
            }
          }
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