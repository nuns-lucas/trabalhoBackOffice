<template>
  <div id="mapa-ocorrencias" class="mapa"></div>
</template>

<script>
import { onMounted, watch } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Solução para ícones - Importe as imagens diretamente
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

export default {
  name: 'MapaOcorrencias',
  props: {
    ocorrencias: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup(props) {
    let mapa = null;
    const markers = [];

    // Configuração personalizada do ícone
    const defaultIcon = L.icon({
      iconUrl,
      iconRetinaUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    const inicializarMapa = () => {
      mapa = L.map('mapa-ocorrencias').setView([41.444, -8.296], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
      }).addTo(mapa);
    };

    const plotarMarcadores = () => {
      // Limpa marcadores anteriores
      markers.forEach(marker => mapa.removeLayer(marker));
      markers.length = 0;

      // Adiciona novos marcadores
      props.ocorrencias.forEach(ocorrencia => {
        if (ocorrencia.latitude && ocorrencia.longitude) {
          const marker = L.marker(
            [ocorrencia.latitude, ocorrencia.longitude],
            { icon: defaultIcon } // Usa o ícone personalizado
          )
            .addTo(mapa)
            .bindPopup(`
              <b>${ocorrencia.tipo.toUpperCase()}</b><br>
              <small>${new Date(ocorrencia.data).toLocaleString('pt-PT')}</small><br>
              ${ocorrencia.mensagem}
            `);
          markers.push(marker);
        }
      });

      // Ajusta o zoom para mostrar todos os marcadores
      if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        mapa.fitBounds(group.getBounds().pad(0.2));
      }
    };

    onMounted(() => {
      inicializarMapa();
      plotarMarcadores();
    });

    watch(() => props.ocorrencias, plotarMarcadores);

    return { markers };
  }
};
</script>

<style scoped>
.mapa {
  height: 290px;
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border: 1px solid #ddd;
}

@media (max-width: 768px) {
  .mapa {
    height: 350px;
  }
}
</style>
