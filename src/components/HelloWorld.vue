<script setup lang="ts">
import { ref   } from 'vue'
// import App from '../App.vue';
// const hello = reactive<number>(12)
 interface hello {
   msg : string ,
   HelloNumber : string 
 }
  defineProps<hello>()
  defineEmits(['EmitFn'])
const count = ref<number>(1)
console.log(count.value);

// function EmitFn(hello:string) {
//       console.log(hello);
      
//    }
</script>

<template>
  <!-- <button @click="EmitFn('nma gap')" >My Name</button> -->
  <button @click="$emit('EmitFn', 12)" >My Age</button>
<h1>{{ msg }}</h1>
<pre> {{HelloNumber}} </pre>
</template>

