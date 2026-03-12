<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal">
      <button class="close-btn" @click="$emit('close')">✕</button>

      <h2 class="title">{{ finding.title }}</h2>

      <div class="meta">
        <span class="severity">{{ finding.severity }}</span>
        <span class="heuristic"># {{ finding.heuristic }}</span>
      </div>

      <div v-if="finding.image" class="image">
        <img :src="finding.image" />
      </div>

      <section>
        <h4>Evidence</h4>
        <p>{{ finding.evidence }}</p>
      </section>

      <section>
        <h4>Recommendation</h4>
        <p class="recommendation">{{ finding.recommendation }}</p>
      </section>
    </div>
  </div>
</template>
<script setup>
  defineProps({
    finding: {
      type: Object,
      required: true,
    },
  })

  defineEmits(['close'])
</script>
<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 23, 42, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }

  .modal {
    background: white;
    width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 2rem;
    border-radius: 16px;
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    border: none;
    background: transparent;
    font-size: 18px;
    cursor: pointer;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .image img {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    margin-bottom: 1.5rem;
  }

  section {
    margin-bottom: 1.25rem;
  }

  .recommendation {
    font-weight: 500;
  }
</style>
