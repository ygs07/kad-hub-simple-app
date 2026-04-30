<script setup lang="ts">
import { ref } from 'vue'
import { useRegistration } from './composables/useRegistration'
import ClassList from './components/ClassList.vue'
import RegistrationForm from './components/RegistrationForm.vue'

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
            >Kad ICT Hub</span
          >
        </div>
        <div class="hidden md:flex items-center gap-10 text-sm font-bold text-slate-500">
          <a href="#" class="hover:text-[#42b883] transition-colors">All Courses</a>
          <a href="#" class="hover:text-[#42b883] transition-colors">Our Hubs</a>
          <a href="#" class="hover:text-[#42b883] transition-colors">Success Stories</a>
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
            Join Kaduna's premier ICT training hub. We provide expert-led training in high-demand
            technologies to help you build a global career.
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-6">
            <button
              @click="showForm = true"
              class="w-full sm:w-auto px-10 py-5 bg-[#42b883] text-white text-lg font-bold rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-[#42b883]/30"
            >
              Explore Programs
            </button>
            <div class="flex items-center gap-4 py-2">
              <div class="flex -space-x-3">
                <div
                  v-for="i in 4"
                  :key="i"
                  class="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600"
                >
                  <img
                    :src="`https://i.pravatar.cc/150?u=${i}`"
                    class="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <span class="text-slate-900 font-bold leading-none">2,500+ Alumni</span>
                <span class="text-slate-500 text-sm">Working globally</span>
              </div>
            </div>
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

    <!-- Stats Section -->
    <section class="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div class="text-5xl font-black text-[#42b883] mb-2">95%</div>
            <div class="text-slate-400 font-bold uppercase tracking-widest text-xs">
              Job Placement
            </div>
          </div>
          <div>
            <div class="text-5xl font-black text-[#42b883] mb-2">15+</div>
            <div class="text-slate-400 font-bold uppercase tracking-widest text-xs">
              Expert Tutors
            </div>
          </div>
          <div>
            <div class="text-5xl font-black text-[#42b883] mb-2">50+</div>
            <div class="text-slate-400 font-bold uppercase tracking-widest text-xs">
              Global Partners
            </div>
          </div>
          <div>
            <div class="text-5xl font-black text-[#42b883] mb-2">24/7</div>
            <div class="text-slate-400 font-bold uppercase tracking-widest text-xs">Lab Access</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-100 py-16">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-10">
          <div class="flex items-center gap-3">
            <span class="text-xl font-black tracking-tighter text-slate-900 uppercase"
              >Kad ICT Hub</span
            >
          </div>
          <p class="text-slate-400 text-sm">
            &copy; 2026 Kad ICT Hub. All rights reserved. Built with precision for Kaduna.
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-slate-400 hover:text-[#42b883] transition-colors"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg
            ></a>
            <a href="#" class="text-slate-400 hover:text-[#42b883] transition-colors"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg
            ></a>
            <a href="#" class="text-slate-400 hover:text-[#42b883] transition-colors"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                /></svg
            ></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Font is imported in main.css as requested */

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f8fafc;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.1);
}
</style>
