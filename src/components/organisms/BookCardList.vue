<script setup lang="ts">
import { reactive, toRefs, watch } from "vue";
import BookCard from "../molecules/BookCard.vue";
import { BookItem, Card, Result } from "../../types/types";

interface Props {
  result: Result
}

const props = defineProps<Props>()
const { result } = toRefs(props)

const state = reactive({result: result.value})

watch(() => result.value, (newResult) => {
  state.result = newResult
})

const card = (item: BookItem): Card => {
  const { volumeInfo } = item
  return {
    id: item.id,
    title: volumeInfo.title,
    description: volumeInfo.description,
    imageLinks: volumeInfo.imageLinks
        ? {
            smallThumbnail: volumeInfo.imageLinks.smallThumbnail,
            thumbnail: volumeInfo.imageLinks.thumbnail
          }
        : {
            smallThumbnail: '',
            thumbnail: ''
          }
  }
}

</script>

<template>
  <ul class="card-list">
    <BookCard
      v-for="item in state.result.items"
      :key="item.id"
      :card="card(item)"
      :results="true"
    />
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