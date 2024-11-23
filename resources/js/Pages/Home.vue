<template>
    <MetaTags :city="city" :country="country" :date="date" :parayertimes="prayerTimes" :fullUrl="fullUrl"/>
  <AppLayout >
     <PrayerTime :country="country" :date="date" :city="city" :prayerTimes="prayerTimes" :error="error"/>
  </AppLayout>

</template>


<script setup>
 import { Link , Head, usePage} from '@inertiajs/vue3'
 import AppLayout from '../Layouts/AppLayout.vue'
 import PrayerTime from '../Components/PrayerTime.vue'
 import MetaTags from '../Components/MetaTags.vue'


 // Get the current page URL
 const url = usePage().url
 // Get the full URL by combining the origin with the relative path
 const fullUrl = `${window.location.origin}${url}`;

 console.log(fullUrl);
 
 const props = defineProps({
  prayerTimes: Object,
     date: String,
     country: String,
     city: String, 
     error: String

 })

 
</script>