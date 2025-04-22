<template>
  <div class="gestao-materiais">
    <Sidebar />
    <div class="conteudo">
      <h1 class="titulo">Gestão de Materiais</h1>
      
      <!-- Formulário para adicionar/editar material -->
      <div class="material-form card">
        <h2>{{ modoEdicao ? 'Editar Material' : 'Adicionar Novo Material' }}</h2>
        <form @submit.prevent="salvarMaterial">
          <div class="form-group">
            <label for="nome">Nome do Material*</label>
            <input 
              type="text" 
              id="nome" 
              v-model="materialAtual.nome" 
              required 
              placeholder="Ex: Medidor ultrassônico"
            />
          </div>
          
          <div class="form-group">
            <label for="descricao">Descrição</label>
            <textarea 
              id="descricao" 
              v-model="materialAtual.descricao" 
              placeholder="Descrição detalhada do material e suas características"
            ></textarea>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="quantidade">Quantidade em Estoque*</label>
              <input 
                type="number" 
                id="quantidade" 
                v-model.number="materialAtual.quantidade" 
                required
                min="0"
                step="1"
              />
            </div>
            
            <div class="form-group">
              <label for="quantidadeMinima">Quantidade Mínima*</label>
              <input 
                type="number" 
                id="quantidadeMinima" 
                v-model.number="materialAtual.quantidadeMinima" 
                required
                min="0"
                step="1"
              />
            </div>
            
            <div class="form-group">
              <label for="unidade">Unidade*</label>
              <select id="unidade" v-model="materialAtual.unidade" required>
                <option value="unidade">Unidade</option>
                <option value="par">Par</option>
                <option value="conjunto">Conjunto</option>
                <option value="caixa">Caixa</option>
                <option value="metro">Metro</option>
                <option value="litro">Litro</option>
              </select>
            </div>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">{{ modoEdicao ? 'Atualizar' : 'Adicionar' }}</button>
            <button type="button" class="btn btn-secondary" @click="limparFormulario">Cancelar</button>
          </div>
        </form>
      </div>
      
      <!-- Lista de materiais -->
      <div class="materiais-lista card">
        <h2>Materiais em Estoque</h2>
        
        <div class="filtro">
          <input 
            type="text"
            placeholder="Filtrar materiais..."
            v-model="filtro"
            class="filtro-input"
          />
        </div>
        
        <div class="table-responsive">
          <table class="tabela-materiais">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Quantidade Mínima</th>
                <th>Unidade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="material in materiaisFiltrados" 
                :key="material.id"
                :class="{ 'estoque-baixo': material.quantidade < material.quantidadeMinima }"
              >
                <td>{{ material.nome }}</td>
                <td class="descricao">{{ material.descricao }}</td>
                <td class="quantidade">{{ material.quantidade }}</td>
                <td>{{ material.quantidadeMinima }}</td>
                <td>{{ material.unidade }}</td>
                <td class="acoes">
                  <button class="btn-acao btn-editar" @click="iniciarEdicao(material)">
                    Editar
                  </button>
                  <button class="btn-acao btn-remover" @click="confirmarRemocao(material)">
                    Remover
                  </button>
                </td>
              </tr>
              <tr v-if="materiaisFiltrados.length === 0">
                <td colspan="6" class="sem-resultados">Nenhum material encontrado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, reactive } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import { useMateriais } from '@/state/materiais';

