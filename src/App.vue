<script setup lang="ts">
import { ref } from "vue";
// import baseInput from "./components/baseInput.vue";
// import Dropdown from "./components/Dropdown.vue";
// import Footer from './components/FooterBottom.vue'
// import {ref ,reactive, onMounted , computed , watch,} from 'vue';
// import {ref} from 'vue'
// import HelloWorld from './components/HelloWorld.vue';
//  <HelloWorld msg="Vite + Vue" HelloNumber='12' @emit-fn="gg"    />
// function gg(params: number) {
//   console.log(params);
// }
// enum status {
//   COMPLATE = 'selected video Category',
// }
// interface cardWord {
//   date: string; //September 13,2022
//   paragraf: string; //Bringing down the Digital Gap in Higher Education
//   btn: string; //Read full article
// }
// interface Card {
//   name: string;
//   whoIs: string;
//   comment: string;
// }
// const cards = <Card>{
//   name: "Ubaydulla Salokhiddinov",
//   whoIs: "Project manager",
//   comment:
//     "Since switching to WiseSpace, we have increased our use of e-learning by 100%, largely because it is so simple for our teachers, students and administrative staff",
// };

// defineProps<Card>()
 const name = ref<string>('')
interface arrays {
  name: string;
}
const Options: arrays[] = [
  {
    name: "Film",
  },
  {
    name: "Multfilm",
  },
  {
    name: "comedy",
  },
];
// const active = ref<boolean>(false)
</script>

<template>
  <div>
    <div class="flex overflow-hidden max-w-[738px] relative">
      <img class="default_one" src="../src/assets/img/feature.png" alt="">
      <img class="default_two" src="../src/assets/img/feature.png" alt="">
    </div>
    <!-- <button @click="active = !active">Click to ACtive</button> -->
  </div>
</template>

<style>
.default_one {
  animation: default_one 4s infinite;
  animation-delay: 4s;
}
.default_two {
  animation: default_two 4s infinite;
}
@keyframes default_one {
  0% {  transform: translateX(0px);}
  50% {transform: translateX(738px);}
  100% { transform: translateX(0px);}
}
@keyframes default_two {
  0% {  transform: translateX(738px);}
  50% { transform: translateX(0px)}
  99% { transform: translateX(-738px)}
  100% { transform: translateX(-738px);}
}
</style>
