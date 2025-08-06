<script setup lang="ts">
import { computed, ref } from 'vue'
import type {InfoSDO} from '../assets/types/InfoSDO.ts'
import {Button} from 'primevue'
import '@fortawesome/fontawesome-free/css/all.min.css';

    const props = defineProps<{
        categorie: InfoSDO
    }>()
        const emit = defineEmits<{
        (event: 'update:selected', index: number): void
    }>()

    const color = computed(() => {
        const color = props.categorie?.color
        return /^#[0-9A-F]{6}$/i.test(color) ? color : '#FFFFFF'
    })

    const selectedButton = ref(0)

    const selectButton = (index: number) => {
        console.log(index)
        selectedButton.value = index
        emit('update:selected',index)
    }

    defineExpose({
        selectButton
    })

</script>
<template>
    <div class="MenuCatMain pb-6">
        <div class="pl-5 py-3">
            <h3 class="text-2xl font-bold py-3">./ {{ categorie?.title }}<span id="underscore" class="blink">_</span></h3>
            <Button 
                v-for="(item, index) in categorie?.nomMenu" 
                :key="item" 
                :label="item"
                @click="selectButton(index)"
                class="custom-menu-btn m-2"
                :class="{ 'selected-btn': selectedButton === index }"
                :style="selectedButton === index 
                    ? { backgroundColor: color, color: '#fff', borderColor: color } 
                    : { color: color, borderColor: color, backgroundColor: 'transparent' }"
                :icon="categorie.icon[index]"
            >
            </Button>
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