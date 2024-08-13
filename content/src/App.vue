<template>
  <div>
    <MyHeader :count="count" />
    <!-- <MyContent @countUpdated="countUpdated" /> -->
  </div>
</template>

<script setup>
import MyHeader from "header/MyHeader";
// import { MyContent } from "./components/MyContent.vue";
import { ref } from "vue";

const count = ref(0);

// const countUpdated = (value) => {
//   count.value = value;
// };
</script>

<style></style>
