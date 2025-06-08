<template>
  <div class="card p-5 flex flex-col group hover:-translate-y-1 transition-all duration-300">
    <div class="relative overflow-hidden rounded-xl mb-4">
      <img 
        :src="ad.image" 
        :alt="ad.title" 
        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      <div class="absolute top-3 right-3">
        <LikeButton :adId="ad.id" />
      </div>
      <div v-if="ad.isFeatured || ad.isSpecial" class="absolute top-3 left-3">
        <span class="px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg">
          {{ ad.isFeatured ? 'Featured' : 'Special' }}
        </span>
      </div>
    </div>
    
    <div class="flex-1 flex flex-col">
      <h3 class="text-lg font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2">{{ ad.title }}</h3>
      <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-3 flex items-center">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
        </svg>
        {{ ad.category }}
        <span class="mx-2">•</span>
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        {{ ad.location }}
      </p>
      
      <div class="flex items-center justify-between mt-auto">
        <p class="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
          {{ ad.price }}
        </p>
        <nuxt-link :to="`/ads/${ad.id}`" class="btn btn-primary text-sm px-4 py-2">
          View Details
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ ad: Object })
import LikeButton from './LikeButton.vue'
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>