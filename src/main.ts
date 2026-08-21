import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/utils/theme.js'
import '@/assets/css/styles.scss'
import { createApp } from 'vue'
import Particles from '@tsparticles/vue3'
import { loadBackgroundMaskPlugin } from '@tsparticles/plugin-background-mask'
import { loadSlim } from '@tsparticles/slim'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.use(Particles, {
  init: async (engine) => {
    // backgroundMask moved out of the engine core in v4, it needs its own plugin now
    await loadBackgroundMaskPlugin(engine)
    await loadSlim(engine)
  },
})

app.mount('#app')
