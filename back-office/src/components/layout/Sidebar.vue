<template>
  <aside class="sidebar">
    <h2 class="logo">GuimarEyes</h2>
    <nav>
      <ul>
        <li>
          <router-link to="/">Menu Geral</router-link>
        </li>
        <li>
          <router-link to="/ocorrencias">Menu Ocorrencias</router-link>
        </li>
        <li>
          <router-link to="/historico">Menu Historico</router-link>
        </li>
        <li>
          <router-link to="/peritos">Menu Peritos</router-link>
        </li>
        <li>
          <router-link to="/materiais">Gestão de Materiais</router-link>
        </li>
        <!-- Separador visual -->
        <li class="separator"></li>
        <!-- Botões de ação agora dentro da lista de navegação -->
        <li>
          <button class="nav-button logout-btn" @click="logout">Logout</button>
        </li>
        <li>
          <button class="nav-button clear-storage-btn" @click="limparLocalStorage">
            Limpar Local Storage
          </button>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Sidebar',
  setup() {
    const router = useRouter();

    // Função para limpar o localStorage
    const limparLocalStorage = () => {
      localStorage.clear(); // Limpa todo o conteúdo do localStorage
      alert('Local Storage limpo com sucesso!');
      location.reload(); // Recarrega a página para refletir as alterações
    };

    // Função para logout
    const logout = () => {
      localStorage.removeItem('user'); // Remove o usuário do localStorage
      router.push('/login'); // Redireciona para a página de login
    };

    return {
      limparLocalStorage,
      logout
    };
  }
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #2d502c;
  color: white;
  position: sticky;
  top: 0;
  height: auto;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  z-index: 100;
  align-self: stretch;
}

.logo {
  color: #fff;
  margin-bottom: 30px;
  font-size: 1.5rem;
  text-align: center;
}

nav {
  flex: 1;
  overflow-y: auto;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  margin-bottom: 15px;
}

/* Estilo para o separador visual entre links e botões */
.separator {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 15px 0;
}

nav a {
  color: #ecf0f1;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s;
}

nav a:hover {
  background: #34495e;
}

nav a.router-link-exact-active {
  background: #3498db;
}

nav i {
  margin-right: 10px;
  font-size: 1.1rem;
}

/* Estilo comum para botões na navegação */
.nav-button {
  width: 100%;
  text-align: left;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s;
}

/* Estilos específicos para cada tipo de botão */
.logout-btn {
  background: #0f6324;
}

.logout-btn:hover {
  background: #27ae60;
}

.clear-storage-btn {
  background: #dc3545;
}

.clear-storage-btn:hover {
  background: #c82333;
}

/* Media queries para telas menores */
@media (max-width: 768px) {
  .sidebar {
    width: 200px;
    padding: 15px;
  }
  
  .logo {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  
  nav a, .nav-button {
    padding: 6px 10px;
  }
}

@media (max-width: 480px) {
  .sidebar {
    width: 60px;
    padding: 10px 5px;
    overflow-x: hidden;
    height: auto; 
    min-height: 100vh;
  }
  
  .logo {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
  
  nav a, .nav-button {
    justify-content: center;
    padding: 10px 5px;
    text-align: center;
  }
  
  /* Em telas muito pequenas, escondemos o texto e mostramos apenas ícones */
  .nav-button {
    font-size: 0;
  }
  
  nav a span {
    display: none;
  }
  
  /* Adicionar ícones usando pseudo-elementos para botões em telas pequenas */
  .logout-btn::after {
    content: "↩️";
    font-size: 0.9rem;
  }
  
  .clear-storage-btn::after {
    content: "🗑️";
    font-size: 0.9rem;
  }
}
</style>