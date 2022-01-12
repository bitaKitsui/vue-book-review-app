<script setup lang="ts">
import BookInput from "../atoms/BookInput.vue";
import BookSearchButton from "../atoms/BookSearchButton.vue";

interface Props {
  search?: boolean
}

const { search } = defineProps<Props>()
</script>

<template>
  <form :class="{ 'form--search': search }">
    <BookInput :search="search"/>
    <BookSearchButton :type="'button'" />
  </form>
</template>

<style scoped>
.form--search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
}
</style>