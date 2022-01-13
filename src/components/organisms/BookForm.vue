<script setup lang="ts">
import {computed} from "vue";

interface Props {
  search?: boolean
}

const { search } = withDefaults(defineProps<Props>(), {
  search: false
})

const classObject = computed(() => {
  return {
    'form--search': search
  }
})
</script>

<template>
  <form :class="[classObject]" @submit.prevent>
    <slot />
  </form>
</template>

<style scoped>
.form--search {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>