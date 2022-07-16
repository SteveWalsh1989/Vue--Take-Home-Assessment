<script setup>
import { defineProps } from 'vue';
import { capitalize, formatPopulation } from '@/utils/helpers';
const props = defineProps({
  planet: { type: Object, default: () => null },
});
const formattedPlanet = {
  name: props.planet ? props.planet.name : 'Unknown',
  population: props.planet
    ? formatPopulation(props.planet.population)
    : 'Unknown',
  climate: props.planet ? props.planet.climate : 'Unknown',
  diameter: props.planet ? props.planet.diameter : 'Unknown',
};
</script>

<template>
  <Popper>
    <button>{{ formattedPlanet.name }}</button>
    <template #content v-if="formattedPlanet.name !== 'Unknown'">
      <table>
        <tbody>
          <tr
            v-for="(label, index) in Object.entries(formattedPlanet)"
            :key="index"
            class="my-8"
          >
            <td class="font-semibold pr-4">{{ capitalize(label[0]) }}</td>
            <td>{{ formattedPlanet[label[0]] }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </Popper>
</template>
