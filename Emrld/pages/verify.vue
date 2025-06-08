<template>
  <div class="min-h-screen flex flex-col bg-no-repeat bg-cover bg-center animate-fade-in" style="background-image: url('/background.svg')">

    <!-- Optional space above the card (for aesthetics or branding) -->
    <div class="flex-1"></div>

    <!-- Bottom pinned card -->
    <div class="h-[30rem] bg-white dark:bg-zinc-900 rounded-t-3xl shadow-lg p-8 w-full max-w-md mx-auto animate-slide-up">

      <!-- Back button -->
      <div class="mb-6">
        <button @click="goBack" class="flex items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      <!-- Title & instructions -->
      <div class="space-y-4 text-center">
        <h1 class="text-2xl font-bold text-neutral-900 dark:text-white">Verification Code</h1>
        <p class="text-neutral-600 dark:text-neutral-400">
          Enter the 4-digit code sent to your phone
        </p>
      </div>

      <!-- Pin Input -->
      <div class="mt-6">
        <PinInput @complete="onComplete" />
      </div>

      <!-- Resend code -->
      <div class="flex justify-center mt-4">
        <button 
          class="text-primary-500 hover:text-primary-600 transition-colors" 
          :disabled="!canResend"
          :class="{ 'opacity-50 cursor-not-allowed': !canResend }"
          @click="resendCode"
        >
          {{ resendText }}
        </button>
      </div>

      <!-- Submit button -->
      <button 
        class="btn btn-primary w-full mt-6" 
        :disabled="!isCodeComplete" 
        :class="{ 'opacity-50 cursor-not-allowed': !isCodeComplete }"
        @click="verifyCode"
      >
        Enter
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
})

const router = useRouter()
const code = ref('')
const isCodeComplete = ref(false)
const countdown = ref(60)
const canResend = ref(false)

const resendText = computed(() => {
  return canResend.value ? 'Resend Code' : `Resend Code (${countdown.value}s)`
})

function goBack() {
  router.push('/')
}

function onComplete(value) {
  code.value = value
  isCodeComplete.value = true
}

function verifyCode() {
  if (isCodeComplete.value) {
    // In a real app, you would verify the code with your backend
    // For now, we'll just redirect to the home page
    router.push('/home')
  }
}

function resendCode() {
  if (canResend.value) {
    // Reset the countdown
    countdown.value = 60
    canResend.value = false
    startCountdown()
    
    // In a real app, you would request a new code from your backend
    console.log('Resending code...')
  }
}

function startCountdown() {
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      canResend.value = true
    }
  }, 1000)
}

// Start the countdown when the component is mounted
onMounted(() => {
  startCountdown()
})
</script>