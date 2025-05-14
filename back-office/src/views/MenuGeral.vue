<template>
  <div class="menu-geral">
    <Sidebar />
    <div class="conteudo">
      <!-- Linha de Status Cards -->
      <div class="status-cards">
        <StatusCard
          title="Ocorrências Abertas"
          :count="ocorrenciasAbertas.length"
          :currentWeek="ocorrenciasAbertasSemanaAtual.length"
          :previousWeek="ocorrenciasAbertasSemanaPassada.length"
          :statusClass="calcularClasse('Aberta')"
        />
        <StatusCard
          title="Auditorias Abertas"
          :count="ocorrenciasAprovadas.length"
          :currentWeek="ocorrenciasAprovadasSemanaAtual.length"
          :previousWeek="ocorrenciasAprovadasSemanaPassada.length"
          :statusClass="calcularClasse('Auditoria aberta')"
        />
        <StatusCard
          title="Ocorrências Rejeitadas"
          :count="ocorrenciasResolvidas.length"
          :currentWeek="ocorrenciasResolvidasSemanaAtual.length"
          :previousWeek="ocorrenciasResolvidasSemanaPassada.length"
          :statusClass="calcularClasse('Rejeitada')"
        />
        <StatusCard
          title="Auditorias Ativas"
          :count="auditoriasAtivas.length"
          :currentWeek="auditoriasAtivasSemanaAtual.length"
          :previousWeek="auditoriasAtivasSemanaPassada.length"
          :statusClass="calcularClasse('Auditorias')"
        />
        <StatusCard
          title="Peritos Ativos"
          :count="peritosAtivos.length"
          :currentWeek="peritosAtivosSemanaAtual.length"
          :previousWeek="peritosAtivosSemanaPassada.length"
          :statusClass="calcularClasse('Peritos')"
        />
      </div>

      <!-- Linha com Mapa e Tabela -->
      <div class="row">
        <div class="col mapa">
          <!-- Passa ocorrenciasFiltradas para o MapaOcorrencias -->
          <MapaOcorrencias :ocorrencias="ocorrenciasFiltradas" />
        </div>
        <div class="col tabela">
          <!-- Atualiza ocorrenciasFiltradas com base nos filtros -->
          <ListaOcorrencias
            :ocorrencias="ocorrenciasAbertasSemanaAtual"
            @ocorrencias-filtradas="atualizarOcorrenciasFiltradas"
            @selecionarOcorrencia="selecionarOcorrencia"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
import { useOcorrencias } from '@/state/ocorrencias';
import { useAuditorias } from '@/state/auditorias';
import { usePeritos } from '@/state/peritos';
import { useRouter } from 'vue-router';
import Sidebar from '@/components/layout/Sidebar.vue';
import StatusCard from '@/components/layout/StatusCard.vue';
import MapaOcorrencias from '@/components/ocorrencias/MapaOcorrencias.vue';
import ListaOcorrencias from '@/components/ocorrencias/ListaOcorrencias.vue';
import { isSemanaAtual, isSemanaPassada } from '@/state/utilidades';

