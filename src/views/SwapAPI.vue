<script setup>
import Header from '@/components/Header.vue';
import PeopleTable from '@/components/PeopleTable';
import LoadingState from '@/components/LoadingState';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <section class="flex flex-col h-screen m-0">
    <Header />
    <Suspense>
      <main class="flex-1 overflow-y-auto">
        <div class="px-2">
          <PeopleTable class="w-full bg-white rounded-lg overflow-hidden" />
        </div>
      </main>
      <template #fallback>
        <LoadingState />
      </template>
    </Suspense>
    <Footer class="bg-gray-200 py-4" />
  </section>
</template>
