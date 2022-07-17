<script setup>
import { ref } from 'vue';
const search = ref(null);

function clear() {
  search.value = null;
}
</script>

<template>
  <div class="flex items-center w-60">
    <img
      :src="require('@/assets/icons/search.png')"
      alt="Search Bar Icon"
      class="w-6 h-6 pl-1"
    />
    <input
      type="text"
      class="w-full h-8 px-2 bg-transparent text-white border-b-2"
      placeholder="Search"
      v-model="search"
    />
    <button v-if="search && search.length > 0" @click="clear" type="button">
      <img
        :src="require('@/assets/icons/close.png')"
        alt="Clear Search field"
        class="w-6 h-6 pl-1"
      />
    </button>
  </div>
</template>

<style scoped>
/* Needed Styles to change placeholder color */
::-ms-input-placeholder {
  /* Microsoft Edge */
  color: white;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}
</style>
