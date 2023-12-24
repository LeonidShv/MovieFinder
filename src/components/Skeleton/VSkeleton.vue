<template>
  <SkeletonDefault v-if="type === 'default'" :loading="loading" :styleConfig="styleConfig" />
  <SkeletonCarousel v-if="type === 'carousel'" :loading="loading" />
  <SkeletonDetails v-else-if="type === 'details'" :loading="loading" />
</template>

<script setup>
import SkeletonCarousel from "@/components/Skeleton/SkeletonCarousel.vue";
import SkeletonDetails from "@/components/Skeleton/SkeletonDetails.vue";
import SkeletonDefault from "@/components/Skeleton/SkeletonDefault.vue";

defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "default"
  },
  styleConfig: {
    type: Object,
    default: {}
  }
});
</script>
