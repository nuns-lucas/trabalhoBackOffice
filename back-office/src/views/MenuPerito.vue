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
      <button @click="abrirOffCanvas" class="btn btn-success">
        Registrar Novo Perito
      </button>
    </main>

    <!-- Off-Canvas para Adicionar Peritos -->
    <div class="off-canvas" :class="{ 'show': mostrarOffCanvas }">
      <div class="off-canvas-conteudo">
        <div class="off-canvas-header">
          <h3>Registrar Novo Perito</h3>
          <button class="btn-fechar" @click="fecharOffCanvas">&times;</button>
        </div>
        <div class="off-canvas-body">
          <form @submit.prevent="salvarPerito">
            <div class="form-group">
              <label for="nome">Nome*</label>
              <input type="text" id="nome" v-model="novoPerito.nome" required placeholder="Nome completo" />
            </div>

            <div class="form-group">
              <label for="contacto">Email*</label>
              <input type="text" id="contacto" v-model="novoPerito.contacto" required
                placeholder="Ex: email@email.com" />
            </div>

            <div class="form-group">
              <label for="senha">Senha*</label>
              <input type="password" id="senha" v-model="novoPerito.senha" required placeholder="Senha para login" />
            </div>

            <div class="form-group">
              <label for="status">Status*</label>
              <select id="status-perito" v-model="novoPerito.status" required>
                <option value="Disponível">Disponível</option>
                <option value="Não disponível">Não disponível</option>
              </select>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn btn-success">Salvar</button>
              <button type="button" class="btn btn-secondary" @click="fecharOffCanvas">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Overlay separado com v-if para aparecer apenas quando necessário -->
    <div v-if="mostrarOffCanvas" class="off-canvas-overlay" @click="fecharOffCanvas"></div>
  </div>
</template>

<script>
import { defineComponent, computed, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { usePeritos } from '@/state/peritos';
import Sidebar from '@/components/layout/Sidebar.vue';

export default defineComponent({
  name: 'MenuPerito',
  components: {
    Sidebar
  },
  setup() {
    const { estado, adicionarPerito } = usePeritos();
    const router = useRouter();

    // Estado para o off-canvas
    const mostrarOffCanvas = ref(false);

    // Estado para o novo perito
    const novoPerito = reactive({
      nome: '',
      contacto: '',
      senha: '',
      status: 'Disponível',
      ocorrenciasConcluidas: 0
    });

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

    // Abrir off-canvas
    const abrirOffCanvas = () => {
      mostrarOffCanvas.value = true;
      // Prevenir scroll na página quando o off-canvas estiver aberto
      document.body.style.overflow = 'hidden';
    };

    // Fechar off-canvas
    const fecharOffCanvas = () => {
      mostrarOffCanvas.value = false;
      // Permitir scroll novamente
      document.body.style.overflow = 'auto';
      // Resetar formulário
      Object.assign(novoPerito, {
        nome: '',
        contacto: '',
        senha: '',
        status: 'Disponível',
        ocorrenciasConcluidas: 0
      });
    };

    // Salvar novo perito
    const salvarPerito = () => {
      // Gerar ID baseado em timestamp
      const id = Date.now().toString();

      // Criar o objeto perito
      const perito = {
        id,
        nome: novoPerito.nome,
        contacto: novoPerito.contacto,
        status: novoPerito.status,
        ocorrenciasConcluidas: novoPerito.ocorrenciasConcluidas
      };

      // Adicionar o perito ao estado usando a função do usePeritos
      adicionarPerito(perito);

      // Fechar o off-canvas e resetar o formulário
      fecharOffCanvas();
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
      getStatusClass,
      // Novo estado e métodos para o off-canvas
      mostrarOffCanvas,
      abrirOffCanvas,
      fecharOffCanvas,
      novoPerito,
      salvarPerito
    };
  }
});
</script>

<style scoped>
.menu-perito {
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

.titulo-secao {
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
  border-bottom: 2px solid #e0e0e0;
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
  cursor: pointer;
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

.btn-secondary {
  background-color: #6c757d;
  color: white;
  border: none;
}

.btn-secondary:hover {
  background-color: #5a6268;
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

/* Estilos para o off-canvas */
.off-canvas {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  z-index: 1050;
  transition: right 0.3s ease-in-out;
}

.off-canvas.show {
  right: 0;
}

.off-canvas-conteudo {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1051;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.off-canvas-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #dee2e6;
}

.off-canvas-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.btn-fechar {
  background: none;
  border: none;
  font-size: 1.8rem;
  line-height: 1;
  color: #6c757d;
  cursor: pointer;
  padding: 0;
}

.off-canvas-body {
  padding: 20px;
  flex: 1;
  overflow-y: auto;
}

.off-canvas-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1049;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #495057;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  .off-canvas {
    width: 300px;
  }
}

@media (max-width: 480px) {
  .off-canvas {
    width: 100%;
  }
}
</style>