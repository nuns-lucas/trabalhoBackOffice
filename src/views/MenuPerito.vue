<template>
  <div class="menu-perito">
    <Sidebar />
    <main class="conteudo-principal">
      <h2 class="titulo-secao">Lista de Peritos</h2>
      <div class="filtros">
        <label for="status">Status:</label>
        <select id="status" v-model="filtroStatus">
          <option value="">Todos</option>
          <option value="Disponível">Disponível</option>
          <option value="Não disponível">Não disponível</option>
        </select>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Contacto</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="perito in peritosFiltrados" :key="perito.id">
            <td>{{ perito.nome }}</td>
            <td>{{ perito.contacto }}</td>
            <td>
              <span :class="getStatusClass(perito.status)">{{ perito.status }}</span>
            </td>
            <td>
              <button @click="verPerfilPerito(perito.id)" class="btn btn-primary">
                Ver Perfil
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="registrarPerito" class="btn btn-success">
        Registrar Novo Perito
      </button>
    </main>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePeritos } from '@/state/peritos';
import Sidebar from '@/components/layout/Sidebar.vue';

export default defineComponent({
  name: 'MenuPerito',
  components: { 
    Sidebar 
  },
  setup() {
    const { estado } = usePeritos();
    const router = useRouter();

    // Filtro de status
    const filtroStatus = ref('');

    // Lista de peritos
    const peritos = computed(() => estado.peritos);
    
    // Lista de peritos filtrados
    const peritosFiltrados = computed(() => {
      if (!filtroStatus.value) {
        return peritos.value;
      }
      return peritos.value.filter(p => p.status === filtroStatus.value);
    });

    // Navegar para perfil do perito
    const verPerfilPerito = (id) => {
      router.push({ name: 'PerfilPerito', params: { id } });
    };
    
    // Registrar novo perito
    const registrarPerito = () => {
      // Implementar navegação para página de registro de peritos
      alert('Funcionalidade de registrar novo perito ainda não implementada');
    };
    
    // Obter classe de estilo baseada no status
    const getStatusClass = (status) => {
      return status === 'Disponível' ? 'status-disponivel' : 'status-indisponivel';
    };

    return {
      peritos,
      peritosFiltrados,
      filtroStatus,
      verPerfilPerito,
      registrarPerito,
      getStatusClass
    };
  }
});
</script>

<style scoped>
.menu-perito {
  display: flex;
  min-height: 100vh;
  background-color: #f4f6f9; /* Fundo mais claro para um visual mais moderno */
}

.conteudo-principal {
  flex: 1;
  padding: 30px;
  background-color: #ffffff; /* Fundo branco para contraste */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra para destacar o conteúdo */
  margin: 20px;
}

.titulo-secao {
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50; /* Cor mais escura para o título */
  border-bottom: 2px solid #e0e0e0; /* Linha sutil abaixo do título */
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

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table th {
  background-color: #f8f9fa;
  color: #495057;
  font-weight: bold;
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid #dee2e6;
}

.table td {
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
  color: #495057;
}

.table-hover tbody tr:hover {
  background-color: #f1f3f5;
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-success {
  background-color: #28a745;
  color: white;
  border: none;
}

.btn-success:hover {
  background-color: #218838;
}

/* Estilos para os status */
.status-disponivel {
  background-color: #28a745;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.status-indisponivel {
  background-color: #dc3545;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>