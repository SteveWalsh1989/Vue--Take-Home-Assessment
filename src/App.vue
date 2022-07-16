<script setup>
import { provideSwapAPI } from '@/composables/useSwapAPI';

provideSwapAPI();
</script>

<template>
  <router-view></router-view>
</template>
