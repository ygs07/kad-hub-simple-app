<script setup lang="ts">
import { ref } from 'vue'
import { useRegistration } from './composables/useRegistration'
import ClassList from './components/ClassList.vue'
import RegistrationForm from './components/RegistrationForm.vue'
import AppFooter from './components/UI/AppFooter.vue'

const { classes, selectedClassId, form, totalFee, isFull, register, resetForm } = useRegistration()

const showForm = ref(false)

const handleSelect = (id: string) => {
  selectedClassId.value = id
  showForm.value = true
}

const handleCancel = () => {
  showForm.value = false
  resetForm()
}

const handleRegister = async () => {
  await register()
  showForm.value = false
}
</script>

<template>
  <div class="min-h-screen font-sans selection:bg-[#42b883]/30 selection:text-[#15774b]">
    <!-- Hero Section -->
    <header class="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-white">
      <!-- Background Decor -->
      <div class="absolute top-0 right-0 w-[60%] h-full -z-10 overflow-hidden">
        <div
          class="absolute top-[-20%] right-[-10%] w-[100%] h-[100%] bg-gradient-to-br from-[#42b883]/5 to-transparent rounded-full blur-[120px]"
        ></div>
      </div>

      <nav class="container mx-auto px-6 flex justify-between items-center mb-24 animate-fade-in">
        <div class="flex items-center gap-3">
          <span class="text-2xl font-black tracking-tighter text-slate-900 uppercase"
            >Learning Hub</span
          >
        </div>
        <div class="hidden md:flex items-center gap-10 text-sm font-bold text-slate-500">
          <button
            @click="showForm = true"
            class="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10"
          >
            Register Now
          </button>
        </div>
      </nav>

      <div class="container mx-auto px-6">
        <div class="max-w-4xl animate-slide-in">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-[#42b883]/10 border border-[#42b883]/20 rounded-full mb-8"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#42b883] opacity-75"
              ></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#42b883]"></span>
            </span>
            <span class="text-sm font-bold text-[#42b883] uppercase tracking-wider"
              >Admission Open for 2026</span
            >
          </div>
          <h1
            class="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[0.95]"
          >
            Master the
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#42b883] to-[#15774b]"
              >Tech Skills</span
            >
            that define tomorrow.
          </h1>
          <p class="max-w-2xl text-xl text-slate-500 leading-relaxed mb-12">
            Join the premier ICT training hub. We provide expert-led training in high-demand
            technologies to help you build a global career.
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-6">
            <button
              @click="showForm = true"
              class="w-full sm:w-auto px-10 py-5 bg-[#42b883] text-white text-lg font-bold rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-[#42b883]/30"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-6 py-24">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">Available Programs</h2>
          <p class="text-slate-500 max-w-md leading-relaxed">
            Choose from our curated list of professional ICT courses designed to make you
            industry-ready.
          </p>
        </div>
        <div
          class="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-slate-100"
        >
          <button class="px-6 py-3 rounded-xl bg-slate-50 text-slate-900 font-bold text-sm">
            All Categories
          </button>
          <button
            class="px-6 py-3 rounded-xl text-slate-500 font-bold text-sm hover:text-slate-900 transition-colors"
          >
            Most Popular
          </button>
        </div>
      </div>

      <ClassList :classes="classes" @select="handleSelect" />
    </main>

    <!-- Registration Modal -->
    <RegistrationForm
      :show="showForm"
      :classes="classes"
      v-model:selected-class-id="selectedClassId"
      :form="form"
      :total-fee="totalFee"
      :is-full="isFull"
      @register="handleRegister"
      @cancel="handleCancel"
    />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
</style>
