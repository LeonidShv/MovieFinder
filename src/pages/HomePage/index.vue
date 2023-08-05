<template>
  <main class="HomePage">
    <h1>Hello</h1>
    <ElButton>I am ElButton</ElButton>
  </main>
</template>

<script setup>
import api from "@/api";
import { ref, onMounted, computed } from "vue";
import { ElButton } from "element-plus";
import "element-plus/es/components/button/style/css";

onMounted(() => {
  // const response = api.getMovie();
  console.log("response");
});
</script>

<style lang="scss" scoped>
.HomePage {
  background: url(@/assets/images/homeBg.webp);
}
</style>
