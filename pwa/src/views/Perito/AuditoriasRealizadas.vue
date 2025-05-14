<template>
    <div class="auditorias-content">
      <main class="ar-main-content">
        <h2 class="ar-titulo">Auditorias Realizadas</h2>
        <div
          class="ar-caixa"
          v-for="auditoria in auditorias"
          :key="auditoria.id"
        >
          <p><strong>Ocorrência:</strong> {{ auditoria.id }}</p>
          <p><strong>Código Postal:</strong> {{ auditoria.codigoPostal }}</p>
          <p><strong>Morada:</strong> {{ auditoria.morada }}</p>
          <div class="ar-icon">
            <img src="@/assets/seta.webp" alt="Detalhes" @click="verDetalhesAuditoria(auditoria)" />
          </div>
        </div>
      </main>
    </div>
</template>

<script>
export default {
  name: "AuditoriasRealizadas",
  data() {
    return {
      auditorias: [
        { id: 12345, codigoPostal: "4835-619", morada: "Travessa da Torre" },
        { id: 57890, codigoPostal: "4840-619", morada: "Praça da Oliveira" },
      ]
    };
  },
  methods: {
    verDetalhesAuditoria(auditoria) {
      localStorage.setItem("auditoriaSelecionada", JSON.stringify(auditoria));
      this.$router.push("/perito/detalhe-auditoria");
    }
  }
};

import '@/assets/cssPerito/AuditoriasRealizadas.css'

</script>
