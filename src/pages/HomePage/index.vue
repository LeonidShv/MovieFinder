<template>
  <main class="HomePage routerView">
    <div class="HomePage-block">
      <h1 class="HomePage-title">Unlimited movies, series and other content</h1>
      <div class="HomePage-controls">
        <VInput
          v-model="movieTitle"
          @keyup.enter="getMovies"
          placeholder="Film title"
          :icon="Search"
        />
        <VButton @click="getMovies">Search</VButton>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { Search } from "@element-plus/icons-vue";

import VInput from "@/components/VInput/index.vue";
import VButton from "@/components/VButton/index.vue";

const router = useRouter();

const movieTitle = ref("");

async function getMovies() {
  router.push({ name: "movies", params: { id: movieTitle.value } });
}
</script>

<style lang="scss" scoped>
.HomePage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(@/assets/images/homeBg.webp);

  &-title {
    margin-bottom: 16px;
  }

  &-block {
    padding: 16px;
    position: relative;
    z-index: 1;

    @include bg-pseudo-element;
  }

  &-controls {
    display: flex;
    gap: 16px;
  }
}
</style>
