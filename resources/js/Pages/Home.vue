<template>
  <AppLayout >
     <PrayerTime :country="country" :date="date" :city="city" :prayerTimes="prayerTimes" :error="error"/>
  </AppLayout>

</template>


<script setup>
 import { Link } from '@inertiajs/vue3'
 import AppLayout from '../Layouts/AppLayout.vue'
 import PrayerTime from '../Components/PrayerTime.vue'



 console.log(route().current());
 defineProps({
  prayerTimes: Object,
     date: String,
     country: String,
     city: String, 
     error: String

 })
</script>