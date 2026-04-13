<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { type App, apps } from '@/config/apps.ts'
import particlesConfig from '@/assets/particles.json'
import FeedbackForm from '@/components/FeedbackForm.vue'
import NotFound from '@/components/NotFound.vue'

const url = new URL(window.location.href)
console.log('url:', url)
const params = Object.fromEntries(url.searchParams.entries())
console.log('params:', params)
const app: App = apps[params['name'] as keyof typeof apps]
console.log('app:', app)

onMounted(() => {
  document.body.style.background = "url('https://images.cssnr.com/aviation')"
  document.body.style.backgroundSize = 'cover'
  if (app) {
    document.title = `${app.name} Feedback`
    const link = document.querySelector<HTMLLinkElement>('link[rel*="icon"]')
    if (link && app.icon) link.href = app.icon
    console.debug('link.href:', link?.href)
  }
})
onUnmounted(() => {
  document.body.style.background = ''
  document.body.style.backgroundSize = ''
})
</script>

<template>
  <div class="container-fluid d-flex align-items-center justify-content-center h-100">
    <FeedbackForm v-if="app" :app="app" :params="params" />
    <NotFound v-else :params="params" />
  </div>

  <vue-particles id="tsparticles" :options="particlesConfig" />
</template>
