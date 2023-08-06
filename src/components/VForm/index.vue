<template>
  <ElForm
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    size="default"
    status-icon
  >
    <slot />
  </ElForm>
</template>

<script setup>
import { ElForm } from "element-plus";
import "element-plus/es/components/form/style/css";

defineProps({
  ruleForm: {
    type: Object,
    default: () => {},
  },
  rules: {
    type: Object,
    default: () => {},
  },
});
</script>
