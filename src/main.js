
import { reactive,watchEffect,watch } from '../vue'

let btnA = document.querySelector('.btn-a');
let btnB = document.querySelector('.btn-c');
let pre = document.querySelector('pre');

const data = reactive({
    a:"a",
    b:{
        c:"c"
    }
})

watchEffect(()=>{
    // console.log("watchEffect---->",data.a);
    pre.innerText = JSON.stringify(data);
    
})

watch(()=>data.a + data.b.c,(newVal,oldVal)=>{
    console.log("watch---->",newVal,oldVal);
    // pre.innerText = JSON.stringify(data);
})


btnA.addEventListener("click",()=>{
    data.a = "aa"
})

btnB.addEventListener("click",()=>{
     data.b.c = "cc"
})



