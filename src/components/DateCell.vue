<script setup>
import { defineProps } from 'vue';
import { DateTime } from 'luxon';
// Cell to format and displays dates

const props = defineProps({
  date: { type: String, required: true },
});
const dateObject = DateTime.fromISO(props.date);
const cellText = dateObject.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
</script>

<template>
  <span>{{ cellText }}</span>
</template>