export default {
  name: 'MenuGeral',
  components: { Sidebar, StatusCard, MapaOcorrencias, ListaOcorrencias },
  setup() {
    const { estado: estadoOcorrencias, calcularClasse } = useOcorrencias();
    const { estado: estadoAuditorias } = useAuditorias();
    const { estado: estadoPeritos } = usePeritos();
    const router = useRouter();

    const selecionarOcorrencia = (ocorrencia) => {
      router.push({ name: 'AuditoriaForm', params: { id: ocorrencia.id } });
    };
    
    // Ocorrências Abertas
    const ocorrenciasAbertas = computed(() =>
      estadoOcorrencias.ocorrencias.filter((o) => o.status === 'Aberta')
    );
    const ocorrenciasAbertasSemanaAtual = computed(() =>
      estadoOcorrencias.ocorrencias.filter((o) => o.status === 'Aberta' && isSemanaAtual(o.data))
    );
    const ocorrenciasAbertasSemanaPassada = computed(() =>
      estadoOcorrencias.ocorrencias.filter((o) => o.status === 'Aberta' && isSemanaPassada(o.data))
    );

    // Ocorrências com Auditoria aberta
    const ocorrenciasAprovadas = computed(() =>
      estadoOcorrencias.ocorrencias.filter((o) => o.status === 'Auditoria aberta')
    );
    const ocorrenciasAprovadasSemanaAtual = computed(() =>
      estadoOcorrencias.ocorrencias.filter((o) => o.status === 'Auditoria aberta' && isSemanaAtual(o.data))
    );
    const ocorrenciasAprovadasSemanaPassada = computed(() =>
      estadoOcorrencias.ocorrencias.filter((o) => o.status === 'Auditoria aberta' && isSemanaPassada(o.data))
    );

    // Ocorrências Rejeitadas
    const ocorrenciasResolvidas = computed(() =>
      estadoOcorrencias.ocorrencias.filter((o) => o.status === 'Rejeitada')
    );
    const ocorrenciasResolvidasSemanaAtual = computed(() =>
      estadoOcorrencias.ocorrencias.filter((o) => o.status === 'Rejeitada' && isSemanaAtual(o.data))
    );
    const ocorrenciasResolvidasSemanaPassada = computed(() =>
      estadoOcorrencias.ocorrencias.filter((o) => o.status === 'Rejeitada' && isSemanaPassada(o.data))
    );

    // Auditorias Ativas
    const auditoriasAtivas = computed(() =>
      estadoAuditorias.auditorias.filter((a) => a.ativa)
    );
    const auditoriasAtivasSemanaAtual = computed(() => 
      estadoAuditorias.auditorias.filter((a) => a.ativa && isSemanaAtual(a.data))
    );
    const auditoriasAtivasSemanaPassada = computed(() => 
      estadoAuditorias.auditorias.filter((a) => a.ativa && isSemanaPassada(a.data))
    );

    // Peritos Ativos
    const peritosAtivos = computed(() =>
      estadoPeritos.peritos.filter((p) => p.status === 'Disponível')
    );
    const peritosAtivosSemanaAtual = computed(() => 
      estadoPeritos.peritos.filter((p) => p.status === 'Disponível')
    );
    const peritosAtivosSemanaPassada = computed(() => []);

    // Ocorrências filtradas para o mapa
    const ocorrenciasFiltradas = ref([]);

    const atualizarOcorrenciasFiltradas = (novasOcorrencias) => {
      ocorrenciasFiltradas.value = novasOcorrencias;
    };

    // Inicializar as ocorrências filtradas na montagem do componente
    onMounted(() => {
      ocorrenciasFiltradas.value = ocorrenciasAbertasSemanaAtual.value;
    });

    return {
      ocorrenciasAbertas,
      ocorrenciasAbertasSemanaAtual,
      ocorrenciasAbertasSemanaPassada,
      ocorrenciasAprovadas,
      ocorrenciasAprovadasSemanaAtual,
      ocorrenciasAprovadasSemanaPassada,
      ocorrenciasResolvidas,
      ocorrenciasResolvidasSemanaAtual,
      ocorrenciasResolvidasSemanaPassada,
      auditoriasAtivas,
      auditoriasAtivasSemanaAtual,
      auditoriasAtivasSemanaPassada,
      peritosAtivos,
      peritosAtivosSemanaAtual,
      peritosAtivosSemanaPassada,
      calcularClasse,
      ocorrenciasFiltradas,
      atualizarOcorrenciasFiltradas,
      selecionarOcorrencia
    };
  }
};
</script>

<style scoped>
.menu-geral {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  flex-shrink: 0; /* Garante que a sidebar não encolha */
}

.conteudo {
  flex-grow: 1; /* Faz o conteúdo ocupar todo o espaço restante */
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.status-cards {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.row {
  display: flex;
  gap: 20px;
}

.col {
  flex: 1;
}

.mapa {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 10px;
}

.tabela {
  background: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>