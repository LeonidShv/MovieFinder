<template>
  <section class="Movie">
    <h2 class="Movie-title">
      {{ movie.Title }}
    </h2>

    <div class="Movie-body">
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
</template>

<script setup>
import { toRefs, onMounted, computed } from "vue";
import { useGlobalStore } from "@/stores/global";

const props = defineProps({
  id: {
    type: String,
    default: "1",
  },
});

const { id } = toRefs(props);
const store = useGlobalStore();

onMounted(async () => {
  // INFO: props.id === route.params.id
  await store.getMovieById(id.value);
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

  &-poster {
    @include tablet-lower {
      width: 280px;
      height: auto;
    }
  }

  &-text {
    margin-bottom: 16px;

    &--shadow {
      color: var(--disabled-block);
    }
  }
}
</style>
