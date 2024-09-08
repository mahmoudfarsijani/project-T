<template>
  <v-chip class="ma-2" label> {{ label }} </v-chip>
</template>


<script setup>
 import { defineProps } from 'vue';
 import {string} from 'vue-types'

 defineProps({
    label: string()
 })
</script>
