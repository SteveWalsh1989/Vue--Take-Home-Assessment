<script setup>
import { ref } from 'vue';
import { useCurrentSwapAPI } from '@/composables/useSwapAPI';
import PlainCell from '@/components/PlainCell';
import PlanetCell from '@/components/PlanetCell';

// CONSTANTS / VARIABLES
const data = await useCurrentSwapAPI();
console.log('🍕 > from Table.vue >  data', data);

const columns = ref([
  { label: 'Id', value: 'id' },
  { label: 'Name', value: 'name', sort: null },
  { label: 'Height (cm)', value: 'height', sort: null },
  { label: 'Mass (Kg)', value: 'mass', sort: null },
  { label: 'Created', value: 'created', sort: null },
  { label: 'Edited', value: 'edited', sort: null },
  { label: 'Planet', value: 'planet', sort: null },
]);

function getplanetId(url) {
  const res = url.slice(0, -1);
  const strs = res.split('/');
  const id = strs.at(-1);
  return id;
}

// FUNCTIONS
function getTableData(row) {
  console.log('🍕 > getTableData > row', row);

  return columns.value.map(({ value, sort }) => {
    const out = {
      column: value,
      sort,
      value: row[value],
    };

    return out;
  });
}
</script>

<template>
  <table class="w-full">
    <thead>
      <tr>
        <th v-for="th in columns" :key="th.value">
          <span>{{ th.label }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!data.people.data.length">
        Loading Data...
      </tr>
      <tr v-for="(person, i) in data.people.data" :key="i">
        <td v-for="(td, i) in getTableData(person)" :key="td.value + i">
          <PlanetCell
            v-if="td.column === 'planet'"
            :planet="data.planets.data[getplanetId(person.homeworld)]"
          />
          <PlainCell v-else :text="td.value" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
