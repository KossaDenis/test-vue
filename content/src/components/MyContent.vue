<template>
  <div>
    <button @click="increment">+</button>
    <p>{{ count }}</p>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["countUpdated"]);
const count = ref(0);

const increment = () => {
  count.value++;
  emit('countUpdated', count.value)
};
</script>

<style></style>
