<script setup lang="ts">
import { ref } from 'vue'
function toggle() {
  state.value = !state.value
}

const state = ref(false)
</script>

<template>
  <main>SUPERMOM</main>
  <button class="clicker" @click="toggle">Click me</button>

  <div v-if="state" class="time">18 Uhr</div>
</template>

<style scoped>
.clicker {
  margin: 20px 0 0 50px;
  background-color: aqua;
  border-radius: 20px;
}

.time {
  margin: 20px;
  background-color: red;
  padding: 20px;
  font-size: 20px;
  font-weight: 800;
}
</style>
