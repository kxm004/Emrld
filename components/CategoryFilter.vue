<template>
  <div class="flex flex-wrap gap-2 mb-4">
    <button
      v-for="cat in categories"
      :key="cat"
      class="btn btn-secondary"
      :class="{ 'btn-primary': selected === cat }"
      @click="$emit('update:selected', cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({ categories: Array, selected: String })
</script> 