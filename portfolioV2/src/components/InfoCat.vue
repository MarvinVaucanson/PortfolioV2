<script setup lang="ts">
    import { computed } from 'vue'
    import LinkProfile from './LinkProfile.vue'
    import type {InfoSDO} from '../assets/types/InfoSDO.ts'
    import { Avatar } from 'primevue'

    const props = defineProps<{
        categorie: InfoSDO
        fromNav: number
    }>()

    const base_path = "/src/assets/images/"+props.categorie.nom
    const avatar_path = computed(() => {
        return base_path + "/" + props.categorie.nomMenu[props.fromNav] + ".png"
    })
    const avatar_path_value = avatar_path.value
    console.log("Avatar path",avatar_path.value)

    const backgroundColor = computed(() => {
        const color = props.categorie?.color
        return /^#[0-9A-F]{6}$/i.test(color) ? color : '#FFFFFF'
    })
</script>

<template>
    <div class='InfoCatMain pb-3' :style="{backgroundColor: backgroundColor}">
        <div class="pl-20">
            <Avatar v-if="categorie.type!=='Presentation'" 
                :image="avatar_path_value"
                class="-mt-6 w-32 h-32"
                shape="circle" 
            />
            <Avatar v-if="categorie.type==='Presentation'" 
                :image="base_path+'/me.png'" 
                class="-mt-6 !w-32 !h-32"    
                shape="circle"
            />
        </div>
        <div class="text-and-data">
            <p v-if="categorie.type !=='Presentation'">{{ categorie?.text.main[props.fromNav] }}</p>
            <div v-if="categorie.type==='Presentation'" style="margin: 0px;">
                <LinkProfile/>
            </div>
        </div>
    </div>
</template>

<style>
.InfoCatMain{
    color: white;
    display: flex-column;
    margin-left: 0px;
    margin-right: 0px;
    background-color: none;
    p{
        margin: 0px;
    }
}

.text-and-data{
    margin-left: 3%;
    margin-right: 3%;
}

</style>