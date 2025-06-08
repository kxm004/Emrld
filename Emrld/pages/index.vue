<template>
  <div class="min-h-screen flex flex-col bg-no-repeat bg-cover bg-center animate-fade-in" style="background-image: url('/background.svg')">
    
    <div class="flex-1 flex items-center justify-center">
      <h1 class="text-3xl font-bold text-center text-white dark:text-white">Enter Emrld</h1>
    </div>

    <div class="bg-white h-[30rem]  dark:bg-zinc-900 rounded-t-3xl shadow-lg p-8 w-full max-w-md mx-auto animate-slide-up">
      <AppLogo class="mb-8 mx-auto animate-slide-down" />

      <p class="text-center text-neutral-600 dark:text-neutral-400">Sign in with your phone number to continue</p>

      <div class="mt-6">
        <PhoneInput v-model:value="phone" />
      </div>

      <button 
        class="btn btn-primary w-full mt-6" 
        :disabled="!isValidPhone" 
        :class="{ 'opacity-50 cursor-not-allowed': !isValidPhone }"
        @click="goToVerify"
      >
        Continue
      </button>
    </div>
  </div>
</template>


<script setup>
definePageMeta({
  layout: 'auth'
})

const phone = ref('')
const router = useRouter()

const isValidPhone = computed(() => {
  return phone.value.length === 9
})

function goToVerify() {
  if (isValidPhone.value) {
    router.push('/verify')
  }
}
</script>
