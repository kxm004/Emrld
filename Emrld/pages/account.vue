<template>
  <div class="min-h-screen bg-neutral-100 dark:bg-neutral-900">
    <div class="container mx-auto px-4 py-6">
      <ProfileCard :user="user" editable />
      <h2 class="text-xl font-semibold mt-8 mb-4 text-neutral-900 dark:text-white">Liked Ads</h2>
      <AdGrid :ads="likedAds" />
      <h2 class="text-xl font-semibold mt-8 mb-4 text-neutral-900 dark:text-white">My Ads</h2>
      <AdGrid :ads="myAds" />
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