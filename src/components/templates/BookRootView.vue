<script setup lang="ts">
import BookForm from "../molecules/BookForm.vue";
</script>

<template>
  <div class="root">
    <BookForm :search="true" />
  </div>
</template>

<style scoped>
.root {
  min-height: calc(100vh - 60px);
  padding: 0 60px;
}
</style>