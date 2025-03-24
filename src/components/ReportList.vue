<template>
  <div class="card p-3">
    <h5 class="mb-3">{{ title }}</h5>
    <div v-for="(report, index) in reports" :key="index" class="report-item d-flex align-items-center p-2 mb-2 rounded">
      <div class="icon-container" :class="getUrgencyClass(report.urgency)">
        <i class="bi bi-exclamation-circle-fill"></i>
      </div>
      <div class="ms-3">
        <p class="mb-1 fw-bold">{{ report.message }}</p>
        <small class="text-muted">{{ report.time }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportList",
  props: {
    title: String,
    reports: Array
  },
  methods: {
    getUrgencyClass(urgency) {
      return urgency === "alta" ? "high-urgency" : urgency === "média" ? "medium-urgency" : "low-urgency";
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.report-item {
  display: flex;
  align-items: center;
  background: #f8f9fa;
  padding: 10px;
}
.icon-container {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
}
.high-urgency {
  background: #dc3545;
}
.medium-urgency {
  background: #ffc107;
}
.low-urgency {
  background: #28a745;
}
</style>
