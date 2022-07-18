<script setup>
import { defineProps } from 'vue';
import {
  capitalize,
  formatNumberThousands,
  formatNumberShorthand,
} from '@/utils/helpers';
import SearchHighlight from '@/components/SearchHighlight';
import { search } from '@/composables/useSearch';

// CONSTANTS / VARIABLES
const props = defineProps({
  planet: { type: Object, default: () => null },
});
console.log('search.term', search);
const formattedPlanet = {
  name: props.planet ? props.planet.name : 'unknown',
  population: props.planet
    ? formatPopulation(parseInt(props.planet.population))
    : 'unknown',
  climate: props.planet ? props.planet.climate : 'unknown',
  diameter:
    props.planet && props.planet?.diameter !== 'unknown'
      ? `${formatNumberThousands(props.planet.diameter)}km`
      : 'unknown',
};

function formatPopulation(number) {
  if (number) {
    return formatNumberShorthand(parseInt(props.planet.population));
  }
  return 'unknown';
}
</script>

<template>
  <Popper>
    <button>
      <SearchHighlight :search="search.term" :text="formattedPlanet.name" />
    </button>
    <template #content v-if="formattedPlanet.name !== 'unknown'">
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
