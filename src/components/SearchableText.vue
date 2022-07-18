<script setup>
import { h, computed, defineProps } from 'vue';
import { search } from '@/composables/useSearch';

const props = defineProps({
  text: { type: String, default: '' },
});

const vnode = computed(() =>
  h('div', {
    innerHTML: props.text.replace(
      new RegExp(search.term, 'ig'),
      `<i style="background-color: #cbd5e1;">$&</i>`,
    ),
  }),
);
</script>

<template>
  <vnode />
</template>
