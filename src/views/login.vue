<template>
  <div class="login-page">
    <div class="login-container">
      <h1 class="login-title">GuimarEyes</h1>
      <p class="login-subtitle">Faça login para acessar o sistema</p>
      <button @click="loginWithGoogle" class="google-login-btn">
        Login com Google
      </button>
    </div>
  </div>
</template>

<script>
import { auth, provider, signInWithPopup } from '@/firebase';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const router = useRouter();

    const loginWithGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        console.log('User logged in:', result.user);
        router.push('/'); // Redirect to the main page after login
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    return {
      loginWithGoogle
    };
  }
};
</script>

<style scoped>
/* Página de login */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2d502c; /* Cor de fundo igual à sidebar */
}

/* Container do login */
.login-container {
  text-align: center;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

/* Título do login */
.login-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2d502c; /* Cor principal da sidebar */
  margin-bottom: 10px;
}

/* Subtítulo do login */
.login-subtitle {
  font-size: 1rem;
  color: #6c757d; /* Cor cinza para o subtítulo */
  margin-bottom: 20px;
}

/* Botão de login com Google */
.google-login-btn {
  padding: 12px 20px;
  background-color: #0f6324; /* Verde escuro da sidebar */
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.google-login-btn:hover {
  background-color: #27ae60; /* Verde mais claro no hover */
}

/* Responsividade */
@media (max-width: 768px) {
  .login-container {
    padding: 30px;
  }

  .login-title {
    font-size: 1.8rem;
  }

  .login-subtitle {
    font-size: 0.9rem;
  }

  .google-login-btn {
    font-size: 0.9rem;
    padding: 10px 16px;
  }
}
</style>