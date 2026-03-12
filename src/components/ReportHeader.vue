<template>
  <header class="hero-section">
    <div class="glow-orb"></div>

    <nav v-if="logo" class="nav-brand">
      <img :src="logo" alt="App Logo" class="app-logo" />
    </nav>

    <div class="hero-content">
      <span class="eyebrow">Heuristic Evaluation Report</span>
      <h1 class="app-title">{{ testName }}</h1>

      <div class="divider"></div>

      <div class="meta-grid">
        <div class="meta-item">
          <span class="label">Prepared By</span>
          <span class="value">{{ userName }}</span>
        </div>
        <div class="meta-item">
          <span class="label">Evaluators</span>
          <span class="value">{{ author }}</span>
        </div>
        <div class="meta-item">
          <span class="label">Issued On</span>
          <span class="value">{{ date }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  defineProps({
    testName: String,
    logo: String,
    userName: String,
    author: String,
    date: String,
  })
</script>

<style scoped>
  .hero-section {
    position: relative;
    overflow: hidden;
    padding: 80px 40px;
    border-radius: 32px;
    border: 1px solid #f1f5f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: white;
  }

  /* Modern "Glow" effect in background */
  .glow-orb {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.08) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    z-index: 0;
  }

  .app-logo {
    height: 48px;
    width: auto;
    margin-bottom: 40px;
    filter: grayscale(0.2);
    transition: filter 0.3s ease;
  }

  .app-logo:hover {
    filter: grayscale(0);
  }

  .eyebrow {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #38bdf8;
    margin-bottom: 12px;
  }

  .app-title {
    font-size: clamp(2.5rem, 5vw, 3.5rem); /* Responsive fluid typography */
    font-weight: 800;
    color: #0f172a;
    line-height: 1.1;
    letter-spacing: -0.03em;
    max-width: 800px;
  }

  .divider {
    width: 60px;
    height: 4px;
    background: #0f172a;
    margin: 40px auto;
    border-radius: 2px;
  }

  .meta-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: 100%;
    max-width: 700px;
    margin-top: 20px;
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .label {
    font-size: 0.7rem;
    text-transform: uppercase;
    color: #94a3b8;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  .value {
    font-size: 1rem;
    color: #334155;
    font-weight: 500;
  }

  /* Mobile responsive */
  @media (max-width: 640px) {
    .meta-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
</style>
