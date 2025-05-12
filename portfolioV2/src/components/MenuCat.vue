<script setup lang="ts">
import { computed, ref } from 'vue'
import type {InfoSDO} from '../assets/types/InfoSDO.ts'
import {Button} from 'primevue'

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
    <div class="MenuCatMain">
        <div class="title">
            <h3>./ {{ categorie?.title }}<span id="underscore" class="blink">_</span></h3>
            <Button 
                v-for="(item, index) in categorie?.nomMenu" 
                :key="item" 
                :variant="selectedButton === index ? '' : 'outlined'" 
                :style="{color: color, borderColor: color}" 
                :class="{ 'hover-button': true }"
                @click="selectButton(index)"
            >
            {{ item }}
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

.title{
    margin: 1%;
}
</style>