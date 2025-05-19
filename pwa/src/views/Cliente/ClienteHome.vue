<!-- filepath: /home/lucas/repos/kreca/pwa/src/views/Cliente/ClienteHome.vue -->
<template>
  <div class="ocorrencias-content">
    <main class="oc-main-content">
      <h2 class="oc-titulo">As minhas ocorrências</h2>

      <div class="pesquisa-container">
        <div class="pesquisa-wrapper">
          <input v-model="pesquisa" type="text" placeholder="Pesquisar ocorrências..." class="oc-pesquisa" />
          <img src="@/assets/icons/search.png" alt="Pesquisar" class="oc-search-icon" />
        </div>
        <button class="oc-botao-adicionar" @click="criarSubmissao" title="Adicionar ocorrência">
          <span>+</span>
        </button>
      </div>

      <div v-if="carregando" class="oc-carregando">
        <p>Carregando ocorrências...</p>
      </div>

      <div v-else-if="ocorrencias.length === 0" class="oc-sem-ocorrencias">
        <p>Você ainda não possui ocorrências registradas.</p>
        <button class="oc-botao-criar" @click="criarSubmissao">Registrar nova ocorrência</button>
      </div>


      <div class="oc-caixa" v-for="ocorrencia in ocorrenciasFiltradas" :key="ocorrencia.id"
        @click="verDetalhes(ocorrencia.id)">
        <div class="oc-header">
          <p class="oc-titulo-item">{{ ocorrencia.tipo || 'Ocorrência' }} #{{ ocorrencia.id }}</p>
          <span class="oc-data">{{ formatarData(ocorrencia.data) }}</span>
        </div>

        <p class="oc-descricao">{{ truncateText(ocorrencia.mensagem, 100) }}</p>
        <p v-if="ocorrencia.endereco" class="oc-endereco"><strong>Local:</strong> {{ truncateText(ocorrencia.endereco,
          60) }}</p>

        <div class="oc-status-container">
          <span class="oc-status" :class="getStatusClass(ocorrencia.status)">{{ ocorrencia.status }}</span>
          <div class="oc-icon">
            <img src="@/assets/seta.webp" alt="Ver detalhes" />
          </div>
        </div>
      </div>

      <div v-if="ocorrencias.length > 0" class="oc-paginacao">
        <span>{{ ocorrencias.length }} ocorrência(s) encontrada(s)</span>
      </div>
    </main>


  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useOcorrencias } from '@/state/ocorrencias'

const router = useRouter()
const { estado, buscarOcorrencias } = useOcorrencias()

const pesquisa = ref('')
const ocorrencias = ref([])
const carregando = ref(true)
const user = JSON.parse(localStorage.getItem('userLogado') || '{}')

onMounted(async () => {
  await carregarOcorrencias()
})

async function carregarOcorrencias() {
  carregando.value = true

  try {
    // Buscar todas as ocorrências
    let todasOcorrencias = []

    // Primeiro, tentar através do state
    if (estado && estado.ocorrencias && Array.isArray(estado.ocorrencias)) {
      todasOcorrencias = estado.ocorrencias
    } else {
      // Se não temos estado, procurar no localStorage (compatibilidade)
      const ocorrenciasLS = localStorage.getItem('ocorrencias')

      if (ocorrenciasLS) {
        try {
          const parsedData = JSON.parse(ocorrenciasLS)

          // Verificar se é array ou objeto com propriedade ocorrencias
          if (Array.isArray(parsedData)) {
            todasOcorrencias = parsedData
          } else if (parsedData.ocorrencias && Array.isArray(parsedData.ocorrencias)) {
            todasOcorrencias = parsedData.ocorrencias
          }
        } catch (e) {
          console.error('Erro ao processar ocorrências do localStorage:', e)
        }
      }

      // Se ainda não temos ocorrências, procurar no formato antigo
      if (!todasOcorrencias.length) {
        const submissoesLS = localStorage.getItem('submissoes')
        if (submissoesLS) {
          try {
            todasOcorrencias = JSON.parse(submissoesLS)
          } catch (e) {
            console.error('Erro ao processar submissões do localStorage:', e)
          }
        }
      }
    }

    // Filtrar ocorrências do usuário pelo email
    if (user && user.email) {
      ocorrencias.value = todasOcorrencias.filter(o => o.email === user.email)
    } else {
      ocorrencias.value = []
    }

    // Ordenar por data, mais recente primeiro
    ocorrencias.value.sort((a, b) => {
      const dateA = new Date(a.data || a.dataSubmissao || 0)
      const dateB = new Date(b.data || b.dataSubmissao || 0)
      return dateB - dateA
    })
  } catch (error) {
    console.error('Erro ao carregar ocorrências:', error)
    ocorrencias.value = []
  } finally {
    carregando.value = false
  }
}

