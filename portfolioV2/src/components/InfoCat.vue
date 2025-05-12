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
    <div class='InfoCatMain' :style="{backgroundColor: backgroundColor}">
        <Avatar v-if="categorie.type!=='Presentation'" :image="avatar_path_value" 
            class="avatar" 
            size="xlarge" 
            shape="circle" 
        />
        <Avatar v-if="categorie.type==='Presentation'" :image="base_path+'/me.png'" 
            class="avatar" 
            size="xlarge" 
            shape="circle" 
        />
        <div class="text-and-data">
            <p>{{ categorie?.text.main[props.fromNav] }}</p>
            <div v-if="categorie.type==='Presentation'" style="margin: 0px;">
                <LinkProfile/>
            </div>
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

.text-and-data{
    padding: 4%;
}

.avatar{
    margin-left: 8%;
    margin-top: -3%;
}

</style>