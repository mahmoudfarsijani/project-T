<template>
    <Card v-if="movies" tag="RouterLink" :to="`/movie-detail/${movies.id}`" class="w-full h-[80px]  justify-start items-center gap-[20px] py-[27px]" :is-row="true" :is-pointer="true" >
        <template #header>
            <div class="w-[50px] h-[50px] overflow-hidden rounded-full">
                <Img :src="srcImg" :alt="movies.original_title" class="w-full"/>
            </div>
        </template>
        <div class="body">
            <h2 class="title text-slate-700">
                {{ movies.original_title }}
            </h2>
        </div>
    </Card>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'
import { string, object, shape,number } from 'vue-types'
import Card from '@/components/base/Card.vue'
import Img from '@/components/base/Img.vue'

const props = defineProps({
    movies: object({
        id:number(),
        poster_path:string(),
        original_title:string()
    })
})

const srcImg = computed(() => {
    return `https://image.tmdb.org/t/p/w500/${props.movies.poster_path}`
})
</script>
