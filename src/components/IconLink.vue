<script setup lang="ts">
defineProps<{
  href: string
  fa: string
}>()
</script>

<template>
  <a :href="href" class="link-body-emphasis text-decoration-none d-flex align-items-center gap-1">
    <i :class="fa"></i>
    <span class="d-none d-sm-inline"><slot /></span>
  </a>
</template>
