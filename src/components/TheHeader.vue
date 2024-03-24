<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header_container">
    <RouterLink class="header_link" to="/">主頁</RouterLink>
    <RouterLink class="header_link" to="/sign_in">登入</RouterLink>
    <RouterLink class="header_link" to="/log">紀錄</RouterLink>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header_container {
  width: 500px;
  display: flex;
  justify-content: space-between;
  padding: 10px 80px;
}

.header_link {
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 600;
  color: rgb(255, 140, 0);
}
</style>