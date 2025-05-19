<template>
  <div class="auditorias-content">
    <main class="ar-main-content">
      <h2 class="ar-titulo">Auditorias Realizadas</h2>
      
      <div v-if="carregando" class="ar-carregando">
        <p>Carregando auditorias...</p>
      </div>
      
      <div v-else-if="auditorias.length === 0" class="ar-sem-auditorias">
        <p>Nenhuma auditoria concluída encontrada.</p>
      </div>
      
      <div
        class="ar-caixa"
        v-for="auditoria in auditorias"
        :key="auditoria.id"
      >
        <div class="ar-header">
          <p class="ar-titulo-item">{{ auditoria.titulo || 'Auditoria' }}</p>
          <span class="ar-data">{{ formatarData(auditoria.dataConclusao || auditoria.data) }}</span>
        </div>
        
        <p><strong>Tipo:</strong> {{ auditoria.tipo || 'Não especificado' }}</p>
        <p><strong>Localização:</strong> {{ auditoria.localizacao || 'Não especificado' }}</p>
        
        <div class="ar-status-container">
          <span class="ar-status status-resolvida">Concluída</span>
          <div class="ar-icon">
            <img src="@/assets/seta.webp" alt="Ver detalhes" @click="verDetalhesAuditoria(auditoria)" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useAuditorias } from '@/state/auditorias';

export default {
  name: "AuditoriasRealizadas",
  data() {
    return {
      auditorias: [],
      peritoLogado: null,
      carregando: true
    };
  },
  created() {
    this.carregarPeritoLogado();
    this.carregarAuditoriasRealizadas();
  },
  methods: {
    carregarPeritoLogado() {
      try {
        const peritoData = localStorage.getItem('peritoLogado');
        if (peritoData) {
          this.peritoLogado = JSON.parse(peritoData);
        }
      } catch (error) {
        console.error('Erro ao carregar dados do perito:', error);
      }
    },
    
    carregarAuditoriasRealizadas() {
      this.carregando = true;
      
      try {
        if (!this.peritoLogado) {
          this.auditorias = [];
          this.carregando = false;
          return;
        }
        
        const { estado: estadoAuditorias } = useAuditorias();
        const peritoId = this.peritoLogado.id;
        
        // Filtrar auditorias concluídas do perito
        this.auditorias = estadoAuditorias.auditorias.filter(auditoria => 
          // É uma auditoria concluída
          auditoria.status === 'Concluída' && 
          // E está associada ao perito
          ((auditoria.peritoId === peritoId) || 
           (Array.isArray(auditoria.peritos) && auditoria.peritos.includes(peritoId)))
        );
        
        // Ordenar por data de conclusão (mais recentes primeiro)
        this.auditorias.sort((a, b) => {
          const dataA = new Date(a.dataConclusao || a.data);
          const dataB = new Date(b.dataConclusao || b.data);
          return dataB - dataA;
        });
        
      } catch (error) {
        console.error('Erro ao carregar auditorias realizadas:', error);
        this.auditorias = [];
      } finally {
        this.carregando = false;
      }
    },
    
    formatarData(dataISO) {
      if (!dataISO) return 'Data não disponível';
      
      try {
        const data = new Date(dataISO);
        return data.toLocaleDateString('pt-BR', { 
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });
      } catch (e) {
        return dataISO;
      }
    },
    
    verDetalhesAuditoria(auditoria) {
      localStorage.setItem("auditoriaSelecionada", JSON.stringify(auditoria));
      this.$router.push("/perito/detalhe-auditoria");
    }
  }
};

import '@/assets/cssPerito/AuditoriasRealizadas.css'
</script>

<style scoped>
/* Estilos complementares */
.ar-carregando, .ar-sem-auditorias {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin: 15px 0;
  color: #666;
}

.ar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  border-bottom: 1px solid #eee;
  padding-bottom: 6px;
}

.ar-titulo-item {
  font-weight: bold;
  font-size: 1rem;
  color: #333;
  margin: 0;
}

.ar-data {
  font-size: 0.8rem;
  color: #666;
}

.ar-status-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.ar-status {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.status-resolvida {
  background-color: #d4edda;
  color: #155724;
}

.ar-icon {
  cursor: pointer;
}

.ar-icon img {
  width: 20px;
  height: 20px;
  transition: transform 0.2s;
}

.ar-icon img:hover {
  transform: scale(1.1);
}
</style>