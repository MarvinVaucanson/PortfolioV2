<script setup lang="ts">
    import { computed } from 'vue'
    import LinkProfile from './LinkProfile.vue'
    import type {InfoSDO} from '../assets/types/InfoSDO.ts'
    import { Avatar, Galleria, Badge, Tag, Button } from 'primevue'

    const props = withDefaults(defineProps<{
        categorie: InfoSDO
        fromNav: number
    }>(),{
        fromNav:0
    })

    const base_path = `/images/${props.categorie.nom}`

    const avatar_path = computed(() => {
        return `/images/${props.categorie.nom}/${props.categorie.nomMenu[props.fromNav]}.png`
    })

    const presentation_avatar_path = computed(() => {
        return `/images/${props.categorie.nom}/me.png`
    })

    const backgroundColor = computed(() => {
        const color = props.categorie?.color
        return /^#[0-9A-F]{6}$/i.test(color) ? color : '#FFFFFF'
    })

    const images = computed(() => {
        const count = Array.isArray(props.categorie.images)
            ? props.categorie.images[props.fromNav]
            : props.categorie.images
        if (!count || isNaN(count)) return []
        const folder = props.categorie.nomMenu?.[props.fromNav] ?? ''
        return Array.from({ length: count }, (_, i) => ({
            itemImageSrc: `/images/${props.categorie.nom}/${folder}/${i}.png`,
            alt: `${folder} ${i}`
        }))
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
                :image="presentation_avatar_path" 
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
            <div v-if="categorie.type === 'Parcours' || categorie.type === 'Projets'">
                <div class="flex pr-5">
                    <div>
                        <h3 v-if="categorie.date" class="font-bold p-2">
                            // Date : {{ categorie.date[props.fromNav] }} 

                        </h3>
                                                    <Badge
                                v-if="categorie.badge[props.fromNav]" 
                                :value="categorie.badge[props.fromNav]" 
                                size="xlarge" 
                                :style="{color : backgroundColor, backgroundColor:'#ffffff'}" 
                            />
                        <p class="p-2 pr-4 text-justify">
                            {{ categorie.text.main[props.fromNav] }}
                        </p>
                        <h3 v-if="categorie.tech[props.fromNav]" class="font-bold p-2">
                            // Technologies
                        </h3>
                        <Tag 
                            v-for="item in categorie.tech[props.fromNav]" 
                            :value="item" 
                            size="large" 
                            class="m-1 border-1 bg-transparent"
                            :style="{backgroundColor:'transparent'}"
                        />
                        <div v-if="categorie.link.href[props.fromNav]">
                            <h3 class="font-bold p-2">
                                // Liens
                            </h3>
                            <a :href="categorie.link.href[props.fromNav]">
                            <i class="fa-solid fa-link"></i><Button :label="categorie.link.label[props.fromNav]" variant="link" style="color:white"></Button>
                            </a>
                        </div>
                    </div>
                    <div v-if="categorie.images[props.fromNav] > 0">
                        <h3 class="font-bold p-2">
                            // Galerie
                        </h3>
                        <Galleria 
                            :value="images"
                            :circular="true" 
                            containerStyle="max-width: 640px"
                            :showItemNavigators="true" 
                            :showThumbnails="false"
                        >
                            <template #item="slotProps">
                                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                            </template>
                            <template #thumbnail="slotProps">
                                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                            </template>
                        </Galleria>
                    </div>
                </div>
            </div>
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