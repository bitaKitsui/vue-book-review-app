<script setup lang="ts">
import BookSpan from "../atoms/BookSpan.vue";
</script>

<template>
  <div class="header">
    <BookSpan :isHeader="true">
      App
    </BookSpan>
  </div>
</template>

<style scoped>
.header {
  width: 100vw;
  height: 60px;
  background-color: #1a1a1a;
}
</style>