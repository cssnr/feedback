<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import router from '../router/index.ts'
import appConfig from '@/config/app.ts'
import { Collapse } from 'bootstrap'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

const navbarContent = ref<HTMLElement | null>(null)

const routes = computed(() => router.options.routes.filter((route) => route.meta?.name))

const navLinks = [
  {
    href: appConfig.kofi_url,
    linkClass: 'hvr-grow-lg heart',
    iconClass: 'fa-classic fa-solid fa-heart fa-xl',
  },
  {
    href: appConfig.discord_invite,
    linkClass: 'hvr-grow-lg discord',
    iconClass: 'fa-brands fa-discord fa-xl',
  },
  {
    href: appConfig.github_url,
    linkClass: 'hvr-grow-lg',
    iconClass: 'fa-brands fa-github fa-xl',
  },
]

function closeMenu() {
  const navbar = navbarContent?.value
  if (!navbar?.classList.contains('show')) return
  const collapse = new Collapse(navbar)
  collapse.hide()
}
</script>

<template>
  <nav aria-label="Primary Navigation" class="navbar navbar-expand-sm">
    <div class="container-fluid">
      <RouterLink to="/" class="px-2" @click="closeMenu">
        <img alt="logo" src="/src/assets/logo.svg" width="30" height="30" class="my-auto"
      /></RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div ref="navbarContent" class="collapse navbar-collapse me-auto" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item" v-for="{ meta, path } in routes" :key="path">
            <RouterLink :to="path" class="nav-link" active-class="active" @click="closeMenu">{{
              meta?.name
            }}</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav nav-icons d-flex flex-row">
          <li v-for="link in navLinks" :key="link.href" class="nav-item">
            <a class="nav-link" :class="link.linkClass" :href="link.href" target="_blank" rel="noopener">
              <i :class="link.iconClass"></i>
            </a>
          </li>
          <ThemeSwitch />
        </ul>
      </div>
    </div>
  </nav>
</template>

<!--suppress CssUnusedSymbol -->
<style scoped>
.heart:hover {
  color: #ff6433 !important;
}
.discord:hover {
  color: #7785cc !important;
}
</style>
