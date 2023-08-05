<template>
  <main class="HomePage">
    <div class="HomePage-block">
      <h1 class="HomePage-title">Unlimited movies, series and other content</h1>
      <div class="HomePage-controls">
        <VInput v-model="movieTitle" placeholder="Film title" :icon="Search" />
        <VButton @click="getMovies">Default</VButton>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useGlobalStore } from "@/stores/global";

import { Search } from "@element-plus/icons-vue";

import VInput from "@/components/VInput/index.vue";
import VButton from "@/components/VButton/index.vue";

const router = useRouter();

onMounted(() => {
  // const response = api.getMovie();
  console.log("response");
});

const movieTitle = ref("");

async function getMovies() {
  await useGlobalStore().getMovies();
  router.push({ name: "movies" });
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

    @include bg-dark-element;
  }

  &-controls {
    display: flex;
    gap: 16px;
  }
}
</style>
