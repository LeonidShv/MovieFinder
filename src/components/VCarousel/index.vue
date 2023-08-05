<template>
  <ElCarousel :interval="4000" type="card" height="300px" class="Carousel">
    <ElCarouselItem
      v-for="{ Title, Poster, Director, Year, imdbID } in movies"
      :key="imdbID"
      class="Carousel-item"
    >
      <!-- <img :src="Poster" alt=""> -->
      <VSkeleton :loading="!Title" type="carousel" />
      <img
        v-if="Poster !== 'N/A' && Poster"
        :src="Poster"
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
import { ElCarousel, ElCarouselItem } from "element-plus";
import VSkeleton from "@/components/VSkeleton/index.vue";
import "element-plus/es/components/carousel/style/css";
import "element-plus/es/components/carousel-item/style/css";

defineProps({
  movies: {
    type: Array,
    default: () => [1, 2, 3],
  },
});
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
    padding: 8px 8px 32px;

    @include bg-dark-element;
  }
}
</style>
