<script setup lang="ts">
import InfoCat from './InfoCat.vue';
import MenuCat from './MenuCat.vue';
import Presentation from './Presentation.vue';
import type {InfoSDO} from '../assets/types/InfoSDO.ts'
import { ref } from 'vue';
import { onMounted } from 'vue';

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
    <Presentation></Presentation>
    <div v-for="categories in data" :key="categories.id">
      <MenuCat :categorie="categories"></MenuCat>
      <InfoCat :categorie="categories"></InfoCat>
    </div>
</template>