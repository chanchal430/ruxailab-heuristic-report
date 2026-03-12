<template>
  <div class="section">
    <h2>Findings</h2>

    <FindingCard
      v-for="f in findings"
      :key="f.title"
      v-bind="f"
      @open="emit('open', f)"
    />
  </div>
</template>

<script setup>
  import FindingCard from './FindingCard.vue'

  defineProps(['findings'])
  const emit = defineEmits(['open'])
</script>
