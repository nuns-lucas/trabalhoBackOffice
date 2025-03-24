<template>
  <aside class="sidebar bg-success text-white p-3">
    <h2 class="logo">GuimarEyes</h2>

    <ul class="nav flex-column">
      <li class="nav-item"><a href="#" class="nav-link text-white">Menu Geral</a></li>
      <li class="nav-item"><a href="#" class="nav-link text-white">Menu Atrasos</a></li>
      <li class="nav-item"><a href="#" class="nav-link text-white">Menu Ocorrências</a></li>
      <li class="nav-item"><a href="#" class="nav-link text-white">Histórico</a></li>
      <li class="nav-item"><a href="#" class="nav-link text-white">Técnicos</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  min-height: 100vh;
}
</style>
