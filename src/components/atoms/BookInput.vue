<script setup lang="ts">
interface Props {
  search?: boolean
}

const { search } = defineProps<Props>()
</script>

<template>
  <input type="text" :class="{ 'input--search': search }">
</template>

<style scoped>
.input--search {
  width: 100%;
}
</style>