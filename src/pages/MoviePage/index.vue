<template>
  <section v-if="!isError" class="Movie routerView">
    <VSkeleton class="Movie-skeleton" :loading="isLoading" type="details" />
    <h2 class="Movie-title">
      {{ movie.Title }}
    </h2>
    <div class="Movie-body" v-show="!isLoading">
      <img
        :src="movie.Poster"
        :alt="`Poster of '${movie.Title}' film`"
        class="Movie-poster"
      />
      <div class="Movie-info">
        <p class="Movie-text">
          <span class="Movie-text--shadow">Director:</span> {{ movie.Director }}
        </p>

        <p class="Movie-text">
          <span class="Movie-text--shadow">Year:</span> {{ movie.Year }}
        </p>

        <p class="Movie-text">
          <span class="Movie-text--shadow">Genre:</span> {{ movie.Genre }}
        </p>

        <p class="Movie-text">
          <span class="Movie-text--shadow">Runtime:</span> {{ movie.Runtime }}
        </p>

        <p class="Movie-text">
          <span class="Movie-text--shadow">Country:</span> {{ movie.Country }}
        </p>

        <p class="Movie-text">
          <span class="Movie-text--shadow">Actors:</span> {{ movie.Actors }}
        </p>
      </div>
    </div>
  </section>
  <VError v-if="isError" />
</template>

<script setup>
import { toRefs, ref, onMounted, computed } from "vue";
import { useGlobalStore } from "@/stores/global";
import VError from "@/components/VError/index.vue";

import VSkeleton from "@/components/VSkeleton/index.vue";

const props = defineProps({
  id: {
    type: String,
    default: "1",
  },
});

const { id } = toRefs(props);
const store = useGlobalStore();
const isLoading = ref(false);
const isError = ref(false);

onMounted(async () => {
  // INFO: props.id === route.params.id
  try {
    isLoading.value = true;
    await store.getMovieById(id.value);
  } catch (e) {
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
});

const movie = computed(() => store.movie);
</script>

<style lang="scss" scoped>
.Movie {
  &-title {
    margin: 16px 0 36px;
  }

  &-body {
    display: flex;
    gap: 24px;

    @include tablet-lower {
      flex-direction: column;
    }
  }

  &-skeleton {
    margin-top: 80px;
  }

  &-poster {
    width: 50%;
    height: 460px;
    object-fit: cover;

    @include tablet-lower {
      width: 280px;
      height: auto;
    }
  }

  &-info {
    width: 50%;
  }

  &-text {
    margin-bottom: 16px;

    &--shadow {
      color: var(--span-text);
    }
  }
}
</style>
