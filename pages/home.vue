<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <div class="container mx-auto px-4 py-6">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Welcome back!</h1>
        <p class="text-neutral-600 dark:text-neutral-400">Discover amazing deals around you</p>
      </div>

      <!-- Featured Section -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-neutral-900 dark:text-white">Featured Ads</h2>
          <nuxt-link to="/explore" class="text-primary-500 hover:text-primary-600 text-sm font-medium">
            View all
          </nuxt-link>
        </div>
        <AdGrid :ads="featuredAds" featured />
      </div>

      <!-- Recent Section -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-neutral-900 dark:text-white">Recent Ads</h2>
          <nuxt-link to="/explore" class="text-primary-500 hover:text-primary-600 text-sm font-medium">
            View all
          </nuxt-link>
        </div>
        <AdGrid :ads="recentAds" />
      </div>
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
const recentAds = computed(() => adsStore.ads.slice(0, 4))
</script>