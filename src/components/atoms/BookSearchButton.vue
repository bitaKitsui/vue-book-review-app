<script setup lang="ts">
interface Emits {
  (event: 'submit'): void
}

const emit = defineEmits<Emits>()

const handleClick = () => {
  emit('submit')
}
</script>

<template>
  <button type="submit" class="button--search" @click="handleClick">
    <span class="material-icons">
      search
    </span>
  </button>
</template>

<style scoped>
.button--search {
  border: none;
  background-color: white;
  display: flex;
  cursor: pointer;
}
</style>