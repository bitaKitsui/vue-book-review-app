<script setup lang="ts">
import BookDetailTemplate from "../templates/BookDetailTemplate.vue";
import {useRoute} from "vue-router";

const route = useRoute()
const { id } = route.params

</script>

<template>
  <BookDetailTemplate />
</template>