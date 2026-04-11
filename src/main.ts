import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/styles.scss'
import { createApp } from 'vue'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine)
  },
})

app.mount('#app')
