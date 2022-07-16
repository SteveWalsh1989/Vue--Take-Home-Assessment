<script setup>
import { ref } from 'vue';
import { useCurrentSwapAPI } from '@/composables/useSwapAPI';
import { extractPlanetId } from '@/utils/helpers';
import DateCell from '@/components/DateCell';
import PlainCell from '@/components/PlainCell';
import PlanetCell from '@/components/PlanetCell';
import LoadingState from '@/components/LoadingState';

// CONSTANTS / VARIABLES
const data = await useCurrentSwapAPI();

const columns = ref([
  { label: 'Name', value: 'name', sort: null },
  { label: 'Height (cm)', value: 'height', sort: null },
  { label: 'Mass (Kg)', value: 'mass', sort: null },
  { label: 'Created', value: 'created', sort: null },
  { label: 'Edited', value: 'edited', sort: null },
  { label: 'Home Planet', value: 'planet', sort: null },
]);

// FUNCTIONS
function getTableData(row) {
  return columns.value.map(({ value, sort }) => {
    const res = {
      column: value,
      sort,
      value: row[value],
    };
    return res;
  });
}
</script>

<template>
  <table class="w-full">
    <thead class="border-b-2 border-black">
      <tr>
        <th v-for="th in columns" :key="th.value" class="text-left">
          <span>{{ th.label }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!data.people.data.length">
        <LoadingState />
      </tr>
      <tr
        v-for="(person, i) in data.people.data"
        :key="i"
        class="border-b-2 border-slate-400 my-4 h-12 row"
      >
        <td v-for="(td, i) in getTableData(person)" :key="td.value + i">
          <DateCell
            v-if="td.column === 'created' || td.column === 'edited'"
            :date="td.value"
          />
          <PlanetCell
            v-else-if="td.column === 'planet'"
            :planet="data.planets.data[extractPlanetId(person.homeworld)]"
          />
          <PlainCell v-else :text="td.value" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.row {
  color: #1e293b;
}
.row:hover {
  background-color: #f1f5f9;
  box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
  color: black;
}
</style>
