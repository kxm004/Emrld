<template>
  <div class="mx-4 md:mx-auto max-w-2xl w-full">
    <div class="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-neutral-100 dark:border-zinc-800 overflow-hidden">
      <!-- Image Section -->
      <div class="relative">
        <img :src="ad.image" alt="Ad image" class="w-full h-80 object-cover" />
        <div class="absolute top-4 right-4">
          <LikeButton :adId="ad.id" />
        </div>
        <div v-if="ad.isFeatured || ad.isSpecial" class="absolute top-4 left-4">
          <span class="px-3 py-1 text-sm font-semibold rounded-full bg-primary-500 text-white">
            {{ ad.isFeatured ? 'Featured' : 'Special' }}
          </span>
        </div>
      </div>

      <!-- Content Section -->
      <div class="p-6">
        <div class="flex items-start justify-between mb-4">
          <div class="flex-1">
            <h2 class="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{{ ad.title }}</h2>
            <div class="flex items-center text-neutral-500 dark:text-neutral-400 mb-1">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              {{ ad.location }}
            </div>
            <p class="text-sm text-neutral-400 dark:text-neutral-500">{{ ad.category }}</p>
          </div>
          <div class="text-right">
            <p class="text-3xl font-bold text-primary-600 dark:text-primary-400">{{ ad.price }}</p>
          </div>
        </div>

        <div class="prose prose-neutral dark:prose-invert max-w-none mb-6">
          <p class="text-neutral-700 dark:text-neutral-200 leading-relaxed">{{ ad.description }}</p>
        </div>

        <!-- Poster Info -->
        <div class="border-t border-neutral-200 dark:border-zinc-700 pt-6">
          <div class="flex items-center gap-4">
            <img :src="ad.poster.profilePicture" alt="Poster" class="w-12 h-12 rounded-full object-cover border-2 border-neutral-200 dark:border-zinc-700" />
            <div class="flex-1">
              <p class="text-neutral-900 dark:text-white font-semibold">{{ ad.poster.name }}</p>
              <p class="text-sm text-neutral-500 dark:text-neutral-400 flex items-center">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                {{ ad.poster.location }}
              </p>
            </div>
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