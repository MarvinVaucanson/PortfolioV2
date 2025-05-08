<script setup lang="ts">
    import { computed, ref } from 'vue';
    import LinkProfile from './LinkProfile.vue';
    import type {InfoSDO} from '../assets/types/InfoSDO.ts'
    import { Avatar } from 'primevue';

    const props = defineProps<{
        categorie: InfoSDO
    }>();

    const selected = ref(0);

    const base_path = "/src/assets/images/"+props.categorie.nom
    const avatar_path = computed(() => {
        return base_path + "/" + props.categorie.nomMenu[selected.value] + ".png";
    });
    const avatar_path_value = avatar_path.value
    console.log("Avatar path",avatar_path.value)

    const backgroundColor = computed(() => {
        const color = props.categorie?.color;
        return /^#[0-9A-F]{6}$/i.test(color) ? color : '#FFFFFF';
    });

</script>

<template>
    <div class='InfoCatMain' :style="{backgroundColor: backgroundColor}">
        <Avatar :image="avatar_path_value" class="mr-2" size="xlarge" shape="circle" />
        <p>{{ categorie?.text.main }}</p>
        <div v-if="categorie.type==='Presentation'" style="margin: 0px;">
            <LinkProfile/>
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