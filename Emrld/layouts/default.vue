<template>
  <div class="min-h-screen flex flex-col">
    <!-- Main content area with scrolling -->
    <main class="flex-1 overflow-y-auto pb-[140px]">
      <div class="container mx-auto px-4 py-4">
        <slot />
      </div>
    </main>
    
    <!-- Fixed bottom navigation -->
    <BottomNavigation v-if="showNavigation" class="fixed bottom-0 left-0 right-0 z-50" />
  </div>
</template>

<script setup>
const route = useRoute()

console.log('Current route name:', route.name)

// Hide navigation on auth pages
const showNavigation = computed(() => {
  return !['index', 'verify'].includes(route.name)
})
</script>