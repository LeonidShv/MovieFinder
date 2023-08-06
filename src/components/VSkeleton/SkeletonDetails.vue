<template>
  <ElSkeleton class="Skeleton" :loading="loading" animated>
    <template #template>
      <div class="Skeleton-body">
        <ElSkeletonItem variant="image" class="Skeleton-itemImg" />
        <div class="Skeleton-itemText">
          <ElSkeletonItem variant="text" style="width: 50%" />
          <ElSkeletonItem variant="text" />
          <ElSkeletonItem variant="text" style="width: 30%" />
          <ElSkeletonItem variant="text" style="width: 50%" />
          <ElSkeletonItem variant="text" />
          <ElSkeletonItem variant="text" style="width: 50%" />
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
  &-body {
    display: flex;
    width: 100%;
    gap: 24px;

    @include tablet-lower {
      flex-direction: column;
    }
  }

  &-itemText {
    // .el-skeleton__item.el-skeleton__text {
    //   background: linear-gradient(90deg, #e7e9ed 25%, #fff 37%, #d5d7db 63%);
    //   background-size: 400% 100%;
    // }
  }

  &-itemImg {
    width: 50%;
    height: 460px;

    @include tablet-lower {
      width: 280px;
      height: 430px;
    }
  }

  &-itemText {
    display: flex;
    flex-direction: column;
    gap: 24px 0;
    width: 50%;
  }
}
</style>
