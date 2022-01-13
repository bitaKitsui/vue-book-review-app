<script setup lang="ts">
import { computed } from "vue";

interface Props {
  isHeader?: boolean
}

const { isHeader } = withDefaults(defineProps<Props>(), {
  isHeader: false
})

const classObject = computed(() => {
  return {
    'span': true,
    'span--header': isHeader
  }
})
</script>

<template>
  <span :class="classObject">
    <slot />
  </span>
</template>

<style scoped>
.span--header {
  font-size: 20px;
  line-height: 60px;
  padding-left: 60px;
  color: #dcdcdc;
}
</style>