import Dep from "./Dep"


export  function watchEffect(callback){
    Dep.effectCB = callback;
    callback();
    Dep.effectCB = null;
}  


export  function watch(dep,callback){
    if(typeof dep === 'function'){
        Dep.effectCB = callback;
        dep();
        Dep.effectCB = null;
    }
}  