<template>
  <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-6">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Tax Calculator</h2>
    
    <form @submit.prevent="handleCalculate" class="space-y-4">
      <div>
        <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
        <input
          id="amount"
          v-model.number="amount"
          type="number"
          step="0.01"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          placeholder="0.00"
          required
        />
      </div>

      <div>
        <label for="rate" class="block text-sm font-medium text-gray-700">Tax Rate (%)</label>
        <input
          id="rate"
          v-model.number="rate"
          type="number"
          step="0.1"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          placeholder="20"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        :disabled="mutation.isPending.value"
      >
        <span v-if="mutation.isPending.value">Calculating...</span>
        <span v-else>Calculate</span>
      </button>
    </form>

    <div v-if="mutation.isError.value" class="mt-4 p-3 bg-red-100 text-red-700 rounded">
      Error: {{ mutation.error.value.message || 'An unexpected error occurred' }}
    </div>

    <div v-if="mutation.isSuccess.value" class="mt-6 border-t pt-4">
      <h3 class="text-lg font-medium text-gray-900">Results</h3>
      <dl class="mt-2 grid grid-cols-2 gap-4">
        <div>
          <dt class="text-sm font-medium text-gray-500">Tax Amount</dt>
          <dd class="mt-1 text-lg font-semibold text-gray-900">${{ mutation.data.value.tax_amount.toFixed(2) }}</dd>
        </div>
        <div>
          <dt class="text-sm font-medium text-gray-500">Total Amount</dt>
          <dd class="mt-1 text-lg font-semibold text-gray-900">${{ mutation.data.value.total_amount.toFixed(2) }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMutation } from '@tanstack/vue-query';
import { calculateTax } from '../api/taxes';

const amount = ref(100);
const rate = ref(20);

const mutation = useMutation({
  mutationFn: calculateTax,
});

const handleCalculate = () => {
  mutation.mutate({ amount: amount.value, rate: rate.value });
};
</script>
