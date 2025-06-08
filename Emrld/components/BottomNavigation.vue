<template>
  <div class="glass border-t border-neutral-200 dark:border-zinc-800">
    <nav class="flex justify-around items-center h-16">
      <nuxt-link to="/explore" class="flex flex-col items-center justify-center w-1/3 h-full" active-class="text-primary-500">
        <div class="w-6 h-6 mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </nuxt-link>
      
      <nuxt-link to="/home" class="flex flex-col items-center justify-center w-1/3 h-full" active-class="text-primary-500">
        <div class="w-6 h-6 mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
      </nuxt-link>
      
      <nuxt-link to="/account" class="flex flex-col items-center justify-center w-1/3 h-full" active-class="text-primary-500">
        <div class="w-6 h-6 mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </nuxt-link>
    </nav>
  </div>
</template>