<template>
  <div class="submeter-view">
    <h2>Submeter Ocorrência</h2>

    <div class="form-card">
      <div class="imagem-upload" @click="selecionarImagem">
        <input type="file" ref="inputImagem" accept="image/*" @change="mostrarImagem" hidden />
        <img v-if="imagemPreview" :src="imagemPreview" alt="Imagem escolhida" />
        <div v-else>
          <img src="@/assets/icons/image-icon.png" alt="Ícone imagem" />
          <p><em>Escolha uma foto</em></p>
        </div>
      </div>

      <select v-model="tipo" class="campo">
        <option disabled value="">Tipo de ocorrência</option>
        <option value="Avaria">Avaria</option>
        <option value="Incidente">Incidente</option>
        <option value="Atraso">Atraso</option>
      </select>

      <textarea v-model="mensagem" placeholder="Descrição" class="campo textarea"></textarea>

      <button class="botao-submeter" @click="submeter">Submeter</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const tipo = ref('')
const mensagem = ref('')
const latitude = ref(null)
const longitude = ref(null)
const imagemPreview = ref(null)
const imagemFile = ref(null)
const inputImagem = ref(null)
const nomePerfil = ref('')

const router = useRouter()

onMounted(() => {
  const dadosPerfil = JSON.parse(localStorage.getItem('perfil'))
  nomePerfil.value = dadosPerfil?.nome || 'Utilizador'

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        latitude.value = pos.coords.latitude
        longitude.value = pos.coords.longitude
      },
      err => {
        alert("Erro ao obter localização.")
        console.error(err)
      }
    )
  }
})

function selecionarImagem() {
  inputImagem.value.click()
}

function mostrarImagem(event) {
  const file = event.target.files[0]
  if (file) {
    imagemFile.value = file

    const reader = new FileReader()
    reader.onload = (e) => {
      imagemPreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

function submeter() {
  if (!tipo.value || !mensagem.value || !imagemFile.value || !latitude.value || !longitude.value) {
    alert("Por favor preencha todos os campos obrigatórios e permita acesso à localização.")
    return
  }

  const novas = JSON.parse(localStorage.getItem('submissoes') || '[]')
  const user = JSON.parse(localStorage.getItem('userLogado') || '{}')

  const novaSubmissao = {
    id: Date.now(),
    nome: nomePerfil.value,
    email: user.email, // ← obrigatório para associar a submissão ao utilizador
    tipo: tipo.value,
    mensagem: mensagem.value,
    latitude: latitude.value,
    longitude: longitude.value,
    data: new Date().toISOString(),
    status: "Por Resolver",
    foto: imagemPreview.value
  }

  novas.push(novaSubmissao)
  localStorage.setItem('submissoes', JSON.stringify(novas))

  router.push('/cliente')
}

import '@/assets/cssCliente/submeter.css'
</script>

