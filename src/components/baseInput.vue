<script setup lang="ts">
import { ref } from "vue";
const props = defineProps([
  "modelValue",
  "regex",
  "successMsg",
  "errorMsg",
  "labelName",
]);
const emit = defineEmits(["update:modelValue"]);
let val = ref<string>("");
let Message = ref<string>("");
let validate = ref<boolean>(false);
// function isEmailValid() {

// }
function emitInput(event: any) {
  emit("update:modelValue", event.target.value);
  const regex = props.regex;
  val.value = event.target.value;
  if (val.value === "") {
    Message.value = "this field reqired";
  } else if (regex.test(val.value)) {
    validate.value = true;
    Message.value = props.successMsg;
  } else {
    validate.value = false;
    Message.value = props.errorMsg;
  }
}
</script>
<template>
  <div class="input-container">
    <input
      ref="email"
      id="firstname"
      :value="modelValue"
      @input="emitInput($event)"
      class="input"
      :style="
        val != ''
          ? validate
            ? 'border: 1px solid green'
            : 'border:1px solid red'
          : (Message = '')
      "
      type="text"
      placeholder=" "
    />
    <label for="firstname" class="placeholder">
      <div class="labelText">{{ labelName }}</div>
    </label>
    <p
      ref="labelEmail"
      :style="validate ? 'color:green' : 'color:red'"
      class="text-xs mt-1"
    >
      {{ Message }}
    </p>
  </div>
</template>
<style scoped>
.input-container {
  /* height: 50px; */
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.input {
  background-color: white;
  border-radius: 5px;
  border: 1px solid #e3e3e3;
  box-sizing: border-box;
  color: black;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 11px 24px;
  width: 100%;
  display: flex;
  align-items: center;
}



.input:focus {
  border: 1px solid cyan;
}
.placeholder {
    width: 100%;
  color: rgba(0, 0, 0, 0.38);
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
}
.placeholder .labelText {
  position: absolute;
  white-space: nowrap;
  display: flex;
  padding: 0 5px;
  background: #fff;
  z-index: 2;
  top: calc(50% - 9px);
  left: 16px;
  color: rgba(0, 0, 0, 0.38);
  font-family: sans-serif;
  line-height: 14px;
  pointer-events: none;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
}
.input:focus ~.placeholder .labelText,
.input:not(:placeholder-shown) ~.placeholder .labelText {
  transform: translateY(calc(100% - 33px)) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: black;
}

.input:focus ~ .placeholder {
  color: black;
}
</style>
