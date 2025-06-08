<template>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <span class="text-neutral-500">+ 963</span>
    </div>
    <input
      type="tel"
      class="input pl-20"
      placeholder="Enter your phone number"
      v-model="phoneNumber"
      @keypress="allowOnlyNumbers"
      @input="formatPhoneNumber"
      maxlength="9"
    />
  </div>
</template>


<script setup>
const phoneNumber = ref('')
const emit = defineEmits(['update:value'])

function allowOnlyNumbers(event) {
  const key = event.key
  if (!/^\d$/.test(key)) {
    event.preventDefault()
  }
}

function formatPhoneNumber() {
  // Remove any non-digit characters (e.g. from pasted input)
  let cleaned = phoneNumber.value.replace(/\D/g, '')
  
  // Limit to 9 digits
  if (cleaned.length > 9) {
    cleaned = cleaned.substring(0, 9)
  }

  phoneNumber.value = cleaned
  emit('update:value', cleaned)
}
</script>
