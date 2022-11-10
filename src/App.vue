<script setup lang="ts">
import { ref } from "vue";
const colors: string[] =  ['pink','green','yellow','blue']
let show = ref<boolean>(true)

</script>

<template>
  <div>
    <!--1 <div v-hello="'Nodir'"></div> -->
    <!--2 <div v-switch-color="['pink','green','yellow','blue']">Vue school</div> -->
    <!--3 <div v-switch-color:slow="colors">Vue school</div> -->
     <!-- <div v-switch-color.textcenter.underline="colors">Vue school</div> -->
    <div  v-switching-color:fast.textcenter="colors"
      v-if="show"
    >
      Vue School
    </div>
    <button @click="show = !show">toggle</button>

  </div>
</template>

<style>

</style>
