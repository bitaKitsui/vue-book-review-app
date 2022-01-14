<script setup lang="ts">
import {reactive, ref, toRefs, watch} from "vue";
import BookHeader from "../organisms/BookHeader.vue";
import BookForm from "../organisms/BookForm.vue";
import BookInput from "../atoms/BookInput.vue";
import BookSearchButton from "../atoms/BookSearchButton.vue";
import BookCardList from "../organisms/BookCardList.vue";
import { Result } from "../../types/types";

interface Props {
  result: Result | null
}

interface Emits {
  (event: 'submit', query: string): void
}

const value = ref('')
const state = reactive<{ result: Result | null }>({ result: null })

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { result } = toRefs(props)

watch(() => result.value, () => {
  state.result = result.value
})

const handleInput = (newValue: string) => {
  value.value = newValue
}

const validateInput = (query: string) => {
  if (!query) return console.error('文字を入力してください')
  return query
}

const handleSubmit = () => {
  const query = validateInput(value.value)
  emit('submit', String(query))
}
</script>

<template>
  <BookHeader />
  <div class="wrapper">
    <BookForm :search="true">
      <BookInput :width="'100%'" :value="value" @input="handleInput" />
      <BookSearchButton @submit="handleSubmit" />
    </BookForm>
    <BookCardList v-if="result" :result="state.result" />
  </div>
</template>

<style scoped>
.wrapper {
  padding: 20px 60px;
  min-height: calc(100vh - 60px);
}
</style>