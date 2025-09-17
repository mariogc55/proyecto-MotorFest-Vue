<template>
  <main class="cars-container">
    <h2>Catálogo de Vehículos</h2>
    
    <div class="search-bar">
      <SearchBar @search="filterCars" />
    </div>

    <div v-if="filteredCars.length > 0" class="cars-grid">
      <router-link 
        v-for="car in filteredCars"
        :key="car.id"
        :to="{ name: 'car-details', params: { id: car.id } }"
        class="car-link"
      >
        <CarCard :car="car" />
      </router-link>
    </div>
    <div v-else class="no-results">
      <p>No se encontraron resultados para tu búsqueda.</p>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import CarCard from '@/components/CarCard.vue';
import SearchBar from '@/components/SearchBar.vue';
import carsData from '@/assets/dataC.json';

const cars = ref([]);
const searchQuery = ref('');

onMounted(() => {
  cars.value = carsData;
});

const filterCars = (query) => {
  searchQuery.value = query.toLowerCase();
};

const filteredCars = computed(() => {
  if (!searchQuery.value) {
    return cars.value;
  }
  return cars.value.filter(car =>
    car.name.toLowerCase().includes(searchQuery.value) ||
    car.brand.toLowerCase().includes(searchQuery.value)
  );
});
</script>

<style scoped>
.cars-container {
  padding: 2rem;
  text-align: center;
}
.search-bar {
  margin-bottom: 2rem;
}
.cars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding-top: 1rem;
}
.no-results {
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #888;
}
.car-link {
  text-decoration: none;
  color: inherit;
}
</style>