<template>
  <!-- <el-menu
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
  </el-menu> -->

  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    :collapse="false"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item 
      v-for="({name, icon}, i) in navigation"
      :key="i"
      :index="i"
      @click="goToPage(name)"
    >
      <el-icon v-if="icon"><icon-menu /></el-icon>
      <span>{{ name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMenu, ElIcon, ElMenuItem } from 'element-plus'
// import { Sunny, Moon } from '@element-plus/icons-vue'

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

import 'element-plus/es/components/menu/style/css'
import 'element-plus/es/components/menu-item/style/css'

import VSwitch from '@/components/VSwitch/index.vue'

const activeIndex = ref('1')

defineProps({
  navigation: {
    type: Array,
    default: () => [],
  }
});

const router = useRouter()
const isDark = ref(true)

function goToPage(name) {
  router.push({ name })
}

function onchange(value) {
  isDark.value = value
}

watch(isDark, (newIsDark) => {
  const className = newIsDark ? 'dark' : 'light'
  document.querySelector('html').setAttribute('class', className)
})
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
