<template>
  <div class="filters-container">
    <div class="filter-group">
      <span class="filter-label">Severity</span>
      <div class="button-group">
        <button
          v-for="opt in severityOptions"
          :key="opt"
          :class="['filter-btn', { active: modelValue.severity === opt }]"
          @click="updateFilter('severity', opt)"
        >
          {{ opt }}
        </button>
      </div>
    </div>

    <div class="filter-group">
      <span class="filter-label">Heuristic</span>
      <select
        class="filter-select"
        :value="modelValue.heuristic"
        @change="updateFilter('heuristic', $event.target.value)"
      >
        <option v-for="h in heuristicOptions" :key="h" :value="h">
          {{ h }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    modelValue: {
      type: Object,
      default: () => ({ severity: 'All', heuristic: 'All' }),
    },
  })

  const emit = defineEmits(['update:modelValue'])

  const severityOptions = ['All', 'Critical', 'Major', 'Minor']
  const heuristicOptions = [
    'All',
    'User Control and Freedom',
    'Consistency',
    'Error Prevention',
  ]

  const updateFilter = (key, value) => {
    emit('update:modelValue', { ...props.modelValue, [key]: value })
  }
</script>

<style scoped>
  .filters-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem 1.5rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    align-items: center;
    margin-bottom: 2rem;
  }

  .filter-group {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #64748b;
    letter-spacing: 0.05em;
  }

  /* Segmented Control Styling */
  .button-group {
    display: flex;
    background: #e2e8f0;
    padding: 3px;
    border-radius: 8px;
  }

  .filter-btn {
    border: none;
    background: transparent;
    padding: 6px 14px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #475569;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .filter-btn.active {
    background: white;
    color: #0f172a;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  /* Select Styling */
  .filter-select {
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    background: white;
    color: #334155;
    font-size: 0.9rem;
    min-width: 200px;
    cursor: pointer;
  }

  .filter-select:focus {
    outline: 2px solid #38bdf8;
    border-color: transparent;
  }
</style>
