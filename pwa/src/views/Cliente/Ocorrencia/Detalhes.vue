<template>
    <div class="detalhes-view">
      <div class="conteudo-scroll">
        <h2>Dados da Ocorrência</h2>
  
        <div v-if="ocorrencia" class="detalhes-card">
          <p><strong>ID:</strong> {{ ocorrencia.id }}</p>
          <p><strong>Estado:</strong> {{ ocorrencia.status }}</p>
          <p><strong>Tipo:</strong> {{ ocorrencia.tipo }}</p>
          <p><strong>Descrição:</strong> {{ ocorrencia.mensagem }}</p>
          <p><strong>Data:</strong> {{ formatarData(ocorrencia.data) }}</p>
  
          <img
            v-if="ocorrencia.foto"
            :src="ocorrencia.foto"
            alt="Foto da ocorrência"
            class="foto-ocorrencia"
            @click="verMapa"
          />
  
          <p class="estado" :class="{
              porResolver: ocorrencia.status === 'Por Resolver',
              resolvido: ocorrencia.status === 'Resolvido'
            }">
            <strong>Estado:</strong> <span>{{ ocorrencia.status }}</span>
          </p>

        </div>
  
        <div v-else class="detalhes-card">
          <p>Ocorrência não encontrada.</p>
        </div>
      </div>
  
      <!-- Botão ficar SEMPRE no fundo -->
      <BottomVoltar :irHome="true" />
    </div>
</template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import BottomVoltar from '@/components/BottomVoltar.vue'
  
  const ocorrencia = ref(null)
  const route = useRoute()
  const router = useRouter()
  
  onMounted(() => {
    const todas = JSON.parse(localStorage.getItem('submissoes') || '[]')
    ocorrencia.value = todas.find(o => o.id == route.params.id) || null
  })
  
  function formatarData(data) {
    return data ? new Date(data).toLocaleString('pt-PT') : ''
  }
  
  function verMapa() {
    router.push(`/cliente/localizacao/${ocorrencia.value.id}`)
  }

  import '@/assets/cssCliente/detalhes.css'

  </script>
  
  