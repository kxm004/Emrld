<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <AdCard v-for="ad in ads" :key="ad.id" :ad="ad" @view="$emit('view', ad.id)" />
  </div>
</template>

<script setup>
const props = defineProps({ ads: Array, featured: Boolean })
import AdCard from './AdCard.vue'
</script>