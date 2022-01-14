<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import BookDetailTemplate from "../templates/BookDetailTemplate.vue";
import { fetchBookById } from "../../api";

const router = useRoute()
const { id } = router.params

onMounted(async () => {
  await fetchBookById(String(id))
})
</script>

<template>
  <BookDetailTemplate />
</template>