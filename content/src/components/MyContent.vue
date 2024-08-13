<template>
  <div class="contentBlock">
    <p>Count: {{ count }}</p>
    <button class="incrementBtn" @click="increment">+</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["countUpdated"]);
const count = ref(0);

const increment = () => {
  count.value++;
  emit("countUpdated", count.value);
};
</script>

<style scoped>
.contentBlock {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.incrementBtn {
  padding: 10px;
  width: 100px;
  margin-left: 10px;
}
</style>
