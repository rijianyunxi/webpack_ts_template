import Dep from "./Dep"

const dep = new Dep();

export default function reactive(data){
    return new Proxy(data,{
        get(target,key){
            const value = Reflect.get(target,key);
            dep.collect(target,key)
            return  (typeof value === 'object' && value !== null) ? reactive(value) : value
        },

        set(target,key,value){
            const oldVal = target[key];
            const res = Reflect.set(target,key,value);
            dep.notify(target,key,value,oldVal);
            return res;
        }
    })
}