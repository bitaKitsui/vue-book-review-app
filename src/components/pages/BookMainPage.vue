<script setup lang="ts">
import {reactive, toRefs} from "vue";
import BookMainTemplate from "../templates/BookMainTemplate.vue";
import {searchBook} from "../../api";
import {Result} from "../../types/types";

const state = reactive<{ result: Result | null }>({ result: null })
const { result } = toRefs(state)

const onSubmit = async (query: string) => {
  state.result = await searchBook(query)
}

</script>

<template>
  <BookMainTemplate @submit="onSubmit" :result="result" />
</template>