// Ocorrências filtradas pela pesquisa
const ocorrenciasFiltradas = computed(() => {
  if (!pesquisa.value.trim()) return ocorrencias.value

  const termoPesquisa = pesquisa.value.toLowerCase()
  return ocorrencias.value.filter(o =>
    (o.tipo && o.tipo.toLowerCase().includes(termoPesquisa)) ||
    (o.mensagem && o.mensagem.toLowerCase().includes(termoPesquisa)) ||
    (o.endereco && o.endereco.toLowerCase().includes(termoPesquisa)) ||
    (o.status && o.status.toLowerCase().includes(termoPesquisa))
  )
})

function formatarData(data) {
  if (!data) return 'Data não disponível'

  try {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  } catch (e) {
    return 'Data inválida'
  }
}

function truncateText(text, maxLength) {
  if (!text) return ''
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}

function getStatusClass(status) {
  if (!status) return 'status-desconhecido'

  const statusLower = status.toLowerCase()
  if (statusLower.includes('resolvid') || statusLower.includes('conclui')) {
    return 'status-resolvida'
  } else if (statusLower.includes('analis')) {
    return 'status-analise'
  } else if (statusLower.includes('audit')) {
    return 'status-auditoria'
  } else if (statusLower.includes('rejeit')) {
    return 'status-rejeitada'
  } else if (statusLower.includes('abert')) {
    return 'status-aberta'
  } else {
    return 'status-pendente'
  }
}

function criarSubmissao() {
  router.push('/cliente/submeter')
}

function verDetalhes(id) {
  router.push(`/cliente/ocorrencia/${id}`)
}

import '@/assets/cssCliente/home.css'
</script>

<style scoped>
/* Estilos semelhantes ao AuditoriasRealizadas.vue */
.ocorrencias-content {
  width: 100%;
  position: relative;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-bottom: 120px;
}

.oc-main-content {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.oc-titulo {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.pesquisa-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
}

.pesquisa-wrapper {
  position: relative;
  flex: 1;
  /* Isso faz a caixa de pesquisa ocupar o espaço disponível */
}

.oc-pesquisa {
  width: 100%;
  padding: 10px 40px 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 0.9rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.oc-search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  opacity: 0.6;
}

.oc-botao-adicionar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #5BB12F;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  flex-shrink: 0;
  /* Impede o botão de encolher */
}

.oc-botao-adicionar:hover {
  background-color: #4a9525;
  transform: scale(1.05);
}

.oc-pesquisa {
  max-width: 100%;
  padding: 10px 40px 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 0.9rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.oc-search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  opacity: 0.6;
}

.oc-carregando,
.oc-sem-ocorrencias {
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  margin: 15px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: #666;
}

.oc-botao-criar {
  background-color: #5BB12F;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-top: 15px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
}

.oc-botao-criar:hover {
  background-color: #4a9525;
}

.oc-caixa {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.oc-caixa:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.oc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.oc-titulo-item {
  font-weight: bold;
  font-size: 1rem;
  color: #333;
  margin: 0;
}

.oc-data {
  font-size: 0.8rem;
  color: #666;
}

.oc-descricao {
  font-size: 0.95rem;
  color: #444;
  margin: 10px 0;
  line-height: 1.4;
}

.oc-endereco {
  font-size: 0.85rem;
  color: #666;
  margin: 8px 0;
}

.oc-status-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.oc-status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-resolvida {
  background-color: #d4edda;
  color: #155724;
}

.status-analise {
  background-color: #d1ecf1;
  color: #0c5460;
}

.status-auditoria {
  background-color: #e2d4fa;
  color: #5e3cc4;
}

.status-rejeitada {
  background-color: #f8d7da;
  color: #721c24;
}

.status-aberta {
  background-color: #fff3cd;
  color: #856404;
}

.status-pendente {
  background-color: #e9ecef;
  color: #495057;
}

.oc-icon {
  width: 20px;
  height: 20px;
}

.oc-icon img {
  width: 100%;
  height: 100%;
  transition: transform 0.2s;
}

.oc-caixa:hover .oc-icon img {
  transform: translateX(3px);
}

.oc-paginacao {
  text-align: center;
  margin: 20px 0;
  color: #666;
  font-size: 0.9rem;
}

.botao-adicionar-wrapper {
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 100;
}

.oc-botao-flutuante {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #5BB12F;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.oc-botao-flutuante:hover {
  background-color: #4a9525;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .oc-main-content {
    padding: 15px;
  }

  .oc-titulo {
    font-size: 1.3rem;
  }

  .oc-botao-flutuante {
    bottom: 80px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
}
</style>