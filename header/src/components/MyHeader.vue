<template>
  <div class="headerBlock">
    <h1 class="title">Header</h1>
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
.headerBlock {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(56, 214, 116);
}

.title {
  margin-right: 10px;
}
</style>
