import { reactive } from 'vue'

// Estado do usuário
const estado = reactive({
  usuarioAtual: null,
  carregando: false,
  erro: null
})

// Inicializar estado do usuário
function inicializar() {
  try {
    // Tentar obter dados do usuário do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('userLogado') || '{}')
    
    estado.usuarioAtual = {
      id: usuarioLogado.id,
      email: usuarioLogado.email,
      nome: usuarioLogado.displayName || usuarioLogado.nome,
    }
  } catch (e) {
    console.error('Erro ao carregar dados de usuário do localStorage:', e)
    estado.usuarioAtual = null
  }
}

// Executar inicialização
inicializar()

// Obter o usuário atual
function obterUsuarioAtual() {
  // Se não temos usuário no estado, tentar carregar do localStorage
  if (!estado.usuarioAtual) {
    inicializar()
  }
  
  return estado.usuarioAtual
}

// Verificar se o usuário está autenticado
function estaAutenticado() {
  const usuario = obterUsuarioAtual()
  return !!usuario && !!usuario.email
}

// Exportar hook para uso nos componentes
export function useUsuario() {
  return {
    estado,
    obterUsuarioAtual,
    estaAutenticado
  }
}