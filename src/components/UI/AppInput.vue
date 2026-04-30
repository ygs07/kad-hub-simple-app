<script setup lang="ts">
interface Props {
  modelValue: string | number;
  label?: string;
  type?: string;
  placeholder?: string;
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
      <input
        :type="type || 'text'"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        :required="required"
        class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:border-[#42b883] focus:ring-4 focus:ring-[#42b883]/10 hover:border-slate-300 shadow-sm"
        :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/10': error }"
      />
      <div v-if="error" class="text-xs text-red-500 mt-1 ml-1">{{ error }}</div>
    </div>
  </div>
</template>
