<script setup lang="ts">
import { toRefs } from "vue";
import BookCard from "../molecules/BookCard.vue";
import { BookItem, Result } from "../../types/types";

interface Props {
  result: Result
}

const { result } = defineProps<Props>()
const { items } = toRefs(result)

const card = (item: BookItem) => {
  const { volumeInfo } = item
  return {
    id: Number(item.id),
    title: volumeInfo.title,
    description: volumeInfo.description
  }
}

</script>

<template>
  <ul class="card-list">
    <BookCard v-for="item in items" :key="item.id" :card="card(item)" :results="true" />
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