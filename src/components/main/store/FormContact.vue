<template>
    <form @submit.prevent="formHandler" class="box">
        <div class="box__input">
            <input type="text" v-model="infos.username" class="box__input--style" placeholder="Your Name">
        </div>
        <div class="box__input">
            <input type="email" v-model="infos.email" class="box__input--style" placeholder="Your Email">
        </div>
        <div class="box__input">
            <input type="text" v-model="infos.subject" class="box__input--style" placeholder="Subject">
        </div>
        <div class="box__input">
            <textarea placeholder="Message" class="w-full bg-gray-300 p-[10px] resize-none h-[200px]"></textarea>
        </div>
        <Button tag="button" type="submit" :is-icon-only="false" :is-yellow="true">
            Send Message
        </Button>
    </form>
</template>


<script setup>
    import { ref,reactive } from 'vue';
    import Button from '@/components/base/Button.vue'
 

    
    // const username = ref('')
    // const email = ref('')
    // const subject = ref('')


    const infos = reactive({
        username: '',
        email: '',
        subject: ''
    });

    const formHandler = () => {
        console.log(JSON.stringify(infos));
        infos.username = ''
        infos.email = ''
        infos.subject = ''
    }




</script>

<style scoped>

.box {
    @apply bg-gray-100 p-[20px] max-h-[450px] overflow-hidden
}

.box__input{
    @apply mb-[10px]
}

    .box__input--style {
        @apply bg-gray-300 w-full px-[10px] py-[8px]
    }
</style>