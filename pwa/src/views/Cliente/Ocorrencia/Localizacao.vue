<template>
    <div class="localizacao-view">
      <div class="conteudo-scroll">
        <h2>Localização</h2>
  
        <!-- Card da foto + texto lado a lado -->
        <div class="ocorrencia-card">
          <div class="info-container">
            <img 
              v-if="ocorrencia.foto" 
              :src="ocorrencia.foto" 
              alt="Imagem Ocorrência" 
              class="foto" 
              @click="verDetalhes" 
            />

            <div class="info-texto">
              <p><strong>ID:</strong> {{ ocorrencia.id }}</p>
              <p><strong>Tipo:</strong> {{ ocorrencia.tipo }}</p>
              <p><strong>Descrição:</strong> {{ ocorrencia.mensagem }}</p>
            </div>
          </div>
        </div>
  
        <!-- Card do mapa separado -->
        <div class="mapa-card">
          <div id="mapa-localizacao" class="mapa-localizacao"></div>
        </div>
      </div>
  
      <BottomVoltar :irHome="true" />
    </div>
  </template>
  
  
  
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import BottomVoltar from '@/components/BottomVoltar.vue'
  
  const route = useRoute()
  const router = useRouter()
  const ocorrencia = ref({})
  
  onMounted(() => {
    const todas = JSON.parse(localStorage.getItem('submissoes') || '[]')
    ocorrencia.value = todas.find(o => o.id == route.params.id) || {}
  
    if (ocorrencia.value.latitude && ocorrencia.value.longitude) {
      const map = new google.maps.Map(document.getElementById("mapa-localizacao"), {
        center: { lat: ocorrencia.value.latitude, lng: ocorrencia.value.longitude },
        zoom: 16,
      });
  
      new google.maps.Marker({
        position: { lat: ocorrencia.value.latitude, lng: ocorrencia.value.longitude },
        map: map,
      });
    }
  })

  function verDetalhes() {
    router.push(`/cliente/ocorrencia/${ocorrencia.value.id}`);
  }


  import '@/assets/cssCliente/localizacao.css'

  </script>
  
 