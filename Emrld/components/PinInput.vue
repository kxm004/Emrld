<template>
  <div class="w-full">
    <div class="flex justify-between items-center gap-2">
      <input
        v-for="(digit, index) in 4"
        :key="index"
        type="text"
        inputmode="numeric"
        maxlength="1"
        class="w-14 h-14 text-center text-xl font-semibold rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-200"
        :class="{ 'border-primary-500 ring-1 ring-primary-500': activeIndex === index }"
        v-model="pin[index]"
        @input="onInput(index)"
        @keydown="onKeyDown($event, index)"
        @focus="activeIndex = index"
        @blur="activeIndex = null"
        ref="inputs"
      />
    </div>
  </div>
</template>

<script setup>
const pin = ref(['', '', '', ''])
const activeIndex = ref(0)
const inputs = ref([])
const emit = defineEmits(['complete'])

function onInput(index) {
  // If the input is filled, move to the next input
  if (pin.value[index] && index < 3) {
    inputs.value[index + 1].focus()
  }
  
  // Check if all pins are entered
  if (pin.value.every(digit => digit)) {
    emit('complete', pin.value.join(''))
  }
}

function onKeyDown(event, index) {
  // If backspace and empty, go to previous input
  if (event.key === 'Backspace' && !pin.value[index] && index > 0) {
    inputs.value[index - 1].focus()
  }
  
  // Only allow numeric input
  if (!/^\d$/.test(event.key) && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)) {
    event.preventDefault()
  }
}

// Focus the first input on mount
onMounted(() => {
  setTimeout(() => {
    inputs.value[0].focus()
  }, 100)
})
</script>