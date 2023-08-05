<template>
  <ElButton>Default</ElButton>
</template>

<script setup>
import { ElButton } from "element-plus";
import "element-plus/es/components/button/style/css";

withDefaults(defineProps(), {
  loading: false,
  type: "",
});
</script>

<style lang="scss" scoped></style>
