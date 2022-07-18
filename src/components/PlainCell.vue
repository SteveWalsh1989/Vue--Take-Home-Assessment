<script setup>
import { defineProps } from 'vue';
import SearchableText from '@/components/SearchableText';

const props = defineProps({
  text: { type: String, default: '' },
});

const title = props.text || 'Unknown';
</script>

<template>
  <SearchableText :text="title" />
</template>
