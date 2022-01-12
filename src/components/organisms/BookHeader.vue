<script setup lang="ts">
import BookTitle from "../atoms/BookTitle.vue";
</script>

<template>
  <div>
    <BookTitle class="header" :text="'ブックレビューApp'" :header="true" />
  </div>
</template>

<style scoped>
.header {
  width: 100vw;
  height: 60px;
  background-color: #1a1a1a;
}
</style>