<template>
  <Card :is-row="false" tag="div" class="card-drop">
    <div class="relative w-full">
      <Button
        :is-icon-only="false"
        icon="arrow-bottom"
        class="btn-dropdown"
        @click="showDropdown"
      >
        categories
      </Button>
      <Row  :is-col="true" class="list-cat" :class="{'show-drop':isShowDropdown}">
        <li v-for="item in options" :key="item.id" class="list-cat--item">
            <p class="text-black whitespace-nowrap capitalize">
                {{ item.label }}
            </p>
        </li>
      </Row>
    </div>
  </Card>
</template>

<script setup>
import Button from '@/components/base/Button.vue'
import Card from '@/components/base/Card.vue'
import Row from '@/components/base/Row.vue'
import { nanoid } from 'nanoid';
import { ref } from 'vue';

const options = [
    {
        label:'beauty',
        value:'beauty',
        id:nanoid(3)
    },
    {
        label:'fragrances',
        value: 'fragrances',
        id:nanoid(3)
    },
    {
        label:'furniture',
        value:'furniture',
        id:nanoid(3)
    },
    {
        label:'groceries',
        value: 'groceries',
        id:nanoid(3)
    },
    {
        label:'home decoration',
        value: 'home-decoration',
        id:nanoid(3)
    },
    {
        label: 'kitchen accessories',
        value: 'kitchen-accessories',
        id:nanoid(3)
    },
    {
        label: 'laptops',
        value: 'laptops',
        id:nanoid(3)
    },
    {
        label: 'mens shirts',
        value: 'mens-shirts',
        id:nanoid(3)
    },
    {
        label: 'mens shoes',
        value: 'mens-shoes',
        id:nanoid(3)
    },
    {
        label: 'mens watches',
        value: 'mens-watches',
        id:nanoid(3)
    },
    {
        label: 'mobile accessories',
        value: 'Mobile Accessories',
        id:nanoid(3)
    },
    {
        label: 'motorcycle',
        value:'motorcycle',
        id:nanoid(3)
    },
    {
        label:'skin care',
        value:'skin-care',
        id:nanoid(3)
    },
    {
        label:'smartphones',
        value:'smartphones',
        id:nanoid(3)
    },
    {
        label:'sports accessories',
        value:'sports-accessories',
        id:nanoid(3)
    },
    {
        label:'sunglasses',
        value:'sunglasses',
        id:nanoid(3)
    },
    {
        label:'tablets',
        value:'tablets',
        id:nanoid(3)
    },
    {
        label:'tops',
        value:'tops',
        id:nanoid(3)
    },
    {
        label:'vehicle',
        value:'vehicle',
        id:nanoid(3)
    },
    {
        label:'womens bags',
        value:'womens-bags',
        id:nanoid(3)
    },
    {
        label:'womens dresses',
        value:'womens-dresses',
        id:nanoid(3)
    },
    {
        label:'womens jewellery',
        value:'womens-jewellery',
        id:nanoid(3)
    },
    {
        label:'womens shoes',
        value:'womens-shoes',
        id:nanoid(3)
    },
    {
        label:'womens watches',
        value:'womens-watches',
        id:nanoid(3)
    }
]

const isShowDropdown = ref(false)

const showDropdown = () => {
    isShowDropdown.value = !isShowDropdown.value
}

</script>


<style scoped>
.card-drop {
    @apply relative w-full
}
.btn-dropdown {
    @apply capitalize text-white dark:text-black 
    w-full px-[10px]  gap-[10px] py-[10px] justify-between
}
.list-cat {
    @apply  absolute bg-white  py-[10px] top-[55px]
     overflow-hidden 
    transition-transform duration-500  scale-y-0 origin-top
    rounded-md
}

.list-cat--item {
    @apply border-b-[1px] border-b-gray-400 px-[20px] py-[10px]
}

.list-cat--item:last-child {
    @apply border-none
}
    .show-drop {
        @apply h-[1065px]  scale-y-90 
    }
</style>
