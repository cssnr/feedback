<script setup lang="ts"></script>

<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link hvr-grow ms-1"
      id="bd-theme-disabled"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      style="min-width: 56px"
    >
      <i class="fa-solid fa-circle-half-stroke fa-lg theme-icon" style="min-width: 20px"></i>
      <i class="fa-solid fa-caret-down fa-xs mx-1"></i
    ></a>
    <ul class="dropdown-menu auto dropdown-menu-end" aria-labelledby="bs-theme-dropdown">
      <li>
        <button class="dropdown-item" data-bs-theme-value="dark" aria-pressed="false">
          <i class="fa-regular fa-moon" style="min-width: 16px"></i>
          <span class="ms-3">Dark</span>
        </button>
      </li>
      <li>
        <button class="dropdown-item" data-bs-theme-value="light" aria-pressed="false">
          <i class="fa-solid fa-sun" style="min-width: 16px"></i>
          <span class="ms-3">Light</span>
        </button>
      </li>
      <li>
        <button class="dropdown-item" data-bs-theme-value="auto" aria-pressed="false">
          <i class="fa-solid fa-circle-half-stroke" style="min-width: 16px"></i>
          <span class="ms-3">Auto</span>
        </button>
      </li>
    </ul>
  </li>
</template>
