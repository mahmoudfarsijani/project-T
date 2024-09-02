<template>
  <Main class="pt-[200px]">
    <Container class="flex flex-nowrap gap-[20px]">
        <Aside></Aside>
        <Main>
            <div>
                <div class="box-sort"></div>
                <RowGrid class="list-grid">
                   <CardProduct v-for="item in dataStore.products" :key="item.id" :product="item"/>
                </RowGrid>
            </div>
        </Main>
    </Container>
  </Main>
</template>

<script setup>
import Main from '@/components/base/Main.vue'
import { useStoreFetch } from '@/composables/useStoreFetch.js'
import Container from '@/components/base/Container.vue'
import Aside from '@/components/base/Aside.vue'
import RowGrid from '@/components/base/RowGrid.vue'
import CardProduct from '@/components/main/store/shop/CardProduct.vue'

const { dataStore, errorStore, isLoading } = useStoreFetch('carts')
</script>
<style scoped>
    .list-grid {
        grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
        gap: 25px 50px;
    }
</style>
