<template>
    <h1>Test</h1>
    <p>{{ city }}</p>
</template>

<script setup>
  defineProps({
      city: String
  })
</script>