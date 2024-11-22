<template>
    <main class="container mx-auto p-4 ">
      <search />
      <div class="">
        <slot />
      </div>
    </main>
  
    
  </template>
  
  <script setup>
    import Search from '../Components/Search.vue'
  </script>