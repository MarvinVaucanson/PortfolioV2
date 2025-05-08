<script setup lang="ts">
import { Button } from 'primevue';
import { onMounted, ref } from 'vue';
import type { ReseauSDO } from '../assets/types/reseauSDO';

const data = ref<ReseauSDO[]>([]);

onMounted(async () => {
    try {
        const response = await fetch('/reseau.json');
        data.value = await response.json();
    } catch (error) {
        console.error("Erreur de chargement du JSON :", error);
    }
});
</script>
<template>
    <Button as="a" v-for="reseau in data" :key="reseau.id" 
        :label="reseau.name" 
        :href="reseau.link"
    ></Button>
</template>

<style>
    a{
        text-decoration: none;    
    }
</style>