<template>
  <section class="Movies">
    <h2 class="Movies-title">Movies</h2>

    <VCarousel :movies="useGlobalStore()?.movies" @onClick="goToMoviePage" />
  </section>
</template>

<script setup>
import { useGlobalStore } from "@/stores/global";
import { useRouter } from "vue-router";

import VCarousel from "@/components/VCarousel/index.vue";

const router = useRouter();

function goToMoviePage(id) {
  router.push({ name: "movie", params: { id } });
}
</script>

<style lang="scss" scoped>
.Movies {
  &-title {
    margin: 16px 0 72px;
  }
}
</style>
