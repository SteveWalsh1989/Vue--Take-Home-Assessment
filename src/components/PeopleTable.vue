<script setup>
import { computed, ref, watch } from 'vue';
import { useCurrentSwapAPI } from '@/composables/useSwapAPI';
import { extractPlanetId } from '@/utils/helpers';
import DateCell from '@/components/DateCell';
import PlainCell from '@/components/PlainCell';
import PlanetCell from '@/components/PlanetCell';
import LoadingState from '@/components/LoadingState';
import EmptyState from '@/components/EmptyState';
import { LS_KEY_PEOPLE } from '@/utils/constants';
import { search } from '@/composables/useSearch';

// CONSTANTS / VARIABLES
const data = await useCurrentSwapAPI();
const people = ref(data.people.data);
const planets = ref(data.planets.data);
let hover = ref(false);
const showEmptyState = ref(false);
const searchTerm = computed(() => search.term);
const columns = ref([
  { label: 'Name', value: 'name', sort: null },
  { label: 'Height (cm)', value: 'height', sort: null },
  { label: 'Mass (Kg)', value: 'mass', sort: null },
  { label: 'Created', value: 'created', sort: null },
  { label: 'Edited', value: 'edited', sort: null },
  { label: 'Home Planet', value: 'planet', sort: null },
]);
const colsValues = columns.value.map((el) => el.value);
const originalData = people.value;

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

watch(searchTerm, (newSearch) => {
  if (newSearch === '') {
    people.value = originalData;
    showEmptyState.value = false;
  } else {
    people.value = people.value.filter((el) => {
      return Object.entries(el).some(
        ([key, value]) =>
          colsValues.includes(key) &&
          String(value).toLowerCase().includes(newSearch.toLowerCase()),
      );
    });
    showEmptyState.value = people.value.length > 0 ? false : true;
  }
});

function onSort(column) {
  if (column.value === 'planet') {
    return;
  }
  const collator = new Intl.Collator('en', { numeric: true });
  const columnName = column.value;
  const currentSort = column.sort;
  let newSort = null;
  // Get next sort direction
  switch (currentSort) {
    case 'asc':
      newSort = 'desc';
      break;
    case 'desc':
      newSort = 'asc';
      break;
    case null:
      newSort = 'asc';
      break;
  }

  // update column sort
  columns.value.forEach((col) => {
    if (col.value === columnName) {
      col.sort = newSort;
    } else {
      col.sort = null;
    }
  });
  // sort people
  people.value = people.value.sort((a, b) => {
    switch (newSort) {
      case 'desc':
        return collator.compare(b[columnName], a[columnName]);
      case 'asc':
      default:
        return collator.compare(a[columnName], b[columnName]);
    }
  });

  // Update LS storage data
  localStorage.setItem(LS_KEY_PEOPLE, JSON.stringify(people.value));
}
</script>

<template>
  <section>
    <EmptyState v-if="showEmptyState" />
    <LoadingState v-else-if="!people.length" />
    <table class="w-full" v-else>
      <thead class="border-b-2 border-black">
        <tr>
          <th
            v-for="th in columns"
            :key="th.value"
            class="text-left"
            @click="onSort(th)"
          >
            <div
              class="min-w-50 flex items-center"
              @mouseover="hover = true"
              @mouseleave="hover = false"
              :class="{
                'cursor-pointer': hover,
              }"
            >
              <span>{{ th.label }}</span>
              <img
                v-if="th.value !== 'planet' && (hover || th.sort !== null)"
                :src="require('@/assets/icons/arrow.png')"
                alt="Sort Column Icon"
                class="w-5 h-5 pl-1"
                :class="{
                  'rotate-icon': th.sort === 'desc',
                }"
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(person, i) in people"
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
              :planet="planets[extractPlanetId(person.homeworld)]"
            />
            <PlainCell v-else :text="td.value" />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
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

.rotate-icon {
  transform: rotate(180deg);
}
</style>
