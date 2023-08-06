<template>
  <el-menu
    :default-active="activeIndex"
    class="Navigation"
    mode="horizontal"
    router
  >
    <p class="nav-logo">Movie<b class="highlight">Finder</b></p>
    <el-menu-item class="Navigation-item--indent" index="/">Home</el-menu-item>
    <el-menu-item index="/add-movie">Add movie</el-menu-item>
    <VSwitch
      class="Navigation-modeSwitch"
      @update:v-model="onchange"
      v-model="isDark"
      :activeIcon="Moon"
      :inActiveIcon="Sunny"
    />
  </el-menu>
</template>

<script setup>
import { ref, watch } from "vue";

import { ElMenu } from "element-plus";
import { ElMenuItem } from "element-plus";
import { Sunny, Moon } from "@element-plus/icons-vue";

import "element-plus/es/components/menu/style/css";
import "element-plus/es/components/menu-item/style/css";

import VSwitch from "@/components/VSwitch/index.vue";

const activeIndex = ref("1");

withDefaults(defineProps(), {
  loading: false,
  type: "",
});

const isDark = ref(true);

function onchange(value) {
  isDark.value = value;
}

watch(isDark, (newIsDark) => {
  const className = newIsDark ? "dark" : "light";
  document.querySelector("html").setAttribute("class", className);
});
</script>

<style lang="scss" scoped>
.Navigation {
  align-items: center;
  flex-grow: 1;

  &-item {
    &--indent {
      margin-left: auto;
    }
  }

  &-modeSwitch {
    height: 100%;
  }

  &.el-menu--horizontal.el-menu {
    border: 0;
  }

  &.el-menu {
    --el-menu-bg-color: var(--bg-block);
  }

  :deep(.el-sub-menu) {
    margin-left: auto;
  }
}

.Navigation .el-menu--horizontal.el-menu--popup-container,
.el-menu.el-menu--popup.el-menu--popup-bottom-start {
  .Navigation-modeSwitch {
    height: unset;
    margin-left: 9px;
  }
}
</style>
