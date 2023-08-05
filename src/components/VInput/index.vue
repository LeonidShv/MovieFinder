<template>
     <el-input
        @update:model-value="(value) => $emit('update:v-model', value)"
        :placeholder="placeholder"
        :suffix-icon="icon"
      />
</template>

<script setup>
import { ElInput } from "element-plus";
import "element-plus/es/components/input/style/css";

defineEmits(['update:v-model'])

defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  icon: {
    type: Object,
    default: () => {}
  },
})

</script>

<style lang="scss" scoped>

</style>