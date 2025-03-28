import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import "leaflet/dist/leaflet.css"
import router from './router';  // Importe o router
import { popularDadosTeste } from './services/popularDados';  // Importe o script

import { createApp } from 'vue'
import App from './App.vue'



createApp(App)
  .use(router)
  .mount('#app');
