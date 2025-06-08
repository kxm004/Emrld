<template>
  <div class="group bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-neutral-100 dark:border-zinc-800">
    <div class="relative overflow-hidden">
      <img 
        :src="ad.image" 
        alt="Ad image" 
        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      <div class="absolute top-3 right-3">
        <LikeButton :adId="ad.id" />
      </div>
      <div v-if="ad.isFeatured || ad.isSpecial" class="absolute top-3 left-3">
        <span class="px-2 py-1 text-xs font-semibold rounded-full bg-primary-500 text-white">
          {{ ad.isFeatured ? 'Featured' : 'Special' }}
        </span>
      </div>
    </div>
    
    <div class="p-4">
      <div class="flex-1 flex flex-col justify-between">
        <div class="mb-3">
          <h3 class="text-lg font-bold text-neutral-900 dark:text-white mb-1 line-clamp-2">{{ ad.title }}</h3>
          <p class="text-sm text-neutral-500 dark:text-neutral-400 flex items-center">
            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            {{ ad.location }}
          </p>
          <p class="text-xs text-neutral-400 dark:text-neutral-500 mt-1">{{ ad.category }}</p>
        </div>
        
        <div class="flex items-center justify-between">
          <p class="text-xl font-bold text-primary-600 dark:text-primary-400">{{ ad.price }}</p>
          <nuxt-link 
            :to="`/ads/${ad.id}`" 
            class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            View
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ ad: Object })
import LikeButton from './LikeButton.vue'
</script>