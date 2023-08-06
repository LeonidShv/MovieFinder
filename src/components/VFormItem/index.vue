<template>
  <ElFormItem :label="label" :prop="prop">
    <slot />
  </ElFormItem>
</template>

<script setup>
import { ElFormItem } from "element-plus";
import "element-plus/es/components/form-item/style/css";

defineProps({
  label: {
    type: String,
    default: "",
  },
  prop: {
    type: String,
    default: "",
  },
});
</script>
