<script setup lang="ts">
import type { ICTClass } from '../types';
import AppCard from './UI/AppCard.vue';
import AppButton from './UI/AppButton.vue';

defineProps<{
  classes: ICTClass[];
}>();

defineEmits(['select']);

const formatPrice = (price: number) => {
  return price === 0 ? 'Free' : `₦${price.toLocaleString()}`;
};

const formatDays = (days: string[]) => {
  if (days.length === 5 && days.includes('Mon') && days.includes('Fri')) {
    return 'Mon - Fri';
  }
  return days.join(', ');
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <AppCard v-for="cls in classes" :key="cls.id" class="flex flex-col h-full animate-slide-in">
      <div class="p-8 flex flex-col h-full">
        <div class="flex justify-between items-start mb-6">
          <span class="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#42b883]/10 text-[#42b883] border border-[#42b883]/20 rounded-full">
            {{ cls.category }}
          </span>
          <span 
            class="text-lg font-extrabold" 
            :class="cls.price === 0 ? 'text-[#42b883]' : 'text-slate-900'"
          >
            {{ formatPrice(cls.price) }}
          </span>
        </div>
        
        <h3 class="text-2xl font-bold text-slate-900 mb-3 leading-tight tracking-tight">{{ cls.name }}</h3>
        <p class="text-slate-500 text-sm mb-6 leading-relaxed">{{ cls.description }}</p>
        
        <div class="mt-auto space-y-4">
          <!-- Schedule Info -->
          <div class="p-4 bg-slate-50 rounded-2xl space-y-3">
            <div class="flex items-center justify-between text-sm">
              <span class="text-slate-400 font-medium">Days</span>
              <span class="text-slate-900 font-bold">{{ formatDays(cls.days) }}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-slate-400 font-medium">Time</span>
              <span class="text-slate-900 font-bold">{{ cls.startTime }} - {{ cls.endTime }}</span>
            </div>
          </div>

          <!-- Capacity Info -->
          <div class="space-y-2">
            <div class="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <span :class="cls.currentStudents >= cls.capacity ? 'text-red-500' : 'text-slate-400'">
                {{ cls.currentStudents >= cls.capacity ? 'Class Full' : 'Students Enrolled' }}
              </span>
              <span class="text-slate-600">{{ cls.currentStudents }} / {{ cls.capacity }}</span>
            </div>
            <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                class="h-full transition-all duration-700 ease-out rounded-full"
                :class="cls.currentStudents >= cls.capacity ? 'bg-red-500' : 'bg-[#42b883]'"
                :style="{ width: `${(cls.currentStudents / cls.capacity) * 100}%` }"
              ></div>
            </div>
          </div>

          <AppButton 
            variant="outline" 
            class="w-full" 
            :disabled="cls.currentStudents >= cls.capacity"
            @click="$emit('select', cls.id)"
          >
            {{ cls.currentStudents >= cls.capacity ? 'View Details' : 'Enroll Now' }}
          </AppButton>
        </div>
      </div>
    </AppCard>
  </div>
</template>
