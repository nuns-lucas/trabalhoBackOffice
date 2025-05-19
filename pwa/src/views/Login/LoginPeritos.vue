<!-- filepath: /home/lucas/repos/kreca/pwa/src/views/Login/LoginPeritos.vue -->
<template>
  <div class="login-perito-container">
    <div class="login-card">
      <div class="login-header">
        <div class="avatar-container">
          <div class="avatar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4a4 4 0 100 8 4 4 0 000-8z"></path>
              <path d="M20 21v-2c0-2.6-2-5-6-5H10c-4 0-6 2.4-6 5v2"></path>
            </svg>
          </div>
        </div>
        <h1>Login Perito</h1>
        <p>Acesse sua área de trabalho</p>
      </div>
      
      <div class="login-form">
        <div class="input-group">
          <label for="email">Email</label>
          <div class="input-with-icon">
            <i class="email-icon">✉️</i>
            <input 
              type="email" 
              id="email"
              v-model="email" 
              placeholder="seu.email@exemplo.com"
              autocomplete="email"
            />
          </div>
        </div>
        
        <div class="input-group">
          <label for="senha">Senha</label>
          <div class="input-with-icon">
            <i class="lock-icon">🔒</i>
            <input 
              :type="mostrarSenha ? 'text' : 'password'" 
              id="senha"
              v-model="senha" 
              placeholder="••••••"
              autocomplete="current-password"
            />
            <button 
              type="button" 
              class="toggle-password" 
              @click="mostrarSenha = !mostrarSenha">
              {{ mostrarSenha ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
        </div>
        
        <div class="error-message" v-if="errorMessage">
          <i class="error-icon">⚠️</i>
          <span>{{ errorMessage }}</span>
        </div>
        
        <div class="actions">
          <button class="btn-login" @click.prevent="loginPerito">
            Entrar <span class="arrow">→</span>
          </button>
          <button class="btn-back" @click="voltarParaHome">
            <span class="arrow">←</span> Voltar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/cssLogin/Login.css'

export default {
  name: 'LoginPerito',
  data() {
    return {
      email: '',
      senha: '',
      errorMessage: '',
      mostrarSenha: false
    }
  },
  methods: {
    loginPerito() {
      if (!this.email || !this.senha) {
        this.errorMessage = 'Por favor, preencha todos os campos';
        return;
      }

      // Buscar peritos do localStorage
      const peritos = JSON.parse(localStorage.getItem('peritos'))?.peritos || [];
      
      // Verificar se existe um perito com este email/contato e senha
      const perito = peritos.find(p => 
        p.contacto.toLowerCase() === this.email.toLowerCase() && 
        p.senha === this.senha
      );

      if (perito) {
        // Salvar dados do perito logado
        localStorage.setItem('peritoLogado', JSON.stringify(perito));
        this.$router.push('/perito');
      } else {
        this.errorMessage = 'Email ou senha incorretos';
      }
    },
    voltarParaHome() {
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
/* Adaptação para a moldura mobile específica (390px × 844px) */
.login-perito-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.login-card {
  width: 330px; /* Ajustado para a largura da moldura (390px - margens) */
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-header {
  background: linear-gradient(135deg, #5BB12F 0%, #3e8e41 100%);
  padding: 1rem;
  color: white;
  text-align: center;
}

.login-header h1 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: bold;
}

.login-header p {
  margin: 0.3rem 0 0;
  font-size: 0.85rem;
  opacity: 0.9;
}

.avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 0.7rem;
}

.avatar {
  background-color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.avatar svg {
  width: 35px;
  height: 35px;
  fill: #5BB12F;
}

.login-form {
  padding: 1rem;
}

.input-group {
  margin-bottom: 0.8rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.4rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon i {
  position: absolute;
  left: 10px;
  font-style: normal;
  font-size: 0.9rem;
}

.input-with-icon input {
  width: 100%;
  padding: 10px 10px 10px 35px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.input-with-icon input:focus {
  border-color: #5BB12F;
  outline: none;
  box-shadow: 0 0 0 2px rgba(91, 177, 47, 0.2);
}

.toggle-password {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
}

.error-message {
  display: flex;
  align-items: center;
  background-color: #fff0f0;
  color: #e74c3c;
  padding: 8px;
  border-radius: 6px;
  margin: 0.8rem 0;
  font-size: 0.85rem;
}

.error-icon {
  margin-right: 6px;
  font-style: normal;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1.2rem;
}

.btn-login {
  width: 100%;
  padding: 12px;
  background-color: #5BB12F;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-login:hover {
  background-color: #4a9827;
}

.btn-back {
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-back:hover {
  background-color: #f5f5f5;
}

.arrow {
  display: inline-block;
  margin: 0 3px;
}
</style>