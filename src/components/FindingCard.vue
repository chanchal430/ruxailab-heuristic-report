<template>
  <div
    class="finding-card"
    :class="`severity-${severity.toLowerCase()}`"
    @click="$emit('open')"
  >
    <div class="card-header">
      <h3 class="issue-title">{{ title }}</h3>
      <span class="badge severity-badge">{{ severity }}</span>
    </div>

    <div class="heuristic-container">
      <span class="heuristic-tag"># {{ heuristic }}</span>
    </div>

    <hr class="divider" />

    <div class="card-body">
      <section class="content-section">
        <h4 class="section-label">Evidence</h4>
        <div v-if="image" class="evidence-image">
          <img :src="image" alt="Evidence screenshot" />
        </div>
        <p class="section-text">{{ evidence }}</p>
      </section>

      <section class="content-section">
        <h4 class="section-label">Recommendation</h4>
        <p class="section-text highlight">{{ recommendation }}</p>
      </section>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    severity: String, // e.g., 'Critical', 'Major', 'Minor'
    heuristic: String,
    evidence: String,
    recommendation: String,
    image: String,
  })
</script>

<style scoped>
  .finding-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    font-family: sans-serif;
    cursor: pointer;
    transition: transform 0.15s ease;
  }

  .finding-card:hover {
    transform: translateY(-3px);
  }

  /* Severity Styling Left Border */
  .severity-critical {
    border-left: 6px solid #dc2626;
  }
  .severity-major {
    border-left: 6px solid #f97316;
  }
  .severity-minor {
    border-left: 6px solid #eab308;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .issue-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: #1a202c;
  }

  .badge {
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .severity-critical .severity-badge {
    background: #fee2e2;
    color: #dc2626;
  }
  .severity-major .severity-badge {
    background: #ffedd5;
    color: #ea580c;
  }
  .severity-minor .severity-badge {
    background: #fef9c3;
    color: #ca8a04;
  }

  .heuristic-tag {
    font-size: 0.85rem;
    color: #64748b;
    font-weight: 500;
  }

  .divider {
    margin: 1.25rem 0;
    border: 0;
    border-top: 1px solid #f1f5f9;
  }

  .content-section {
    margin-bottom: 1rem;
  }

  .section-label {
    margin: 0 0 0.4rem 0;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #94a3b8;
    letter-spacing: 0.025em;
  }

  .section-text {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #334155;
  }

  .highlight {
    color: #0f172a;
    font-weight: 500;
  }

  .evidence-image {
    margin-bottom: 1rem;
  }

  .evidence-image img {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
  }
</style>
