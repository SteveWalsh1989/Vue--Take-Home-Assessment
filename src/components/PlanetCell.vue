<script setup>
import { defineProps } from 'vue';
import { capitalize, formatDiameter, formatPopulation } from '@/utils/helpers';

// CONSTANTS / VARIABLES
const props = defineProps({
  planet: { type: Object, default: () => null },
});

const formattedPlanet = {
  name: props.planet ? props.planet.name : 'Unknown',
  population: props.planet
    ? formatPopulation(parseInt(props.planet.population))
    : 'Unknown',
  climate: props.planet ? props.planet.climate : 'Unknown',
  diameter: props.planet
    ? `${formatDiameter(props.planet.diameter)}km`
    : 'Unknown',
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
          >
            <td class="font-semibold pr-4 py-1.5">
              {{ capitalize(label[0]) }}
            </td>
            <td>{{ formattedPlanet[label[0]] }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </Popper>
</template>
