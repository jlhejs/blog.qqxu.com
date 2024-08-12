<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'jlhe' },
    { property: 'og:image', content: 'http://blog.jlhe.com/og-icon.png' },
    { name: 'description', content: 'jlhe\'s Portfolio' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@jlhe' },
  ],
})
</script>

<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>
