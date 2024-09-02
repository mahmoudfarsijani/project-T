<template>
    <div>
        {{dataStoreCat}}
    </div>
</template>


<script setup>
    import {ref} from 'vue'
    import {useRoute} from 'vue-router'

    import {useStoreFetchCat} from '@/composables/useStoreFetchCategories.js'

    const route = useRoute()
    const {dataStoreCat,isLoadingStoreCat,errorStoreCat} = useStoreFetchCat(route.params.categorie)
</script>