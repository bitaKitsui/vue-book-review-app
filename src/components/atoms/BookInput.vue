<script setup lang="ts">
import { computed } from "vue";

interface Props {
  width?: string
}

const { width } = withDefaults(defineProps<Props>(), {
  width: ''
})

const classObject = computed(() => {
  return {
    'input': width === '',
    'input--max': width === '100%'
  }
})
</script>

<template>
  <input type="text" :class="[classObject]">
</template>

<style>
.input {
  width: 200px;
}

.input--max {
  width: 100%;
}
</style>