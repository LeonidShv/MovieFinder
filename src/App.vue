<template>
  <header class="header">
    <VNavigation />
    <!-- <VToggle
      v-model="isDark"
      @update:model-value="changeTheme"
      uncheckedIcon="light_mode"
      checkedIcon="dark_mode"
      class="header-themeToggle"
    /> -->
  </header>

  <!-- <section class="routerView"> -->
  <RouterView />
  <!-- </section> -->

  <footer class="footer">
    <p>© Copyright <b>2023</b></p>

    <p>
      <strong>Movie<b class="highlight">Finder</b></strong>
    </p>
  </footer>
</template>

<script setup>
import { RouterView } from "vue-router";
import VNavigation from "@/components/VNavigation/index.vue";
</script>

<style lang="scss">
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
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  // &-themeToggle {
  //   margin-left: auto;
  //   margin-right: 40px;
  // }

  @include tablet-lower {
    padding: 0 36px;
  }
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

  @include tablet-lower {
    padding: 0 36px;
  }
}
</style>
