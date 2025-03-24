<template>
  <div class="menu-atrasos">
    <Sidebar />
    <main class="conteudo-principal">
      <div class="linha-estatisticas">
        <StatusCard titulo="Autocarros Operacionais" tipo="operacionais" cor="verde" icone="bi-check-circle" />

        <StatusCard titulo="Autocarros Atrasados" tipo="atrasados" cor="laranja" icone="bi-clock-history"/>

        <StatusCard titulo="Autocarros Avariados" tipo="avariados" cor="vermelho" icone="bi-exclamation-triangle" />
      </div>

      <div class="linha-ocorrencias">
        <Cartao titulo="Avaria Reportadas" class="cartao-ocorrencia">
          <ListaOcorrencias :ocorrencias="avarias" v-if="avarias.length > 0" />
          <div v-else class="sem-ocorrencias">
            Nenhuma avaria reportada
          </div>
        </Cartao>

        <Cartao titulo="Atrasos Reportados" class="cartao-ocorrencia">
          <ListaOcorrencias :ocorrencias="atrasos" v-if="atrasos.length > 0" />
          <div v-else class="sem-ocorrencias">
            Nenhum atraso reportado
          </div>
        </Cartao>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import StatusCard from '@/components/layout/StatusCard.vue';  // Alterado para StatusCard
import Cartao from '@/components/ui/Cartao.vue';
import ListaOcorrencias from '@/components/ocorrencias/ListaOcorrencias.vue';
import { useOcorrencias } from '@/state/ocorrencias';

export default defineComponent({
  name: 'MenuAtrasos',
  components: {
    Sidebar,
    StatusCard,  // Alterado aqui
    Cartao,
    ListaOcorrencias
  },
  setup() {
    const { estado } = useOcorrencias();

    const atrasos = computed(() =>
      estado.ocorrencias.filter(o => o.tipo === 'atraso')
    );

    const avarias = computed(() =>
      estado.ocorrencias.filter(o => o.tipo === 'avaria')
    );

    const estatisticas = [
      {
        titulo: "Autocarros operacionais",
        valor: estado.statusAutocarros.operacionais,
        cor: "text-success"  // Alterado para classes padrão do StatusCard
      },
      {
        titulo: "Autocarros atrasados",
        valor: estado.statusAutocarros.atrasados,
        cor: "text-warning"
      },
      {
        titulo: "Autocarros avariados",
        valor: estado.statusAutocarros.avariados,
        cor: "text-danger"
      }
    ];

    return {
      atrasos,
      avarias,
      estatisticas
    };
  }
});
</script>

<style scoped>
.menu-atrasos {
  display: flex;
  min-height: 100vh;
}

.conteudo-principal {
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
}

.linha-estatisticas {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.linha-ocorrencias {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.status-card {
  flex: 1;
}

.cartao-ocorrencia {
  height: 100%;
}

.sem-ocorrencias {
  padding: 20px;
  text-align: center;
  color: #6c757d;
}
</style>
