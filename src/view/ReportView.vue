<template>
  <div class="report-layout">
    <!-- SIDEBAR -->
    <aside class="report-sidebar">
      <div class="toc-container">
        <div class="toc-header">
          <span class="toc-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </span>
          <h2 class="toc-title">Contents</h2>
        </div>

        <nav class="toc-grid">
          <a href="#overview" class="toc-link">
            <span class="step-num">01</span>
            <div class="toc-text">
              <span class="step-label">Overview</span>
              <span class="step-desc">Report context</span>
            </div>
          </a>

          <a href="#executive-summary" class="toc-link">
            <span class="step-num">02</span>
            <div class="toc-text">
              <span class="step-label">Executive Summary</span>
              <span class="step-desc">Key usability metrics</span>
            </div>
          </a>

          <a href="#findings" class="toc-link">
            <span class="step-num">03</span>
            <div class="toc-text">
              <span class="step-label">Findings</span>
              <span class="step-desc">Detected usability issues</span>
            </div>
          </a>

          <a href="#conclusion" class="toc-link">
            <span class="step-num">04</span>
            <div class="toc-text">
              <span class="step-label">Conclusion</span>
              <span class="step-desc">Expert recommendations</span>
            </div>
          </a>

          <a href="#appendix" class="toc-link">
            <span class="step-num">05</span>
            <div class="toc-text">
              <span class="step-label">Appendix</span>
              <span class="step-desc">Raw evaluation data</span>
            </div>
          </a>
        </nav>
      </div>
    </aside>

    <!-- MAIN REPORT -->
    <div class="report-main">
      <!-- HEADER -->
      <section class="report-section">
        <ReportHeader
          :testName="report.testName"
          :logo="report.logo"
          :userName="report.userName"
          :author="report.author"
          :date="report.date"
        />
      </section>

      <!-- OVERVIEW -->
      <section id="overview" class="report-section">
        <QuickOverview
          :findings="report.findings"
          :description="report.description"
        />
      </section>

      <!-- EXECUTIVE SUMMARY -->
      <section id="executive-summary" class="report-section">
        <ExecutiveSummary
          :score="report.overallScore"
          :findings="report.findings"
          :heuristics="report.heuristics"
        />
      </section>

      <!-- FINDINGS -->
      <section id="findings" class="report-section findings-area">
        <div class="sticky-filters">
          <Filters 
           v-model="activeFilters"
           :heuristics="report.heuristics"
          />

          <div class="results-meta">
            Showing <strong>{{ filteredFindings.length }}</strong> of
            {{ report.findings.length }} findings
          </div>
        </div>

        <div class="findings-grid">
          <transition-group name="list">
            <FindingCard
              v-for="finding in filteredFindings"
              :key="finding.title"
              v-bind="{
                ...finding,
              heuristic: getHeuristicName(finding.heuristic)
              }" 
              @open="selectedFinding = finding"
            />
          </transition-group>

          <div v-if="filteredFindings.length === 0" class="empty-state">
            <p>No findings match your filters.</p>

            <button @click="resetFilters" class="reset-link">
              Clear filters
            </button>
          </div>
        </div>
      </section>

      <!-- CONCLUSION -->
      <section id="conclusion" class="report-section">
        <ReportConclusion :conclusion="report.conclusion" />
      </section>

      <!-- APPENDIX -->
      <section id="appendix" class="report-section">
        <AppendixData
          :heuristics="report.heuristics"
          :options="report.options"
          :description="report.description"
        />
      </section>
    </div>

    <!-- MODAL -->
    <FindingDetailModal
      v-if="selectedFinding"
      :finding="selectedFinding"
      @close="selectedFinding = null"
    />
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { reportData } from '../data/mockReportData'

  import ExecutiveSummary from '@/components/ExecutiveSummary.vue'
  import Filters from '@/components/Filters.vue'
  import FindingCard from '@/components/FindingCard.vue'
  import ReportConclusion from '@/components/ReportConclusion.vue'
  import AppendixData from '@/components/AppendixData.vue'
  import ReportHeader from '@/components/ReportHeader.vue'
  import QuickOverview from '@/components/QuickOverview.vue'
  import FindingDetailModal from '@/components/FindingDetailModal.vue'

  const report = reportData
  const selectedFinding = ref(null)

  const getHeuristicName = (id) => {
    return report.heuristics.find(h => h.id === id)?.name
  }

  /* FILTER STATE */
  const activeFilters = ref({
    severity: 'All',
    heuristic: 'All',
  })

  /* FILTERED FINDINGS */
  const filteredFindings = computed(() => {
    return report.findings.filter((item) => {
      const matchSeverity =
        activeFilters.value.severity === 'All' ||
        item.severity === activeFilters.value.severity

      const matchHeuristic =
        activeFilters.value.heuristic === 'All' ||
        item.heuristic === activeFilters.value.heuristic

      return matchSeverity && matchHeuristic
    })
  })

  /* RESET FILTERS */
  const resetFilters = () => {
    activeFilters.value = {
      severity: 'All',
      heuristic: 'All',
    }
  }
</script>

<style scoped>
  .report-layout {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 2rem;
    max-width: 1400px;
    margin: auto;
    padding: 2rem;
    background: #f1f5f9;
  }

  /* SIDEBAR */

  .report-sidebar {
    position: sticky;
    top: 20px;
    height: fit-content;
  }

  .toc-container {
    background: white;
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid #e2e8f0;
  }

  .toc-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1.5rem;
  }

  .toc-title {
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .toc-grid {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .toc-link {
    display: flex;
    gap: 10px;
    padding: 0.6rem;
    text-decoration: none;
    border-radius: 10px;
    transition: all 0.2s;
  }

  .toc-link:hover {
    background: #f1f5f9;
  }

  .step-num {
    width: 30px;
    height: 30px;
    background: #e0f2fe;
    border-radius: 8px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  }

  .toc-text {
    display: flex;
    flex-direction: column;
  }

  .step-label {
    font-weight: 600;
    font-size: 0.85rem;
  }

  .step-desc {
    font-size: 0.75rem;
    color: #64748b;
  }

  /* MAIN */

  .report-main {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .report-section {
    width: 100%;
  }

  /* FINDINGS */

  .sticky-filters {
    position: sticky;
    top: 0;
    background: #f1f5f9;
    padding-bottom: 1rem;
    z-index: 10;
  }

  .results-meta {
    font-size: 0.85rem;
    margin-top: 0.5rem;
    text-align: right;
    color: #64748b;
  }

  .findings-area {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .findings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  .empty-state {
    text-align: center;
    padding: 3rem;
    border: 2px dashed #cbd5e1;
    border-radius: 12px;
  }

  .reset-link {
    border: none;
    background: none;
    color: #38bdf8;
    cursor: pointer;
  }

  /* ANIMATION */

  .list-enter-active,
  .list-leave-active {
    transition: all 0.4s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }

  /* MOBILE */

  @media (max-width: 900px) {
    .report-layout {
      grid-template-columns: 1fr;
    }

    .report-sidebar {
      position: relative;
    }
  }
</style>
