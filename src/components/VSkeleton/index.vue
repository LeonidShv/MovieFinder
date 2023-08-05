<template>
    <SkeletonCarousel
        v-if="type === 'carousel'"
        :loading="loading"
    />

    <SkeletonDetails 
        v-else-if="type === 'details'"
        :loading="loading"
    />
</template>

<script setup>
import  SkeletonCarousel  from "@/components/VSkeleton/SkeletonCarousel.vue";
import  SkeletonDetails  from "@/components/VSkeleton/SkeletonDetails.vue";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'carousel',
  },
});
</script>