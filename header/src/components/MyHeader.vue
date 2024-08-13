<template>
  <div class="header">
    <h1>Header</h1>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  count: Number,
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid darkcyan;
  flex-direction: column;
}
</style>
