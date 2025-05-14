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
        <span class="registo"><router-link to="/registo"><button class="btn-hp">Criar Conta</button></router-link></span>
        <span class="entrar"><router-link to="/login"><button class="btn-hp">Iniciar Sessão</button></router-link></span>
      </div>
  </div>
 

  
</template>

<script>
import '@/assets/cssLogin/HP.css'  // Caminho relativo para o ficheiro CSS externo
export default {
  name: 'HomePage'
}
</script>
  