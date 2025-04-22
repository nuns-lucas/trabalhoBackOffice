<template>
  <div class="historico-perito">
    <Sidebar />
    <main class="conteudo-principal">
      <h2 class="titulo-secao" v-if="perito">Histórico de Auditorias - {{ perito.nome }}</h2>
      <h2 class="titulo-secao" v-else>Histórico de Auditorias</h2>
      
      <div class="filtros">
        <div class="filtro-grupo">
          <label for="ano">Ano:</label>
          <select id="ano" v-model="anoSelecionado">
            <option v-for="ano in anos" :key="ano" :value="ano">{{ ano }}</option>
          </select>
        </div>
        
        <div class="filtro-grupo">
          <label for="mes">Mês:</label>
          <select id="mes" v-model="mesSelecionado">
            <option value="">Todos</option>
            <option v-for="(nome, index) in meses" :key="index" :value="index">
              {{ nome }}
            </option>
          </select>
        </div>
      </div>
    
      <!-- Área de Gráficos -->
      <div class="graficos-secao">
        <div class="linha-graficos">
          <Cartao titulo="Auditorias por Tipo" class="grafico-cartao">
            <GraficosHistorico tipo="pie" :dados="dadosPorTipo" />
          </Cartao>
          <Cartao titulo="Auditorias por Mês" class="grafico-cartao">
            <GraficosHistorico tipo="bar" :dados="dadosPorMes" />
          </Cartao>
          <Cartao titulo="Status das Auditorias" class="grafico-cartao">
            <GraficosHistorico tipo="pie" :dados="dadosPorStatus" />
          </Cartao>
        </div>
      </div>
      
      <!-- Tabela de Auditorias -->
      <div class="tabela-container">
        <h3 class="titulo-tabela">Auditorias Atribuídas</h3>
        
        <div class="tabela-wrapper">
          <table class="tabela-dados">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tipo</th>
                <th>Data</th>
                <th>Status</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="auditoria in auditoriasFiltradas" :key="auditoria.id">
                <td>{{ auditoria.id }}</td>
                <td>{{ auditoria.tipo }}</td>
                <td>{{ formatarData(auditoria.data) }}</td>
                <td>{{ auditoria.status }}</td>
                <td>{{ auditoria.mensagem }}</td>
              </tr>
              <tr v-if="auditoriasFiltradas.length === 0">
                <td colspan="5" class="sem-resultados">
                  Nenhuma auditoria encontrada para este perito.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="acoes">
        <button @click="voltarParaPerfil" class="btn btn-secondary">
          Voltar para Perfil
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent, computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePeritos } from '@/state/peritos';
import { useAuditorias } from '@/state/auditorias'; // Alterado: importar useAuditorias em vez de useOcorrencias
import Sidebar from '@/components/layout/Sidebar.vue';
import Cartao from '@/components/ui/Cartao.vue';
import GraficosHistorico from '@/components/ui/GraficosHistorico.vue';

