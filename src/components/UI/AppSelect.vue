<script setup lang="ts">
interface Option {
  label: string;
  value: string | number;
}

interface Props {
  modelValue: string | number;
  label?: string;
  options: Option[];
  error?: string;
  required?: boolean;
}

defineProps<Props>();
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="flex flex-col gap-1.5 w-full">
    <label v-if="label" class="text-sm font-semibold text-slate-700 ml-1">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="relative group">
      <select
        :value="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        :required="required"
        class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 transition-all duration-300 appearance-none focus:outline-none focus:border-[#42b883] focus:ring-4 focus:ring-[#42b883]/10 hover:border-slate-300 cursor-pointer shadow-sm"
        :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/10': error }"
      >
        <option value="" disabled selected>Select an option</option>
        <option v-for="opt in options" :key="opt.value" :value="opt.value" class="bg-white text-slate-900">
          {{ opt.label }}
        </option>
      </select>
      <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </div>
      <div v-if="error" class="text-xs text-red-500 mt-1 ml-1">{{ error }}</div>
    </div>
  </div>
</template>
