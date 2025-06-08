<template>
  <div class="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-neutral-100 dark:border-zinc-800 p-6 mb-6">
    <div class="flex flex-col items-center text-center">
      <div class="relative mb-4">
        <img :src="user.profilePicture" alt="Profile" class="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-zinc-800 shadow-lg" />
        <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
      </div>
      
      <h2 class="text-2xl font-bold text-neutral-900 dark:text-white mb-1">{{ user.name }}</h2>
      <p class="text-neutral-500 dark:text-neutral-400 flex items-center mb-2">
        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
        {{ user.location }}
      </p>
      <p class="text-neutral-600 dark:text-neutral-300 mb-6 max-w-sm">{{ user.bio }}</p>
      
      <div class="flex items-center gap-4">
        <button 
          class="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2" 
          @click="$router.push('/account/edit')"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit Profile
        </button>
        <ThemeToggle />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ user: Object, editable: Boolean })
import ThemeToggle from './ThemeToggle.vue'
</script>