<template>
  <div class="min-h-screen bg-neutral-100 dark:bg-neutral-900">
    <div class="container mx-auto px-4 py-6">
      <h1 class="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Featured Ads</h1>
      <AdGrid :ads="featuredAds" featured />

      <h2 class="text-xl font-semibold mt-8 mb-4 text-neutral-900 dark:text-white">Recent Ads</h2>
      <AdGrid :ads="recentAds" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
import { useAdsStore } from '~/stores/ads'
import AdGrid from '~/components/AdGrid.vue'

const adsStore = useAdsStore()
const featuredAds = computed(() => adsStore.ads.filter(ad => ad.isFeatured || ad.isSpecial))
const recentAds = computed(() => adsStore.ads)
</script>