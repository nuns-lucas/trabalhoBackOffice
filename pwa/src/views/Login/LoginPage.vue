<template>
  <div class="login-content">
      <div class="title-lp">Iniciar Sessão</div>
      <div class ="meio-lp">
        <div class="foto-lp">
        <div class="icon-lp">
          <svg xmlns="http://www.w3.org/2000/svg" class="user-icon-rp" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </div>
      </div>
      </div>
      <div class="fundo-lp">
        <!--Conteúdo da página-->
          <button class="btn3-lp" @click.prevent="loginGoogle">Login Google</button>
    </div>
  </div>
</template>
<script>
import '@/assets/cssLogin/Login.css'
import {signInWithPopup} from 'firebase/auth'
import {auth, provider} from '@/firebase'

export default {
  name: 'LoginPage',
  methods: {
    loginGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user
          alert(`Bem-vindo, ${user.displayName}!`)
          localStorage.setItem('userLogado', JSON.stringify(user))
          this.$router.push('/cliente')
        })
        .catch((error) => {
          alert('Erro ao autenticar com o Google.')
          console.error(error)
        })
    }
  }
}

</script>