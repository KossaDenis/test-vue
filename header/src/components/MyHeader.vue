<template>
  <div>
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

<style></style>
