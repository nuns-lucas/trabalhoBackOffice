<template>
  <div class="content-hp">
    
      <div class="circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="user-icon" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
        </svg>
      </div>
      <!-- Rodapé da página-->
      <div class="btn">
        <span class="perito"><router-link to="/login-peritos"><button class="btn-hp">Login Perito</button></router-link></span>
        <span class="utilizador"><router-link to="/login"><button class="btn-hp">Login Utilizador</button></router-link></span>
      </div>
  </div>
</template>

<script>
import '@/assets/cssLogin/HP.css'  // Caminho relativo para o ficheiro CSS externo
export default {
  name: 'HomePage'
}
</script>