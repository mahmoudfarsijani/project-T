<template>
    <v-lazy-image
        :src="src"
        :src-placeholder="loadingImage"
        :src-error="errorImage"
        :alt="alt"
    />
</template>


<script setup>
    import { defineProps } from 'vue';
    import { string } from 'vue-types';

    defineProps({
        src: string(),
        alt: string()
    })

    const loadingImage = '/img/loadng-img.gif'
    const errorImage = '/img/error-img.jpg'
</script>