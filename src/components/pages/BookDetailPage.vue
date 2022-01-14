<script setup lang="ts">
import {onMounted, reactive} from "vue";
import { useRoute } from "vue-router";
import BookDetailTemplate from "../templates/BookDetailTemplate.vue";
import { fetchBookById } from "../../api";
import { defaultBookItem } from "../../api/default";

const state = reactive({ book: defaultBookItem })

const router = useRoute()
const { id } = router.params

onMounted(async () => {
  state.book = await fetchBookById(String(id))
})
</script>

<template>
  <BookDetailTemplate :book="state.book" />
</template>