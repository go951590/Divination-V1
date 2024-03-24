<template>
  <div class="select_item" @click="handleNavigate">
    {{ category }}
  </div>
</template>

<script>
export default {
  props: ['category'],
  methods: {
    handleNavigate() {
      this.$router.push('/coin')
    }
  }
}
</script>

<style scoped>
.select_item {
  position: relative;
  padding: 5px 10px;
  padding-left: 25px;
  font-size: 1rem;
  color: var(--inv);
  letter-spacing: 1.1rem;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  user-select: none;
}

.select_item:before,
.select_item:after {
  content: '';
  position: absolute;
  transition: inherit;
  z-index: -1;
}

.select_item:hover {
  color: var(--def);
  transition-delay: 0.5s;
}

.select_item:hover:before {
  transition-delay: 0s;
}

.select_item:hover:after {
  background: var(--inv);
  transition-delay: 0.35s;
}

.select_item:before,
.select_item:after {
  top: 0;
  width: 0;
  height: 98%;
}

.select_item:before {
  right: 0;
  border: 1px solid var(--inv);
  border-left: 0;
  border-right: 0;
}

.select_item:after {
  left: 0;
}

.select_item:hover:before,
.select_item:hover:after {
  width: 100%;
}
</style>