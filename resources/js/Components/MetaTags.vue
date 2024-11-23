<template>
    <!-- Title -->
    <Head :title="`Prayer Times for ${city} - ${country}`" />
  
    <!-- Meta Description -->
    <meta
      name="description"
      :content="`Find daily prayer times in ${city}, ${country} for ${date}. Fajr: ${parayertimes['Fajr']}, Dhuhr: ${parayertimes['Dhuhr']}, Asr: ${parayertimes['Asr']}, Maghrib: ${parayertimes['Maghrib']}, Isha: ${parayertimes['Isha']}. Azan times for each prayer in ${city}, ${country}.`"
    />
  
    <!-- Canonical Link -->
    <link rel="canonical" :href="fullUrl" />
  
    <!-- Robots Meta Tag -->
    <meta name="robots" content="index, follow" />
  
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" :content="`Prayer Times for ${city} - ${country}`" />
    <meta
      property="og:description"
      :content="`Daily prayer times in ${city}, ${country} for ${date}. Fajr: ${parayertimes['Fajr']}, Dhuhr: ${parayertimes['Dhuhr']}, Asr: ${parayertimes['Asr']}, Maghrib: ${parayertimes['Maghrib']}, Isha: ${parayertimes['Isha']}.`"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" :content="fullUrl" />
  </template>
  
  <script setup>
  import { Head } from '@inertiajs/vue3';
  import { onMounted } from 'vue';
  
  const props = defineProps({
    city: String,
    country: String,
    date: String,
    parayertimes: Object,
    fullUrl: String,
  });
  
  onMounted(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": `Prayer Times in ${props.city}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": props.city,
        "addressCountry": props.country,
      },
      "description": `Daily prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha in ${props.city}, ${props.country}.`,
      "url": props.fullUrl,
    };
  
    // Create and inject the JSON-LD script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  });
  </script>
  
  