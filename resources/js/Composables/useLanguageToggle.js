// src/composables/useLanguageToggle.js

import { ref } from 'vue';

export function useLanguageToggle() {
  const isArabic = ref(false);

  function toggleLanguage() {
    isArabic.value = !isArabic.value;
  }

  function getArabicPrayerName(englishName) {
    const arabicNames = {
      "Fajr": "الفجر",
      "Dhuhr": "الظهر",
      "Asr": "العصر",
      "Maghrib": "المغرب",
      "Isha": "العشاء"
    };
    return arabicNames[englishName] || englishName;
  }

  return { isArabic, toggleLanguage, getArabicPrayerName };
}
