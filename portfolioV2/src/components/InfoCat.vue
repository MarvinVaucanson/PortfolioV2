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
        <div sv-if="categorie.type==='Presentation'" style="margin: 0px;">
            <p>totiioehufgh</p>
        </div>
    </div>
</template>

<style>
.InfoCatMain{
    color: white;
    margin-top: 0px;
    display: flex-column;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    background-color: none;
    p{
        margin: 0px;
    }

}

</style>