<template>
  <Container class="min-h-screen">
    <div class="w-full flex gap-[10px] justify-between items-start">
      <!-- table -->
      <table class="flex-1 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody v-if="basketList">
          <tr v-for="item in basketList" :key="item.id">
            <td class="flex flex-nowrap items-center justify-start gap-[10px]">
              <div class="box_img w-[70px]">
                <Img :src="item.thumbnail" :alt="item.title" />
              </div>
              <p class="name dark:text-black text-gray-200">
                {{ item.title }}
              </p>
            </td>
            <td>
              <p class="dark:text-black text-gray-200">${{ item.price }}</p>
            </td>
            <td>
              <p class="dark:text-black text-gray-200">
                {{ item.quantity }}
              </p>
            </td>
            <td>
              <div class="flex flex-nowrap items-center justify-center">
                <Button
                  tag="button"
                  :is-icon-only="true"
                  icon="minus"
                 
                  @click="decrement(item)"
                />
                <span class=" py-[7.8px] px-[15px] dark:text-black text-gray-200">{{ item.quantity }}</span>
                <Button
                  tag="button"
                  :is-icon-only="true"
                  icon="pluse"
             
                  @click="increment(item)"
                />
              </div>
            </td>
            <td>
              <div class="flex justify-center">
                <Button
                  :is-icon-only="true"
                  icon="trash"
                  @click="removeProduct(item)"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="w-[30%]  box_total lg:pt-[100px]  ">
        <CardSummary   @searchCoupon="findCoupon" class="p-[20px] bg-gray-300 rounded-lg shadow-md">
          <InputBox :title-btn="'Apply Coupon'" :is-dangered="true" :is-bigged="true" :placeholder="'Enter Coupon'" :is-right="true" :is-left="true" @update:model-value="searchingCoupen"/>
          <template #totalValue>
            <p class="text-black font-bold text-blue-700">
              ${{ totalPrice }}
            </p>
          </template>
        </CardSummary>
      </div>
    </div>
  </Container>
</template>

<script setup>
import { computed, inject } from 'vue'
import Container from '@/components/base/Container.vue'
import { useAddBasketStore } from '@/stores/addBasketStore.js'
import Button from '@/components/base/Button.vue'
import CardSummary from '@/components/main/store/shop/CardSummary.vue'
import InputBox from '@/components/main/store/InputBox.vue'
import { ref } from 'vue'
 

const basketList = computed(() => useAddBasketStore().basket)
const { addBasket, increment, decrement, removeProduct } = useAddBasketStore()
const totalPrice = computed(() => {
  return basketList.value.reduce((total, prod) => total + prod.price * prod.quantity, 0).toFixed(2)
})
const findedCoupon = ref('')
const searchingCoupen = (data) => {
  findedCoupon.value = data
}
</script>

<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {

  text-align: center;
  margin: 0 auto;
  padding: 10px;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #00fa;
  color: white;
}
tr {
  height: 60px;
}
</style>
