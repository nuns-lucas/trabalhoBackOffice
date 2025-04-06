<template>
  <div class="perfil-perito">
    <Sidebar />
    <main class="conteudo-principal">
      <div class="banner">
        <img src="@/assets/banner-default.jpg" alt="Banner" />
      </div>
      <div class="detalhes">
        <h2>{{ perito.nome }}</h2>
        <p><strong>Contacto:</strong> {{ perito.contacto }}</p>
        <p><strong>Ocorrências Concluídas:</strong> {{ perito.ocorrenciasConcluidas }}</p>
        <button @click="verHistorico" class="btn btn-primary">
          Ver Histórico de Ocorrências
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue';
import { useOcorrencias } from '@/state/ocorrencias';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'PerfilPerito',
  components: { Sidebar },
  setup() {
    const { estado } = useOcorrencias();
    const route = useRoute();
    const router = useRouter();

    const perito = computed(() =>
      estado.peritos.find((p) => p.id === Number(route.params.id))
    );

    const verHistorico = () => {
      router.push({ name: 'HistoricoPerito', params: { id: perito.value.id } });
    };

    return { perito, verHistorico };
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
  margin-bottom: 10px;
}

.detalhes p {
  font-size: 1rem;
  color: #495057;
  margin-bottom: 10px;
}

.btn {
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #007bff;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>