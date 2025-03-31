<template>
  <div v-if="ocorrenciaSelecionada" class="modal-overlay" @click.self="fecharModal">
    <div class="modal-content">
      <div class="modal-left">
        <img :src="ocorrenciaSelecionada.foto" alt="Foto da Ocorrência" class="ocorrencia-foto" />
      </div>

      <!-- Right Column: Information -->
      <div class="modal-right">
        <h3>
          {{ ocorrenciaSelecionada.mensagem }}
          <span class="badge" :class="'status-' + ocorrenciaSelecionada.status">
            {{ ocorrenciaSelecionada.status }}
          </span>
        </h3>
        <p class="location-time">
          {{ ocorrenciaSelecionada.localizacao }} - {{ ocorrenciaSelecionada.data }}
        </p>
        <p class="problem-type">
          Tipo de Problema: {{ ocorrenciaSelecionada.tipo }}
        </p>
        <p>
          Responsavel: {{ ocorrenciaSelecionada.responsavel}}
        </p>

        <div class="assign-section">
          <div v-if="ocorrenciaSelecionada.status === 'Pendente'">
            <!-- Atribuir Responsável -->
            <div class="row mb-3 align-items-center">
              <p class="col-6">Atribuir Responsável</p>
              <div class="col-6 d-flex">
                <select class="form-select me-2" v-model="localResponsavelSelecionado">
                  <option v-for="trabalhador in trabalhadores" :key="trabalhador.id" :value="trabalhador.nome">
                    {{ trabalhador.nome }}
                  </option>
                </select>
                <button class="btn btn-success" @click="atribuirResponsavel">
                  Atribuir
                </button>
              </div>
            </div>
          </div>
          <div v-else-if="ocorrenciaSelecionada.status === 'Encaminhado'">
            <!-- Concluir Ocorrência -->
            <button class="btn btn-primary w-100" @click="concluirOcorrencia">
              Concluir Ocorrência
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'ModalOcorrencias',
  props: {
    ocorrenciaSelecionada: {
      type: Object,
      required: true
    },
    apoioExterno: {
      type: Boolean,
      required: true
    },
    responsavelSelecionado: {
      type: String,
      required: true
    },
    trabalhadores: {
      type: Array,
      required: true
    }
  },
  emits: ['fecharModal', 'atribuirResponsavel', 'concluirOcorrencia', 'update:responsavelSelecionado'],
  setup(props, { emit }) {
    const localResponsavelSelecionado = ref(props.responsavelSelecionado);

    watch(localResponsavelSelecionado, (newValue) => {
      emit('update:responsavelSelecionado', newValue);
    });

    const fecharModal = () => {
      emit('fecharModal');
    };

    const atribuirResponsavel = () => {
      emit('atribuirResponsavel', {
        id: props.ocorrenciaSelecionada.id,
        responsavel: localResponsavelSelecionado.value
      });
    };

    const concluirOcorrencia = () => {
      emit('concluirOcorrencia', props.ocorrenciaSelecionada.id);
    };

    return {
      localResponsavelSelecionado,
      fecharModal,
      atribuirResponsavel,
      concluirOcorrencia
    };
  }
});
</script>


<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  display: flex;
  background: white;
  border-radius: 12px;
  width: 70%;
  max-width: 900px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.modal-left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.ocorrencia-foto {
  max-width: 100%;
  max-height: 300px;
  border-radius: 12px;
  object-fit: cover;
}

.modal-right {
  flex: 1;
  padding: 20px;
}

h3 {
  display: flex;
  align-items: center;
  gap: 10px;
}

.badge {
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.8rem;
  color: white;
}

.status-Pendente {
  background-color: #dc3545;
}

.status-Encaminhado {
  background-color: #ffc107;
}

.status-Concluída {
  background-color: #28a745;
}

.location-time,
.problem-type {
  margin: 10px 0;
  font-size: 1rem;
  color: #495057;
}

.assign-section {
  margin-top: 20px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #007bff;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

select {
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ced4da;
}

.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-success:hover {
  background-color: #218838;
}
</style>