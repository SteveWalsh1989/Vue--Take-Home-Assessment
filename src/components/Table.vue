<script setup>
import { useCurrentSwapAPI } from '@/composables/useSwapAPI';

const { people, planets } = await useCurrentSwapAPI();
console.log('🍕 > from Table.vue >  people', people);
console.log('🍕 > from Table.vue >  planets', planets);
</script>

<template>
  <div>table</div>
</template>
