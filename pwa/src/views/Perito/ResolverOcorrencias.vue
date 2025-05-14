<template>
    <div class="resolver-ocorrencias-content">
      <main class="ro-main-content">
        <h2 class="ro-titulo">Resolver Ocorrência {{ ocorrencia.id }}</h2>

        <div class="ro-caixa">
          <textarea
            v-model="observacoes"
            placeholder="Observações"
            rows="5"
          ></textarea>

          <label>
            <input type="checkbox" v-model="intervencaoExterna" />
            Intervenção Externa
          </label>  

          <select v-model="criticidade">
            <option value="">Nível de Criticidade</option>
            <option value="baixa">Baixa</option>
            <option value="média">Média</option>
            <option value="alta">Alta</option>
          </select>

          <div class="ro-upload">
            <label for="evidencias">
              <img src="@/assets/folder.png" alt="Evidências" />
            </label>
            <input type="file" id="evidencias" accept="image/*" @change="handleFile" hidden />
          </div>

          <div v-if="preview" class="ro-preview">
          <img :src="preview" alt="Pré-visualização" />
        </div>

        </div>

        <button class="ro-submeter" @click="submeter">Submeter</button>
      </main>
      <BottomVoltar />
    </div>
</template>

<script>
import BottomVoltar from '../../components/BottomVoltar.vue';

export default {
  name: "ResolverOcorrencias",
  components: {
    BottomVoltar
  },
  data() {
    return {
      ocorrencia: JSON.parse(localStorage.getItem("ocorrenciaResolver")) || {
        id: "Sem dados",
        morada: "Desconhecida"
      },
      observacoes: "",
      intervencaoExterna: false,
      criticidade: "",
      evidencias: null,
      preview: null
    };
  },
  methods: {
    handleFile(event) {
      const file = event.target.files[0];
      this.evidencias = file;

      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.preview = null;
      }
    },
    submeter() {
      const resolucao = {
        id: this.ocorrencia.id,
        morada: this.ocorrencia.morada,
        observacoes: this.observacoes,
        intervencaoExterna: this.intervencaoExterna,
        criticidade: this.criticidade,
        data: new Date().toLocaleString()
      };
      const resolucoesExistentes = JSON.parse(localStorage.getItem("resolucoes")) || [];
      resolucoesExistentes.push(resolucao);
      localStorage.setItem("resolucoes", JSON.stringify(resolucoesExistentes));

      alert("Ocorrência resolvida com sucesso!");
      this.$router.push("/perito");
    },
  }
};

import '@/assets/cssPerito/ResolverOcorrencias.css'

</script>
