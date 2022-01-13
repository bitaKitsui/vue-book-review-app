<script setup lang="ts">
import BookMainTemplate from "../templates/BookMainTemplate.vue";

const onSubmit = (query: string) => {
  console.log('page', query)
}
</script>

<template>
  <BookMainTemplate @submit="onSubmit" />
</template>