<template>
  <div class="min-h-screen font-sans transition-colors duration-300 bg-white dark:bg-neutral-900 overflow-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-tap-highlight-color: transparent;
}

body {
  @apply antialiased text-neutral-900 dark:text-white overscroll-none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* Smooth page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}



/* Better touch targets for mobile */
button, a {
  @apply cursor-pointer;
  min-height: 44px;
  min-width: 44px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  @apply bg-neutral-100 dark:bg-neutral-800;
}
::-webkit-scrollbar-thumb {
  @apply bg-neutral-300 dark:bg-neutral-600 rounded-full;
}
</style>