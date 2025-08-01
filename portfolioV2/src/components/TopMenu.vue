<script setup lang="ts">
import { Menubar } from 'primevue';
import { ref } from 'vue'

const items = ref(
    [{
        label: "K:// home"
    },
    {
        label: "// compétences"
    },
    {
        label: "// langages"
    },
    {
        label: "// projet"
    },
    {
        label: "// expériences"
    },
    {
        label: "// passions"
    }
]
)
</script>

<template>
    <Menubar :model="items" class="sticky z-20"></Menubar>
</template>