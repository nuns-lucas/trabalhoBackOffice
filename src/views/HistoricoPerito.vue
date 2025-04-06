<template>
  <div class="historico-perito">
    <Sidebar />
    <main class="conteudo-principal">
      <h2 class="titulo-secao">Histórico de Ocorrências - {{ perito.nome }}</h2>
      <div class="filtros">
        <label for="ano">Ano:</label>
        <select id="ano" v-model="anoSelecionado">
          <option v-for="ano in anos" :key="ano" :value="ano">{{ ano }}</option>
        </select>
      </div>
      <div class="graficos">
        <Cartao titulo="Ocorrências por Mês">
          <GraficosHistorico tipo="bar" :dados="dadosPorMes" />
        </Cartao>
        <Cartao titulo="Tipos de Ocorrências">
          <GraficosHistorico tipo="pie" :dados="dadosPorTipo" />
        </Cartao>
      </div>

      <!-- Tabela de Ocorrências -->
      <div class="tabela-ocorrencias">
        <h3 class="titulo-tabela">Ocorrências Filtradas</h3>
        <ListaOcorrencias :ocorrencias="ocorrenciasFiltradas" />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue';
import Cartao from '@/components/ui/Cartao.vue';
import GraficosHistorico from '@/components/ui/GraficosHistorico.vue';
import ListaOcorrencias from '@/components/ocorrencias/ListaOcorrencias.vue';
import { useOcorrencias } from '@/state/ocorrencias';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'HistoricoPerito',
  components: { Sidebar, Cartao, GraficosHistorico, ListaOcorrencias },
  setup() {
    const { estado, obterOcorrenciasPorPerito } = useOcorrencias();
    const route = useRoute();

    const peritoId = Number(route.params.id);
    const ocorrencias = computed(() => obterOcorrenciasPorPerito(peritoId));

    const anos = computed(() => {
      const anosDisponiveis = ocorrencias.value.map((o) =>
        new Date(o.data).getFullYear()
      );
      return [...new Set(anosDisponiveis)];
    });

    const anoSelecionado = ref(new Date().getFullYear());

    const dadosPorMes = computed(() => {
      const contagem = {};
      const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
      ];
      ocorrencias.value.forEach((o) => {
        const data = new Date(o.data);
        if (data.getFullYear() === anoSelecionado.value) {
          const mes = meses[data.getMonth()]; // Obtém o nome do mês
          contagem[mes] = (contagem[mes] || 0) + 1;
        }
      });

      return contagem;
    });

    const dadosPorTipo = computed(() => {
      const contagem = {};
      ocorrencias.value.forEach((o) => {
        if (new Date(o.data).getFullYear() === anoSelecionado.value) {
          const tipo = o.tipo; // Obtém o tipo da ocorrência (ex.: "avaria", "atraso")
          contagem[tipo] = (contagem[tipo] || 0) + 1;
        }
      });
      return contagem;
    });

    const ocorrenciasFiltradas = computed(() => {
      return ocorrencias.value.filter((o) => {
        const data = new Date(o.data);
        return data.getFullYear() === anoSelecionado.value;
      });
    });

    const perito = computed(() =>
      estado.peritos.find((p) => p.id === peritoId)
    );

    return { perito, anos, anoSelecionado, dadosPorMes, dadosPorTipo, ocorrenciasFiltradas };
  }
};
</script>

<style scoped>
.historico-perito {
  display: flex;
  min-height: 100vh;
  background-color: #f4f6f9;
}

.conteudo-principal {
  flex: 1;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 20px;
}

.titulo-secao {
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
}

.filtros {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.filtros label {
  font-weight: bold;
  color: #495057;
}

.filtros select {
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  color: #495057;
}

.graficos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.cartao {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.cartao h5 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 15px;
}

.tabela-ocorrencias {
  margin-top: 30px;
}

.titulo-tabela {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>