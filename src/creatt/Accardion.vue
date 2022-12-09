<script setup lang="ts">
import { ref } from 'vue'

export type acc = {
    active: boolean,
    title: string,
    subtitle: string
}

const accordion = ref<Array<acc>>([
    {
        active: false,
        title: 'Is my vehicle insured during transport?',
        subtitle: 'Yes, you can put your luggage inside your car up to 100lbs in a box or a single piece of luggage that will be in the trunk of the car during transport for free, for each other 100lbs will be subject to the extra charge by the carrier.'
    },
    {
        active: false,
        title: 'Can I Store Luggage in My Car When It is Being Shipped?',
        subtitle: 'Yes, you can put your luggage inside your car up to 100lbs in a box or a single piece of luggage that will be in the trunk of the car during transport for free, for each other 100lbs will be subject to the extra charge by the carrier.'
    },
    {
        active: false,
        title: 'When is the vehicle going to be picked-up?',
        subtitle: 'Yes, you can put your luggage inside your car up to 100lbs in a box or a single piece of luggage that will be in the trunk of the car during transport for free, for each other 100lbs will be subject to the extra charge by the carrier.'
    },
    {
        active: false,
        title: 'How Do I Pay for My Auto Shipping?',
        subtitle: 'Yes, you can put your luggage inside your car up to 100lbs in a box or a single piece of luggage that will be in the trunk of the car during transport for free, for each other 100lbs will be subject to the extra charge by the carrier.'
    }
])
</script>
<template>
    <div class="pt-[120px] pb-[100px] px-4 md:pt-20 md:pb-[75px]">
        <h2 class="flex flex-col text-center text-[28px] leading-[33px] mb-2 md:flex-row md:justify-center md:text-[38px]  md:leading-[45px] md:mb-[15px]"> Frequently <span>Asked Questions</span></h2>
        <p class="mb-[60px] text-base text-center md:mb-[80px]">Need help? Here are the top questions asked by our Subscribers</p>
        <div class="accordion mx-auto">
            <div class="contentBx sm:text-center" :class="{ 'active': item.active }" @click="(item.active = !item.active)"
                v-for="(item, index) in accordion" :key="index">
                <div class="flex justify-between items-center mb-0  sm:mb-[10px] md:mb-4">
                    <div class="label text-[17px] leading-[21px] mb-[14px] sm:mb-0 text-black/[0.87] relative cursor-pointer md:text-[18px] md:leading-[21px]">{{ item.title }}</div>
                    <svg class="hidden sm:block" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  :display=" item.active ? 'none' : '' "
                            d="M12.2383 3.85938H13.7617C13.8971 3.85938 13.9648 3.92708 13.9648 4.0625V21.9375C13.9648 22.0729 13.8971 22.1406 13.7617 22.1406H12.2383C12.1029 22.1406 12.0352 22.0729 12.0352 21.9375V4.0625C12.0352 3.92708 12.1029 3.85938 12.2383 3.85938Z"
                            fill="#3D3D3D" />
                        <path
                            d="M4.46875 12.0352H21.5312C21.6667 12.0352 21.7344 12.1029 21.7344 12.2383V13.7617C21.7344 13.8971 21.6667 13.9648 21.5312 13.9648H4.46875C4.33333 13.9648 4.26562 13.8971 4.26562 13.7617V12.2383C4.26562 12.1029 4.33333 12.0352 4.46875 12.0352Z"
                            fill="#3D3D3D" />
                    </svg>
                </div>
                <div class="content      sm:block h-0 sm:h-auto ">
                    <p class="text-black/[0.68] text-[15px] leading-[20px] md:text-base">
                        {{ item.subtitle }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<style  scoped>
.accordion {
    max-width: 732px;
}

.accordion .contentBx {
    position: relative;
    border-bottom: 1px solid #DFDFDF;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #DFDFDF;

}

.accordion .contentBx:last-child {
    position: relative;
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.accordion .contentBx .content {
    position: relative;
    overflow: hidden;
    background: #fff;
    height: 0;
    transition: 0.5s;
}
.accordion .contentBx.active .content{
    display: block;
    height: 75px;
}
@media(max-width:640px){
 .accordion .contentBx .content{
    height: 75px !important;
 }   

}
</style>
