<template>
  <Container class="min-h-screen">
    <div class="w-full flex gap-[10px] justify-between items-start">
      <!-- table -->
      <table class="flex-1">
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
              <p class="name text-black">
                {{ item.title }}
              </p>
            </td>
            <td>
              <p class="text-black">${{ item.price }}</p>
            </td>
            <td>
              <p class="text-black">
                {{ item.quantity }}
              </p>
            </td>
            <td>
              <div class="flex flex-nowrap items-center justify-center">
                <Button
                  tag="button"
                  :is-icon-only="true"
                  icon="minus"
                  :is-yellow="true"
                  @click="decrement(item)"
                />
                <span class="bg-gray-400 py-[7.8px] px-[15px]">{{ item.quantity }}</span>
                <Button
                  tag="button"
                  :is-icon-only="true"
                  icon="pluse"
                  :is-yellow="true"
                  @click="increment(item)"
                />
              </div>
            </td>
            <td>
              <div class="flex justify-center">
                <Button
                  :is-icon-only="true"
                  icon="trash"
                  :is-danger="true"
                  @click="removeProduct(item)"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="w-[30%] h-[450px] bg-red-600 box_total">
        ${{ totalPrice }}
      </div>
    </div>
  </Container>
</template>

<script setup>
import { computed, inject } from 'vue'
import Container from '@/components/base/Container.vue'
import { useAddBasketStore } from '@/stores/addBasketStore.js'
import Button from '@/components/base/Button.vue'

const basketList = computed(() => useAddBasketStore().basket)
const { addBasket, increment, decrement, removeProduct } = useAddBasketStore()
const totalPrice = computed(() => {
  return basketList.value.reduce((total, prod) => total + prod.price * prod.quantity, 0).toFixed(2)
})
</script>

<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #ddd;
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
