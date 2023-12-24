<template>
  <section v-if="!isError" class="parties-page router-view">
    <VSkeleton class="Movie-skeleton" :loading="isLoading" type="details" />
    <h2 class="title">
      parties
    </h2>
    <div v-show="!isLoading">

    </div>
  </section>
  <VError v-if="isError" />
</template>

<script setup>
import { toRefs, ref, onMounted, computed } from "vue";
// import { useGlobalStore } from "@/stores/global";
import VError from "@/components/VError/index.vue";

import VSkeleton from "@/components/Skeleton/VSkeleton.vue";

const props = defineProps({
  id: {
    type: String,
    default: "1",
  },
});

const { id } = toRefs(props);
// const store = useGlobalStore();
const isLoading = ref(false);
const isError = ref(false);

// onMounted(async () => {
//   try {
//     isLoading.value = true;
//     await store.getMovieById(id.value);
//   } catch (e) {
//     isError.value = true;
//   } finally {
//     isLoading.value = false;
//     isError.value = !movie.value?.Title;
//   }
// });

// const movie = computed(() => store.movie);
</script>
