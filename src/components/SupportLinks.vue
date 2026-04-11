<script setup lang="ts">
import appConfig from '@/config/app.ts'
import type { App } from '@/config/apps.ts'

defineProps<{
  app: App
  hasFocus: boolean
}>()
</script>

<template>
  <div class="d-flex align-items-center justify-content-center gap-3 fs-4">
    <div>
      <a :href="`${app.github_url}/issues`" class="link-body-emphasis text-decoration-none hvr-grow"
        ><i
          class="fa-brands fa-github me-2 animate__animated animate__delay-1s"
          :class="{ animate__heartBeat: hasFocus }"
        ></i>
        <span class="d-none d-sm-inline">Report Issues</span></a
      >
    </div>

    <div>
      <a :href="appConfig.discord_invite" class="link-body-emphasis text-decoration-none hvr-grow"
        ><i
          class="fa-brands fa-discord me-2 animate__animated animate__delay-1s"
          :class="{ animate__heartBeat: hasFocus }"
        ></i>
        <span class="d-none d-sm-inline">Chat on Discord</span></a
      >
    </div>
  </div>
</template>
