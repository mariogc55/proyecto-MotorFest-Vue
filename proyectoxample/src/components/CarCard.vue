<template>
  <div class="car-card">
    <img :src="getImageUrl(props.car.image)" :alt="props.car.name" class="car-image">
    <div class="car-info">
      <h3>{{ props.car.name }}</h3>
      <p class="car-brand">{{ props.car.brand }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  car: {
    type: Object,
    required: true
  }
});

const getImageUrl = (path) => {
  // Esta función usa require para resolver la ruta de la imagen
  return require(`@/assets/${path.replace('@/assets/', '')}`);
};
</script>

<style scoped>
.car-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
  cursor: pointer;
}
.car-card:hover {
  transform: translateY(-5px);
}
.car-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.car-info {
  padding: 1rem;
}
.car-brand {
  color: #666;
  font-size: 0.9em;
}
</style>