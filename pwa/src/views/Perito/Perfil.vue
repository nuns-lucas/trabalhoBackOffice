<template>
  <div class="perfil-content">
    <main class="p-main-content">
      <img class="p-perfil-icon" src="@/assets/user.png" alt="Perfil" />
      
      <div v-if="peritoLogado" class="p-caixa">
        <p><strong>Nome:</strong> {{ peritoLogado.nome }}</p>
        <p><strong>Email:</strong> {{ peritoLogado.contacto }}</p>
        <p><strong>Status:</strong> <span :class="getStatusClass(peritoLogado.status)">{{ peritoLogado.status || 'Não especificado' }}</span></p>
        <p><strong>Auditorias Realizadas:</strong> {{ auditoriasConcluidas }}</p>
        <p><strong>Auditorias em Andamento:</strong> {{ auditoriasEmAndamento }}</p>
      </div>
      
      <div v-else class="p-sem-dados">
        <p>Não foi possível carregar os dados do perito.</p>
        <button @click="voltarParaHome" class="p-botao">Voltar para Home</button>
      </div>
      
      <div class="p-acoes">
        <button @click="logout" class="p-botao p-botao-logout">Sair</button>
      </div>
    </main>
  </div>
</template>

<script>
import { useAuditorias } from '@/state/auditorias';

export default {
  name: "Perfil",
  data() {
    return {
      peritoLogado: null,
      auditoriasConcluidas: 0,
      auditoriasEmAndamento: 0
    };
  },
  created() {
    this.carregarDadosPerito();
    this.carregarEstatisticasAuditorias();
  },
  methods: {
    carregarDadosPerito() {
      try {
        const peritoData = localStorage.getItem('peritoLogado');
        if (peritoData) {
          this.peritoLogado = JSON.parse(peritoData);
        }
      } catch (error) {
        console.error('Erro ao carregar dados do perito:', error);
      }
    },
    
    carregarEstatisticasAuditorias() {
      try {
        if (!this.peritoLogado) return;
        
        const { estado: estadoAuditorias } = useAuditorias();
        const peritoId = this.peritoLogado.id;
        
        // Filtrar auditorias associadas ao perito
        const auditoriasDoPerito = estadoAuditorias.auditorias.filter(auditoria => 
          (auditoria.peritoId === peritoId) || 
          (Array.isArray(auditoria.peritos) && auditoria.peritos.includes(peritoId))
        );
        
        // Contar auditorias concluídas e em andamento
        this.auditoriasConcluidas = auditoriasDoPerito.filter(a => a.status === 'Concluída').length;
        this.auditoriasEmAndamento = auditoriasDoPerito.filter(a => a.status === 'Em andamento').length;
      } catch (error) {
        console.error('Erro ao carregar estatísticas das auditorias:', error);
      }
    },
    
    getStatusClass(status) {
      switch (status?.toLowerCase()) {
        case 'disponível': return 'status-disponivel';
        case 'ocupado': return 'status-ocupado';
        case 'inativo': return 'status-inativo';
        default: return 'status-default';
      }
    },
    
    logout() {
      localStorage.removeItem('peritoLogado');
      this.$router.push('/login-peritos');
    },
    
    voltarParaHome() {
      this.$router.push('/home');
    }
  }
};

import '@/assets/cssPerito/Perfil.css'
</script>

<style scoped>
/* Estilos adicionais para complementar o CSS externo */
.p-sem-dados {
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 15px;
}

.p-acoes {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.p-botao {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.p-botao-logout {
  background-color: #dc3545;
  color: white;
}

.p-botao-logout:hover {
  background-color: #c82333;
}

.status-disponivel {
  color: #28a745;
  font-weight: bold;
}

.status-ocupado {
  color: #fd7e14;
  font-weight: bold;
}

.status-inativo {
  color: #6c757d;
  font-weight: bold;
}

.status-default {
  color: #6c757d;
}
</style>