<script setup lang="ts">
interface Props {
  hover?: boolean;
}

withDefaults(defineProps<Props>(), {
  hover: true
});
</script>

<template>
  <div 
    class="bg-white border border-slate-100 rounded-3xl overflow-hidden transition-all duration-500 shadow-sm"
    :class="{ 'hover:border-[#42b883]/30 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1': hover }"
  >
    <slot />
  </div>
</template>
