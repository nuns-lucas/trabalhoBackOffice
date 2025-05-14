<template>
  <div class="bottom-voltar">
    <button @click="voltar">Voltar</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  irHome: { type: Boolean, default: false }
})

const router = useRouter()

const voltar = () => {
  if (props.irHome) {
    router.push('/cliente')
  } else {
    router.back()
  }
}
</script>

<style scoped>
.bottom-voltar {
  height: 70px;
  width: 100%;
  background-color: white;
  padding: 0;
  border-top: 1px solid #e5f2e3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
}

.bottom-voltar button {
  background-color: #b7e291;
  border: none;
  padding: 10px 50px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px;
  color: #143601;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
</style>
