<script setup>
import { h, computed, defineProps } from 'vue';

const props = defineProps({
  text: { type: String, default: '' },
  search: { type: String, default: '' },
});

const vnode = computed(() =>
  h('div', {
    innerHTML: props.text.replace(
      new RegExp(props.search, 'ig'),
      `<i style="background-color: #cbd5e1;">$&</i>`,
    ),
  }),
);
</script>

<template>
  <vnode />
</template>
