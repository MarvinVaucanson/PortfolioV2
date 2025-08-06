<script setup lang="ts">
import { Button } from 'primevue'
import { onMounted, ref } from 'vue'
import type { ReseauSDO } from '../assets/types/ReseauSDO.ts'
import '@fortawesome/fontawesome-free/css/all.min.css';

const data = ref<ReseauSDO[]>([])

onMounted(async () => {
    try {
        const response = await fetch('/reseau.json')
        data.value = await response.json()
    } catch (error) {
        console.error("Erreur de chargement du JSON :", error)
    }
});
</script>
<template>
    <h1 class="text-xl py-1">// Qui suis je ?</h1>
    <p class="p-2">
        Etudiant en informatique orienté développement, j'ai un parcours associatif varié, qui m'a permis d’acquérir de nombreuses compétences. J'aime la science, la musique et la montagne.
    </p>
    <Button
        class="m-2 custom-btn"
        variant="outlined"
        as="a" 
        key="toto" 
        label="Mon CV" 
        href=""
        icon="fa-solid fa-download"
        :style="{ color: '#ecfdf5', borderColor: '#ecfdf5' }"
    ></Button>
    <h1 class="text-xl py-1">// Me contacter</h1>
    <Button
        class="m-2 custom-btn"
        variant="outlined"
        as="a" 
        v-for="reseau in data" 
        :key="reseau.id" 
        :label="reseau.name" 
        :href="reseau.link"
        :icon="reseau.icon"
        :style="{ color: '#ecfdf5', borderColor: '#ecfdf5' }"
    ></Button>
</template>

<style>
    a{
        text-decoration: none;    
    }
    .custom-btn:hover {
        color: #064e3b !important;
    }
</style>