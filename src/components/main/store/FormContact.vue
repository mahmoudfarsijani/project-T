<template>
    <form @submit.prevent="formHandler" class="box">
        <div class="box__input">
            <input type="text" class="box__input--style" placeholder="Your Name">
        </div>
        <div class="box__input">
            <input type="text" class="box__input--style" placeholder="Your Email">
        </div>
        <div class="box__input">
            <input type="text" class="box__input--style" placeholder="Subject">
        </div>
        <div class="box__input">
            <textarea placeholder="Message"></textarea>
        </div>
        <Button tag="button" type="submit" :is-icon-only="false" :is-yellow="true">
            send message
        </Button>
    </form>
</template>


<script setup>
    import Button from '@/components/base/Button.vue'
</script>

<style scoped>

.box {
    @apply bg-gray-100 p-[20px]
}

.box__input{
    @apply mb-[10px]
}

    .box__input--style {
        @apply bg-gray-300 w-full px-[10px] py-[8px]
    }
</style>