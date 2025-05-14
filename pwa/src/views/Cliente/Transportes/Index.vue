<template>
  <div class="transportes-view">
    <div class="header-bloco">
      <h2>Consultar Transportes</h2>
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

    <div class="lista-transportes">
      <div
        class="transporte-card"
        v-for="t in transportesFiltrados"
        :key="t.numero"
      >
        <p><strong>Número:</strong> {{ t.numero }}</p>
        <p><strong>Nome:</strong> {{ t.nome }}</p>
        <div class="botoes">
          <button class="botao" @click="verRota(t.numero)">Rota</button>
          <button class="botao" @click="verHorario(t.numero)">Horário</button>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const transportes = ref([])
const pesquisa = ref('')
const router = useRouter()

onMounted(async () => {
  const response = await fetch('/transportes.json')
  transportes.value = await response.json()
})

const transportesFiltrados = computed(() => {
  return transportes.value.filter(t =>
    t.nome.toLowerCase().includes(pesquisa.value.toLowerCase()) ||
    t.numero.toString().includes(pesquisa.value)
  )
})


function verRota(numero) {
  router.push(`/cliente/rota/${numero}`)
}


function verHorario(numero) {
  router.push(`/cliente/horario/${numero}`)
}

import '@/assets/cssCliente/transportes.css'

</script>





