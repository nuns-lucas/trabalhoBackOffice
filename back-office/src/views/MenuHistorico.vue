<template>
  <div class="menu-historico">
    <Sidebar />
    <main class="conteudo-principal">
      <h2 class="titulo-secao">Histórico de Auditorias</h2>

      <!-- Cards com Gráficos -->
      <div class="linha-graficos">
        <Cartao titulo="Auditorias por Perito">
          <GraficosHistorico tipo="bar" :dados="dadosPorPerito" />
        </Cartao>
        <Cartao titulo="Auditorias por Dia">
          <GraficosHistorico tipo="bar" :dados="dadosPorDia" />
        </Cartao>
        <Cartao titulo="Auditorias por Tipo">
          <GraficosHistorico tipo="bar" :dados="dadosPorTipo" />
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

      <!-- Usar o componente ListaOcorrencias com mapeamento -->
      <ListaOcorrencias :ocorrencias="auditoriasMapeadas" @selecionarOcorrencia="tratarSelecaoAuditoria" />
    </main>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Sidebar from '@/components/layout/Sidebar.vue';
import Cartao from '@/components/ui/Cartao.vue';
import ListaOcorrencias from '@/components/ocorrencias/ListaOcorrencias.vue';
import GraficosHistorico from '@/components/ui/GraficosHistorico.vue';
import { useAuditorias } from '@/state/auditorias';
import { usePeritos } from '@/state/peritos';

export default {
  name: 'MenuHistorico',
  components: {
    Sidebar,
    Cartao,
    ListaOcorrencias,
    GraficosHistorico
  },
  setup() {
    const { estado } = useAuditorias();
    const { estado: estadoPeritos } = usePeritos();
    const router = useRouter();

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

    const selecionarAuditoria = (auditoria) => {
      router.push({ name: 'EditarAuditoria', params: { id: auditoria.id } });
    };

    // Modificar a função de tratamento de seleção para navegar para a view de detalhes
    const tratarSelecaoAuditoria = (ocorrencia) => {
      // Encontrar a auditoria original pelo ID mapeado
      const auditoria = estado.auditorias.find(a => a.id === ocorrencia.id);
      if (auditoria) {
        // Navegar para a tela de detalhes em vez da edição
        router.push({ 
          name: 'DetalhesAuditoria', 
          params: { id: auditoria.id } 
        });
      }
    };

    const anos = computed(() => {
      const anosDisponiveis = estado.auditorias.map(a => new Date(a.data).getFullYear());
      return [...new Set(anosDisponiveis)];
    });

    // Histórico filtrado por mês e ano
    const historicoFiltrado = computed(() => {
      return estado.auditorias.filter(a => {
        const data = new Date(a.data);
        return (
          data.getMonth() + 1 === mesSelecionado.value &&
          data.getFullYear() === anoSelecionado.value
        );
      });
    });

    // Mapear auditorias para o formato esperado pelo componente ListaOcorrencias
    const auditoriasMapeadas = computed(() => {
      return historicoFiltrado.value.map(auditoria => ({
        id: auditoria.id,
        nome: auditoria.titulo,
        tipo: auditoria.tipo,
        data: auditoria.data,
        status: auditoria.status,
        descricao: auditoria.descricao,
        // Outros campos que o ListaOcorrencias possa esperar
        responsavelId: auditoria.peritoId,
        mensagem: auditoria.mensagem
      }));
    });

    // Dados para os gráficos baseados no histórico filtrado
    const dadosPorPerito = computed(() => {
      const contagem = {};
      historicoFiltrado.value.forEach(a => {
        if (a.peritoId) {
          contagem[a.peritoId] = (contagem[a.peritoId] || 0) + 1;
        }
      });

      // Mapeia os IDs para os nomes dos peritos
      const dadosComNomes = {};
      if (estadoPeritos && estadoPeritos.peritos) {
        estadoPeritos.peritos.forEach(perito => {
          if (contagem[perito.id]) {
            dadosComNomes[perito.nome] = contagem[perito.id];
          }
        });
      }

      return dadosComNomes;
    });

    const dadosPorDia = computed(() => {
      const contagem = {};
      historicoFiltrado.value.forEach(a => {
        const dia = new Date(a.data).getDate();
        contagem[dia] = (contagem[dia] || 0) + 1;
      });
      return contagem;
    });

    const dadosPorTipo = computed(() => {
      const contagem = {};
      historicoFiltrado.value.forEach(a => {
        if (a.tipo) {
          const tipoCapitalizado = a.tipo.charAt(0).toUpperCase() + a.tipo.slice(1);
          contagem[tipoCapitalizado] = (contagem[tipoCapitalizado] || 0) + 1;
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
      auditoriasMapeadas,
      dadosPorPerito,
      dadosPorDia,
      dadosPorTipo,
      tratarSelecaoAuditoria
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