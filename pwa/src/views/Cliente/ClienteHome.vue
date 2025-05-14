<template>
  <div class="submissoes-view">
    <div class="header-bloco">
      <h2>As minhas submissões</h2>
      <div class="pesquisa-wrapper">
        <img src="@/assets/icons/search.png" alt="Ícone pesquisa" />
        <input
          v-model="pesquisa"
          type="text"
          placeholder="Pesquisar"
          class="search-bar"
        />
      </div>
    </div>

    <div class="lista-submissoes">
      <div
        class="submissao-card"
        v-for="s in submissõesFiltradas"
        :key="s.id"
        :class="s.status === 'Resolvido' ? 'borda-verde' : 'borda-vermelha'"
        @click="verDetalhes(s.id)"
      >
        <p><strong>Ocorrência:</strong> {{ s.id }}</p>
        <p><strong>Estado:</strong> {{ s.status }}</p>
        <p><strong>Tipo:</strong> {{ s.tipo }}</p>
        <p><strong>Descrição:</strong> {{ s.mensagem }}</p>
      </div>
    </div>

    <button class="botao-flutuante" @click="criarSubmissao">+</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const pesquisa = ref('')

const submissoes = ref([])
const user = JSON.parse(localStorage.getItem('userLogado') || '{}')

onMounted(() => {
  const todas = JSON.parse(localStorage.getItem('submissoes') || '[]')
  submissoes.value = todas.filter(s => s.email === user.email)
})

const submissõesFiltradas = computed(() =>
  submissoes.value.filter(s =>
    s.tipo.toLowerCase().includes(pesquisa.value.toLowerCase()) ||
    s.mensagem.toLowerCase().includes(pesquisa.value.toLowerCase())
  )
)

function criarSubmissao() {
  router.push('/cliente/submeter')
}

function verDetalhes(id) {
  router.push(`/cliente/ocorrencia/${id}`)
}

import '@/assets/cssCliente/home.css';
</script>





