<template>
  <header class="header">
    <VSwitch
      @update:v-model="onchange"
      v-model="isDark"
      :activeIcon="Moon"
      :inActiveIcon="Sunny"
      class="header__switch-theme"
    />
  </header>

  <main class="main">
    <VNavigation class="navigation" :navigation="navigation" />
    <RouterView />
  </main>

  <!-- <footer class="footer">
    <p>© Copyright <b>2023</b></p>

    <p>
      <strong>Movie<b class="highlight">Finder</b></strong>
    </p>
  </footer> -->
</template>

<script setup>
import { RouterView } from "vue-router";
import { onMounted, ref, watch } from 'vue'
import { Sunny, Moon } from "@element-plus/icons-vue";
import VNavigation from "@/components/Navigation/VNavigation.vue";
import VSwitch from "@/components/Switch/VSwitch.vue";


const navigation = ref([
  {
    name: 'information',
    icon: '',
    path: '/',
    label: 'Information'
  },
  {
    name: 'cases',
    icon: '',
    path: '/cases',
    label: 'Cases'
  },
  {
    name: 'conclusions',
    icon: '',
    path: '/conclusions',
    label: 'Conclusions'
  },
  {
    name: 'parties',
    icon: '',
    path: '/parties',
    label: 'Parties'
  },
  {
    name: 'representatives',
    icon: '',
    path: '/representatives',
    label: 'Representatives'
  },
  {
    name: 'scl',
    icon: '',
    path: '/scl',
    label: 'SCL'
  }
])

const isDark = ref(true)

function onchange(value) {
  isDark.value = value;
}

watch(isDark, (newIsDark) => {
  const className = newIsDark ? "dark" : "light";
  document.querySelector("html").setAttribute("class", className);
});

onMounted(async () => {
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

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 0 var(--el-menu-base-level-padding);
  min-height: var(--header-height);
  background-color: var(--bg-block);
  box-shadow: var(--shadow-header);
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  &__switch-theme {
    margin-left: auto;
  }

  @include tablet-lower {
    padding: 0 36px;
  }
}

.main {
  display: flex;
  height: calc(100vh - var(--header-height));

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
