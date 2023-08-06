<template>
  <section class="Error routerView">
    <div>
      <p class="Error-text">
        An error occurred, please check your Internet connection or the
        relevance of the API key.
      </p>

      <p class="Error-text">
        If you can't solve this problem, write to our support team
        <a class="highlight" href="mailto: support@test.com"
          >support@test.com</a
        >
      </p>

      <RouterLink class="Error-link" :to="{ name: 'home' }">
        <VButton> Back to home page </VButton>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import VButton from "@/components/VButton/index.vue";
</script>

<style lang="scss" scoped>
.Error {
  display: flex;
  justify-content: center;
  align-items: center;

  &-text {
    font-size: 24px;
  }

  &-link {
    display: block;
    margin-top: 32px;
  }
}
</style>
