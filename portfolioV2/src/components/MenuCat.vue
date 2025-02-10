<script setup lang="ts">
import type { PropType } from 'vue';
import type {InfoSDO} from '../assets/types/InfoSDO.ts'

    defineProps( {
        categorie: Object as PropType<InfoSDO>
    })

</script>
<template>
    <div class="MenuCatMain">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <p class="corpus">{{categorie?.id}}</p>
        </div>
    </div>
</template>

<style>
.MenuCatMain{
    background-color: white;
    margin-top: 0px;
    margin-left: 3%;
    margin-right: 3%;
}
.corpus{
    margin-top: 0;

}
</style>