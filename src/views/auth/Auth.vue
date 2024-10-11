<template>
    <Main  >
       <Container class=" h-screen flex flex-col justify-center items-center">
        <h1 class="smm:text-[24px] md:text-[28px] lg:text-[32px] capitalize font-Archivo">
            auth
        </h1>
        <BoxRouteAuth/>
       </Container>
    </Main>
</template>



<script setup>
    import BoxRouteAuth from '@/components/main/auth/BoxRouteAuth.vue'
    import Container from '@/components/base/Container.vue'
    import Main from '@/components/base/Main.vue'
</script>