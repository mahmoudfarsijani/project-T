<template>
    <Container class="min-h-screen">
        {{ basket }} -- {{ dataState.lengthBasketFav }}
    </Container>
</template>

<script setup>
    import Container from '@/components/base/Container.vue';
    import {useFavBasketStore} from '@/stores/favBasketStore.js';
import { computed } from 'vue';

    const basket = computed(() => useFavBasketStore().basket)
    const dataState = useFavBasketStore()
</script>