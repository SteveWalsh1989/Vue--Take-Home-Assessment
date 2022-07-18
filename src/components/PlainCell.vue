<script setup>
import { defineProps } from 'vue';
import SearchHighlight from '@/components/SearchHighlight';

const props = defineProps({
  text: { type: String, default: '' },
  search: { type: String, default: '' },
});

const title = props.text || 'Unknown';
</script>

<template>
  <SearchHighlight :search="search" :text="title" />
</template>
