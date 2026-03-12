<template>
  <div class="appendix">
    <h2>Appendix</h2>

    <p class="description">
      Detailed raw evaluation data from the heuristic test.
    </p>

    <!-- FILTERS -->

    <div class="filters">
      <button
        :class="{ active: activeTab === 'all' }"
        @click="activeTab = 'all'"
      >
        All
      </button>

      <button
        :class="{ active: activeTab === 'stats' }"
        @click="activeTab = 'stats'"
      >
        Statistics
      </button>

      <button
        :class="{ active: activeTab === 'options' }"
        @click="activeTab = 'options'"
      >
        Test Options
      </button>

      <button
        :class="{ active: activeTab === 'summary' }"
        @click="activeTab = 'summary'"
      >
        Summary
      </button>

      <button
        :class="{ active: activeTab === 'answers' }"
        @click="activeTab = 'answers'"
      >
        Answers
      </button>
    </div>

    <!-- STATISTICS -->

    <section v-if="activeTab === 'all' || activeTab === 'stats'" class="block">
      <h3>Statistics</h3>

      <table>
        <tr>
          <th>Heuristic</th>
          <th>Score</th>
        </tr>

        <tr v-for="h in heuristics" :key="h.name">
          <td>{{ h.name }}</td>
          <td>{{ h.percentage }}%</td>
        </tr>
      </table>
    </section>

    <!-- TEST OPTIONS -->

    <section
      v-if="activeTab === 'all' || activeTab === 'options'"
      class="block"
    >
      <h3>Test Options</h3>

      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Value</th>
        </tr>

        <tr v-for="o in options" :key="o.name">
          <td>{{ o.name }}</td>
          <td>{{ o.description }}</td>
          <td>{{ o.value }}</td>
        </tr>
      </table>
    </section>

    <!-- SUMMARY -->

    <section
      v-if="activeTab === 'all' || activeTab === 'summary'"
      class="block"
    >
      <h3>Summary Table per Heuristic</h3>

      <div v-for="h in heuristics" :key="h.name" class="heuristic-block">
        <h4>{{ h.name }}</h4>

        <table>
          <tr>
            <th>Question</th>
            <th>Score</th>
          </tr>

          <tr v-for="q in h.questions || []" :key="q.question">
            <td>{{ q.question }}</td>
            <td>{{ q.value }}</td>
          </tr>
        </table>
      </div>
    </section>

    <!-- ANSWERS -->

    <section
      v-if="activeTab === 'all' || activeTab === 'answers'"
      class="block"
    >
      <h3>Answers by Heuristic</h3>

      <div v-for="h in heuristics" :key="h.name" class="heuristic-block">
        <h4>{{ h.name }}</h4>

        <table>
          <tr>
            <th>Evaluator</th>
            <th>Answer</th>
            <th>Value</th>
          </tr>

          <tr v-for="q in h.questions || []" :key="q.question">
            <td>{{ q.evaluator }}</td>
            <td>{{ q.answer }}</td>
            <td>{{ q.value }}</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  defineProps(['heuristics', 'options', 'description'])

  const activeTab = ref('all')
</script>

<style scoped>
  .appendix {
    background: white;
    padding: 24px;
    border-radius: 12px;
    margin-top: 40px;
  }

  .description {
    color: #64748b;
    margin-bottom: 20px;
  }

  .filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .filters button {
    padding: 8px 14px;
    border: none;
    background: #e2e8f0;
    border-radius: 6px;
    cursor: pointer;
  }

  .filters button.active {
    background: #38bdf8;
    color: white;
  }

  .block {
    margin-bottom: 40px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  th,
  td {
    border: 1px solid #e2e8f0;
    padding: 8px;
    text-align: left;
  }

  th {
    background: #f1f5f9;
  }

  .heuristic-block {
    margin-top: 20px;
  }
</style>
