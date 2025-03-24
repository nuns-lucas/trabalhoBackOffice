
<template>
  <div class="menu-geral">
    <Sidebar />
    <div class="content">
      <NewIncidents />
      <IncidentMap />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import NewIncidents from "@/components/NewIncidents.vue";
import IncidentMap from "@/components/IncidentMap.vue";

export default {
  components: {
    Sidebar,
    NewIncidents,
    IncidentMap,
  },
};
</script>

<style scoped>
.menu-geral {
  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
