<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <div class="container mx-auto px-4 py-6">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Explore</h1>
        <p class="text-neutral-600 dark:text-neutral-400">Find exactly what you're looking for</p>
      </div>

      <!-- Search Bar -->
      <div class="mb-6">
        <div class="relative">
          <input 
            type="text" 
            placeholder="Search ads..." 
            class="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            v-model="searchQuery"
          />
          <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Category Filter -->
      <CategoryFilter :categories="categories" v-model:selected="selectedCategory" />
      
      <!-- Results -->
      <div class="mb-4">
        <p class="text-sm text-neutral-600 dark:text-neutral-400">
          {{ filteredAds.length }} {{ filteredAds.length === 1 ? 'result' : 'results' }} found
        </p>
      </div>
      
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
const searchQuery = ref('')

const filteredAds = computed(() => {
  let ads = adsStore.ads
  
  if (selectedCategory.value !== 'all') {
    ads = ads.filter(ad => ad.category === selectedCategory.value)
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    ads = ads.filter(ad => 
      ad.title.toLowerCase().includes(query) ||
      ad.description.toLowerCase().includes(query) ||
      ad.location.toLowerCase().includes(query)
    )
  }
  
  return ads
})
</script>