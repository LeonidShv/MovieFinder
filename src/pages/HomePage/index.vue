<template>
  <main>
    <h1>Hello</h1>
  </main>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  h1 {
    color: var(--text-color);

    @include tablet-lower {
      color: var(--brand-highlight);
    }
  }
</style>