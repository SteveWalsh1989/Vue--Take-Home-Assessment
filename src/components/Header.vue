<script setup>
const headerIcon = require('@/assets/images/rebel-alliance.svg');
</script>

<template>
  <header class="flex w-full py-12 items-center">
    <object :data="headerIcon" width="40" height="40" class="mr-4"></object>
    <h1 class="text-4xl">SwapAPI: Star Wars Table Example</h1>
  </header>
</template>
