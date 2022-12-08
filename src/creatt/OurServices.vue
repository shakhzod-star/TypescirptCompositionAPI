<script setup lang="ts">
import { ref } from 'vue'
interface services {
    subtitle: string,
    title: string,
    picture: string
}
const cards = ref<Array<services>>([
    {
        subtitle: 'Car Shipments',
        title: 'One of the most widely-known segment of the freight industry is Auto Transport. It offers car shipping services to individuals and organizations who require a car to be transferred from one place to another.',
        picture: '../assets/CreateImg/card.jpg'
    },
    // {
    //     subtitle: 'Motorcycle shipments',
    //     title: 'Motorcycle shipments are as popular as regular vehicles. People might need motorcycle shipments due to some reasons like moving to another state, buying or selling purposes, and the most popular one “Vintage motorcycle shows”.',
    //     picture: '../assets/CreateImg/card.jpg'
    // }
    // ,
    // {
    //     subtitle: 'Heavy Equipment',
    //     title: 'Shipping Heavy equipment is not always an easy process to do. Heavy machinery plays an important role in your business. So that’s why you will need a professional heavy equipment transporter to ship your machinery.',
    //     picture: '../assets/CreateImg/card.jpg'
    // }
    // ,
    // {
    //     subtitle: 'Luxury Cars shipment',
    //     title: 'If you are an owner of Luxury Cars, you might need to relocate your car for some particular reasons like moving to another state, luxury cars show, purchasing or selling them. Luxury car shipping requires careful planning and performance to ensure that your vehicle arrives safely and on time.',
    //     picture: '../assets/CreateImg/card.jpg'
    // }
    // ,
    // {
    //     subtitle: 'Hawaii Shipments',
    //     title: 'Therefore, it is obvious that you should bring a car with you on your trip to Hawaii. Unavoidably, you may rent a car, use ride-sharing services, or take the dreaded public transportation.',
    //     picture: '../assets/CreateImg/card.jpg'
    // }
    // ,
    // {
    //     subtitle: 'Alaska shipments',
    //     title: 'It can be difficult to locate a firm that offers car transportation to Alaska because several auto shippers only cover the lower 48 states. We`ll first go over the procedure for transporting a car to Alaska in order to make things clearer before moving on to typical charges and provider suggestions',
    //     picture: '../assets/CreateImg/card.jpg'
    // }
    // ,
    // {
    //     subtitle: 'Boat Shipments',
    //     title: 'You might have purchased a boat after making the trip to a far-off boat show, read about a great offer on a far-off yacht, or purchased a boat directly from the manufacturer. There`s a strong probability that in either of these scenarios, you`ll now need to make plans for shipping your boat to your house or marina.',
    //     picture: '../assets/CreateImg/card.jpg'
    // }
    // ,
    // {
    //     subtitle: 'Door to Door delivery',
    //     title: 'Optimum Auto Shipping offers Door to Door delivery to all the services we offer to our valuable customers. Regular cars and even Heavy equipment shipping will be delivery to your front door.',
    //     picture: '../assets/CreateImg/card.jpg'
    // }
])

</script>
<template>
    <div class="pt-[75px]">
        <h2 class="text-center mb-2 text-blackColor">Our Services</h2>
        <p class="text-center mb-12 text-blackColor">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Pellentesque in ipsum id orci porta dapibus.</p>
        <div class="flex flex-wrap justify-center">
            <div class="relative overflow-hidden mr-5 group" v-for="(card, index) in cards" :key="index">
                <img class="object-cover ease-in-out duration-700 group-hover:object-contain  w-[354px] max-w-[354px] h-[458px]"
                    src="../assets/CreateImg/cards.jpg" alt="">
                <h3 class="text-white absolute group-hover:opacity-0 duration-700 bottom-[61px] left-5 font-semibold text-2xl">{{
                        card.subtitle
                }}</h3>
                <a href="" class="text-white  absolute bottom-5 duration-700 group-hover:opacity-0 left-5 text-base">Подробнее <img src=""
                        alt=""> </a>
                <div
                    class=" flex flex-col items-start bg-white p-5 max-w-[354px] border absolute bottom-[-230px] group-hover:bottom-0 ease-in-out duration-700">
                    <h3 class="text-blackColor mb-[10px]">{{ card.subtitle }}</h3>
                    <p class="text-blackColor mb-[15px] "> {{ card.title }} </p>
                    <a href="" class="text-orangeColor">Подробнее <img src="" alt=""> </a>
                </div>ease-in-out
            </div>
        </div>

    </div>
</template>