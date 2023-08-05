<template>
  <ElCarousel :interval="4000" type="card" height="300px" class="Carousel">
    <ElCarouselItem
      v-for="{ Title, Poster, Director, Year, imdbID } in movies"
      :key="imdbID"
      class="Carousel-item"
    >
      <!-- <img :src="Poster" alt=""> -->
      <VSkeleton :loading="true" type="carousel" />
      <img src="" class="Carousel-itemImg" />
      <div class="Carousel-body">
        <h3>{{ Title }}</h3>
        <p>{{ Director }}</p>
        <p>{{ Year }}</p>
      </div>
    </ElCarouselItem>
  </ElCarousel>
</template>

<script setup>
import { ref } from "vue";
import { ElCarousel, ElCarouselItem } from "element-plus";
import VSkeleton from "@/components/VSkeleton/index.vue";
import "element-plus/es/components/carousel/style/css";
import "element-plus/es/components/carousel-item/style/css";

// defineProps({
//   movies: {
//     type: Array,
//     default: () => [1,2,3]
//   },
// })

const movies = ref([1, 2, 3]);
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

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--bg-block);
      opacity: 0.5;
    }
  }
}
</style>
