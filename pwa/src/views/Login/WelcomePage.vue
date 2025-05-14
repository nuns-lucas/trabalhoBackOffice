<template>
  <div class="welcome-content">
    
        <!--Conteúdo da página-->
        <div class="title">
          <p>GuimarEyes</p>
        </div>
        <!--Rodapé da página-->
        <div class="fundo">
          <p>Bem Vindo(a) <router-link to="/home"><button class="btn-wp"><span class="icon-wp">➔</span></button></router-link></p>
        </div>
  </div>
</template>

<script>
import '@/assets/cssLogin/WP.css'  // Caminho relativo para o ficheiro CSS externo
export default {
  name: 'WelcomePage'
}
</script>