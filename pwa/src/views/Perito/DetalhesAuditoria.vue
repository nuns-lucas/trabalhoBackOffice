<template>
    <div class="detalhes-auditoria-content">

      <main class="da-main-content">
        <h2 class="da-titulo">Detalhes da Auditoria</h2>

        <div class="da-caixa">
          <p><strong>Código Postal:</strong> {{ auditoria.codigoPostal }}</p>
          <p><strong>Morada:</strong> {{ auditoria.morada }}</p>
          <p><strong>Submetido por:</strong> {{ auditoria.submetidoPor }}</p>
          <p><strong>Contacto:</strong> {{ auditoria.contacto }}</p>
          <p><strong>Descrição:</strong> {{ auditoria.descricao }}</p>
        </div>

        <div class="da-caixa">
          <p><strong>Nº de Problemas Identificados:</strong><br />{{ auditoria.problemas }}</p>
          <p><strong>Tempo Total da auditoria:</strong><br />{{ auditoria.tempo }}</p>
          <p><strong>Necessidades corretivas:</strong><br />{{ auditoria.correcoes }}</p>
        </div>
      </main>
      <BottomVoltar />
    </div>
</template>

<script>
import BottomVoltar from '@/components/BottomVoltar.vue'

export default {
  name: "DetalhesAuditoria",
  components: {
    BottomVoltar
  },
  data() {
    return {
      auditoria: JSON.parse(localStorage.getItem("auditoriaSelecionada")) || {
        codigoPostal: "",
        morada: "",
        submetidoPor: "",
        contacto: "",
        descricao: "",
        problemas: "",
        tempo: "",
        correcoes: ""
      }
    };
  },

  methods: {
    voltar() {
      this.$router.push("/perfil/auditorias");
    }
  }
};

import '@/assets/cssPerito/DetalhesAuditoria.css'

</script>
