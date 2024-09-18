<template>
    <div class="flex flex-col justify-start gap-[20px] bg-gray-100">
        <div class="p-[20px]">
            <iframe width="100%" height="250px" loading="lazy" :src="googleMap"></iframe>
        </div>
        <div class="flex flex-col gap-[15px] p-[20px]">
            <div class="flex flex-nowrap gap-[10px]">
                <Icon name="loc"/>
                <span class="text-[14px]">123 Street, New York, USA</span>
            </div>
            <div class="flex flex-nowrap gap-[10px]">
                <Icon name="gmail"/>
                <span class="text-[14px]">info@example.com</span>
            </div>
            <div class="flex flex-nowrap gap-[10px]">
                <Icon name="phone"/>
                <span class="text-[14px]">+012 345 67890</span>
            </div>
        </div>
    </div>
</template>


<script setup>
    import Icon from '@/components/base/Icon.vue'

    const googleMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509367!2d144.95373531531956!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ed9165b2c151!2sFederation%20Square%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1614291166742!5m2!1sen!2sus'
</script>