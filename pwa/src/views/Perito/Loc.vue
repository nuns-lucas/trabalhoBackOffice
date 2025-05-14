<template>
    <div class="l">
      <div class="l-map-container">
        <iframe
          :src="mapUrl"
          frameborder="0"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
      <BottomVoltar />
    </div>
</template>

<script>


export default {
  name: "Loc",
  components: {
    BottomVoltar
  },
  data() {
    const dados = JSON.parse(localStorage.getItem("ocorrenciaLocalizacao")) || {};
    const lat = dados.latitude || 0;
    const lng = dados.longitude || 0;

    return {
      mapUrl: `https://www.google.com/maps?q=${lat},${lng}&output=embed`
    };
  },
};

import BottomVoltar from '../../components/BottomVoltar.vue';
import '@/assets/cssPerito/Loc.css'

</script>