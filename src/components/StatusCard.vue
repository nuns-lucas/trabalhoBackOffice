<template>
  <div class="status-card d-flex align-items-center p-3 shadow-sm">
    <div class="status-icon me-3" :class="color">
      <i :class="icon"></i>
    </div>
    <div class="status-content">
      <h6 class="status-title">{{ title }}</h6>
      <h4 class="status-value">{{ value }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusCard",
  props: {
    title: String,
    value: String,
    color: String,
    icon: String,
  }
};
</script>

<style scoped>
.status-card {
  display: flex;
  background: white;
  border-radius: 10px;
  padding: 15px;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.status-icon {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: rgb(255, 255, 255);
}
.text-success {
  background: #28a746fe;
}
.text-warning {
  background: #ffc107;
}
.text-danger {
  background: #dc3545;
}
.status-title {
  font-size: 14px;
  color: #6c757d;
  margin: 0;
}
.status-value {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}
</style>
