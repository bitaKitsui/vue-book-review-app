<script setup lang="ts">
import { toRefs } from "vue";
import { BookItem } from "../../types/types";

interface Props {
  book: BookItem
}

const props = defineProps<Props>()
const { book } = toRefs(props)

</script>

<template>
  <h1>Book Detail</h1>
  {{ book }}
  <router-link to="/">Home</router-link>
</template>