<script setup lang="ts">
interface Props {
  type: 'button' | 'submit' | 'reset'
}

const { type } = defineProps<Props>()
</script>

<template>
  <button :type="type" class="button--search">
    <span class="material-icons">
      search
    </span>
  </button>
</template>

<style scoped>
.button--search {
  display: flex;
  border: none;
  background-color: white;
  cursor: pointer;
}
</style>