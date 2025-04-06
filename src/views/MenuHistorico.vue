<template>
  <div class="menu-historico">
    <Sidebar />
    <main class="conteudo-principal">
      <h2 class="titulo-secao">Histórico de Ocorrências</h2>

      <!-- Cards com Gráficos -->
      <div class="linha-graficos">
        <Cartao titulo="Ocorrências por Técnico">
          <GraficosHistorico tipo="bar" :dados="dadosPorTecnico" />
        </Cartao>
        <Cartao titulo="Ocorrências por Dia">
          <GraficosHistorico tipo="pie" :dados="dadosPorDia" />
        </Cartao>
        <Cartao titulo="Materiais Utilizados">
          <GraficosHistorico tipo="bar" :dados="dadosPorMaterial" />
        </Cartao>
      </div>

      <!-- Filtros e Tabela -->
      <div class="filtros">
        <label for="mes">Mês:</label>
        <select id="mes" v-model="mesSelecionado">
          <option v-for="mes in meses" :key="mes.valor" :value="mes.valor">
            {{ mes.nome }}
          </option>
        </select>

        <label for="ano">Ano:</label>
        <select id="ano" v-model="anoSelecionado">
          <option v-for="ano in anos" :key="ano" :value="ano">
            {{ ano }}
          </option>
        </select>
      </div>

      <ListaOcorrencias :ocorrencias="historicoFiltrado" />
    </main>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import Cartao from '@/components/ui/Cartao.vue';
import ListaOcorrencias from '@/components/ocorrencias/ListaOcorrencias.vue';
import GraficosHistorico from '@/components/ui/GraficosHistorico.vue';
import { useOcorrencias } from '@/state/ocorrencias';

export default {
  name: 'MenuHistorico',
  components: {
    Sidebar,
    Cartao,
    ListaOcorrencias,
    GraficosHistorico
  },
  setup() {
    const { estado } = useOcorrencias();

    // Filtros de mês e ano
    const mesSelecionado = ref(new Date().getMonth() + 1);
    const anoSelecionado = ref(new Date().getFullYear());

    const meses = [
      { nome: 'Janeiro', valor: 1 },
      { nome: 'Fevereiro', valor: 2 },
      { nome: 'Março', valor: 3 },
      { nome: 'Abril', valor: 4 },
      { nome: 'Maio', valor: 5 },
      { nome: 'Junho', valor: 6 },
      { nome: 'Julho', valor: 7 },
      { nome: 'Agosto', valor: 8 },
      { nome: 'Setembro', valor: 9 },
      { nome: 'Outubro', valor: 10 },
      { nome: 'Novembro', valor: 11 },
      { nome: 'Dezembro', valor: 12 }
    ];

    const anos = computed(() => {
      const anosDisponiveis = estado.ocorrencias.map(o => new Date(o.data).getFullYear());
      return [...new Set(anosDisponiveis)];
    });

    // Histórico filtrado por mês e ano
    const historicoFiltrado = computed(() => {
      return estado.ocorrencias.filter(o => {
        const data = new Date(o.data);
        return (
          data.getMonth() + 1 === mesSelecionado.value &&
          data.getFullYear() === anoSelecionado.value
        );
      });
    });

    // Dados para os gráficos baseados no histórico filtrado
    const dadosPorTecnico = computed(() => {
      const contagem = {};
      historicoFiltrado.value.forEach(o => {
        if (o.responsavelId) {
          contagem[o.responsavelId] = (contagem[o.responsavelId] || 0) + 1;
        }
      });

      // Mapeia os IDs para os nomes dos técnicos
      const dadosComNomes = {};
      estado.peritos.forEach(perito => {
        if (contagem[perito.id]) {
          dadosComNomes[perito.nome] = contagem[perito.id];
        }
      });

      return dadosComNomes;
    });

    const dadosPorDia = computed(() => {
      const contagem = {};
      historicoFiltrado.value.forEach(o => {
        const dia = new Date(o.data).getDate();
        contagem[dia] = (contagem[dia] || 0) + 1;
      });
      return contagem;
    });

    const dadosPorMaterial = computed(() => {
      // Exemplo fictício: Substitua com dados reais de materiais
      const contagem = {};
      historicoFiltrado.value.forEach(o => {
        if (o.materiais) {
          o.materiais.forEach(material => {
            contagem[material] = (contagem[material] || 0) + 1;
          });
        }
      });
      return contagem;
    });

    return {
      meses,
      anos,
      mesSelecionado,
      anoSelecionado,
      historicoFiltrado,
      dadosPorTecnico,
      dadosPorDia,
      dadosPorMaterial
    };
  }
};
</script>

<style scoped>
.menu-historico {
  display: flex;
  min-height: 100vh;
}

.conteudo-principal {
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
}

.titulo-secao {
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
}

.linha-graficos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.filtros {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  align-items: center;
}

.filtros label {
  font-weight: bold;
}

.filtros select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>