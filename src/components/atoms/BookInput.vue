<script setup lang="ts">
import { computed } from "vue";

interface Props {
  value: string
  width?: string
}

interface Emits {
  (event: 'input', value: string): void
}

const { value, width } = withDefaults(defineProps<Props>(), {
  value: '',
  width: ''
})

const emit = defineEmits<Emits>()

const handleInput = (event: { target: HTMLInputElement }) => {
  const { target } = event
  emit('input', target.value)
}

const classObject = computed(() => {
  return {
    'input': width === '',
    'input--max': width === '100%'
  }
})
</script>

<template>
  <input
    type="text"
    :value="value"
    @input="handleInput"
    :class="[classObject]"
  >
</template>

<style>
.input {
  width: 200px;
}

.input--max {
  width: 100%;
}
</style>