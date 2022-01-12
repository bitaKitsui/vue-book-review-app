<script setup lang="ts">
interface Props {
  text: string
  header?: boolean
}

const { text, header } = defineProps<Props>()
</script>

<template>
  <h1 :class="{ 'header__title': header }">{{ text }}</h1>
</template>

<style scoped>
.header__title {
  line-height: 60px;
  padding-left: 60px;
  color: #dcdcdc;
}
</style>