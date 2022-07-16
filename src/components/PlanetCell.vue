<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  planet: { type: Object, default: () => null },
});

const title = props.planet ? props.planet.name : 'Unknown';
</script>

<template>
  <div>{{ title }}</div>
</template>
