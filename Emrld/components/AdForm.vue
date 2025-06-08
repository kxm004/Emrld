<template>
  <form class="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col gap-4" @submit.prevent="submitAd">
    <input v-model="ad.title" class="input" placeholder="Title" required />
    <textarea v-model="ad.description" class="input" placeholder="Description" required />
    <input v-model="ad.image" class="input" placeholder="Image URL" required />
    <select v-model="ad.category" class="input">
      <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
    </select>
    <input v-model="ad.location" class="input" placeholder="Location" required />
    <div class="flex gap-4">
      <label><input type="checkbox" v-model="ad.isFeatured" /> Featured</label>
      <label><input type="checkbox" v-model="ad.isSpecial" /> Special</label>
    </div>
    <button class="btn btn-primary mt-2" type="submit">Post Ad</button>
  </form>
</template>

<script setup>
import { useAdsStore } from '~/stores/ads'
const adsStore = useAdsStore()
const categories = ['Electronics', 'Cars', 'Real Estate', 'Jobs', 'Services', 'Other']
const ad = reactive({
  title: '',
  description: '',
  image: '',
  category: categories[0],
  location: '',
  isFeatured: false,
  isSpecial: false
})
function submitAd() {
  adsStore.addAd({ ...ad, id: Date.now(), postedBy: 1, poster: adsStore.defaultPoster })
  Object.assign(ad, { title: '', description: '', image: '', category: categories[0], location: '', isFeatured: false, isSpecial: false })
}
</script> 