<script setup lang="ts">
import { computed } from 'vue';
import type { ICTClass } from '../types';
import AppModal from './UI/AppModal.vue';
import AppButton from './UI/AppButton.vue';
import AppInput from './UI/AppInput.vue';
import AppSelect from './UI/AppSelect.vue';

const props = defineProps<{
  show: boolean;
  classes: ICTClass[];
  selectedClassId: string;
  form: any;
  totalFee: number;
  isFull: boolean;
}>();

const emit = defineEmits(['update:selectedClassId', 'register', 'cancel']);

const classOptions = computed(() => 
  props.classes.map(c => ({
    label: `${c.name} (${c.currentStudents >= c.capacity ? 'FULL' : 'Available'})`,
    value: c.id
  }))
);

const handleClassChange = (val: string) => {
  emit('update:selectedClassId', val);
};
</script>

<template>
  <AppModal 
    :show="show" 
    title="Class Registration" 
    description="Complete the form below to secure your spot."
    @close="$emit('cancel')"
  >
    <form @submit.prevent="$emit('register')" class="space-y-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AppInput 
          label="Full Name" 
          v-model="form.studentName" 
          placeholder="John Doe" 
          required 
        />
        <AppInput 
          label="Email Address" 
          v-model="form.studentEmail" 
          type="email" 
          placeholder="john@example.com" 
          required 
        />
      </div>

      <AppSelect 
        label="Select Class" 
        :model-value="selectedClassId"
        @update:model-value="handleClassChange"
        :options="classOptions" 
        required 
      />

      <!-- Custom Registration Section -->
      <div class="p-8 bg-slate-50 border border-slate-100 rounded-2xl space-y-5">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="text-slate-900 font-bold">Custom Registration</h4>
            <p class="text-xs text-slate-500 mt-1">Schedule at your convenience for an additional ₦15,000 fee.</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="form.isCustom" class="sr-only peer">
            <div class="w-12 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#42b883]"></div>
          </label>
        </div>

        <div v-if="form.isCustom" class="pt-2 animate-slide-in">
          <AppInput 
            label="Preferred Time (9 AM - 4 PM)" 
            v-model="form.customTime" 
            type="time" 
            min="09:00" 
            max="16:00" 
            required 
          />
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100">
        <div class="flex flex-col">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Amount</span>
          <span class="text-3xl font-black text-slate-900">₦{{ totalFee.toLocaleString() }}</span>
        </div>
        <div class="flex gap-4 w-full sm:w-auto">
          <AppButton variant="outline" class="flex-1 sm:flex-none" @click="$emit('cancel')">Cancel</AppButton>
          <AppButton type="submit" variant="primary" class="flex-1 sm:flex-none" :disabled="isFull && !form.isCustom">
            {{ isFull && !form.isCustom ? 'Class Full' : 'Confirm Registration' }}
          </AppButton>
        </div>
      </div>
    </form>
  </AppModal>
</template>
