<script setup lang="ts">
import BookMainTemplate from "../templates/BookMainTemplate.vue";
import {searchBook} from "../../api";

const onSubmit = async (query: string) => {
  const data = await searchBook(query)
  console.log('data', data)
}
</script>

<template>
  <BookMainTemplate @submit="onSubmit" />
</template>