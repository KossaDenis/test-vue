<template>
  <div class="content">
    <p>Count: {{ count }}</p>
    <button class="increment" @click="increment">+</button>
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

<style scoped>
.content {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.increment {
  padding: 10px;
  width: 100px;
  margin-left: 10px;
}
</style>
