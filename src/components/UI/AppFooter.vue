<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-white border-t border-slate-100 py-16">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-10">
        <div class="flex flex-col gap-4 items-center md:items-start">
          <div class="flex items-center gap-3">
            <span class="text-xl font-black tracking-tighter text-slate-900 uppercase">
              Learning Hub
            </span>
          </div>
          <p class="text-slate-400 text-sm max-w-xs text-center md:text-left">
            Empowering the next generation of tech leaders through expert-led ICT training.
          </p>
        </div>

        <div class="flex flex-col items-center gap-4">
          <div class="flex gap-6">
            <!-- GitHub Link -->
            <a 
              href="https://github.com/ygs07/kad-hub-simple-app" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 hover:text-[#42b883] hover:bg-[#42b883]/5 transition-all duration-300"
              title="GitHub Repository"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>

            <!-- Portfolio Link -->
            <a 
              href="https://yusufshehu.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 hover:text-[#42b883] hover:bg-[#42b883]/5 transition-all duration-300"
              title="Portfolio Website"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
          </div>
          <p class="text-slate-400 text-xs font-medium tracking-wide">
            Follow our journey
          </p>
        </div>

        <div class="flex flex-col items-center md:items-end gap-2">
          <p class="text-slate-500 text-sm font-bold">
            &copy; {{ currentYear }} Learning Hub
          </p>
          <p class="text-slate-400 text-xs">
            Built with precision by <a href="https://yusufshehu.com" class="text-[#42b883] hover:underline font-semibold">Yusuf Shehu</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
