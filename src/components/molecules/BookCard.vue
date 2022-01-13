<script setup lang="ts">

import BookImage from "../atoms/BookImage.vue";
import BookCardTitle from "../atoms/BookCardTitle.vue";
import BookText from "../atoms/BookText.vue";
import {computed} from "vue";

interface Props {
  card: {
    id: number
    title: string
    description: string
  },
  results?: boolean
}

const { card, results } = defineProps<Props>()

const classObject = computed(() => {
  return {
    'card--list': results
  }
})
</script>

<template>
  <li class="card" :class="[classObject]">
    <div>
      <BookImage />
    </div>
    <div>
      <BookCardTitle>
        <router-link to='/detail'>
          {{ card.title }}
        </router-link>
      </BookCardTitle>
      <BookText>
        {{ card.description }}
      </BookText>
    </div>
  </li>
</template>

<style scoped>
.card {
  list-style: none;
  border: 1px solid;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: space-around;
}

.card--list {
  margin: 20px 0;
}
</style>