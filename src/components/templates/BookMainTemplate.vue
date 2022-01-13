<script setup lang="ts">
import { ref } from "vue";
import BookHeader from "../organisms/BookHeader.vue";
import BookForm from "../organisms/BookForm.vue";
import BookInput from "../atoms/BookInput.vue";
import BookSearchButton from "../atoms/BookSearchButton.vue";
import BookCardList from "../organisms/BookCardList.vue";

interface Emits {
  (event: 'submit', query: string): void
}

const search = false

const value = ref('')
const emit = defineEmits<Emits>()

const handleInput = (newValue: string) => {
  value.value = newValue
}

const handleSubmit = () => {
  const query = value.value
  emit('submit', query)
}
</script>

<template>
  <BookHeader />
  <div class="wrapper">
    <BookForm :search="true">
      <BookInput :width="'100%'" :value="value" @input="handleInput" />
      <BookSearchButton @submit="handleSubmit" />
    </BookForm>
    <BookCardList v-if="search" />
  </div>
</template>

<style scoped>
.wrapper {
  padding: 20px 60px;
  min-height: calc(100vh - 60px);
}
</style>