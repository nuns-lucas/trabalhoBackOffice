<template>
  <div class="new-incidents">
    <h2>Novas Ocorrências</h2>
    <div v-for="incident in recentIncidents" :key="incident.id" class="incident-card container">
      <img :src="incident.userAvatar" alt="User Avatar" class="avatar" />
      <div class="info row">
        <h4 class="">{{ incident.user }}</h4>
        <p class="col-6"><strong>Incidência:</strong> {{ incident.incident }}</p>
        <p class="col-4"><strong>Horário:</strong> {{ incident.time }}</p>
        <span class="col" :class="statusClass(incident.status) ">{{ incident.status }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recentIncidents: JSON.parse(localStorage.getItem("recentIncidents")) || [],
    };
  },
  methods: {
    statusClass(status) {
      return status === "Resolvido" ? "resolved" : "pending";
    },
  },
};
</script>

<style scoped>
.new-incidents {
  background: white;
  padding: 15px;
  border-radius: 10px;
}
.incident-card {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.resolved {
  color: green;
}
.pending {
  color: red;
}
</style>
