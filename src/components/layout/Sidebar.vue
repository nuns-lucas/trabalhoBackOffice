<template>
  <aside class="sidebar">
    <h2 class="logo">GuimarEyes</h2>
    <nav>
      <ul>
        <li>
          <router-link to="/">Menu Geral</router-link>
        </li>
        <li>
          <router-link to="/atrasos">Menu Atrasos</router-link>
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
      </ul>
    </nav>
    <button class="logout-btn" @click="logout">Logout</button>

    <!-- LIMPAR LOCAL STORAGE PROVISÓRIO -->
    <button class="clear-storage-btn" @click="limparLocalStorage">
      Limpar Local Storage
    </button>
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
  height: 100vh;
  padding: 20px;
}

.logo {
  color: #fff;
  margin-bottom: 30px;
  font-size: 1.5rem;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  margin-bottom: 15px;
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

.logout-btn {
  background: #0f6324;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: 12px;
  margin-bottom: 20px;
}

.logout-btn:hover {
  background: #27ae60;
}

.clear-storage-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.clear-storage-btn:hover {
  background: #c82333;
}
</style>