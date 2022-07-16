<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  planet: { type: Object, default: () => null },
});

const planetName = props.planet ? props.planet.name : 'Unknown';
</script>

<template>
  <Popper>
    <button>{{ planetName }}</button>
    <template #content v-if="planetName !== 'Unknown'">
      <div class="flex-col w-60 h-40 items-center z-60">
        <span class="flex m-4">Planet: {{ planetName }}</span>
        <span class="flex m-4">Population: {{ planet.population }}</span>
        <span class="flex m-4">Climate: {{ planet.climate }}</span>
        <span class="flex m-4">Diamter: {{ planet.diameter }}</span>
      </div>
    </template>
  </Popper>
</template>
