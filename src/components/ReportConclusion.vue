<template>
  <div class="section">
    <h2>Expert Conclusion</h2>
    <p>{{ conclusion }}</p>
  </div>
</template>

<script setup>
  defineProps(['conclusion'])
</script>

<style scoped>
  .section {
    background: white;
    padding: 24px;
    border-radius: 12px;
  }

  .conclusion-text {
    line-height: 1.7;
    color: #475569;
  }
</style>
