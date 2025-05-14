<template>
  <div class="perfil-view">
    <h2>Perfil</h2>
    <div class="icon-wrapper">
      <img src="@/assets/icons/icon-perfil.png" alt="Ícone Perfil" class="icon" />
    </div>
    <div class="perfil-info">
      <p><strong>Nome:</strong> {{ nome }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Ocorrências Reportadas:</strong> {{ ocorrencias }}</p>

      <div class="terminar-sessao-wrapper">
        <button class="terminar-sessao" @click="terminarSessao">Terminar Sessão</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nome = ref('Utilizador')
const email = ref('N/A')
const ocorrencias = ref(0)

function terminarSessao() {
  router.push('/home')
}

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('userLogado') || '{}')
  nome.value = user.displayName || 'Utilizador'
  email.value = user.email || 'N/A'

  const submissoes = JSON.parse(localStorage.getItem('submissoes') || '[]')
  ocorrencias.value = submissoes.filter(s => s.email === user.email).length
})

import '@/assets/cssCliente/perfil.css'
</script>

