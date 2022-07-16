<script setup>
import Header from '@/components/Header.vue';
import PeopleTable from '@/components/PeopleTable.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <section>
    <Header />
    <Suspense>
      <PeopleTable />
      <template #fallback> Loading... </template>
    </Suspense>
    <Footer />
  </section>
</template>
