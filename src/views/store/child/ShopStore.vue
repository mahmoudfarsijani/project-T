<template>
  <Main class="pt-[200px]">
    <Container class="flex flex-wrap lg:flex-nowrap gap-[20px]">
      <Aside class="flex flex-col gap-[15px]">
        <div class="w-full bg-slate-600 dark:bg-gray-300  p-[15px] rounded-md">
          <h3 class="font-kanit text-[25px] capitalize text-gray-200 dark:text-slate-600">Filter by category</h3>
          <div>
            <BoxFilterCheckBoxProduct
              value="All"
              label="All"
              v-model="selectedCategories"
              @change="handleAllChange"
            />
            <BoxFilterCheckBoxProduct
              v-for="category in cat"
              :key="category"
              :value="category"
              :label="category"
              v-model="selectedCategories"
              @change="handleCategoryChange"
            />
          </div>
        </div>
        <div class="w-full bg-slate-600 dark:bg-gray-300  p-[15px] rounded-md">
          <h3 class="font-kanit text-[25px] capitalize text-gray-200 dark:text-slate-600">Filter by price</h3>
          <div>
            <!-- filter price -->
            <label v-for="range in priceRanges" :key="range.label"  class="flex flex-nowrap items-center gap-[8px] capitalize font-suns whitespace-nowrap text-gray-200 dark:text-slate-600">
              <input type="checkbox" :value="range" v-model="selectedPriceRanges"/>
              {{ range.label }}
            </label>
          </div>
        </div>
      </Aside>
      <Main>
        <div>
          <div class="box-sort"></div>
          <div v-if="isLoadingStore">
            <span class="loading loading-spinner loading-lg bg-black"></span>
          </div>
          <div v-else-if="errorStore">
            <span>
              {{ errorStore }}
            </span>
          </div>
          <RowGrid v-else class="list-grid">
            <CardProduct v-for="item in filterColred" :key="item.id" :product="item" />
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
import { ref, computed } from 'vue'
import BoxFilterCheckBoxProduct from '@/components/main/store/shop/BoxFilterCheckBoxProduct.vue'

// fetch -----------------
const { dataStore, errorStore, isLoadingStore } = useStoreFetch()

// data filters -------
const cat = ['beauty', 'fragrances', 'furniture', 'groceries']
const priceRanges = [
  { label: '$0 - $10', min: 0, max: 10 },
  { label: '$10 - $20', min: 10, max: 20 },
  { label: '$20 - $100', min: 20, max: 100 }
]

// for categories ----------
const selectedCategories = ref(['All'])
const handleAllChange = () => {
  if (selectedCategories.value.includes('All')) {
    selectedCategories.value = ['All']
  }
}
const handleCategoryChange = () => {
  const index = selectedCategories.value.indexOf('All')
  if (index !== -1) {
    selectedCategories.value.splice(index, 1)
  }
}

//for prices ----------
const selectedPriceRanges = ref([])

const filterColred = computed(() => {
  let allProduct = dataStore.value.products
  if (selectedCategories.value.includes('All')) {
    return allProduct
  }

  // filter by category
  if (selectedCategories.value.length > 0) {
    allProduct = allProduct.filter((item) => selectedCategories.value.includes(item.category))
  }

  // Filter by price range
  if (selectedPriceRanges.value.length > 0) {
    allProduct = allProduct.filter((product) =>
      selectedPriceRanges.value.some(
        (range) => product.price >= range.min && product.price <= range.max
      )
    )
  }
  return allProduct
})
</script>
<style scoped>
.list-grid {
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 25px 50px;
}
</style>
