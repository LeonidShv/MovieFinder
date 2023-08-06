<template>
  <ElButton class="Button">
    <slot />
  </ElButton>
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

<style lang="scss" scoped>
.Button.el-button {
  --el-border-color: var(--border);
  --el-button-text-color: var(--text-color) --el-border-color-hover:
    var(--el-color-primary);
}
</style>
