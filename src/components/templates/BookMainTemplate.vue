<script setup lang="ts">
import BookHeader from "../organisms/BookHeader.vue";
import BookForm from "../organisms/BookForm.vue";
import BookInput from "../atoms/BookInput.vue";
import BookSearchButton from "../atoms/BookSearchButton.vue";
import BookCard from "../molecules/BookCard.vue";
</script>

<template>
  <BookHeader />
  <div class="wrapper">
    <BookForm class="form">
      <BookInput :width="'100%'" />
      <BookSearchButton />
    </BookForm>
    <BookCard />
  </div>
</template>

<style scoped>
.wrapper {
  padding: 20px 60px;
  min-height: calc(100vh - 60px);
}

.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>