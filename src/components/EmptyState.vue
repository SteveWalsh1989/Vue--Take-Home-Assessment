<script setup>
import { search } from '@/composables/useSearch';
</script>

<template>
  <section class="flex w-full text-center justify-center p-12">
    <div class="flex-col">
      <h1 class="font-semibold">No Results Found for: '{{ search.term}}'</h1>
      <h2>Please try with a new search term</h2>
    </div>
  </section>
</template>
