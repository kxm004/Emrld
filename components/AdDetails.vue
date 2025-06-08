<template>
  <div class="mx-4 md:mx-auto max-w-2xl w-full">
    <div class="card p-6 flex-1 flex flex-col">
      <div class="relative overflow-hidden rounded-2xl mb-6">
        <img :src="ad.image" alt="Ad image" class="w-full h-80 object-cover" />
        <div class="absolute top-4 right-4">
          <LikeButton :adId="ad.id" />
        </div>
        <div v-if="ad.isFeatured || ad.isSpecial" class="absolute top-4 left-4">
          <span class="px-3 py-1.5 text-sm font-semibold rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg">
            {{ ad.isFeatured ? 'Featured' : 'Special' }}
          </span>
        </div>
      </div>

      <div class="flex items-start justify-between mb-4">
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{{ ad.title }}</h2>
          <div class="flex items-center text-neutral-600 dark:text-neutral-400 mb-4">
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
          </div>
        </div>
        <div class="text-right">
          <p class="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
            {{ ad.price }}
          </p>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Description</h3>
        <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">{{ ad.description }}</p>
      </div>

      <div class="border-t border-neutral-200 dark:border-neutral-700 pt-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Seller Information</h3>
        <div class="flex items-center gap-4">
          <img :src="ad.poster.profilePicture" alt="Poster" class="w-14 h-14 rounded-full object-cover ring-2 ring-primary-100 dark:ring-primary-900" />
          <div class="flex-1">
            <p class="text-neutral-900 dark:text-white font-semibold text-lg">{{ ad.poster.name }}</p>
            <p class="text-neutral-600 dark:text-neutral-400 flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {{ ad.poster.location }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ ad: Object })
import LikeButton from './LikeButton.vue'
</script>