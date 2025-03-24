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
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      rotas: [
        { caminho: '/', nome: 'Menu Geral', icone: 'bi-house' },
        { caminho: '/atrasos', nome: 'Menu Atrasos', icone: 'bi-clock-history' }
      ]
    }
  }
}
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
</style>
