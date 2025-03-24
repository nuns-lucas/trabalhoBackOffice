<template>
  <div class="dashboard-container d-flex">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <main class="content p-4">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <StatusCard title="Autocarros em funcionamento" :value="statusData.operational" color="text-success" icon="" />
          </div>
          <div class="col-md-4">
            <StatusCard title="Autocarros atrasados" :value="statusData.delayed" color="text-warning" icon="bi-exclamation-circle-fill" />
          </div>
          <div class="col-md-4">
            <StatusCard title="Autocarros avariados" :value="statusData.broken" color="text-danger" icon="bi-x-circle-fill" />
          </div>
        </div>

        <!-- Reports -->
        <div class="row mt-4">
          <div class="col-md-6">
            <ReportList title="Atrasos Reportados" :reports="delays" />
          </div>
          <div class="col-md-6">
            <ReportList title="Avarias Reportadas" :reports="failures" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import StatusCard from "@/components/StatusCard.vue";
import ReportList from "@/components/ReportList.vue";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    StatusCard,
    ReportList,
  },
  data() {
    return {
      statusData: {
        operational: localStorage.getItem("operational") || "0",
        delayed: localStorage.getItem("delayed") || "0",
        broken: localStorage.getItem("broken") || "0",
      },
      delays: JSON.parse(localStorage.getItem("delays")) || [],
      failures: JSON.parse(localStorage.getItem("failures")) || []
    };
  }
};
</script>

<style scoped>
.dashboard-container {
  height: 100vh;
}
.content {
  flex: 1;
  background: #f8f9fa;
}
</style>
