<template>
  <ElSkeleton class="Skeleton" :loading="loading" animated>
    <template #template>
      <ElSkeletonItem variant="image" class="Skeleton-itemImg" />
      <div class="Skeleton-body">
        <ElSkeletonItem variant="text" style="width: 50%" />
        <div>
          <ElSkeletonItem variant="text" style="margin-right: 16px" />
          <ElSkeletonItem variant="text" style="width: 30%" />
        </div>
      </div>
    </template>
  </ElSkeleton>
</template>

<script setup>
import { ElSkeleton } from "element-plus";
import { ElSkeletonItem } from "element-plus";

import "element-plus/es/components/skeleton/style/css";
import "element-plus/es/components/skeleton-item/style/css";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.Skeleton {
  position: absolute;
  width: 100%;
  height: 100%;

  &-itemImg {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &-body {
    width: 100%;
    position: absolute;
    bottom: 20px;
    z-index: 2;
    padding: 8px 8px 32px;
  }
}
</style>
