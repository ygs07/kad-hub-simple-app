<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
});
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
    :class="[
      {
        'px-4 py-2 text-sm': size === 'sm',
        'px-6 py-3 text-base': size === 'md',
        'px-8 py-4 text-lg': size === 'lg',
        
        'bg-[#42b883] text-white hover:bg-[#15774b] shadow-lg shadow-[#42b883]/20 hover:shadow-[#42b883]/40 focus:ring-[#42b883]': variant === 'primary',
        
        'bg-slate-800 text-white hover:bg-slate-900 shadow-lg shadow-slate-900/10 focus:ring-slate-800': variant === 'secondary',
        
        'border-2 border-slate-200 text-slate-600 hover:border-[#42b883] hover:text-[#42b883] bg-transparent': variant === 'outline',
        
        'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500': variant === 'danger',
      }
    ]"
  >
    <span class="relative z-10 flex items-center gap-2">
      <slot />
    </span>
    <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </button>
</template>
