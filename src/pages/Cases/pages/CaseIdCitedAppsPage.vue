<template>
  <section>
      <h1>CaseIdCitedAppsPage</h1>
    <!-- <p>{{ store.case }}</p> -->
  </section>
</template>

<script setup>
import { toRefs, ref, onMounted, computed } from 'vue'
import { useRouter, RouterView } from 'vue-router'
import { useGlobalStore } from '@/stores/cases'
import VButton from '@/components/Button/VButton.vue'
import VNavigation from "@/components/Navigation/VNavigation.vue";

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})

const store = useGlobalStore()
const { id } = toRefs(props)
const isLoading = ref(false)
const isError = ref(false)

const router = useRouter()

onMounted(async () => {
  try {
    isLoading.value = true
    await store.getCase(id.value)
  } catch (e) {
    isError.value = true
  } finally {
    isLoading.value = false
    isError.value = !Object.keys(store.case).length
  }
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 0 var(--el-menu-base-level-padding);
  min-height: var(--header-height);
}

.case-id__navigation {
  width: 500px;
}
</style>