<template>
  <div class="mx-4 md:mx-auto max-w-2xl w-full px-4 py-6 bg-white dark:bg-zinc-900 rounded-xl shadow flex-1 flex flex-col">
    <img :src="ad.image" alt="Ad image" class="rounded-lg mb-4 w-full h-80 object-cover flex-shrink-0" />
    <div class="flex items-center justify-between mb-2 flex-shrink-0">
      <h2 class="text-2xl font-bold text-neutral-900 dark:text-white">{{ ad.title }}</h2>
      <p class="text-3xl font-bold text-primary-500">{{ ad.price }}</p>
    </div>
    <p class="text-neutral-500 dark:text-neutral-400 mb-4 flex-shrink-0">{{ ad.category }} &bull; {{ ad.location }}</p>
    <p class="text-neutral-700 dark:text-neutral-200 mb-6 flex-1 overflow-y-auto pr-2 text-lg leading-relaxed">{{ ad.description }}</p>

    <div class="flex items-center justify-between border-t border-neutral-200 dark:border-neutral-700 pt-4 mt-auto flex-shrink-0">
      <div class="flex items-center gap-3">
        <img :src="ad.poster.profilePicture" alt="Poster" class="w-10 h-10 rounded-full object-cover" />
        <div>
          <p class="text-neutral-900 dark:text-white font-semibold">{{ ad.poster.name }}</p>
          <p class="text-sm text-neutral-500 dark:text-neutral-400">{{ ad.poster.location }}</p>
        </div>
      </div>
      <LikeButton :adId="ad.id" />
    </div>

  </div>

  <!-- Contact Buttons -->
  <div class="fixed bottom-16 left-0 right-0 p-4 bg-white dark:bg-zinc-900 border-t border-neutral-200 dark:border-neutral-700 flex justify-center gap-4">
    <a :href="`tel:${ad.poster.phone}`" class="btn btn-primary flex-1">
      Call
    </a>
    <a :href="`https://wa.me/${ad.poster.phone}`" target="_blank" class="btn btn-primary flex-1">
      WhatsApp
    </a>
  </div>
</template>

<script setup>
const props = defineProps({ ad: Object })
import LikeButton from './LikeButton.vue'
</script> 