<script setup lang="ts">
import BookHeader from "../organisms/BookHeader.vue";
import BookForm from "../organisms/BookForm.vue";
import BookInput from "../atoms/BookInput.vue";
import BookSearchButton from "../atoms/BookSearchButton.vue";
import BookCardList from "../organisms/BookCardList.vue";

const search = false
</script>

<template>
  <BookHeader />
  <div class="wrapper">
    <BookForm :search="true">
      <BookInput :width="'100%'" />
      <BookSearchButton />
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