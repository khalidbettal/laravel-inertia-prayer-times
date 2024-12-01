<template>
  <footer class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ">
    <div class="container mx-auto px-4 text-center mt-28 py-8   border-t border-green-400 ">
      <!-- Dynamic City Links -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6 ">
        <Link href="/" class="text-sm font-medium text-gray-200 hover:text-emerald-500 transition-colors underline"> Home</Link>
        <Link 
            :href="route('prayer.show', 'Casablanca')" 
            class="text-sm font-medium text-gray-200 hover:text-emerald-500 transition-colors underline"
          >
            Prayer Times for Casablanca
          </Link>

        <div v-for="city in cities" :key="city.code" class="text-left">
          <Link 
            :href="route('prayer.show', city.name)" 
            class="text-sm font-medium text-gray-200 hover:text-emerald-500 transition-colors underline"
          >
            Prayer Times for {{ city.name }}
          </Link>
        </div>
        
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-200 dark:border-gray-700 my-4"></div>

      <!-- Social Links -->
      <div class="flex justify-center space-x-6 mb-4">
        <a href="https://twitter.com" target="_blank" class="text-gray-500 hover:text-emerald-500 transition-colors">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank" class="text-gray-500 hover:text-emerald-500 transition-colors">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" class="text-gray-500 hover:text-emerald-500 transition-colors">
          <i class="fab fa-instagram"></i>
        </a>
      </div>

      <!-- Copyright -->
      <p class="text-sm font-bold sm:text-lg text-gray-500 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} Prayer Times. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { usePage, Link } from '@inertiajs/vue3'

// Access cities from the Inertia props
const page = usePage()
const cities = page.props.cities
</script>


