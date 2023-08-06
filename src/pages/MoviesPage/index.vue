<template>
  <section v-if="!isError" class="Movies routerView">
    <h2 class="Movies-title">Movies</h2>

    <VCarousel
      :movies="useGlobalStore()?.movies"
      :isLoading="isLoading"
      @onClick="goToMoviePage"
    />
  </section>
  <VError v-if="isError" />
</template>

<script setup>
import { ref, onMounted, toRefs } from "vue";
import { useGlobalStore } from "@/stores/global";
import { useRouter } from "vue-router";

import VCarousel from "@/components/VCarousel/index.vue";
import VError from "@/components/VError/index.vue";

const props = defineProps({
  id: {
    type: String,
    default: "1",
  },
});

const { id } = toRefs(props);

const router = useRouter();
const isLoading = ref(false);
const isError = ref(false);

onMounted(async () => {
  try {
    isLoading.value = true;
    await useGlobalStore().getMovies(id.value);
  } catch (e) {
    isError.value = true;
  } finally {
    isLoading.value = false;
    isError.value = !useGlobalStore()?.movies?.length;
  }
});

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
