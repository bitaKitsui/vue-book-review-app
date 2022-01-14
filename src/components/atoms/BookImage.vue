<script setup lang="ts">
interface Props {
  imageLinks?: {
    smallThumbnail: string
    thumbnail: string
  },
  detail?: boolean
}

const props = defineProps<Props>()

const src = props.imageLinks ? props.imageLinks.smallThumbnail : ''
</script>

<template>
  <img :src="src" alt="#" />
</template>