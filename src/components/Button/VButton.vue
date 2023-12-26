<template>
  <ElButton class="Button" v-if="type === 'default'">
    <slot />
  </ElButton>
  <router-link
    v-else-if="type === 'back'"
    :to="{ name: toName }"
    class="button__link"
  >
    <ArrowLeft class="button__icon" />Back
    <span>|</span>
  </router-link>
</template>

<script setup>
import { ElButton } from "element-plus";
import { ArrowLeft } from "@element-plus/icons-vue";
import "element-plus/es/components/button/style/css";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "default",
    validator(value) {
      return ["default", "back"].includes(value);
    },
  },
  toName: {
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

.button {
  &__icon {
    width: 16px;
    height: auto;
    margin-right: 8px;
  }

  &__link {
    display: flex;
    align-items: center;
    line-height: 24px;

    span {
      margin-left: 8px;
      font-size: 24px;
    }
  }
}
</style>
