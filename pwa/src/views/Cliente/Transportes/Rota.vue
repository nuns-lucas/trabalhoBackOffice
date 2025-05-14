<template>
  <div class="rota-view">
    <h2>Rota Autocarro nº {{ numeroAutocarro }}</h2>

    <div class="mapa-container">
      <div id="mapa-rota" class="mapa-rota"></div>
    </div>

    <BottomVoltar />
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BottomVoltar from '@/components/BottomVoltar.vue'

const route = useRoute()

const numeroAutocarro = ref(route.params.numero)

onMounted(async () => {
  let rotas = JSON.parse(localStorage.getItem('rotas'))
  if (!rotas) {
    const response = await fetch('/transportes.json')
    rotas = await response.json()
    localStorage.setItem('rotas', JSON.stringify(rotas))
  }

  const rotaEncontrada = rotas.find(r => r.numero === Number(numeroAutocarro.value))
  if (!rotaEncontrada) return

  await nextTick()

  const directionsService = new window.google.maps.DirectionsService()
  const directionsRenderer = new window.google.maps.DirectionsRenderer()

  const map = new window.google.maps.Map(document.getElementById('mapa-rota'), {
    zoom: 13,
    center: rotaEncontrada.origem
  })

  directionsRenderer.setMap(map)

  directionsService.route(
    {
      origin: rotaEncontrada.origem,
      destination: rotaEncontrada.destino,
      travelMode: 'DRIVING'
    },
    (response, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(response)
      } else {
        alert('Não foi possível carregar a rota: ' + status)
      }
    }
  )
})

import '@/assets/cssCliente/rota.css'

</script>

