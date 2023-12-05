<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Oops!</h1>
  <p>{{ message }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('404 - Page not found');
</script>
