<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <div class="container mx-auto px-4 py-6">
      <!-- Profile Section -->
      <ProfileCard :user="user" editable />
      
      <!-- Stats Cards -->
      <div class="grid grid-cols-2 gap-4 mb-8">
        <div class="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-neutral-100 dark:border-zinc-800">
          <div class="text-center">
            <p class="text-2xl font-bold text-primary-500">{{ myAds.length }}</p>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">My Ads</p>
          </div>
        </div>
        <div class="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-neutral-100 dark:border-zinc-800">
          <div class="text-center">
            <p class="text-2xl font-bold text-red-500">{{ likedAds.length }}</p>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">Liked</p>
          </div>
        </div>
      </div>

      <!-- Liked Ads Section -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-neutral-900 dark:text-white">Liked Ads</h2>
          <span class="text-sm text-neutral-500 dark:text-neutral-400">{{ likedAds.length }} items</span>
        </div>
        <div v-if="likedAds.length > 0">
          <AdGrid :ads="likedAds" />
        </div>
        <div v-else class="text-center py-12">
          <svg class="w-16 h-16 text-neutral-300 dark:text-neutral-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <p class="text-neutral-500 dark:text-neutral-400">No liked ads yet</p>
          <nuxt-link to="/explore" class="text-primary-500 hover:text-primary-600 text-sm font-medium">
            Explore ads to like
          </nuxt-link>
        </div>
      </div>

      <!-- My Ads Section -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-neutral-900 dark:text-white">My Ads</h2>
          <div class="flex items-center gap-2">
            <span class="text-sm text-neutral-500 dark:text-neutral-400">{{ myAds.length }} items</span>
            <nuxt-link to="/post" class="px-3 py-1 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors duration-200">
              + Post Ad
            </nuxt-link>
          </div>
        </div>
        <div v-if="myAds.length > 0">
          <AdGrid :ads="myAds" />
        </div>
        <div v-else class="text-center py-12">
          <svg class="w-16 h-16 text-neutral-300 dark:text-neutral-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <p class="text-neutral-500 dark:text-neutral-400 mb-2">No ads posted yet</p>
          <nuxt-link to="/post" class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Post your first ad
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
import { useUserStore } from '~/stores/user'
import { useAdsStore } from '~/stores/ads'
import ProfileCard from '~/components/ProfileCard.vue'
import AdGrid from '~/components/AdGrid.vue'

const userStore = useUserStore()
const adsStore = useAdsStore()
const user = computed(() => userStore.user)
const likedAds = computed(() => adsStore.ads.filter(ad => userStore.likedAds.includes(ad.id)))
const myAds = computed(() => adsStore.ads.filter(ad => ad.postedBy === user.value.id))
</script>