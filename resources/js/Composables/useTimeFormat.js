// src/composables/useTimeFormat.js

export function useTimeFormat() {
    function formatTimeToAmPm(time) {
      const [hour, minute] = time.split(':');
      const date = new Date();
      date.setHours(hour, minute);
      
      return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }).format(date);
    }
  
    return { formatTimeToAmPm };
  }
  