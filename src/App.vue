<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div class="main_container">
    <the-header />
    <RouterView />
  </div>
</template>

<style scoped>
.main_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
