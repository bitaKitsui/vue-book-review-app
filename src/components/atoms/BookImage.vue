<script setup lang="ts">
import { computed } from "vue";

interface Props {
  imageLinks?: {
    smallThumbnail: string
    thumbnail: string
  },
  detail?: boolean
}

const props = defineProps<Props>()

const src = computed(() => {
  return props.imageLinks ? props.imageLinks.smallThumbnail : ''
})
</script>

<template>
  <img :src="src" alt="#" />
</template>