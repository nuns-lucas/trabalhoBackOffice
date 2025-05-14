<template>
    <div class="ver-ocorrencias-content">
      <main class="vo-main-content">
        <h2 class="vo-titulo">Lista de Ocorrências</h2>
        <div
          class="vo-caixa"
          v-for="ocorrencia in ocorrencias"
          :key="ocorrencia.id"
        >
          <p><strong>Motivo:</strong> {{ ocorrencia.motivo }}</p>
          <p><strong>Código Postal:</strong> {{ ocorrencia.codigoPostal }}</p>
          <p><strong>Morada:</strong> {{ ocorrencia.morada }}</p>
          <div class="vo-botoes">
            <img src="@/assets/list.webp" alt="Ver detalhes" @click="verDetalhes(ocorrencia)" />
            <img src="@/assets/tools.webp" alt="Resolver" @click="resolver(ocorrencia)" />
          </div>
        </div>
      </main>

    </div>
</template>

<script>

export default {
  name: "VerOcorrencias",
  data() {
    return {
      ocorrencias: [
        {motivo: "Paragem vandalizada", codigoPostal: "4835-619", morada: "Travessa da Torre" },
        { id: 57890, codigoPostal: "4840-619", morada: "Praça da Oliveira" },
      ]
    };
  },
  methods: {
    verDetalhes(ocorrencia) {
      localStorage.setItem("ocorrenciaSelecionada", JSON.stringify(ocorrencia));
      this.$router.push("/perito/detalhe-ocorrencia");
    },
    resolver(ocorrencia) {
      localStorage.setItem("ocorrenciaResolver", JSON.stringify(ocorrencia));
      this.$router.push("/perito/resolver");
    }
  }
};

import '@/assets/cssPerito/VerOcorrencias.css'

</script>
