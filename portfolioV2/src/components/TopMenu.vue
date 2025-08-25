<script setup lang="ts">
import { Menubar } from 'primevue';
import { ref } from 'vue'

const items = ref(
    [{
        label: "K:// Menu", id: "cat-menu"
    },
    {
        label: "// parcours", id: "cat-parcours"
    },
    {
        label: "// technologies", id: "cat-langages"
    },
    {
        label: "// projets", id: "cat-projet"
    },
    {
        label: "// outils", id: "cat-outils"
    },
    {
        label: "// compétences", id: "cat-competences"
    }
]
)
</script>

<template>
    <Menubar 
        :model="items" 
        class="sticky z-20 text-xl"
    >
        <template #item="{ item }">
            <a
                :href="`#${item.id}`"
                class="px-4 py-2 block"
            >
                {{ item.label }}
            </a>
        </template>
    </Menubar>
</template>