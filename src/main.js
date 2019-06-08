import obj from './a.js'

import "@babel/polyfill";

import './css/index.css'
import './less/index.less'
import './scss/index.scss'

//import  'bootstrap/dist/css/bootstrap.css'
//require('style-loader!css-loader!./css/index.css')
//import './css/my.css'

console.log(obj)
//console.log(33)
console.log(this)
setTimeout(()=>{
    console.log(this)
    console.log('箭头函数')
},1000)

class Dog {
    static color = 'red'
}
console.log(Dog)

const promise = new Promise(function(resolve, reject) {
    // ... some code

    if (true){
        resolve(2);
    } else {
        reject(2);
    }
});

const asyncReadFile = async function () {

};

function *fn (){
    yield 1;
    yield 2;
}

let newFn = fn();
let str = 'sfsfsds'
console.log(str,str.includes('ss'))

console.log(newFn.next())
console.log(newFn.next())