<template>
    <Main>
        <SecOne/>
        <SecTwo/>
        <SecThree/>
        <SecFour/>
        <SecFive/>
    </Main>
</template>


<script setup>
    import {onMounted} from 'vue'
    // import {useStoreFetch} from '@/composables/useStoreFetch.js'
    import SecOne from '@/components/main/store/home/SecOne.vue'
    import SecTwo from '@/components/main/store/home/SecTwo.vue'
    import SecThree from '@/components/main/store/home/SecThree.vue'
    import SecFour from '@/components/main/store/home/SecFour.vue'
    import SecFive from '@/components/main/store/home/SecFive.vue'
    import Main from '@/components/base/Main.vue';


    // const {dataStore,errorStor,isLoading} = useStoreFetch()


    onMounted(() => {
        console.log('home store');
    })
</script>