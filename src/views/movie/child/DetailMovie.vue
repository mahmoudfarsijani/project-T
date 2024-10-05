<template>
    <div class="text-white">
        child movie
        {{ $route.params.id }}
    </div>
</template>


<script setup>
    import { useRouter,useRoute } from 'vue-router';
</script>