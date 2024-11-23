<template>
  <header>
    <Search />
  </header>
  
  <main >
    <slot />
  </main>
  
  <Footer />
</template>

<script setup>
import Search from '../Components/Search.vue';
import Footer from '../Components/Footer.vue';
</script>
