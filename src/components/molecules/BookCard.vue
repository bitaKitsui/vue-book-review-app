<script setup lang="ts">
import { computed } from "vue";
import BookImage from "../atoms/BookImage.vue";
import BookCardTitle from "../atoms/BookCardTitle.vue";
import BookText from "../atoms/BookText.vue";
import { Card } from "../../types/types";



interface Props {
  card: Card,
  results?: boolean
}

const { card, results } = defineProps<Props>()

const orderedText = computed(() => {
  return (value: string | undefined): string => {
    return value ? `${value.substring(0, 15)}...` : ''
  }
})

const classObject = computed(() => {
  return {
    'card--list': results
  }
})
</script>

<template>
  <li class="card" :class="[classObject]">
    <div>
      <BookImage :imageLinks="card.imageLinks" />
    </div>
    <div>
      <BookCardTitle>
        <router-link :to="`/detail/${card.id}`">
          {{ orderedText(card.title) }}
        </router-link>
      </BookCardTitle>
      <BookText>
        {{ orderedText(card.description) }}
      </BookText>
    </div>
  </li>
</template>

<style scoped>
.card {
  list-style: none;
  border: 1px solid;
  width: 48%;
  height: 200px;
  display: flex;
  justify-content: space-around;
}

.card--list {
  margin-bottom: 20px;
}
</style>