<template>
  <button 
    :class="[
      'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm',
      liked 
        ? 'bg-red-500/90 text-white shadow-lg scale-110' 
        : 'bg-white/90 dark:bg-zinc-800/90 text-neutral-600 dark:text-neutral-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500'
    ]" 
    @click="toggleLike"
  >
    <svg class="w-5 h-5" :class="{ 'animate-pulse': liked }" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
    </svg>
  </button>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const props = defineProps({ adId: [String, Number] })
const userStore = useUserStore()
const liked = computed(() => userStore.likedAds.includes(props.adId))
function toggleLike() {
  userStore.toggleLike(props.adId)
}
</script>