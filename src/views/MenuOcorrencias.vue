<template>
  <div class="menu-atrasos">
    <Sidebar />
    <main class="conteudo-principal">
      <h2 class="titulo-secao">Ocorrências</h2>
      
      <div class="linha-ocorrencias">
        <Cartao class="cartao-ocorrencia">
          <OcorrenciasCard 
            :ocorrencias="ocorrenciasAtivas"
            @selecionarOcorrencia="selecionarOcorrencia"
            v-if="ocorrenciasAtivas.length"
          />

          <div v-else class="sem-ocorrencias">
            Nenhum atraso reportado
          </div>
        </Cartao>
      </div>

      <!-- Modal Component -->
      <ModalOcorrencias
        v-if="ocorrenciaSelecionada"
        :ocorrenciaSelecionada="ocorrenciaSelecionada"
        v-model:apoioExterno="apoioExterno"
        v-model:responsavelSelecionado="responsavelSelecionado"
        :trabalhadores="trabalhadores"
        @fecharModal="fecharModal"
        @atribuirResponsavel="atribuirResponsavelHandler"
        @concluirOcorrencia="concluirOcorrenciaHandler"
      />
    </main>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import Cartao from '@/components/ui/Cartao.vue';
import OcorrenciasCard from '@/components/ocorrencias/ListOcorrenciasCard.vue';
import ModalOcorrencias from '@/components/ocorrencias/ModalOcorrencias.vue';
import { useOcorrencias } from '@/state/ocorrencias';

export default defineComponent({
  name: 'MenuOcorrencias',
  components: {
    Sidebar,
    Cartao,
    OcorrenciasCard,
    ModalOcorrencias
  },
  setup() {
    const { estado, obterTrabalhadores, atribuirResponsavel, atualizarStatus } = useOcorrencias();

    const ocorrenciasAtivas = computed(() => estado.ocorrencias.filter(o => o.status !== 'Concluída'));
    const ocorrenciaSelecionada = ref(null);
    const apoioExterno = ref(false);
    const responsavelSelecionado = ref('');
    const trabalhadores = computed(() => obterTrabalhadores());

    const selecionarOcorrencia = (ocorrencia) => {
      ocorrenciaSelecionada.value = ocorrencia;
    };

    const fecharModal = () => {
      ocorrenciaSelecionada.value = null;
    };

    const atribuirResponsavelHandler = ({ id, responsavel }) => {
      const responsavelFinal = apoioExterno.value ? "trabalhadorExterno" : responsavel;
      atribuirResponsavel(id, responsavelFinal);
      alert(`Responsável "${responsavelFinal}" atribuído à ocorrência.`);
      fecharModal();
    };

    const concluirOcorrenciaHandler = (id) => {
      atualizarStatus(id, 'Concluída');
      alert("Ocorrência concluída com sucesso.");
      fecharModal();
    };

    return {
      trabalhadores,
      ocorrenciasAtivas,
      ocorrenciaSelecionada,
      selecionarOcorrencia,
      fecharModal,
      apoioExterno,
      responsavelSelecionado,
      atribuirResponsavelHandler,
      concluirOcorrenciaHandler
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
