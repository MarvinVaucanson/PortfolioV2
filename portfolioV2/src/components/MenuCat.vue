<script setup lang="ts">
import type { PropType } from 'vue';
import type {InfoSDO} from '../assets/types/InfoSDO.ts'
import { Button } from 'primevue'

    defineProps( {
        categorie: Object as PropType<InfoSDO>
    })

</script>
<template>
    <div class="MenuCatMain">
        <div class="">
            <h3>./ {{ categorie?.title }}<span id="underscore" class="blink">_</span></h3>
            <Button v-for="item in categorie?.nomMemu" :key="item" severity="help" variant="outlined">{{ item }}</Button>
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
</style>