<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  text: { type: String, default: '' },
});

const title = props.text || 'Unknown';
</script>

<template>
  <div>{{ title }}</div>
</template>
