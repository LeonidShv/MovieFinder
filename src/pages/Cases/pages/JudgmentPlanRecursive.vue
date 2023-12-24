<template>
  <div>
    <li v-if="data.elements.length">
      <a @click.prevent="scrollTo(data.content.replace(/\s/g, ''))">
        <span v-if="index">{{ index }}.</span>
        <span v-else class="p-r-16"></span>
        <span>{{ data.content }}</span>
      </a>
    </li>

    <JudgmentPlanRecursive
      v-for="(element, i) in data.elements"
      :key="i"
      :data="element" 
    />
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  },
  index: {
    type: Number,
    default: 0
  }
})

function scrollTo(elementId) {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // You can adjust this value based on your preference
    });
  }
}


</script>