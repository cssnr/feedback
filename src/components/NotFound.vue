<script setup lang="ts">
import appConfig from '@/config/app.ts'
import IconLink from '@/components/IconLink.vue'
// import { apps } from '@/config/apps.ts'

defineProps<{
  name: string
}>()
</script>

<template>
  <div
    class="content-wrapper my-4 p-2 p-sm-3 mx-auto w-100 rounded rounded-3 animate__animated animate__backInDown animate__fast"
  >
    <div class="text-center">
      <div class="alert alert-danger my-2">Application Not Found</div>
      <img alt="404" src="/404.png" class="img-fluid my-2" />
      <p class="lead">
        The application <b>{{ name }}</b> was not found.
      </p>
      <p class="px-md-5">
        To find more applications visit the <a :href="appConfig.website_url" class="link-body-emphasis">Website</a>, or
        <a :href="appConfig.github_url" class="link-body-emphasis">GitHub</a>. You can join
        <a :href="appConfig.discord_invite" class="link-body-emphasis">Discord</a> to get support or ask questions.
      </p>
    </div>

    <!--<ul>-->
    <!--  <li v-for="item in apps">-->
    <!--    <a :href="item.github_url">{{ item.name }}</a>-->
    <!--  </li>-->
    <!--</ul>-->

    <hr class="" />

    <div class="row justify-content-center align-items-center fs-5">
      <IconLink :href="appConfig.discord_invite" fa="fa-brands fa-discord" class="col-auto hvr-grow discord"
        >Discord</IconLink
      >
      <IconLink :href="appConfig.github_url" fa="fa-brands fa-github" class="col-auto hvr-grow">GitHub</IconLink>
      <IconLink :href="appConfig.website_url" fa="fa-solid fa-globe" class="col-auto hvr-grow">Website</IconLink>
      <IconLink :href="appConfig.kofi_url" fa="fa-brands fa-ko-fi" class="col-auto hvr-grow heart">Ko-fi</IconLink>
    </div>
  </div>
</template>

<style scoped>
.content-wrapper {
  max-width: 800px;
  backdrop-filter: blur(6px);
}

:deep(.heart:hover i) {
  color: #ff6433 !important;
}
:deep(.discord:hover i) {
  color: #7785cc !important;
}
</style>
