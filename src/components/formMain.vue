<script setup lang="ts">
import { ref } from 'vue';
import baseInput from './baseInput.vue';
let fullName = ref<string>('')
let email = ref<string>('')
let number = ref<string>('')
function Submited() {
    // isEmailValid()
    console.log(email.value , fullName.value);

}
</script>
<template>
    <div class="bg-white rounded-xl shadow-xl md:flex md:justify-between md:w-[1140px] p-5">
        <div class="relative bg-[#002F5F] p-5 text-white rounded-xl mr-5 md:w-[500px] z-[1]">
            <div class="z-[10]">
                <h1 class="text-4xl mb-3">Contact information </h1>
                <p class="text-base font-light mb-10 w-[200px]">We will help you enhange quality of education process in
                    your
                    institution</p>
                <div class="flex mb-4 font-medium text-md">
                    <p class="mr-3">&phone;</p>
                    <p>+998 88 188 90 00</p>
                </div>
                <div class="flex mb-4 font-medium text-md">
                    <p class="mr-3">&commat;</p>
                    <p>ssolitionuz@gmail.com</p>
                </div>
                <div class="flex mb-4 font-medium text-md">
                    <p class="mr-3">&maltese;</p>
                    <p>Tashkent, Uzbekistan</p>
                </div>
            </div>
            <div>
                <img src="./Rectangle 1533.png" class="right-0 bottom-0 absolute z-[2]" alt="">
            </div>
        </div>
        <div>
            <form action="" class="md:w-[500px]" @submit.prevent="Submited">
                
                <baseInput v-model="fullName" :regex="/([a-zA-Z]{3,30}\s*)+/"
                    success-msg="All is good" error-msg="text must be Full name"
                    label-name="Full name"></baseInput>
                <baseInput v-model="email" :regex="/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/"
                    success-msg="All is good" error-msg="text must be email"
                    label-name="Email"></baseInput>
                <baseInput v-model="number" :regex="/^[+]?998[012345789][0-9]{8}$/"
                    success-msg="All is good" error-msg="text must be Uzb Phone"
                    label-name="Phone Number"></baseInput>

               
                <div class="input-container ic1">
                    <input id="firstname" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">Organisation</label>
                </div>
                <div class="input-container ic1">
                    <input id="firstname" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">Message</label>
                </div>
                <div>
                    <button type="submit" class="bg-[#002F5F] text-white rounded-lg py-[12px] px-[30px] mt-3">Send
                        message</button>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
.input-container {
    height: 50px;
    position: relative;
    width: 100%;
}

.ic1 {
    margin-top: 20px;
}

.input {
    background-color: white;
    border-radius: 8px;
    border: 2px solid #ededed;
    box-sizing: border-box;
    color: black;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
}

.cut {
    background-color: white;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.input:focus {
    border: 2px solid cyan;
}

.input:focus~.cut,
.input:not(:placeholder-shown)~.cut {
    transform: translateY(8px);
}

.placeholder {
    color: black;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
}

.input:focus~.placeholder,
.input:not(:placeholder-shown)~.placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown)~.placeholder {
    color: black;
}

.input:focus~.placeholder {
    color: black
}
</style>