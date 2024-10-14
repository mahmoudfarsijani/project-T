<template>
    <div class="w-[10%] min-h-screen bg-red-600">
        dashboard nav
        <ul>
            <RouterLink to="/dashboard/home">
                home
            </RouterLink>
            <RouterLink to="/dashboard/info">
                info
            </RouterLink>
        </ul>
    </div>
</template>



<script setup>
    import Button from '@/components/base/Button.vue'
</script>