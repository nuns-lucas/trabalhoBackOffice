<template>
  <div class="menu-atrasos">
    <Sidebar />
    <main class="conteudo-principal">
      <h2 class="titulo-secao">Ocorrências</h2>
      
      <div class="linha-ocorrencias">
        <Cartao class="cartao-ocorrencia">
          <!-- Substituído ListOcorrenciasCard por ListaOcorrencias -->
          <ListaOcorrencias 
            :ocorrencias="ocorrenciasAtivas"
            v-if="ocorrenciasAtivas.length"
            @selecionarOcorrencia="selecionarOcorrencia"
          />

          <div v-else class="sem-ocorrencias">
            Nenhuma ocorrência encontrada
          </div>
        </Cartao>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Sidebar from '@/components/layout/Sidebar.vue';
import Cartao from '@/components/ui/Cartao.vue';
import ListaOcorrencias from '@/components/ocorrencias/ListaOcorrencias.vue';
import { useOcorrencias } from '@/state/ocorrencias';

export default defineComponent({
  name: 'MenuOcorrencias',
  components: {
    Sidebar,
    Cartao,
    ListaOcorrencias
  },
  setup() {
    const { estado } = useOcorrencias();
    const router = useRouter();

    // Filtra ocorrências que não estão concluídas
    const ocorrenciasAtivas = computed(() => 
      estado.ocorrencias.filter(o => o.status !== 'Concluída')
    );

    const selecionarOcorrencia = (ocorrencia) => {
      router.push({ name: 'EditarOcorrencia', params: { id: ocorrencia.id } });
    };

    return {
      ocorrenciasAtivas,
      selecionarOcorrencia
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

.linha-ocorrencias {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
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