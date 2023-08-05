<template>
  <header class="header">
    <p class="header-logo">Movie<b class="highlight">Finder</b></p>

    <!-- <VToggle
      v-model="isDark"
      @update:model-value="changeTheme"
      uncheckedIcon="light_mode"
      checkedIcon="dark_mode"
      class="header-themeToggle"
    /> -->
  </header>

  <RouterView class="routerView" />

  <footer class="footer">
    <p>© Copyright <b>2023</b></p>

    <p>
      <strong>Movie<b class="highlight">Finder</b></strong>
    </p>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 0 80px;
  line-height: var(--header-height);
  background-color: var(--bg-block);
  box-shadow: var(--shadow-header);

  // &-themeToggle {
  //   margin-left: auto;
  //   margin-right: 40px;
  // }
}

.routerView {
  height: calc(100vh - var(--header-height) - var(--footer-height));
  overflow: auto;
  padding: 24px 80px;
}

.footer {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  background-color: var(--bg-block);
  padding: 0 80px;
  line-height: var(--footer-height);
  box-shadow: var(--shadow-footer);
}
</style>
