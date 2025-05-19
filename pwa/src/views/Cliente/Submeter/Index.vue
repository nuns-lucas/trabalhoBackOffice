<template>
  <div class="submeter-view">
    <header class="submeter-header">
      <button class="btn-voltar" @click="voltar">
        <span class="btn-voltar-icone">←</span>
        <span>Voltar</span>
      </button>
      <h1 class="header-titulo">Nova Ocorrência</h1>
    </header>

    <div class="submeter-card">
      <!-- Seção de Imagem -->
      <div class="submeter-secao">
        <h3 class="secao-titulo">Imagem</h3>
        <div class="imagem-container">
          <input type="text" v-model="fotoUrl" placeholder="URL da imagem (opcional)" class="campo-input" />
          <div v-if="fotoUrl" class="imagem-preview">
            <img :src="fotoUrl" alt="Imagem escolhida" class="preview-img" @error="handleImageError" />
          </div>
          <div v-else class="imagem-placeholder">
            <img src="@/assets/icons/image-icon.png" alt="Ícone imagem" />
            <p><em>Insira o link de uma imagem representativa</em></p>
          </div>
        </div>
      </div>

      <!-- Seção de Detalhes -->
      <div class="submeter-secao">
        <h3 class="secao-titulo">Informações</h3>
        <div class="campos-container">
          <div class="campo-grupo">
            <label for="tipo-select">Tipo de Ocorrência*</label>
            <select id="tipo-select" v-model="tipo" class="campo-input" required>
              <option disabled value="">Selecione o tipo</option>
              <option value="Avaria">Avaria</option>
              <option value="Incidente">Incidente</option>
              <option value="Atraso">Atraso</option>
            </select>
          </div>

          <div class="campo-grupo">
            <label for="descricao-area">Descrição*</label>
            <textarea id="descricao-area" v-model="mensagem" placeholder="Descreva detalhadamente a ocorrência..."
              class="campo-input campo-textarea" required></textarea>
          </div>
        </div>
      </div>

      <!-- Seção de Localização -->
      <div class="submeter-secao">
        <h3 class="secao-titulo">Localização</h3>
        <div class="localizacao-container">
          <div class="localizacao-status"
            :class="{ 'status-ativo': temLocalizacao, 'status-erro': !temLocalizacao && !carregandoLocalizacao }">
            <div class="status-icon">
              <span v-if="temLocalizacao">✓</span>
              <span v-else-if="carregandoLocalizacao">⟳</span>
              <span v-else>!</span>
            </div>
            <div class="status-texto">
              <span v-if="temLocalizacao">Localização adquirida</span>
              <span v-else-if="carregandoLocalizacao">Obtendo localização...</span>
              <span v-else>Localização não disponível</span>
            </div>
          </div>

          <div v-if="endereco" class="endereco-box">
            <p class="endereco-texto">{{ endereco }}</p>
          </div>

          <button type="button" class="btn-secundario" @click="obterLocalizacao" :disabled="carregandoLocalizacao">
            <span v-if="!carregandoLocalizacao">{{ temLocalizacao ? 'Atualizar Localização' : 'Obter Localização'
              }}</span>
            <span v-else>Localizando...</span>
          </button>
        </div>
      </div>

      <!-- Botão de Submissão -->
      <button class="btn-submeter" :disabled="submitting || !tipo || !mensagem" @click="submeter">
        <span v-if="!submitting">Submeter Ocorrência</span>
        <span v-else class="loading-text">Enviando...</span>
      </button>

      <p class="campos-obrigatorios">* Campos obrigatórios</p>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useOcorrencias } from '@/state/ocorrencias'

// Estado dos campos do formulário
const tipo = ref('')
const mensagem = ref('')
const latitude = ref(null)
const longitude = ref(null)
const fotoUrl = ref('')
const nomePerfil = ref('')
const emailUsuario = ref('')
const endereco = ref('')
const carregandoLocalizacao = ref(false)
const submitting = ref(false)
const imagemValida = ref(true)
const submissaoCompleta = ref(false) // Flag para controlar submissão completa

const router = useRouter()
const { adicionarOcorrencia } = useOcorrencias()

// Computed para verificar se temos localização
const temLocalizacao = computed(() => {
  return latitude.value !== null && longitude.value !== null
})



