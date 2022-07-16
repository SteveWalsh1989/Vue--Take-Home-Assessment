<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  planet: { type: Object, default: () => null },
});

const planetName = props.planet ? props.planet.name : 'Unknown';
</script>

<template>
  <VTooltip>
    <button>{{ planetName }}</button>

    <template #popper v-if="planetName" class="flex-col">
      <div>Planet: {{ planetName }}</div>
      <div>Population: {{ planet.population }}</div>
      <div>Climate: {{ planet.climate }}</div>
      <div>Diamter: {{ planet.diameter }}</div>
    </template>
  </VTooltip>
</template>
