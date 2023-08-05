<template>
  <section class="Movies">
    <h1 class="Movies-title">Movies:</h1>

    <VCarousel :movies="useGlobalStore()?.movies" />
  </section>
</template>

<script setup>
import { useGlobalStore } from '@/stores/global'
import { ref, onMounted, computed } from "vue";

import VCarousel from "@/components/VCarousel/index.vue";

onMounted(() => {
  console.log(useGlobalStore()?.movies);
});
</script>

<style lang="scss" scoped>
.Movies {
  &-title {
    margin: 16px 0 72px;
  }
}
</style>
