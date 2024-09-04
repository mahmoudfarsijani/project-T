<template>
  <div class="input_box" :class="[`${isBigged ? 'w-[450px]' : 'w-[250px]'}`]">
    <input :type="type" v-model="inputValue" :placeholder="placeholder" :class="['inputed',`inputed--${isBigged ? 'big' : 'small'}`,`inputed--${isRounded ? 'rounded' : ''}`,`inputed--${isLeft ? 'left' : ''}`]"/>
    <Button :is-icon-only="isTitle" @click="enterHandler" :icon="icons" :is-danger="isDangered" :is-right-rounded="isRight" :class="{'absolute right-[0px] top-[2px] ':isAbsolute}">
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
    isLeft:bool().def(false)
})

const emits = defineEmits(['input-value']);
const inputValue = ref('');

const enterHandler = () => {
    emits('input-value',inputValue.value)
}

</script>

<style scoped>
    .input_box {
        @apply relative flex flex-nowrap 
    }

    .inputed {
        @apply w-full outline-none text-black text-[18px]
    }

    .inputed--big {
        @apply px-[10px] py-[8px]
    }

    .inputed--small {
        @apply px-[10px] py-[5px]
    }

    .inputed--rounded {
        @apply rounded-md
    }

    .inputed--left {
        @apply rounded-l-md
    }
</style>
