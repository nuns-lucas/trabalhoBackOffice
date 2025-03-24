<template>
  <div class="status-card">
    <div class="icone" :class="corClasse">
      <i :class="iconeClasse"></i>
    </div>
    <div class="conteudo">
      <h6>{{ titulo }}</h6>
      <h3>{{ valorFormatado }}</h3>
      <small v-if="detalhes" class="detalhes">{{ detalhes }}</small>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useOcorrencias } from '@/state/ocorrencias';

export default {
  name: 'StatusCard',
  props: {
    titulo: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      validator: value => ['operacionais', 'atrasados', 'avariados'].includes(value)
    },
    cor: {
      type: String,
      default: 'verde',
      validator: value => ['verde', 'laranja', 'vermelho', 'azul'].includes(value)
    },
    icone: {
      type: String,
      default: 'bi-info-circle'
    },
    mostrarDetalhes: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { estado } = useOcorrencias();

    const valorFormatado = computed(() => {
      if (props.tipo) {
        return estado.statusAutocarros[props.tipo] || 0;
      }
      return props.valor;
    });

    const detalhes = computed(() => {
      if (props.tipo === 'atrasados' && props.mostrarDetalhes) {
        const count = estado.ocorrencias.filter(
          o => o.tipo === 'atraso' && o.status !== 'resolvido'
        ).length;
        return `${count} ocorrências em aberto`;
      }
      return null;
    });

    const corClasse = computed(() => {
      return {
        verde: 'bg-verde',
        laranja: 'bg-laranja',
        vermelho: 'bg-vermelho',
        azul: 'bg-azul'
      }[props.cor];
    });

    const iconeClasse = computed(() => {
      return `bi ${props.icone}`;
    });

    return {
      valorFormatado,
      detalhes,
      corClasse,
      iconeClasse
    };
  }
};
</script>

<style scoped>
.status-card {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
}

.status-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}

.icone {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: white;
  font-size: 1.5rem;
}

.bg-verde { background: #28a745; }
.bg-laranja { background: #fd7e14; }
.bg-vermelho { background: #dc3545; }
.bg-azul { background: #007bff; }

.conteudo {
  flex: 1;
}

.conteudo h6 {
  color: #6c757d;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
}

.conteudo h3 {
  margin: 6px 0 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #343a40;
}

.detalhes {
  display: block;
  margin-top: 4px;
  font-size: 0.75rem;
  color: #6c757d;
  font-style: italic;
}

@media (max-width: 768px) {
  .status-card {
    padding: 14px;
  }

  .icone {
    width: 48px;
    height: 48px;
    font-size: 1.2rem;
  }

  .conteudo h3 {
    font-size: 1.5rem;
  }
}
</style>