export default {
  name: 'GestaoMateriais',
  components: {
    Sidebar
  },
  setup() {
    const { estado, adicionarMaterial, editarMaterial, removerMaterial } = useMateriais();
    
    // Estado para formulário
    const materialAtual = reactive({
      nome: '',
      descricao: '',
      quantidade: 0,
      quantidadeMinima: 0,
      unidade: 'unidade'
    });
    
    const modoEdicao = ref(false);
    const materialIdEdicao = ref(null);
    const filtro = ref('');
    
    // Filtrar materiais
    const materiaisFiltrados = computed(() => {
      if (!filtro.value) return estado.materiais;
      
      const termo = filtro.value.toLowerCase();
      return estado.materiais.filter(material => 
        material.nome.toLowerCase().includes(termo) ||
        material.descricao.toLowerCase().includes(termo)
      );
    });
    
    // Iniciar edição de um material
    const iniciarEdicao = (material) => {
      materialIdEdicao.value = material.id;
      modoEdicao.value = true;
      
      // Copiar dados do material para o formulário
      materialAtual.nome = material.nome;
      materialAtual.descricao = material.descricao;
      materialAtual.quantidade = material.quantidade;
      materialAtual.quantidadeMinima = material.quantidadeMinima;
      materialAtual.unidade = material.unidade;
      
      // Scroll para o formulário
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // Limpar formulário
    const limparFormulario = () => {
      materialIdEdicao.value = null;
      modoEdicao.value = false;
      
      // Resetar valores
      materialAtual.nome = '';
      materialAtual.descricao = '';
      materialAtual.quantidade = 0;
      materialAtual.quantidadeMinima = 0;
      materialAtual.unidade = 'unidade';
    };
    
    // Salvar material (adicionar ou editar)
    const salvarMaterial = () => {
      if (modoEdicao.value) {
        editarMaterial(materialIdEdicao.value, { 
          nome: materialAtual.nome,
          descricao: materialAtual.descricao,
          quantidade: materialAtual.quantidade,
          quantidadeMinima: materialAtual.quantidadeMinima,
          unidade: materialAtual.unidade
        });
      } else {
        adicionarMaterial({ 
          nome: materialAtual.nome,
          descricao: materialAtual.descricao,
          quantidade: materialAtual.quantidade,
          quantidadeMinima: materialAtual.quantidadeMinima,
          unidade: materialAtual.unidade
        });
      }
      
      limparFormulario();
    };
    
    // Confirmar remoção de material
    const confirmarRemocao = (material) => {
      if (confirm(`Tem certeza que deseja remover o material "${material.nome}"?`)) {
        removerMaterial(material.id);
      }
    };
    
    return {
      materialAtual,
      modoEdicao,
      filtro,
      materiaisFiltrados,
      iniciarEdicao,
      limparFormulario,
      salvarMaterial,
      confirmarRemocao
    };
  }
};
</script>

<style scoped>
.gestao-materiais {
  display: flex;
  height: 100vh; /* Limitar a altura total para a viewport */
  overflow: hidden; /* Evitar scroll na página inteira */
}

.conteudo {
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
  overflow-y: auto; /* Adicionar scroll vertical se necessário */
  height: 100%; /* Ocupar toda a altura disponível */
  display: flex;
  flex-direction: column;
}

.titulo {
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #257401;
}

.card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.material-form {
  flex-shrink: 0; /* Evitar que o formulário encolha */
}

.materiais-lista {
  flex: 1; /* Fazer com que a lista ocupe o espaço restante */
  display: flex;
  flex-direction: column;
  min-height: 0; /* Necessário para que o flex funcione corretamente com overflow */
}

.card h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.form-row .form-group {
  flex: 1;
  margin-bottom: 0;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 0.9rem;
}

input, select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
}

.btn-primary {
  background-color: #257401;
  color: white;
}

.btn-primary:hover {
  background-color: #1a5002;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.filtro {
  margin-bottom: 15px;
  flex-shrink: 0; /* Evitar que a área de filtro encolha */
}

.filtro-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
}

.table-responsive {
  overflow-y: auto; /* Adicionar scroll vertical */
  overflow-x: auto; /* Manter scroll horizontal */
  flex: 1; /* Ocupar o espaço restante */
  max-height: calc(100% - 80px); /* Limitar altura, considerando o título e filtro */
}

.tabela-materiais {
  width: 100%;
  border-collapse: collapse;
}

.tabela-materiais thead {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #f8f9fa;
}

.tabela-materiais th {
  background-color: #f8f9fa;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
}

.tabela-materiais td {
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
}

.tabela-materiais .descricao {
  max-width: 250px;
}

.tabela-materiais .quantidade {
  font-weight: 600;
}

.tabela-materiais .acoes {
  white-space: nowrap;
}

.btn-acao {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  font-size: 0.8rem;
}

.btn-editar {
  background-color: #f0ad4e;
  color: white;
}

.btn-editar:hover {
  background-color: #ec971f;
}

.btn-remover {
  background-color: #d9534f;
  color: white;
}

.btn-remover:hover {
  background-color: #c9302c;
}

.estoque-baixo {
  background-color: #fff3f3;
}

.estoque-baixo .quantidade {
  color: #dc3545;
  font-weight: bold;
}

.sem-resultados {
  text-align: center;
  font-style: italic;
  color: #6c757d;
  padding: 20px !important;
}
</style>