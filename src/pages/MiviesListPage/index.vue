<template>
    <main>
      <h1>Hello</h1>
    </main>
  </template>
  
  <script setup>
  import api from "@/api"
  import { ref, onMounted, computed } from 'vue'
  
  onMounted(() => {
    // const response = api.getMovie();
    console.log('response');
  })
  </script>
  
  <style lang="scss" scoped>
    h1 {
      color: var(--text-color);
  
      @include tablet-lower {
        color: var(--brand-highlight);
      }
    }
  </style>