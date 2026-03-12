<template>
  <section class="overview-container">
    <header class="header">
      <h2 class="title">Quick Overview</h2>
      <span class="badge">{{ findings.length }} Findings</span>
    </header>

    <p class="description">
      {{ description }}
    </p>

    <div class="content-grid">
      <div class="summary-box">
        <p class="summary-text">
          Usability heuristics evaluation identified
          <span class="highlight"
            >{{ findings.length }} usability findings</span
          >
          that highlight opportunities to improve the interface experience.
        </p>
      </div>
    </div>

    <div class="overview-grid">
      <div class="overview-card">
        <h4>Context</h4>
        <p>
          This report evaluates the usability of the interface using established
          heuristic principles to identify potential usability challenges
          affecting user interaction.
        </p>
      </div>

      <div class="overview-card">
        <h4>Goal</h4>
        <p>
          The goal of this evaluation is to uncover usability issues that impact
          user experience and provide actionable insights for improving the
          product interface.
        </p>
      </div>

      <div class="overview-card">
        <h4>Method</h4>
        <p>
          Expert evaluators reviewed the interface and mapped identified
          usability issues to relevant heuristics, resulting in
          <strong>{{ findings.length }}</strong> findings.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
  defineProps({
    findings: { type: Array, default: () => [] },
    description: String,
  })
</script>

<style scoped>
  .overview-container {
    background: #ffffff;
    padding: 2rem;
    border-radius: 24px;
    border: 1px solid #f1f5f9;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px -2px rgba(0, 0, 0, 0.02);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #0f172a;
  }

  .badge {
    background: #f0f9ff;
    color: #0369a1;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 99px;
    text-transform: uppercase;
  }

  .description {
    color: #64748b;
    line-height: 1.6;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .summary-box {
    background: #f8fafc;
    padding: 1.25rem;
    border-radius: 16px;
    margin-bottom: 1.5rem;
  }

  .summary-text {
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }

  .highlight {
    color: #0f172a;
    font-weight: 600;
    border-bottom: 2px solid #38bdf8;
  }

  .overview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  .overview-card {
    background: #f8fafc;
    padding: 1rem;
    border-radius: 14px;
    border: 1px solid #f1f5f9;
  }

  .overview-card h4 {
    font-size: 0.9rem;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 6px;
  }

  .overview-card p {
    font-size: 0.85rem;
    color: #475569;
    line-height: 1.5;
  }
</style>
