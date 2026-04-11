<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import camelCase from 'camelcase'
import { type App, apps } from '@/config/apps.ts'
import particlesConfig from '@/assets/particles.json'
import FeedbackForm from '@/components/FeedbackForm.vue'
import NotFound from '@/components/NotFound.vue'

const url = new URL(window.location.href)
console.log('url:', url)
const name = url.searchParams.get('name') || ''
console.log('name:', name)
const version = url.searchParams.get('version') || 'unknown'
console.log('version:', version)

const id = camelCase(name)
console.log('id:', id)

const app: App = apps[id as keyof typeof apps]
console.log('app:', app)

function processApp(app?: App) {
  if (!app) return console.log('processApp: no App')
  document.title = `${app.name} Feedback`
  const link = document.querySelector<HTMLLinkElement>('link[rel*="icon"]')
  if (link && app.icon) link.href = app.icon
  console.debug('link.href:', link?.href)
}

onMounted(async () => {
  document.body.style.background = "url('https://images.cssnr.com/aviation')"
  document.body.style.backgroundSize = 'cover'
  processApp(app)
})
onUnmounted(() => {
  document.body.style.background = ''
  document.body.style.backgroundSize = ''
})
</script>

<template>
  <div class="container-fluid d-flex align-items-center justify-content-center h-100">
    <FeedbackForm v-if="app" :app="app" />

    <NotFound v-else :name="name" />
  </div>

  <vue-particles id="tsparticles" :options="particlesConfig" />
</template>
