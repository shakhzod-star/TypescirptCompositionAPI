<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
        count: '23K',
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
const count = ref<number>(0)
const numbers = ref<number[]>([10])
const numberCount = ref<number>()
const interserver = ref<any>()
const scrollTrigger = function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio === 1) {
                numberCount.value = setInterval(() => {
                    if (count.value < numbers.value[0]) count.value++
                }, 1000)
            } else {
                clearInterval(numberCount.value)
                count.value = 0
            }
        })
    }, { threshold: 1, }
    )

    observer.observe(interserver.value)
}
onMounted(() => {
    scrollTrigger()
})


</script>

<template>
    <div class="bg-transport bg-center bg-no-repeat bg-cover">
        <div class="bg-Gradient">
            <div class="flex flex-col lg:flex-row justify-between xl:px-32 px-4 lg:px-12 2xl:px-[165px]  py-10 max-w-[1440px] mx-auto">
                <div class="flex flex-col mb-12">
                    <h2 class="text-white mb-5 text-[35px] 2xl:text=[38px] leading-10 font-semibold">We're Pro's at <br> what we DO</h2>
                    <p class="text-white max-w-[342px] font-normal text-base leading-5">Cras ultricies ligula sed magna dictum porta.
                        Quisque velit
                        nisi, pretium ut lacinia </p>
                </div>
                <ul class="flex flex-wrap items-start justify-between ">
                    <li class="flex flex-col items-start   mr-7 last:mr-0 even:mr-0 first:mb-12 lg:mr-8 lg:even:mr-8 2xl:even:mr-12 2xl:mr-12"
                        v-for="item in items">
                        <span class="flex justify-center items-center bg-white w-10 h-10 2xl:w-12 2xl:h-12 mb-2 rounded-lg"> <img
                                src="../assets/CreattIcons/person.svg" alt=""></span>
                        <p class="font-semibold text-5xl mb-2  text-white">{{ item.count }}</p>
                        <small class="text-white font-normal text-base">{{ item.name }}</small>
                    </li>
                </ul>
            </div>
        </div>
        <div id="listItem" ref="interserver" class="max-w-[1000px] mx-auto my-0">
            {{ count }}
        </div>
    </div>

</template>