<template>
  <nav class="bottom-nav">
    <router-link
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="nav-item"
    >
      <div class="icon-container" :class="{ active: route.path === item.path }">
        <img
          :src="route.path === item.path ? item.iconFilled : item.iconOutlined"
          :alt="item.label"
          :class="['icon', item.path === '/cliente' ? 'home' : '']"
        />


      </div>
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const navItems = [
  {
    path: '/cliente/perfil',
    label: 'Perfil',
    iconOutlined: new URL('@/assets/icons/user-outlined.png', import.meta.url).href,
    iconFilled: new URL('@/assets/icons/user-filled.png', import.meta.url).href
  },
  {
    path: '/cliente',
    label: 'Início',
    iconOutlined: new URL('@/assets/icons/home-outlined.png', import.meta.url).href,
    iconFilled: new URL('@/assets/icons/home-filled.png', import.meta.url).href
  },
  {
    path: '/cliente/transportes',
    label: 'Transportes',
    iconOutlined: new URL('@/assets/icons/bus-outlined.png', import.meta.url).href,
    iconFilled: new URL('@/assets/icons/bus-filled.png', import.meta.url).href
  }
]
</script>

<style scoped>
.bottom-nav {
  height: 70px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #e5f2e3;
}

.nav-item {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.icon-container {
  padding: 8px;
  border-radius: 12px;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-container.active {
  background-color: #D6E9CC;
}

.icon {
  width: 35px;
  height: 35px;
  transition: transform 0.2s ease;
}

.icon.home {
  width: 45px;
  height: 45px;
}


</style>
