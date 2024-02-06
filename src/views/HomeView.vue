<script setup lang="ts">
import { ref } from 'vue'

function toggle() {
  state.value = !state.value
}

const state = ref(false)
const isHovered = ref(false)
</script>

<template>
  <main>SUPERMOM</main>
  <button
    class="clicker"
    @click="toggle"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    :class="{ jump: isHovered }"
  >
    Click me
  </button>

  <div v-if="state" class="time">18 Uhr</div>
</template>

<style scoped>
.clicker {
  margin: 20px 0 0 50px;
  background-color: aqua;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.clicker:hover {
  background-color: bisque;
}

.clicker.jump {
  transform: translateY(-5px);
}

.time {
  margin: 20px;
  background-color: red;
  padding: 20px;
  font-size: 20px;
  font-weight: 800;
}
</style>
