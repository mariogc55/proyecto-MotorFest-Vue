<template>
  <main class="car-details-container">
    <div v-if="car" class="car-details">
      <h2>{{ car.brand }} {{ car.name }}</h2>
      <div class="image-gallery">
        <img :src="getImageUrl(car.image)" :alt="car.name" class="main-car-image">
      </div>
      <div class="details-info">
        <h3>Datos del Vehículo</h3>
        <ul>
          <li><strong>Modelo:</strong> {{ car.name }}</li>
          <li><strong>Marca:</strong> {{ car.brand }}</li>
          <li><strong>Año:</strong> {{ car.year }}</li>
          <li><strong>Precio:</strong> ${{ car.price.toLocaleString() }}</li>
        </ul>
        <h3>Descripción</h3>
        <p>{{ car.description }}</p>
      </div>
    </div>
    <div v-else class="loading-message">
      <p>Cargando datos del vehículo...</p>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import carsData from '@/assets/dataC.json';

const route = useRoute();
const car = ref(null);

onMounted(() => {
  const carId = parseInt(route.params.id);
  car.value = carsData.find(c => c.id === carId);
});

// Añade esta función para manejar las rutas de las imágenes
const getImageUrl = (path) => {
  if (!path) return '';
  return require(`@/assets/${path.replace('@/assets/', '')}`);
};
</script>

<style scoped>
.car-details-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
.car-details {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 900px;
  width: 100%;
}
.main-car-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}
.details-info ul {
  list-style: none;
  padding: 0;
}
.details-info li {
  margin-bottom: 0.5rem;
}
.loading-message {
  font-size: 1.5rem;
  color: #888;
}
</style>