onMounted(() => {
  // Add a page reload mechanism on first access
  const pageAccessFlag = sessionStorage.getItem('submeter_page_accessed')

  if (!pageAccessFlag) {
    // This is the first access in this session, set the flag and reload
    sessionStorage.setItem('submeter_page_accessed', 'true')
    // Use setTimeout to ensure the flag is saved before reloading
    setTimeout(() => {
      window.location.reload()
    }, 100)
    return // Stop further execution until page reloads
  }

  // Clear the flag after a successful load (so next navigation will be fresh)
  // Comment this line if you want to reload only on the first access in the session
  // sessionStorage.removeItem('submeter_page_accessed')

  // Limpar qualquer flag de submissão anterior
  sessionStorage.removeItem('ocorrencia_submetida')

  // Carregar dados do usuário
  const dadosPerfil = JSON.parse(localStorage.getItem('perfil') || '{}')
  const usuarioLogado = JSON.parse(localStorage.getItem('userLogado') || '{}')

  nomePerfil.value = usuarioLogado?.displayName || 'Utilizador'
  emailUsuario.value = usuarioLogado?.email || ''

  if (!emailUsuario.value) {
    alert("Você precisa estar logado para submeter uma ocorrência.")
    router.push('/login')
    return
  }

  // Obter localização automaticamente ao carregar
  obterLocalizacao()
})

// Before leaving the page, reset the access flag so it reloads on next visit
onBeforeUnmount(() => {
  // Reset the flag when leaving the page so it reloads next time
  sessionStorage.removeItem('submeter_page_accessed')

  // Se a submissão não foi completa, mas alguma ação iniciou
  if (submitting.value && !submissaoCompleta.value) {
    console.warn('Saindo da página com submissão incompleta')
  }
})
// Função para limpar todos os campos do formulário
function limparFormulario() {
  tipo.value = ''
  mensagem.value = ''
  fotoUrl.value = ''
  imagemValida.value = true
  // Não limpar dados de usuário e localização pois podem ser reutilizados
}

// Voltar para a página anterior
function voltar() {
  router.push('/cliente');
}

// Função para validar se a URL da imagem é válida
function handleImageError() {
  imagemValida.value = false
  alert("O URL da imagem não é válido ou a imagem não está acessível.")
}

async function obterLocalizacao() {
  if (!navigator.geolocation) {
    alert("Geolocalização não é suportada pelo seu navegador.")
    return
  }

  carregandoLocalizacao.value = true

  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      })
    })

    latitude.value = position.coords.latitude
    longitude.value = position.coords.longitude

    // Obter endereço a partir das coordenadas
    await buscarEndereco()
  } catch (error) {
    console.error("Erro ao obter localização:", error)
    alert("Não foi possível obter sua localização. Por favor, verifique as permissões do navegador.")
  } finally {
    carregandoLocalizacao.value = false
  }
}

