<script setup lang="ts">
import {ref} from 'vue'

interface prop {
  title : string
  options: object
}
const PropsDropdown =  defineProps<prop>()

const active = ref<boolean>(false)
const tanlangan = ref<string>('')

let options  = ref<any>([])

options.value = PropsDropdown.options
tanlangan.value = PropsDropdown.title
function selected() {
  active.value = !active.value
}
  function clickOption(params:string) {
    tanlangan.value = params 
    active.value = false
  }
</script>

<template>
      <div class="select-box">
        <div class="options-container" :class="active ? 'active' : '' " >
          <div v-for="option in options" @click="clickOption(option.name)"   class="option">
            <input
              type="radio"
              class="radio"
              name="category"
            />
            <label for="automobiles">{{option.name}}</label>
          </div>
        </div>
        <div class="selected" @click="selected">
          {{tanlangan}}
        </div>
      </div>
</template>

<style scoped>

h2 {
  margin: 16px;
}

.container {
  margin-top: 100px;
  padding: 32px;
}

.select-box {
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
}

.select-box .options-container {
  position: absolute;
  border: 1px solid #e3e3e3;
  top: calc(100% + 7px);
  z-index: 50;
  background: #fff;
  color: rgba(0, 0, 0, 0.38);
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  order: 1;
 

}


.selected {
  background: #fff;
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.38);
  position: relative;
  border: 1px solid #E3E3E3;
border-radius: 5px;
  order: 0;
}

.selected::after {
  content: "";
  background: url("../assets/icons/arrow-down.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  height: 16px;
  width: 16px;
  right: 10px;
  top: 15px;

  transition: all 0.4s;
}


.select-box .options-container.active {
  max-height: 240px;
  opacity: 1;
}

.select-box .options-container.active + .selected::after {
  transform: rotateX(180deg);
}

.select-box .options-container::-webkit-scrollbar {
  width: 8px;
  background: #fff;
  border-radius: 0 8px 8px 0;
}

.select-box .options-container::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 0 8px 8px 0;
}

.select-box .option,
.selected {
  display: flex;
  padding: 11px 16px;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  font-size: 15px;
}
.select-box .option:hover {
  background: rgba(0, 0, 0, 0.1);
}

.select-box label {
  cursor: pointer;
}

.select-box .option .radio {
  display: none;
}

</style>