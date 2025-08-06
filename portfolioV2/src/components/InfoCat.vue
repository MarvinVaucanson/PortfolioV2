<script setup lang="ts">
    import { computed, ref } from 'vue'
    import LinkProfile from './LinkProfile.vue'
    import type {InfoSDO} from '../assets/types/InfoSDO.ts'
    import { Avatar } from 'primevue'

    const props = withDefaults(defineProps<{
        categorie: InfoSDO
        fromNav: number
    }>(),{
        fromNav:0
    })

    const base_path = "/src/assets/images/"+props.categorie.nom
    const avatar_path = computed(() => {
        return base_path + "/" + props.categorie.nomMenu[props.fromNav] + ".png"
    })

    const backgroundColor = computed(() => {
        const color = props.categorie?.color
        return /^#[0-9A-F]{6}$/i.test(color) ? color : '#FFFFFF'
    })
</script>

<template>
    <div class='InfoCatMain pb-3' :style="{backgroundColor: backgroundColor}">
        <div class="pl-20">
            <Avatar v-if="categorie.type!=='Presentation'" 
                :image="avatar_path"
                class="-mt-6 !w-26 !h-26 object-cover"
                shape="circle" 
            />
            <Avatar v-if="categorie.type==='Presentation'" 
                :image="base_path+'/me.png'" 
                class="-mt-6 !w-32 !h-32"    
                shape="circle"
            />
        </div>
        <div class="text-and-data">
            <p v-if="categorie.type ==='UE'">{{ categorie?.text.main[props.fromNav] }}</p>
            <div v-if="categorie.type==='Presentation'" style="margin: 0px;">
                <LinkProfile/>
            </div>
            <p v-if="categorie.type ==='Langages'">{{ categorie?.text.main[props.fromNav] }}</p>
        </div>
    </div>
</template>

<style>
.InfoCatMain{
    color: white;
    margin-left: 0px;
    margin-right: 0px;
    background-color: none;
}

.text-and-data{
    margin-left: 3%;
    margin-right: 3%;
}

</style>