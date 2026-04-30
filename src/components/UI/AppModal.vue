<script setup lang="ts">
import AppCard from './AppCard.vue';

interface Props {
  show: boolean;
  title?: string;
  description?: string;
}

defineProps<Props>();
defineEmits(['close']);
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <AppCard class="w-full max-w-2xl shadow-3xl overflow-y-auto max-h-[90vh]" :hover="false">
        <div class="p-10">
          <div class="flex justify-between items-center mb-10">
            <div>
              <h2 v-if="title" class="text-3xl font-extrabold text-slate-900 tracking-tight">{{ title }}</h2>
              <p v-if="description" class="text-slate-500 text-sm mt-1">{{ description }}</p>
            </div>
            <button @click="$emit('close')" class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          
          <slot />
        </div>
      </AppCard>
    </div>
  </Transition>
</template>