async function buscarEndereco() {
  if (!latitude.value || !longitude.value) return

  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude.value}&lon=${longitude.value}&zoom=18&addressdetails=1`

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'KrecaPWA/1.0'
      }
    })

    if (response.ok) {
      const data = await response.json()

      if (data && data.address) {
        const addr = data.address
        const partes = []

        if (addr.road) partes.push(addr.road)
        if (addr.house_number) partes.push(addr.house_number)
        if (addr.suburb) partes.push(addr.suburb)
        if (addr.city || addr.town) partes.push(addr.city || addr.town)
        if (addr.postcode) partes.push(addr.postcode)

        endereco.value = partes.join(', ')
      } else {
        endereco.value = 'Endereço não identificado'
      }
    } else {
      throw new Error('Falha ao obter o endereço')
    }
  } catch (error) {
    console.error("Erro ao obter endereço:", error)
    endereco.value = 'Não foi possível obter o endereço'
  }
}

async function submeter() {
  // Verificar se já foi submetida e está apenas na navegação para trás
  if (sessionStorage.getItem('ocorrencia_submetida')) {
    alert("Esta ocorrência já foi submetida.")
    router.push('/cliente')
    return
  }

  // Validação de campos
  if (!tipo.value || !mensagem.value) {
    alert("Por favor preencha os campos obrigatórios: Tipo e Descrição.")
    return
  }

  // Se temos uma URL de imagem, mas ela não é válida, confirmar com o usuário
  if (fotoUrl.value && !imagemValida.value) {
    const confirmar = confirm("A URL da imagem parece ser inválida. Deseja continuar sem uma imagem?")
    if (!confirmar) return
    fotoUrl.value = ''
  }

  if (!temLocalizacao.value) {
    const confirmar = confirm("Não foi possível obter sua localização. Deseja continuar mesmo assim?")
    if (!confirmar) return
  }

  if (!emailUsuario.value) {
    alert("Você precisa estar logado para submeter uma ocorrência.")
    router.push('/login')
    return
  }

  submitting.value = true

  try {
    const user = JSON.parse(localStorage.getItem('userLogado') || '{}')

    // Gerar um ID único para evitar duplicação
    const idUnico = Date.now() + Math.floor(Math.random() * 1000)

    // Criar objeto de ocorrência com todos os dados
    const novaOcorrencia = {
      id: idUnico, // Garantir ID único
      nome: nomePerfil.value,
      email: emailUsuario.value,
      tipo: tipo.value,
      mensagem: mensagem.value,
      latitude: latitude.value,
      longitude: longitude.value,
      endereco: endereco.value || 'Não disponível',
      foto: fotoUrl.value || '',
      usuarioId: user.id || null,
      dataSubmissao: new Date().toISOString() // Marcar quando foi submetido
    }

    // Adicionar a ocorrência usando a função do state
    const ocorrenciaId = await adicionarOcorrencia(novaOcorrencia)

    // Marcar submissão como completa
    submissaoCompleta.value = true

    // Registrar na sessionStorage para evitar duplicação
    sessionStorage.setItem('ocorrencia_submetida', idUnico.toString())

    // Registrar na lista de ocorrências do usuário (mantendo compatibilidade)
    if (user.id) {
      const ocorrenciasUsuario = JSON.parse(localStorage.getItem(`ocorrencias_usuario_${user.id}`) || '[]')
      ocorrenciasUsuario.push(ocorrenciaId)
      localStorage.setItem(`ocorrencias_usuario_${user.id}`, JSON.stringify(ocorrenciasUsuario))
    }

    // Limpar campos após submissão bem-sucedida
    limparFormulario()

    alert("Ocorrência submetida com sucesso!")

    // Usar replace em vez de push para evitar voltar à página de submissão
    router.replace('/cliente')
  } catch (error) {
    console.error("Erro ao submeter ocorrência:", error)
    alert("Ocorreu um erro ao submeter a ocorrência. Por favor, tente novamente.")
  } finally {
    submitting.value = false
  }
}

import '@/assets/cssCliente/submeter.css'
</script>

<style scoped>
/* Layout Base */
.submeter-view {
  background-color: #f8f9fa;
  min-height: 100vh;
  padding-bottom: 30px;
}

.submeter-card {
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin-top: 15px;
  overflow: hidden;
  box-sizing: border-box;
  /* Garante que o padding não aumente o tamanho total */
}

/* Header */
.submeter-header {
  background-color: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-voltar {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-size: 0.9rem;
  color: #5BB12F;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
}

.btn-voltar-icone {
  font-size: 1.2rem;
  margin-right: 8px;
  font-weight: bold;
}

.header-titulo {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  flex-grow: 1;
  text-align: center;
  padding-right: 30px;
  color: #333;
}

/* Seções */
.submeter-secao {
  margin-bottom: 25px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 20px;
}

.submeter-secao:last-of-type {
  border-bottom: none;
}

.secao-titulo {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 15px 0;
  padding-left: 10px;
  border-left: 3px solid #5BB12F;
}

/* Campos de Formulário */
.campo-grupo {
  margin-bottom: 15px;
  width: 100%;
  /* Garante que ocupe toda a largura disponível */
  box-sizing: border-box;
  /* Garante que o padding não aumente o tamanho total */
}

.campo-grupo label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 0.9rem;
  color: #444;
}

.campo-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  background-color: white;
  box-sizing: border-box;
  /* Adiciona box-sizing para conter o padding */
  margin: 0;
  /* Remove qualquer margem que possa causar expansão */
}

.campo-input:focus {
  border-color: #5BB12F;
  box-shadow: 0 0 0 2px rgba(91, 177, 47, 0.15);
  outline: none;
}

.campo-textarea {
  min-height: 120px;
  resize: vertical;
  line-height: 1.5;
  width: 100%;
  /* Confirma que ocupa a largura total */
  box-sizing: border-box;
  /* Garante que o padding não aumente o tamanho total */
}

/* Componente de Imagem */
.imagem-container {
  border-radius: 8px;
  background-color: #f9f9fb;
  border: 1px dashed #ddd;
  padding: 15px;
  box-sizing: border-box;
  /* Garante que o padding não aumente o tamanho total */
}

.imagem-preview {
  margin-top: 15px;
  text-align: center;
  background-color: white;
  border-radius: 6px;
  padding: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
}

.imagem-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 15px;
  color: #888;
  text-align: center;
}

.imagem-placeholder img {
  width: 48px;
  height: 48px;
  opacity: 0.6;
  margin-bottom: 15px;
}

.preview-img {
  max-width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 6px;
}

/* Componente de Localização */
.localizacao-container {
  background-color: #f9f9fb;
  border-radius: 8px;
  padding: 15px;
  border: 1px solid #eee;
  box-sizing: border-box;
  /* Garante que o padding não aumente o tamanho total */
}


.localizacao-status {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 6px;
}

.status-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #aaa;
}

.status-ativo {
  background-color: rgba(91, 177, 47, 0.1);
}

.status-ativo .status-icon {
  background-color: #5BB12F;
}

.status-ativo .status-texto {
  color: #5BB12F;
  font-weight: 500;
}

.status-erro {
  background-color: rgba(220, 53, 69, 0.1);
}

.status-erro .status-icon {
  background-color: #dc3545;
}

.status-erro .status-texto {
  color: #dc3545;
  font-weight: 500;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.localizacao-status:not(.status-ativo):not(.status-erro) .status-icon {
  animation: spin 1.5s linear infinite;
}

.endereco-box {
  padding: 12px;
  background-color: white;
  border-radius: 6px;
  margin-bottom: 12px;
  border: 1px solid #eee;
  box-sizing: border-box;
  /* Garante que o padding não aumente o tamanho total */
}

.endereco-texto {
  margin: 0;
  font-size: 0.9rem;
  word-break: break-word;
  line-height: 1.4;
  color: #444;
}

/* Botões */
.btn-secundario {
  width: 100%;
  padding: 10px;
  background-color: #f1f3f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: #555;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secundario:hover:not(:disabled) {
  background-color: #e9ecef;
  border-color: #ccc;
}

.btn-secundario:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-submeter {
  background: linear-gradient(135deg, #5BB12F, #4a9827);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
  margin-top: 25px;
  box-shadow: 0 4px 8px rgba(91, 177, 47, 0.25);
}

.btn-submeter:hover:not(:disabled) {
  background: linear-gradient(135deg, #4a9827, #3d7d20);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(91, 177, 47, 0.3);
}

.btn-submeter:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.loading-text {
  position: relative;
}

.loading-text:after {
  content: "...";
  position: absolute;
  width: 10px;
  text-align: left;
  animation: dots 1.5s linear infinite;
}

@keyframes dots {

  0%,
  20% {
    content: ".";
  }

  40% {
    content: "..";
  }

  60%,
  100% {
    content: "...";
  }
}

.campos-obrigatorios {
  text-align: center;
  font-size: 0.8rem;
  color: #777;
  margin-top: 15px;
  margin-bottom: 0;
}

/* Responsividade */
@media (max-width: 768px) {
  .submeter-card {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
  }

  .submeter-secao {
    margin-bottom: 20px;
    padding-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .campo-input {
    padding: 10px;
  }

  .submeter-header {
    padding: 12px 15px;
  }

  .header-titulo {
    font-size: 1.1rem;
  }

  /* Ajustes adicionais para telas pequenas */
  .submeter-card {
    padding: 15px;
    /* Reduz o padding para telas pequenas */
  }

  .imagem-container,
  .localizacao-container {
    padding: 10px;
    /* Reduz o padding para telas pequenas */
  }
}
</style>