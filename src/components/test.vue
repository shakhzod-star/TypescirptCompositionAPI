<script setup lang="ts">
// import {ref ,reactive, onMounted , computed , watch,} from 'vue';

// import HelloWorld from './components/HelloWorld.vue';
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// const hello = <String>('hello') 
// console.log(hello);
// const obj = reactive({
  //   name : 'hello'
  // }) 
  // console.log(obj);
  

// const counter = ref<number>(0)
// let isCompleted: boolean = false
// let Booleann =   ref<object[]>([])
// Defining types using operator typeof
// typeof 42 ;     // 'number'
// typeof 'str'    // 'string'
// typeof  true     // 'boolean'
// typeof  []   // 'object'
// typeof {}    // 'object'
// typeof null   // 'object'
// typeof undefined  // 'undefined'
// typeof Symbol()   // symbol



// 1
  // interface User {
  //   readonly name : string ;
  //   age : number ;
  // }
  // const helloUser: User = {
    //   name : 'ReadOnly',
  //   age : 12
  // }
  // console.log(helloUser);
  // const users = ref<object[]>([{name:<String>"Shakhzod"},{name :<String>'Ibroxim'}]) 
    //   interface array {
      //     name: string ,
      //     age?: number 
  //   }
  //   let arr: array[] = [
    //     {
      //       name : 'hellp',
  //       age : 12 
  //     },
  //   ]
  // 2
  
//  interface User {
  //      name : string ;
  //       age : number ;
  //       [propName: string]:any; 
  //     }
  //     const helloUser: User = {
    //       name : 'ReadOnly',
    //       age : 12,
    //       // {
      //         // Object literal may only specify known properties, and 'nickName' does not exist in type 'User'.
      //       // }
      //       nickName : 'String'
      //    }
      //    console.log(helloUser);
      
      //  3 
      // interface User {
        //    name : string ;
        //     age : number ;
        //   }
        //   interface Pass {
          //     getPass(): string
          //  }
          //  class Yauhen implements User, Pass {
            //   name : string = 'Mendurman owa';
            //   age : number = 12;
            //   getPass() {
              //       return `ha ${this.name} va ${this.age}`
              //   }
              //  }
              
              // Ommmit 
              //   interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: number;
// }

// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
  //   title: "Clean room",
//   completed: false,
//   createdAt: 1615544252770,
// };
// console.log(TodoPreview);

//  Pick    
//   interface Todo {
  //   title: string;
  //   description: string;
  //   completed: boolean;
  //   createdAt: number;
  // }
  
// type TodoPreview = Pick<Todo, "description">;
 
// const todo: TodoPreview = {
  // description: 'hello ' 
  // };
  // console.log(todo);
  
  
// interface str {
//   name : string
// }


// const newFn = ref<str>( fun) 
// function newFn(val:string) {
//   console.log(val);
  
// }
// function hello(params:type) {
  
  // }
  // function gg(params:number) {
    //   console.log(params)
    
// }
// let boot = ref<number>(0)

// function bootFn() {
  //   boot.value++
  // }
  // interface array {
    //   name : string ,
    //   age : number ,
    //   index? : number 
    // }
    
    // const users: Array<array> = [
    //   similar as above  
    //   const users: array[] = [
    //       {
    //           name : 'Shakzhod',
    //           age : 12 ,
    //         }
    //         ,{
    //             name : 'Azamat',
    //             age: 14,
    //           }
    //         ]
            
            
            // watch  
            // const x = ref('') 
            
            //  1.single ref
            // watch(x, (newX,oldX) => {
              //   console.log(`x is ${newX}`)
              //   console.log(`old x  is ${oldX}`)
              // })
              
              // const x = ref(4) 
              // const y = ref(5) 
              // console.log(x.value + y.value);
              // //getter
              // watch(
//   ()=> Number(x.value) + Number(y.value), 
//   (sum) => {
  //     console.log(`sum of x + y is : ${sum}`);
  //   }
  // ) 
  
  // 2.array of multiple sources
  // watch([x, () => y.value], ([newX, newY]) => {
    //   console.log(`x is ${newX} and y is ${newY}`)
    // })
    
    // 3.const obj = reactive({ count: 0 })
    
    // // this won't work because we are passing a number to watch()
    // watch(obj.count, (count) => {
      //   console.log(`count is: ${count}`)
// }) =>


// 4.instead, use a getter:
// watch(
  //   () => obj.count,
  //   (count) => {
    //     console.log(`count is: ${count}`)
    //   }
    // )
    
    
    // import {ref , watch} from 'vue';
    
  </script>

<template>
  <div>
    <!-- <input v-model="x">
      <input v-model="y"> -->
      <button>hello</button>
      <!-- <div v-for="user in users" :key="user.index">
        <pre> {{user.index}} </pre>
      </div>
      <div @click="bootFn" > {{boot}}</div>
      <HelloWorld msg="Vite + Vue" @emit-fn="gg"    /> -->
    </div>
  </template>

