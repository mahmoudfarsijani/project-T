<template>
  <div class="input_box" :class="[`${isBigged ? 'w-full' : 'w-[450px]'}`]">
    <input :type="type" @input="enterHandler" v-model="inputValue" :placeholder="placeholder" :class="['inputed',`inputed--${isBigged ? 'big' : 'small'}`,`inputed--${isRounded ? 'rounded' : ''}`,`inputed--${isLeft ? 'left' : ''}`]"/>
    <Button :is-icon-only="isTitle"  :icon="icons" :is-danger="isDangered" :is-right-rounded="isRight" :class="{'absolute right-[0px  top-[2px] ':isAbsolute,'bg-gray-200':isWhite}">
        {{ titleBtn }}
    </Button>
  </div>
</template>

<script setup>
import { ref, defineProps,defineEmits } from 'vue'
import { string,bool } from 'vue-types'
import Button from '@/components/base/Button.vue'


 defineProps({
    type: string(),
    placeholder: string(),
    titleBtn: string(),
    isTitle: bool().def(false),
    icons: string(),
    isDangered: bool().def(false),
    isRight: bool().def(false),
    isAbsolute:bool().def(false),
    isBigged: bool().def(false),
    isRounded: bool().def(false),
    isLeft:bool().def(false),
    isWhite:bool().def(false)
})

const emits = defineEmits(['update:modelValue']);
const inputValue = ref('');

const enterHandler = (event) => {
    emits('update:modelValue',event.target.value)
}

</script>

<style scoped>
    .input_box {
        @apply relative flex flex-nowrap 
    }

    .inputed {
        @apply w-full outline-none text-black text-[18px] bg-gray-200
    }

    .inputed--big {
        @apply px-[10px] py-[8px]
    }

    .inputed--small {
        @apply px-[10px] py-[8px]
    }

    .inputed--rounded {
        @apply rounded-md
    }

    .inputed--left {
        @apply rounded-l-md
    }
</style>
