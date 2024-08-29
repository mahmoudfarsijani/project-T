<template>
    <v-lazy-image
        :src="src"
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
</script>