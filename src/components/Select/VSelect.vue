<template>
  <el-select
    @update:model-value="(value) => $emit('update:v-model', value)"
    multiple
    collapse-tags
    :placeholder="placeholder"
    style="width: 240px"
  >
    <el-option
      v-for="{value, label, disabled} in options"
      :key="value"
      :label="label"
      :value="value"
      :disabled="disabled"
    />
  </el-select>
</template>

<script setup>
import { ElSelect, ElOption } from 'element-plus'
import 'element-plus/es/components/select/style/css'
// import 'element-plus/es/components/select-option/style/css'

defineEmits(["update:v-model"]);

defineProps({
  options: {
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    default: "",
  }
})
</script>
