<template>
  <div class="perfil-perito">
    <Sidebar />
    <main class="conteudo-principal">
      <div class="banner">
        <img src="@/assets/banner-default.jpg" alt="Banner" />
      </div>
      <div class="detalhes" v-if="perito">
        <h2>{{ perito.nome }}</h2>
        <p><strong>Contacto:</strong> {{ perito.contacto }}</p>
        <p><strong>Status:</strong> <span :class="getStatusClass(perito.status)">{{ perito.status }}</span></p>
        <p><strong>Ocorrências Concluídas:</strong> {{ perito.ocorrenciasConcluidas }}</p>
        <div class="acoes">
          <button @click="verHistorico" class="btn btn-primary">
            Ver Histórico de Ocorrências
          </button>
          <button @click="voltarParaLista" class="btn btn-secondary">
            Voltar para Lista
          </button>
        </div>
      </div>
      <div class="erro" v-else>
        <p>Perito não encontrado</p>
        <button @click="voltarParaLista" class="btn btn-secondary">
          Voltar para Lista
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue';
import { usePeritos } from '@/state/peritos'; // Correto: importar usePeritos
import { useOcorrencias } from '@/state/ocorrencias'; // Manter para recuperar ocorrências
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'PerfilPerito',
  components: { Sidebar },
  props: {
    id: {
      type: String,
      required: false
    }
  },
  setup(props) {
    const { estado } = usePeritos(); // Usar estado dos peritos
    const { obterOcorrenciasPorPerito } = useOcorrencias(); // Usar função para obter ocorrências
    const route = useRoute();
    const router = useRouter();

    // ID do perito (de props ou route params)
    const peritoId = computed(() => 
      Number(props.id || route.params.id)
    );

    // Buscar o perito pelo ID
    const perito = computed(() => 
      estado.peritos.find(p => p.id === peritoId.value)
    );

    // Contagem de ocorrências do perito
    const ocorrenciasDoPeritoCount = computed(() => 
      obterOcorrenciasPorPerito(peritoId.value).length
    );

    // Navegar para a página de histórico
    const verHistorico = () => {
      router.push({ 
        name: 'HistoricoPerito', 
        params: { id: peritoId.value }
      });
    };

    // Voltar para a lista de peritos
    const voltarParaLista = () => {
      router.push({ name: 'MenuPerito' });
    };

    // Obter classe de estilo baseada no status
    const getStatusClass = (status) => {
      return status === 'Disponível' ? 'status-disponivel' : 'status-indisponivel';
    };

    return { 
      perito, 
      ocorrenciasDoPeritoCount,
      verHistorico, 
      voltarParaLista,
      getStatusClass
    };
  }
};
</script>

<style scoped>
.perfil-perito {
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

.banner {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Garante que a imagem preencha o espaço sem distorção */
}

.detalhes {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.detalhes h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
}

.detalhes p {
  font-size: 1rem;
  color: #495057;
  margin-bottom: 15px;
}

.acoes {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.btn {
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1rem;
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

.erro {
  text-align: center;
  padding: 30px;
  background-color: #f8d7da;
  border-radius: 8px;
}

.erro p {
  font-size: 1.2rem;
  color: #721c24;
  margin-bottom: 20px;
}

/* Estilos para os status */
.status-disponivel {
  background-color: #28a745;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
}

.status-indisponivel {
  background-color: #dc3545;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
}
</style>