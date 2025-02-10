<script setup lang="ts">
import { onMounted, ref } from 'vue';
import InfoCat from './InfoCat.vue';
import MenuCat from './MenuCat.vue';
import type {InfoSDO} from '../assets/types/InfoSDO.ts'

const data = ref<InfoSDO[]>([]);

onMounted(async () => {
  try {
    const response = await fetch('/data.json');
    data.value = await response.json();
  } catch (error) {
    console.error("Erreur de chargement du JSON :", error);
  }
});


</script>
<template>
    <div v-for="categories in data" :key="categories.id">
      <MenuCat :categorie="categories"></MenuCat>
      <InfoCat :categorie="categories"></InfoCat>
      <p>{{ categories }}</p>
    </div>
</template>