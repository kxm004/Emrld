<template>
  <div class="flex flex-wrap gap-2 mb-6">
    <button
      v-for="cat in categories"
      :key="cat"
      class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border"
      :class="selected === cat 
        ? 'bg-primary-500 text-white border-primary-500 shadow-lg' 
        : 'bg-white dark:bg-zinc-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-zinc-700 hover:border-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'"
      @click="$emit('update:selected', cat)"
    >
      {{ cat === 'all' ? 'All Categories' : cat }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({ categories: Array, selected: String })
</script>