<template>
    <Container>
        <div class="box-title mt-[50px]">
            <h2 class="title text-[35px] uppercase text-white dark:text-black font-kanit">
                categories
            </h2>
        </div>
        <RowGrid tag="ul" class="list-cat mt-[35px]">
            <CardCategories/>
        </RowGrid>
    </Container>
</template>

<script setup>
import Container from '@/components/base/Container.vue'
    import Row from '@/components/base/Row.vue'
    import CardCategories from '@/components/main/store/home/CardCategories.vue';
    import RowGrid from '@/components/base/RowGrid.vue'
</script>

<style scoped>
    .list-cat {
        grid-template-columns: repeat(auto-fit,minmax(245px,1fr));
        gap: 15px;
    }
</style>