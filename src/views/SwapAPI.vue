<script setup>
import Header from '@/components/Header.vue';
import PeopleTable from '@/components/PeopleTable';
import LoadingState from '@/components/LoadingState';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <section class="justify-center px-2">
    <Header />
    <Suspense>
      <PeopleTable />
      <template #fallback>
        <LoadingState />
      </template>
    </Suspense>
    <Footer />
  </section>
</template>
