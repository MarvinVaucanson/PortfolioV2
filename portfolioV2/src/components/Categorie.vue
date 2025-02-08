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
    <div>
      <MenuCat></MenuCat>
      <InfoCat></InfoCat>
      <p>{{ data[0] }}</p>
    </div>
</template>