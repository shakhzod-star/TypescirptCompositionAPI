

<script setup lang="ts">

let a:string = '12'
console.log(a);



interface  INavbar {
    name : string ,
}
const navbars: Array<INavbar> = [
    {
        name : 'Page One'
    },
    {
    name : 'Page Two',
    }
]

</script>


<template>

<div v-for="navbar in navbars" :key="navbar.index" > </div>

</template>