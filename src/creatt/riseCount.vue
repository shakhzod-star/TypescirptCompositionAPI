<script setup lang="ts">
import { ref } from 'vue';
interface statistics {
    count: string
    name: string
}
const items = ref<Array<statistics>>([
    {
        count: '10K',
        name: 'Client Served'
    },
    {
        count: '10K',
        name: 'Vehicle shipped'
    }
    ,
    {
        count: '96%',
        name: 'Satisfied customer'
    }
    ,
    {
        count: '7+',
        name: 'Years in operation'
    }
])
</script>

<template>
    <div class="bg-transport bg-center bg-no-repeat bg-cover">
        <div class="flex justify-between px-40 py-16 max-w-[1440px]">
            <div class="flex flex-col">
                <h2 class="text-white">We're Pro's at <br> what we DO</h2>
                <p class="text-white">Cras ultricies ligula sed magna dictum porta. Quisque velit
                    nisi, pretium ut lacinia </p>
            </div>
            <ul class="flex items-center justify-center">
                <li class="flex flex-col items-center" v-for="item in items">
                    <span class="bg-bgBlock w-12 h-12 mb-2"></span>
                    <p class="mb-8 text-white">{{ item.count }}</p>
                    <small class="text-white">{{ item.name }}</small>
                </li>
            </ul>
        </div>
    </div>
</template>