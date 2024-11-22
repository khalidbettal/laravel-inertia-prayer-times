import { defineStore } from 'pinia';
import { ref } from 'vue';
import debounce from 'lodash/debounce';
import axios from 'axios';

export const useCityStore = defineStore('cityStore', () => {
  const cityName = ref(''); // Holds the actual city name entered by the user
  const query = ref(''); // Query entered by the user
  const filteredCities = ref([]); // Stores the cities fetched from API
  const noResults = ref(false); // Flag for when no results are returned

  // Debounced function to fetch cities from the API
  const fetchCities = debounce(async (searchQuery) => {
    if (!searchQuery) {
      filteredCities.value = [];
      noResults.value = false;
      return;
    }

    try {
      const response = await axios.get('https://api.thecompaniesapi.com/v2/locations/cities', {
        params: { search: searchQuery },
      });

      filteredCities.value = response.data.cities.map((city) => ({
        id: city.id,
        name: city.name,
      }));

      noResults.value = filteredCities.value.length === 0;
    } catch (error) {
      console.error('Error fetching cities:', error);
      noResults.value = true;
    }
  }, 300);

  // Function to handle input changes and fetch cities
  const onInputChange = (event) => {
    query.value = event.target.value; 
    cityName.value = query.value; // Ensure cityName is updated with user input
    fetchCities(query.value);
  };

  return { cityName, query, filteredCities, noResults, onInputChange };
});