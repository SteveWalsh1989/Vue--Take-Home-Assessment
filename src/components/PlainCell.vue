<script setup>
import { defineProps } from 'vue';
import SearchHighlight from '@/components/SearchHighlight';
import { search } from '@/composables/useSearch';

const props = defineProps({
  text: { type: String, default: '' },
});

const title = props.text || 'Unknown';
</script>

<template>
  <SearchHighlight :search="search.term" :text="title" />
</template>
