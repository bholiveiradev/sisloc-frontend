<template>
  <navbar-header-component />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavbarHeaderComponent from './NavbarHeaderComponent.vue';
</script>
