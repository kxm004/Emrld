<template>
  <div class="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex flex-col">
    <div class="flex-1 flex flex-col pt-6 pb-[140px]">
      <AdDetails v-if="ad" :ad="ad" />
      <div v-else class="text-center text-neutral-600 dark:text-neutral-400 flex-1 flex items-center justify-center">
        <p>Ad not found. <NuxtLink to="/explore" class="text-primary-500 hover:underline">Browse all ads</NuxtLink></p>
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
  </div>
</template>

<script setup>
import { useAdsStore } from '~/stores/ads'
import { useRoute } from 'vue-router'
import AdDetails from '~/components/AdDetails.vue'
import LikeButton from '~/components/LikeButton.vue'

const adsStore = useAdsStore()
const route = useRoute()
const ad = computed(() => adsStore.ads.find(a => a.id === Number(route.params.id)))
</script> 