<template>
  <div class="bg-white dark:bg-zinc-900 rounded-xl shadow p-4 flex flex-col">
    <img :src="ad.image" alt="Ad image" class="rounded-lg mb-2 w-full h-40 object-cover" />
    <div class="flex-1 flex flex-col justify-between">
      <div>
        <h3 class="text-lg font-bold text-neutral-900 dark:text-white">{{ ad.title }}</h3>
        <p class="text-sm text-neutral-500 dark:text-neutral-400">{{ ad.category }} &bull; {{ ad.location }}</p>
      </div>
      <p class="text-xl font-bold text-primary-500 mt-2">{{ ad.price }}</p>
    </div>
    <div class="flex items-center justify-between mt-4">
      <nuxt-link :to="`/ads/${ad.id}`" class="btn btn-primary">View</nuxt-link>
      <LikeButton :adId="ad.id" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ ad: Object })
import LikeButton from './LikeButton.vue'
</script> 