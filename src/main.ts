import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.directive('hello', function (params:any,val:any) {
    params.style.color = 'red'
    console.log(params.innerHTML =  `${val.value} nma gap ozi`);
})
app.directive( 'switching-color', {
  bind  (val:any, binding:any ){
    const modifiers = binding.modifiers
    if (modifiers.underline){
     val.style.textDecoration = 'underline'
    }
    if (modifiers.textcenter) {
     val.style.textAlign = 'center'
   }
     interface spd {
       [propName: string]:number; 
     }
     const speeds:spd = {
       slow : 10000,
       normal : 5000,
       fast : 500 ,
       crazy : 100
     }
     console.log(binding);
     const speedName = binding.arg || 'normal'
     const speed   = speeds[speedName]
           
           const colors = binding.value
           let i = 0
           val.__SwitchingColorInterval__= setInterval(() => {
            console.log('🎨 coloring')
              val.style.color = colors[i++]
              if (i > colors.length - 1) {
                i = 0
              }
            }, speed)
          },
   unbind (val : any) {
    clearInterval(val.__SwitchingColorInterval__)
  }
   
  
})








app.mount('#app')
