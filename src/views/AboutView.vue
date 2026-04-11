<script setup lang="ts">
import { apps } from '@/config/apps.ts'
</script>

<template>
  <div class="container-fluid">
    <h1>About</h1>
    <p>This site is built with Vue3 and hosted on GitHub Pages.</p>
    <ul>
      <li><a href="https://github.com/cssnr/feedback" target="_blank">Source Code</a></li>
      <li><a href="https://cssnr.github.io/feedback" target="_blank">GitHub Pages</a></li>
    </ul>

    <h2>Configured Apps</h2>
    <ul>
      <li v-for="item in apps" :key="item.id">
        <RouterLink :to="{ name: 'home', query: { name: item.id } }">{{ item.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