export default defineComponent({
  name: 'HistoricoPerito',
  components: { 
    Sidebar,
    Cartao,
    GraficosHistorico
  },
  props: {
    id: {
      type: String,
      required: false
    }
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const { estado: estadoPeritos } = usePeritos();
    const { estado: estadoAuditorias, obterAuditoriasPorPerito } = useAuditorias(); // Alterado: usar useAuditorias
    
    // Array de nomes dos meses
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    // ID do perito (de props ou route params)
    const peritoId = computed(() => 
      Number(props.id || route.params.id)
    );

    // Dados do perito
    const perito = computed(() => 
      estadoPeritos.peritos.find(p => p.id === peritoId.value)
    );

    // Auditorias atribuídas a este perito
    const auditoriasDoPeritoList = computed(() => {
      // Verificar se a função existe, caso contrário filtrar manualmente
      if (obterAuditoriasPorPerito) {
        return obterAuditoriasPorPerito(peritoId.value);
      } else {
        return estadoAuditorias.auditorias.filter(a => a.peritoId === peritoId.value);
      }
    });

    // Anos disponíveis para filtragem
    const anos = computed(() => {
      const anosUnicos = auditoriasDoPeritoList.value.map(o => 
        new Date(o.data).getFullYear()
      );
      return [...new Set(anosUnicos)].sort((a, b) => b - a); // Ordem decrescente
    });

    // Ano atualmente selecionado (default: ano atual ou o mais recente)
    const anoAtual = new Date().getFullYear();
    const anoSelecionado = ref(anos.value.includes(anoAtual) ? anoAtual : anos.value[0] || anoAtual);
    
    // Mês selecionado (default: todos)
    const mesSelecionado = ref('');

    // Auditorias filtradas por ano
    const auditoriasPorAno = computed(() => {
      if (!anoSelecionado.value) return auditoriasDoPeritoList.value;
      
      return auditoriasDoPeritoList.value.filter(o => {
        const ano = new Date(o.data).getFullYear();
        return ano === anoSelecionado.value;
      });
    });
    
    // Auditorias filtradas pelo ano e mês selecionados
    const auditoriasFiltradas = computed(() => {
      if (!mesSelecionado.value) return auditoriasPorAno.value;
      
      return auditoriasPorAno.value.filter(o => {
        const mes = new Date(o.data).getMonth();
        return mes === Number(mesSelecionado.value);
      });
    });
    
    // Dados para o gráfico de tipo de auditoria (pie chart)
    const dadosPorTipo = computed(() => {
      const tipos = {};
      
      auditoriasPorAno.value.forEach(o => {
        const tipo = o.tipo || 'Desconhecido';
        tipos[tipo] = (tipos[tipo] || 0) + 1;
      });
      
      return tipos;
    });
    
    // Dados para o gráfico de auditorias por mês (bar chart)
    const dadosPorMes = computed(() => {
      // Inicializar objeto com zeros para todos os meses
      const auditoriasPorMes = {};
      meses.forEach((mes, index) => {
        auditoriasPorMes[mes] = 0;
      });
      
      auditoriasPorAno.value.forEach(o => {
        const mes = new Date(o.data).getMonth();
        const nomeMes = meses[mes];
        auditoriasPorMes[nomeMes]++;
      });
      
      return auditoriasPorMes;
    });
    
    // Dados para o gráfico de status (pie chart)
    const dadosPorStatus = computed(() => {
      const status = {};
      
      auditoriasPorAno.value.forEach(o => {
        const stat = o.status || 'Desconhecido';
        status[stat] = (status[stat] || 0) + 1;
      });
      
      return status;
    });

    // Voltar para o perfil do perito
    const voltarParaPerfil = () => {
      router.push({ name: 'PerfilPerito', params: { id: peritoId.value } });
    };

    // Formatar data para exibição
    const formatarData = (data) => {
      if (!data) return '--/--/----';
      try {
        return new Date(data).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch {
        return data;
      }
    };

    return {
      perito,
      auditoriasDoPeritoList,
      anos,
      meses,
      anoSelecionado,
      mesSelecionado,
      auditoriasFiltradas,
      dadosPorTipo,
      dadosPorMes,
      dadosPorStatus,
      voltarParaPerfil,
      formatarData
    };
  }
});
</script>

<style scoped>
.historico-perito {
  display: flex;
  height: 100vh;
  background-color: #f4f6f9;
  overflow: hidden; /* Prevenir scroll na página inteira */
}

.conteudo-principal {
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Adicionar barra de rolagem no conteúdo principal */
  height: calc(100vh - 20px); /* Altura máxima considerando as margens */
}

.titulo-secao {
  margin-bottom: 15px;
  font-size: 1.6rem;
  font-weight: bold;
  color: #2c3e50;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 8px;
  flex-shrink: 0; /* Impedir que o título encolha */
}

.filtros {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
  flex-shrink: 0; /* Impedir que os filtros encolham */
}

.filtro-grupo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filtros label {
  font-weight: bold;
  color: #495057;
  min-width: 40px;
}

.filtros select {
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #495057;
  min-width: 120px;
}

/* Estilos para os gráficos */
.graficos-secao {
  flex-shrink: 0; /* Impedir que a seção de gráficos encolha */
  margin-bottom: 25px; /* Aumentar espaço após os gráficos */
  border-bottom: 1px solid #e0e0e0; /* Linha visual para separar claramente */
  padding-bottom: 15px;
  height: 450px; /* Altura fixa para a área completa de gráficos */
}

.linha-graficos {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Exatamente 3 colunas com mesmo tamanho */
  gap: 20px;
  height: 100%; /* Altura fixa para os gráficos */
  width: 100%; /* Garantir que ocupe toda a largura */
}

.grafico-cartao {
  overflow: hidden; /* Evitar que o conteúdo vaze */
  display: flex;
  flex-direction: column;
}

/* Estilos para a tabela */
.tabela-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 150px; /* Altura mínima razoável para a tabela */
  max-height: calc(100vh - 400px); /* Limitar altura máxima */
}

.titulo-tabela {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #495057;
  flex-shrink: 0;
}

.tabela-wrapper {
  flex: 1;
  overflow-y: auto; /* Barra de rolagem para a tabela */
  border: 1px solid #dee2e6;
  border-radius: 4px;
  height: 100%; /* Usar toda a altura disponível */
}

.tabela-dados {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed; /* Impedir que a tabela se expanda demais */
}

.tabela-dados thead {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #f8f9fa;
}

.tabela-dados th {
  background-color: #f8f9fa;
  color: #495057;
  font-weight: bold;
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid #dee2e6;
}

.tabela-dados td {
  padding: 10px 12px;
  border-bottom: 1px solid #dee2e6;
  color: #495057;
  white-space: normal; /* Permitir quebra de texto */
  word-wrap: break-word; /* Quebrar palavras longas */
}

.tabela-dados tbody tr:hover {
  background-color: #f1f3f5;
}

.sem-resultados {
  text-align: center;
  font-style: italic;
  color: #6c757d;
  padding: 20px !important;
}

.acoes {
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
  flex-shrink: 0; /* Impedir que a área de ações encolha */
  padding-top: 10px; /* Adiciona um pouco de espaço acima dos botões */
  border-top: 1px solid #eee; /* Linha sutil para separar */
}

.btn {
  padding: 8px 18px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

/* Adicionar media query para responsividade */
@media screen and (max-width: 1200px) {
  .linha-graficos {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas médias */
    height: auto; /* Altura automática */
  }
  
  .graficos-secao {
    height: 500px; /* Aumentar altura para acomodar os gráficos */
  }
  
  .tabela-container {
    max-height: calc(100vh - 670px); /* Reajustar a altura da tabela */
  }
}

@media screen and (max-width: 768px) {
  .linha-graficos {
    grid-template-columns: 1fr; /* 1 coluna em telas pequenas */
  }
  
  .graficos-secao {
    height: 750px; /* Aumentar altura para acomodar os gráficos */
  }
  
  .tabela-container {
    max-height: calc(100vh - 920px); /* Reajustar a altura da tabela */
    min-height: 200px;
  }
  
  .filtros {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .filtro-grupo {
    width: 100%;
  }
}
</style>