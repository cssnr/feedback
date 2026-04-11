<script setup lang="ts">
import { useRoute } from 'vue-router'
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

const route = useRoute()

// const hideHeader = computed(() => route.meta?.hideHeader)
// const hideFooter = computed(() => route.meta?.hideFooter)
</script>

<template>
  <header v-if="!route.meta?.hideHeader" class="bg-body-tertiary">
    <HeaderView />
  </header>

  <main class="flex-grow-1 px-0 px-sm-3">
    <RouterView />
  </main>

  <footer v-if="!route.meta?.hideFooter" class="mt-auto px-1 flex-shrink-0 bg-body-tertiary">
    <FooterView />
  </footer>
</template>
