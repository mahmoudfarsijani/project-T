<template>
    <component :is="tag" class="container">
        <slot/>
    </component>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { oneOf } from 'vue-types';

    defineProps({
        tag:oneOf(['div','section']).def('div')
    })
</script>