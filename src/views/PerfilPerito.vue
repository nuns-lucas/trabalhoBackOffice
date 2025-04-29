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
        <p><strong>Ocorrências Concluídas:</strong> {{ ocorrenciasDoPeritoCount }}</p>
        <div class="acoes">
          <button @click="verHistorico" class="btn btn-primary">
            Ver Histórico de Ocorrências
          </button>
          <button @click="abrirOffCanvas" class="btn btn-warning">
            <span>Editar Perito</span>
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
    <!-- Off-Canvas para Editar Peritos -->
    <div class="off-canvas" :class="{ 'show': mostrarOffCanvas }">
      <div class="off-canvas-conteudo">
        <div class="off-canvas-header">
          <h3>Editar Perito</h3>
          <button class="btn-fechar" @click="fecharOffCanvas">&times;</button>
        </div>
        <div class="off-canvas-body">
          <form @submit.prevent="salvarEdicao" v-if="perito" class="form-edit">
            <div class="form-group">
              <label for="nome">Nome*</label>
              <input type="text" id="nome" v-model="peritoEditado.nome" required placeholder="Nome completo" />
            </div>

            <div class="form-group">
              <label for="contacto">Contacto*</label>
              <input type="text" id="contacto" v-model="peritoEditado.contacto" required
                placeholder="Ex: 912 345 678" />
            </div>

            <div class="form-group">
              <label for="status">Status*</label>
              <select id="status-perito" v-model="peritoEditado.status" required>
                <option value="Disponível">Disponível</option>
                <option value="Não disponível">Não disponível</option>
              </select>
            </div>

            <!-- Campo de ocorrências concluídas removido -->

            <div class="form-info">
              <p>Ocorrências concluídas são contadas automaticamente pelo sistema.</p>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn btn-success">Salvar Alterações</button>
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
import Sidebar from '@/components/layout/Sidebar.vue';
import { usePeritos } from '@/state/peritos';
import { useOcorrencias } from '@/state/ocorrencias';
import { computed, ref, reactive } from 'vue';
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
    const { estado, atualizarPerito } = usePeritos();
    const { obterOcorrenciasPorPerito } = useOcorrencias();
    const route = useRoute();
    const router = useRouter();

    // Estado para o off-canvas
    const mostrarOffCanvas = ref(false);

    // ID do perito (de props ou route params)
    const peritoId = computed(() =>
      Number(props.id || route.params.id)
    );

    // Buscar o perito pelo ID
    const perito = computed(() =>
      estado.peritos.find(p => p.id === peritoId.value)
    );

     // Estado para edição do perito
     const peritoEditado = reactive({
      nome: '',
      contacto: '',
      status: ''
      // ocorrenciasConcluidas removido, pois será calculado automaticamente
    });

    // Contagem de ocorrências do perito
    const ocorrenciasDoPeritoCount = computed(() =>
      obterOcorrenciasPorPerito(peritoId.value).length
    );

    // Abrir off-canvas e preencher com dados atuais do perito
    const abrirOffCanvas = () => {
      if (perito.value) {
        // Copiar os dados do perito para o objeto de edição
        Object.assign(peritoEditado, {
          nome: perito.value.nome,
          contacto: perito.value.contacto,
          status: perito.value.status
          // ocorrenciasConcluidas removido
        });
        mostrarOffCanvas.value = true;
        // Prevenir scroll na página quando o off-canvas estiver aberto
        document.body.style.overflow = 'hidden';
      }
    };
    
    // Fechar off-canvas
    const fecharOffCanvas = () => {
      mostrarOffCanvas.value = false;
      // Permitir scroll novamente
      document.body.style.overflow = 'auto';
    };
    
    // Salvar edição do perito
    const salvarEdicao = () => {
      if (perito.value) {
        atualizarPerito(peritoId.value, {
          nome: peritoEditado.nome,
          contacto: peritoEditado.contacto,
          status: peritoEditado.status
          // ocorrenciasConcluidas removido, mantendo o valor original ou o calculado
        });
        fecharOffCanvas();
      }
    };
    
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
      getStatusClass, 
      mostrarOffCanvas,
      abrirOffCanvas,
      fecharOffCanvas,
      peritoEditado,
      salvarEdicao
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
  object-fit: cover;
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

.btn-warning {
  background-color: #ffc107;
  color: #212529;
}

.btn-warning:hover {
  background-color: #e0a800;
}

.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-success:hover {
  background-color: #218838;
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

/* Estilos para o off-canvas - com melhor espaçamento */
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
  padding: 24px;
  border-bottom: 1px solid #dee2e6;
  background-color: #f8f9fa;
}

.off-canvas-header h3 {
  margin: 0;
  font-size: 1.6rem;
  color: #2c3e50;
  font-weight: 600;
}

.btn-fechar {
  background: none;
  border: none;
  font-size: 2rem;
  line-height: 1;
  color: #6c757d;
  cursor: pointer;
  padding: 0;
}

.off-canvas-body {
  padding: 30px;
  flex: 1;
  overflow-y: auto;
  background-color: #fff;
}

.form-edit {
  display: flex;
  flex-direction: column;
  gap: 25px; /* Aumenta o espaço entre os elementos do formulário */
}

.form-group {
  margin-bottom: 5px; /* Reduza o margin-bottom aqui, pois já temos gap no pai */
}

.form-group label {
  display: block;
  margin-bottom: 12px; /* Mais espaço entre label e input */
  font-weight: 600;
  color: #495057;
  font-size: 1.05rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px 15px; /* Mais padding para inputs */
  border: 1px solid #ced4da;
  border-radius: 6px; /* Bordas mais arredondadas */
  font-size: 1rem;
  transition: border-color 0.15s ease-in-out;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-info {
  background-color: #e8f4fd;
  border-left: 4px solid #17a2b8;
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;
}

.form-info p {
  margin: 0;
  color: #0c5460;
  font-size: 0.95rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 40px; /* Mais espaço antes dos botões */
  padding-top: 20px;
  border-top: 1px solid #e9ecef;
}

.form-actions .btn {
  min-width: 120px; /* Botões com largura mínima para melhor aparência */
  padding: 12px 24px;
}

.off-canvas-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1049;
  backdrop-filter: blur(2px); /* Adiciona um efeito de blur ao fundo */
}

/* Responsividade para o off-canvas */
@media (max-width: 768px) {
  .off-canvas {
    width: 320px;
  }
  
  .off-canvas-body {
    padding: 20px;
  }
  
  .acoes {
    flex-direction: column;
    gap: 12px;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .form-actions .btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .off-canvas {
    width: 100%;
  }
}
</style>