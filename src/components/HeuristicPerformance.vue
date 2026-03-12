<template>
  <div class="section">
    <h2>Heuristic Performance</h2>

    <div v-for="h in heuristics" :key="h.name" class="heuristic">
      <div class="label">
        {{ h.name }}
      </div>

      <div class="bar">
        <div class="fill" :style="{ width: h.percentage + '%' }"></div>
      </div>

      <span>{{ h.percentage }}%</span>
    </div>
  </div>
</template>

<script setup>
  defineProps(['heuristics'])
</script>

<style scoped>
  .section {
    margin-top: 30px;
  }

  .heuristic {
    margin-bottom: 10px;
  }

  .bar {
    background: #eee;
    height: 10px;
    width: 100%;
  }

  .fill {
    background: #4caf50;
    height: 10px;
  }

  .label {
    font-weight: bold;
  }
</style>
