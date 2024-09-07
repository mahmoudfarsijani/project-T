<template>
  <Card tag="div">
    <template #header>
      <slot/>
    </template>
    <div class="body flex flex-col gap-[20px] mt-[20px]">
        <h5 class="title text-black text-[20px]  border-b-[1px] border-gray-400 pb-[10px]">Cart Summary</h5>
        <div class="box_total flex flex-nowrap justify-between">
            <p class="total text-black">
                Total
            </p>
            <slot name="totalValue"/>
        </div>
    </div>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from '@/components/base/Card.vue'
import InputBox from '@/components/main/store/InputBox.vue'

const couponValue = ref('')
const searchCoupon = (data) => {
    couponValue.value = data
}
</script>
