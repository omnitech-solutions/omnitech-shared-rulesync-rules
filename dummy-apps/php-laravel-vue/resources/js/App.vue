<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
        Laravel <span class="text-indigo-600">Vue</span> Taxes
      </h1>
      <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500">
        High-performance tax calculation powered by Laravel 11, Vue 3, and Tailwind CSS.
      </p>
    </div>
    
    <TaxCalculator />
    
    <footer class="mt-12 text-gray-500 text-sm">
        <a href="/api/documentation" class="hover:underline text-indigo-500" target="_blank">View API Docs</a>
    </footer>
  </div>
</template>

<script setup>
import TaxCalculator from './components/TaxCalculator.vue';
</script>