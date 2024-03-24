<script setup>
import SelectItem from '../components/SelectItem.vue'
</script>

<template>
  <div>
    <select-item v-for="category in categories" :key="category" :category="category" />
  </div>
</template>

<script>
export default {
  components: { SelectItem },
  data() {
    return {
      categories: ['愛情', '事業', '健康', '考試', '失物', '近期運勢']
    }
  }
}
</script>

<style scoped>
div {
  --def: #ffffff;
  --inv: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  height: 95%;
  width: 100%;
}
</style>