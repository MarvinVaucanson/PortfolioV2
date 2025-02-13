<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type {InfoSDO} from '../assets/types/InfoSDO.ts'
import { Button } from 'primevue'

    const props = defineProps<{
        categorie: InfoSDO
    }>();

    const color = computed(() => {
        const color = props.categorie?.color;
        return /^#[0-9A-F]{6}$/i.test(color) ? color : '#FFFFFF';
    });

    const lightenColor = (color: string, percent: number) => {
        const num = parseInt(color.replace("#", ""), 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) + amt,
            G = (num >> 8 & 0x00FF) + amt,
            B = (num & 0x0000FF) + amt;
        return `#${(0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1).toUpperCase()}`;
    };

    // const hoverColor = computed(() => lightenColor(color.value, 20));
        const hoverColor = "#000000";

        document.documentElement.style.setProperty('--hover-color', hoverColor);


</script>
<template>
    <div class="MenuCatMain">
        <div class="">
            <h3>./ {{ categorie?.title }}<span id="underscore" class="blink">_</span></h3>
            <Button v-for="item in categorie?.nomMemu" :key="item" variant="outlined" :style="{color: color, borderColor: color}" :class="{ 'hover-button': true }">{{ item }}</Button>
        </div>
    </div>
</template>

<style>
.MenuCatMain{
    display: flex;
    background-color: white;
    margin-top: 0px;
    margin-left: 3%;
    margin-right: 3%;
}
.corpus{
    margin-top: 0;
}
.hover-button:hover {
    color: var(--hover-color);
    border-color: var(--hover-color);
}
</style>