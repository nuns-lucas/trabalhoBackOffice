<template>
    <div class="register-content">
      <div class="title-rp">Criar Conta</div>

      <div class="foto-rp">
        <div class="icon-rp">
          <svg xmlns="http://www.w3.org/2000/svg" class="user-icon-rp" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </div>
      </div>

      <div class="meio-rp">
        <div class="inputs-rp">
          <input class="dados-rp" type="text" v-model="nome" placeholder="Nome" />
          <input class="dados-rp" type="text" v-model="contacto" placeholder="Contacto" />
          <input class="dados-rp" type="text" v-model="nif" placeholder="NIF" />
          <input class="dados-rp" type="text" v-model="email" placeholder="E-Mail" />
          <input class="dados-rp" type="password" v-model="palavraPasse" placeholder="Palavra-Passe" />
          
          <div class="fundo-rp">
            <button class="btn3-rp" @click="guardarNoLocalStorage">Registar</button>
            <router-link to="/home">
              <button class="btn3-rp">Voltar</button>
            </router-link>
          </div>
        </div>
      </div>

      <footer class="footer"></footer>
    </div>
</template>

<script>
import '@/assets/cssLogin/Registo.css'

export default {
  name: 'RegisterPage',
  data() {
    return {
      nome: '',
      contacto: '',
      nif: '',
      email: '',
      palavraPasse: ''
    }
  },
  methods: {
    guardarNoLocalStorage() {
      // Validações simples com alertas
      if (!this.nome || !this.contacto || !this.nif || !this.email || !this.palavraPasse) {
        alert('Por favor, preenche todos os campos.');
        return;
      }

      if (!this.email.includes('@') || !this.email.includes('.')) {
        alert('Por favor, introduz um e-mail válido.');
        return;
      }

      if (!/^[0-9]{9}$/.test(this.contacto)) {
        alert('O contacto deve ter exatamente 9 dígitos numéricos.');
        return;
      }

      if (!/^[0-9]{9}$/.test(this.nif)) {
        alert('O NIF deve ter exatamente 9 dígitos.');
        return;
      }

      if (this.palavraPasse.length < 6) {
        alert('A palavra-passe deve ter no mínimo 6 caracteres.');
        return;
      }

      // Criar utilizador
      const novoUtilizador = {
        nome: this.nome,
        contacto: this.contacto,
        nif: this.nif,
        email: this.email,
        palavraPasse: this.palavraPasse
      }

      const utilizadoresGuardados = JSON.parse(localStorage.getItem('utilizadores')) || []

      utilizadoresGuardados.push(novoUtilizador)

      localStorage.setItem('utilizadores', JSON.stringify(utilizadoresGuardados))

      alert('Utilizador registado com sucesso!')

      // Limpar os campos
      this.nome = ''
      this.contacto = ''
      this.nif = ''
      this.email = ''
      this.palavraPasse = ''

      // Redirecionar
      this.$router.push('/login')
    }
  }
}
</script>
