<template>
  <div class="executive-summary">
    <header class="summary-header">
      <h2 class="title">Executive Summary</h2>
      <div class="score-container">
        <span class="score-value">{{ score }}%</span>
        <span class="score-label">Overall Usability Score</span>
      </div>
    </header>

    <div class="severity-summary">
      <div class="severity-card critical">
        <span class="severity-number">{{ severityStats.Critical }}</span>
        <span class="severity-label">Critical Issues</span>
      </div>

      <div class="severity-card major">
        <span class="severity-number">{{ severityStats.Major }}</span>
        <span class="severity-label">Major Issues</span>
      </div>

      <div class="severity-card minor">
        <span class="severity-number">{{ severityStats.Minor }}</span>
        <span class="severity-label">Minor Issues</span>
      </div>
    </div>

    <div class="summary-grid">
      <section class="summary-section">
        <h3 class="section-title">Top Issues</h3>
        <ol class="issues-list">
          <li v-for="(issue, index) in topIssues" :key="index">
            {{ issue }}
          </li>
        </ol>
      </section>

      <section class="summary-section">
        <h3 class="section-title">Heuristic Performance</h3>
        <div class="performance-bars">
          <div
            v-for="item in mappedHeuristics"
            :key="item.label"
            class="bar-group"
          >
            <div class="bar-info">
              <span class="bar-label">{{ item.label }}</span>
              <span class="bar-percentage">{{ item.value }}%</span>
            </div>
            <div class="bar-track">
              <div
                class="bar-fill"
                :style="{ width: item.value + '%' }"
                :class="getBarColor(item.value)"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    score: Number,
    findings: Array,
    heuristics: Array,
  })

  const topIssues = computed(
    () => props.findings?.slice(0, 3).map((f) => f.title) || [],
  )

  const mappedHeuristics = computed(
    () =>
      props.heuristics?.map((h) => ({
        label: h.name,
        value: h.percentage,
      })) || [],
  )

  const getBarColor = (val) => {
    if (val < 30) return 'low'
    if (val < 60) return 'mid'
    return 'high'
  }

  const severityStats = computed(() => {
    const stats = {
      Critical: 0,
      Major: 0,
      Minor: 0,
    }

    props.findings?.forEach((f) => {
      if (stats[f.severity] !== undefined) {
        stats[f.severity]++
      }
    })

    return stats
  })
</script>

<style scoped>
  .executive-summary {
    background: #1e293b; /* Dark theme for contrast against white cards */
    color: #f8fafc;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .summary-header {
    text-align: center;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid #334155;
    padding-bottom: 1.5rem;
  }

  .title {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #94a3b8;
    margin-bottom: 1rem;
  }

  .score-value {
    display: block;
    font-size: 4rem;
    font-weight: 800;
    color: #38bdf8;
    line-height: 1;
  }

  .score-label {
    font-size: 0.875rem;
    color: #94a3b8;
  }

  .summary-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .section-title {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
    color: #f1f5f9;
    border-left: 3px solid #38bdf8;
    padding-left: 0.75rem;
  }

  /* Issues List Styling */
  .issues-list {
    padding-left: 1.2rem;
    color: #cbd5e1;
  }

  .issues-list li {
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
  }

  /* Custom CSS Bars */
  .bar-group {
    margin-bottom: 1rem;
  }

  .bar-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    margin-bottom: 0.4rem;
    color: #94a3b8;
  }

  .bar-track {
    height: 8px;
    background: #334155;
    border-radius: 10px;
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    transition: width 0.5s ease-out;
  }

  .low {
    background: #ef4444;
  }
  .mid {
    background: #f59e0b;
  }
  .high {
    background: #10b981;
  }

  .severity-summary {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 28px;
  }

  .severity-card {
    padding: 12px 20px;
    border-radius: 10px;
    text-align: center;
  }

  .severity-number {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .severity-label {
    font-size: 0.75rem;
    color: #040404;
    font-weight: 600;
  }

  .critical {
    background: #dc2626;
  }
  .major {
    background: #f97316;
  }
  .minor {
    background: #eab308;
  }

  @media (max-width: 600px) {
    .summary-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>
