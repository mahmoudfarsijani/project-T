<template>
    <div v-if="detail" class="flex smm:flex-col md:flex-row lg:flex-row w-full gap-[50px]" >
        <!-- <div class="smm:w-[60%] md:w-[35%] max-w-[250px] smm:mx-auto md:mx-0">
            <div class="w-full overflow-hidden rounded-md">
                <Img :src="srcImg" :alt="detail.title" class="w-full h-full"/>
            </div>
        </div> -->
        <div>
            <h1 class="title smm:text-[37px] md:text-[37px] lg:text-[49px] font-kanit">
                {{ detail.title }}
            </h1>
            <div class="flex items-center gap-[15px]">
                <div class="flex flex-nowrap">
                    <Icon v-for="item in rate" :key="item.id" :name=" item.count <= countRange ? 'fill-star' : 'empty-star' "/>
                </div>
                <span class="text-[14px]">
                    {{ countRange }} (IMDB)  {{ runTime }}
                </span>
                <div>

                </div>
            </div>
            <p class="subtitle smm:text-[13px] md:text-[15px] lg:text-[17px]">
                {{ detail.overview }} 
            </p>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'
import { string, object, array, shape, number,bool } from 'vue-types'
import Img from '@/components/base/Img.vue'
import Row from '@/components/base/Row.vue'
import Icon from '@/components/base/Icon.vue'
import { nanoid } from 'nanoid'


const props = defineProps({
    detail:shape({
        adult:bool(),
        backdrop_path:string(),
        budget:string(),
        genres:array(),
        homepage:string(),
        id:number(),
        imdb_id:number(),
        origin_country:array(),
        original_language:string(),
        original_title:string(),
        overview:string(),
        popularity:number(),
        poster_path:string(),
        production_companies:array(),
        production_countries:array(),
        release_date:string(),
        spoken_languages:array(),
        status:string(),
        tagline:string(),
        title:string(),
        vote_average:number(),
        vote_count:number(),
        runtime:number()
    })
})

// const srcImg = computed(() => {
//     return `https://image.tmdb.org/t/p/w500/${props.detail.poster_path}`
// })

const rate = [
    {
        count:2,
        id:nanoid(3)
    },
    {
        count:4,
        id:nanoid(3)
    },
    {
        count:6,
        id:nanoid(3)
    },
    {
        count:8,
        id:nanoid(3)
    },
    {
        count:10,
        id:nanoid(3)
    },
]

const countRange = computed(() => {
    if(props.detail.vote_count){
        return Math.floor((props.detail.vote_average)).toFixed(1)
    }
})

const runTime = computed(() => {
    const hours = Math.floor(props.detail?.runtime / 60)
    const remaining = props.detail?.runtime % 60
    return `${hours}h: ${remaining}m`
})


</script>
