<script setup lang="ts">

import BookImage from "../atoms/BookImage.vue";
import BookCardTitle from "../atoms/BookCardTitle.vue";
import BookText from "../atoms/BookText.vue";
</script>

<template>
  <div>
    <BookImage />
    <BookCardTitle>
      <router-link to="/detail">
        Book Title
      </router-link>
    </BookCardTitle>
    <BookText>
      Book description...
    </BookText>
  </div>
</template>