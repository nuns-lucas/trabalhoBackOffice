<template>
  <div class="mobile-frame">
    <slot></slot>
  </div>
</template>

<style scoped>
.body{
  margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #143601;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
}
.mobile-frame {
    width: 390px;
    height: 844px;
    background-color: white;
    border-radius: 25px;
    border: 5px solid black;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
  }
.content {
  flex: 1;
  overflow-y: auto;
  }
</style>