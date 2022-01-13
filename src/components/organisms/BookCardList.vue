<script setup lang="ts">
import { reactive } from "vue";
import BookCard from "../molecules/BookCard.vue";

const cards = reactive([
  { id: 1, title: 'Book1', description: 'description1' },
  { id: 2, title: 'Book2', description: 'description2' },
  { id: 3, title: 'Book3', description: 'description3' },
  { id: 4, title: 'Book4', description: 'description4' },
  { id: 5, title: 'Book5', description: 'description5' },
  { id: 6, title: 'Book6', description: 'description6' },
])
</script>

<template>
  <ul class="card-list">
    <BookCard v-for="card in cards" :key="card.id" :card="card" :results="true" />
  </ul>
</template>

<style scoped>
.card-list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>