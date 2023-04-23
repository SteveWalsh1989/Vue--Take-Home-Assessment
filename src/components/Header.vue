<script setup>
import SearchBar from '@/components/SearchBar';
// CONSTANTS / VARIABLES
const headerIcon = require('@/assets/images/rebel-alliance.svg');
</script>

<template>
  <header class="flex w-full py-12 items-center header">
    <object :data="headerIcon" width="40" height="40" class="mx-4"></object>
    <h1 class="text-4xl">SwapAPI: Star Wars Table Example</h1>
    <SearchBar class="ml-auto mr-8" />
  </header>
</template>

<style scoped>
.header {
  background-color: #0891b2;
  color: white;
}
</style>
