<template>
  <div class="prayer-time-container dark:bg-gray-800 dark:border-emerald-400">

    <!-- Spinner component -->
    <section v-if="isLoading" class="text-center py-6" aria-live="polite">
      <Spinner />
    </section>

    <!-- Error message -->
    <section v-if="props.error" class="error dark:text-red-300 text-center sm:text-2xl" aria-live="assertive">
      <p>XX: {{ props.error }}</p>
    </section>

    <!-- Prayer Time Details -->
    <section v-show="!props.error && !isLoading">
      <!-- Language switch button -->
      <button 
        @click="toggleLanguage" 
        class="px-4 py-2 rounded bg-emerald-500 text-white mb-4"
        aria-label="Switch Language"
      >
        Switch to {{ isArabic ? 'English' : 'Arabic' }}
      </button>

      <h1 class="title dark:text-white">Prayer Times for {{ city }}</h1>
      <h2 class="date dark:text-emerald-300 font-bold">{{ country }}</h2>
      <h3 class="date dark:text-emerald-300 font-bold">{{ date }}</h3>

      <div class="prayer-times-list">
        <div 
          class="prayer-item dark:bg-gray-700 dark:hover:bg-indigo-900" 
          v-for="(prayer, index) in filteredPrayerTimes" 
          :key="index"
        >
          <h4 class="prayer-name dark:text-emerald-400">
            {{ isArabic ? getArabicPrayerName(prayer) : prayer }}
          </h4>
          <p class="prayer-time dark:text-white">{{ formatTimeToAmPm(prayerTimes[prayer]) }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

  




  <script setup>

  import { ref } from 'vue';
  import { computed } from 'vue';
  import { useTimeFormat } from '@/composables/useTimeFormat';
  import { useLanguageToggle } from '@/composables/useLanguageToggle';
  import { router } from '@inertiajs/vue3';
  import Spinner from './Spinner.vue';

const props = defineProps({
  prayerTimes: Object,
  date: String,
  country: String,
  city: String,
  error : String
});

const mainPrayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

// Use the composables
const { formatTimeToAmPm } = useTimeFormat();
const { isArabic, toggleLanguage, getArabicPrayerName } = useLanguageToggle();

// Filter the main prayers
const filteredPrayerTimes = computed(() => {
  return mainPrayers.filter(prayer => prayer in props.prayerTimes);
});

// isLoiding ref
const isLoading = ref(false);

router.on('start', () =>  isLoading.value = true);
  
router.on('finish', () =>  isLoading.value = false);

</script>
  



  
  <style>
  /* General Container */
  .prayer-time-container {
    max-width: 28rem;
    margin: 10rem auto;
    padding: 1.5rem;
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #6366f1;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: 800;
    color: #4f46e5;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .date {
    font-size: 1rem;
    color: #4b5563;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .prayer-times-list {
    display: grid;
    gap: 1rem;
  }
  
  .prayer-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    background-color: #f3f4f6;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
  }
  
  .prayer-name {
    font-weight: 800;
    color: #4f46e5;
  }
  
  .prayer-time {
    font-weight: 800;
    color: #4b5563;
  }
  
  .prayer-item:hover {
    background-color: #e0e7ff;
  }
  
  @media (min-width: 640px) {
    .prayer-time-container {
      max-width: 36rem;
    }
  }
  
  @media (min-width: 1024px) {
    .prayer-time-container {
      max-width: 44rem;
    }
  }
  
  @media (min-width: 1280px) {
    .prayer-time-container {
      max-width: 48rem;
    }
  }
  </style>
  