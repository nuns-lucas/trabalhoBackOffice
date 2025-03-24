<template>
  <div id="map"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  mounted() {
    const map = L.map("map").setView([41.444, -8.296], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    const incidents = JSON.parse(localStorage.getItem("recentIncidents")) || [];
    incidents.forEach((incident) => {
      L.marker([incident.lat, incident.lng]).addTo(map)
        .bindPopup(`<b>${incident.user}</b><br>${incident.incident}`);
    });
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 200px;
  border-radius: 10px;
}
</style>
