<script setup>
import SignForm from '../components/SignForm.vue'
</script>

<template>
  <main>
    <div class="sign_title">
      <h2>算命系統</h2>
    </div>
    <SignForm />
    <div class="copyright">
      <h4>@2024這只是邦邦side projectQQQQQQQ(請勿迷信，謝謝)</h4>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
  height: 100%;
}

.sign_title {
  font-size: 1.25rem;
  margin-bottom: 40px;
}

.copyright {
  position: absolute;
  bottom: 20px;
  color: #a3a2a3;
  font-size: 0.8rem;
}
</style>