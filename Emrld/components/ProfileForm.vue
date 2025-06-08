<template>
  <form class="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col gap-4" @submit.prevent="submitProfile">
    <input v-model="profile.name" class="input" placeholder="Name" required />
    <input v-model="profile.profilePicture" class="input" placeholder="Profile Picture URL" required />
    <input v-model="profile.location" class="input" placeholder="Location" required />
    <textarea v-model="profile.bio" class="input" placeholder="Bio" maxlength="250" />
    <button class="btn btn-primary mt-2" type="submit">Save</button>
  </form>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()
const profile = reactive({ ...userStore.user })
function submitProfile() {
  userStore.updateProfile({ ...profile })
}
</script> 