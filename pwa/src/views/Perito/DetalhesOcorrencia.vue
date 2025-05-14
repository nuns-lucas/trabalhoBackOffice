<template>
    <div class="detalhes-ocorrencia-content">
      <main class="do-main-content">
        <h2 class="do-titulo">Ocorrência {{ ocorrencia.id }}</h2>

        <div class="do-caixa">
          <p><strong>Código Postal:</strong> {{ ocorrencia.codigoPostal }}</p>
          <p><strong>Morada:</strong> {{ ocorrencia.morada }}</p>
          <p><strong>Submetido por:</strong> {{ ocorrencia.submetidoPor }}</p>
          <p><strong>Contacto:</strong> {{ ocorrencia.contacto }}</p>
          <p><strong>Descrição:</strong> {{ ocorrencia.descricao }}</p>
        </div>

        <h3>Imagem</h3>
        <img :src="ocorrencia.imagem" alt="Imagem da ocorrência" class="imagem-ocorrencia" @click="irParaLocalizacao"/>
      </main>

    <BottomVoltar />
    </div>
</template>

<script>


export default {
  name: "DetalhesOcorrencia",
  components: {
    BottomVoltar
  },
  data() {
    return {
      ocorrencia: JSON.parse(localStorage.getItem("ocorrenciaSelecionada")) || {},
    };
  },
  methods: {
    irParaLocalizacao() {
      localStorage.setItem("ocorrenciaLocalizacao", JSON.stringify({
        id: 12345,
        morada: "Travessa da Torre",
        codigoPostal: "4835-619",
        imagem: "src/assets/vidro-partido.jpg",
        latitude: 41.444,
        longitude: -8.290
      }));
      this.$router.push('/perito/loc');
    },
  },
};

import '@/assets/cssPerito/DetalhesOcorrencias.css'
import BottomVoltar from "../../components/BottomVoltar.vue";

</script>
