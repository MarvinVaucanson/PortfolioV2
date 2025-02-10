<script setup lang="ts">
    import { computed, ref } from 'vue';
    import type {InfoSDO} from '../assets/types/InfoSDO.ts'

    const props = defineProps<{
        categorie: InfoSDO
    }>();

    const selected = ref();

    const backgroundColor = computed(() => {
        const color = props.categorie?.color;
        return /^#[0-9A-F]{6}$/i.test(color) ? color : '#FFFFFF';
    });

</script>

<template>
    <div class='InfoCatMain' :style="{backgroundColor: backgroundColor}">
        <p>{{ categorie?.text.main }}</p>
    </div>
</template>

<style>
.InfoCatMain{
    color: white;
    margin-top: 0px;
    display: flex;
    margin-left: 0px;
    margin-right: 0px;
    background-color: none;
}
</style>