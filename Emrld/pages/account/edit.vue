<template>
  <div class="min-h-screen bg-neutral-100 dark:bg-neutral-900">
    <div class="container mx-auto px-4 py-6 max-w-lg">
      <h1 class="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Edit Profile</h1>
      <ProfileForm />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
import ProfileForm from '~/components/ProfileForm.vue'
</script> 