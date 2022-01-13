<script setup lang="ts">
import {reactive} from "vue";
import BookMainTemplate from "../templates/BookMainTemplate.vue";
import {searchBook} from "../../api";
import {defaultResult} from "../../api/default";

const state = reactive({ result: defaultResult })

const onSubmit = async (query: string) => {
  state.result = await searchBook(query)
}

</script>

<template>
  <BookMainTemplate @submit="onSubmit" />
</template>