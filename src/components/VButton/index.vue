<template>
  <ElButton>Default</ElButton>
</template>

<script setup>
import { ElButton } from "element-plus";
import "element-plus/es/components/button/style/css";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
