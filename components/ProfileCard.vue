<template>
  <div class="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col items-center">
    <img :src="user.profilePicture" alt="Profile" class="w-24 h-24 rounded-full mb-4 object-cover" />
    <h2 class="text-xl font-bold text-neutral-900 dark:text-white">{{ user.name }}</h2>
    <p class="text-neutral-500 dark:text-neutral-400">{{ user.location }}</p>
    <p class="text-neutral-600 dark:text-neutral-300 mt-2 text-center">{{ user.bio }}</p>
    <div class="flex items-center gap-4 mt-4">
      <button class="btn btn-primary px-4 py-2 text-base min-w-[68px] min-h-[38px] flex items-center justify-center" @click="$router.push('/account/edit')">Edit Profile</button>
      <ThemeToggle />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ user: Object, editable: Boolean })
import ThemeToggle from './ThemeToggle.vue'
</script> 