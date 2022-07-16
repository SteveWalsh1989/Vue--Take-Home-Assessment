<script setup>
import { provideSwapAPI } from '@/composables/useSwapAPI';
import SwapAPI from '@/views/SwapAPI';

provideSwapAPI();
</script>

<template>
  <SwapAPI />
</template>
