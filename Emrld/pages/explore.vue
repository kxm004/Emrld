<template>
  <div class="min-h-screen bg-neutral-100 dark:bg-neutral-900">
    <div class="container mx-auto px-4 py-6">
      <h1 class="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Explore Ads</h1>
      <CategoryFilter :categories="categories" v-model:selected="selectedCategory" />
      <AdGrid :ads="filteredAds" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
import { useAdsStore } from '~/stores/ads'
import CategoryFilter from '~/components/CategoryFilter.vue'
import AdGrid from '~/components/AdGrid.vue'

const adsStore = useAdsStore()
const categories = computed(() => adsStore.categories)
const selectedCategory = ref('all')
const filteredAds = computed(() => {
  if (selectedCategory.value === 'all') return adsStore.ads
  return adsStore.ads.filter(ad => ad.category === selectedCategory.value)
})
</script>