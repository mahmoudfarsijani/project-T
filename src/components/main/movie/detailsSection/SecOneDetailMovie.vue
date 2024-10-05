<template>
    <div>

    </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'
import { string, object, array, shape, number,bool } from 'vue-types'
import Img from '@/components/base/Img.vue'
import Row from '@/components/base/Row.vue'


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
        vote_count:number()
    })
})
</script>
