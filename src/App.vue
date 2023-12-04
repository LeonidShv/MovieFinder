<template>
  <header class="header">
    <!-- <VToggle
      v-model="isDark"
      @update:model-value="changeTheme"
      uncheckedIcon="light_mode"
      checkedIcon="dark_mode"
      class="header-themeToggle"
    /> -->
  </header>

  <!-- <section class="routerView"> -->
  <main class="main">
    <VNavigation class="navigation" :navigation="navigation" />
    <RouterView />
  </main>
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
import { onMounted, ref } from 'vue'
import VNavigation from "@/components/VNavigation/index.vue";
import { useGlobalStore } from "@/stores/cases";

const navigation = ref([
  {
    name: 'information',
    icon: ''
  },
  {
    name: 'cases',
    icon: ''
  },
  {
    name: 'conclusions',
    icon: ''
  },
  {
    name: 'parties',
    icon: ''
  },
  {
    name: 'representatives',
    icon: ''
  },
  {
    name: 'scl',
    icon: ''
  }
])

onMounted(async () => {
  console.log(1);
  try {
    // isLoading.value = true;
    const page = 1;
    const limit = 10;
    // await useGlobalStore().getCasesList(page, limit);
    // await useGlobalStore().getCase('001-91993');
    // await useGlobalStore().getCaseDocsList('001-91993');
    // await useGlobalStore().getCaseDocsDoctype('001-91993', 'parsed_judgment');
    // await useGlobalStore().getCaseDocsDoctype('001-91993', 'judgment');
    // await useGlobalStore().getCaseCitedapps('001-91993');
    
  } catch (e) {
    // isError.value = true;
    console.log(e);
  } finally {
    // console.log('getCasesList: ',useGlobalStore().casesList);
    // console.log('getCase: ',useGlobalStore().case);
    // console.log('getCaseDocsList: ',useGlobalStore().caseDocsList);
    // console.log('getCaseDocsDoctype: ',useGlobalStore().caseDocsDoctype);
    // console.log('getCaseDocsDoctype: ',useGlobalStore().caseDocsDoctype);
    // console.log('getCaseDocsDoctype: ',useGlobalStore().caseCitedApps);
    
    
    // isLoading.value = false;
    // isError.value = !useGlobalStore()?.cases?.length;
  }
});

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

.main {
  display: flex;

  .navigation {
    flex: 0 0 200px;
  }

  :deep(.routerView) {
    flex: 1;
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
