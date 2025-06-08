<template>
  <button :class="['btn', liked ? 'btn-primary' : 'btn-secondary']" @click="toggleLike">
    <span v-if="liked">♥</span>
    <span v-else>♡</span>
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