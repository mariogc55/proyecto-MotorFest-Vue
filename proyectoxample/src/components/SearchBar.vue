<template>
  <div class="search-container">
    <input 
      type="text" 
      placeholder="Busca un vehículo por nombre o marca..."
      v-model="searchText"
      @input="emitSearch"
      class="search-input"
    >
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const searchText = ref('');
const emits = defineEmits(['search']);

const emitSearch = () => {
  emits('search', searchText.value);
};
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.search-input {
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}
.search-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}
</style>