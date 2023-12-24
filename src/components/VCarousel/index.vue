<template>
  <ElCarousel
    :interval="3000"
    :type="isMobile ? '' : 'card'"
    arrow="always"
    height="300px"
    class="Carousel"
    trigger="click"
  >
    <ElCarouselItem
      v-for="{ Title, Poster, Director, Year, imdbID } in moviesList"
      :key="imdbID"
      @click="onClick(imdbID)"
      class="Carousel-item"
    >
      <VSkeleton :loading="isLoading" type="carousel" />
      <img
        v-if="Poster !== 'N/A' && !isLoading"
        :src="Poster"
        :alt="`Poster for the '${Title}' film`"
        class="Carousel-itemImg"
      />
      <div class="Carousel-body">
        <h3>{{ Title }}</h3>
        <p>{{ Director }}</p>
        <p>{{ Year }}</p>
      </div>
    </ElCarouselItem>
  </ElCarousel>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { ElCarousel, ElCarouselItem } from "element-plus";
import VSkeleton from "@/components/Skeleton/VSkeleton.vue";
import "element-plus/es/components/carousel/style/css";
import "element-plus/es/components/carousel-item/style/css";

const emit = defineEmits(["onClick"]);

const props = defineProps({
  movies: {
    type: Array,
    default: () => [],
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

// INFO: moviesList for the skeleton component (loading)
const moviesList = computed(() =>
  props.movies.length ? props.movies : [1, 2, 3],
);
const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.screen.width <= 768;
});

function onClick(id) {
  emit("onClick", id);
}
</script>

<style lang="scss" scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.Carousel {
  position: relative;
  box-shadow: var(--shadow-carousel);

  &-item {
    display: flex;
    align-items: flex-end;
  }

  &-itemImg {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &-body {
    width: 100%;
    position: relative;
    z-index: 2;
    padding: 8px 8px 48px;

    @include bg-pseudo-element;
  }

  :deep(.el-carousel__button) {
    background: var(--border);
  }
}
</style>
